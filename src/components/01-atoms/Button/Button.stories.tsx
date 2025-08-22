import type { Meta, StoryObj } from '@storybook/vue3'

import { expect, fn, userEvent, waitFor, within } from '@storybook/test'

import Button from './Button.vue'
import { colors, colorNames } from '@/assets/typescript/colors'
import { buttonSizes } from './ButtonTypes'

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		text: { control: 'text' },
		size: { control: 'select', options: buttonSizes },
		disabled: { control: 'boolean' },
		color: { control: 'select', options: colors },
	},
	args: {
		text: 'Click me',
		size: 'small',
		color: 'grey500',
		disabled: false,
		rounded: false,
		onClick: fn(),
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		text: 'Default Button',
	},
}

export const Disabled: Story = {
	args: {
		text: 'Disabled Button',
		disabled: true,
	},
}

export const Rounded: Story = {
	args: {
		text: 'Rounded Button',
		rounded: true,
	},
}

export const Colored: Story = {
	render: (args) => {
		return (
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
					maxInlineSize: '100%',
				}}
			>
				{colorNames.map((colorName) => (
					<div class={`box-${colorName}`} style={{ maxInlineSize: `fit-content` }}>
						{colors
							.filter((color) => color.replace(/\d+$/, '') === colorName)
							.map((color, index) => {
								return (
									<div style={{ padding: '8px' }}>
										<Button key={index} {...args} color={color} text={color} />
									</div>
								)
							})}
					</div>
				))}
			</div>
		)
	},
}

export const interaction: Story = {
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Check click functionality', async () => {
			await userEvent.click(canvas.getByRole('button'))
		})

		await waitFor(() => expect(args.onClick).toHaveBeenCalled())
	},
}
