import type { Meta, StoryObj } from '@storybook/vue3'

import { expect, fn, userEvent, waitFor, within } from '@storybook/test'

import Button from './Button.vue'
import { colors } from '@/assets/typescript/colors'
import { buttonSizes } from './ButtonTypes'

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		label: { control: 'text' },
		size: { control: 'select', options: buttonSizes },
		disabled: { control: 'boolean' },
		color: { control: 'select', options: colors },
	},
	args: {
		label: 'Click me',
		size: 'small',
		color: 'grey',
		disabled: false,
		rounded: false,
		onClick: fn(),
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		label: 'Default Button',
	},
}

export const Disabled: Story = {
	args: {
		label: 'Disabled Button',
		disabled: true,
	},
}

export const Rounded: Story = {
	args: {
		label: 'Rounded Button',
		rounded: true,
	},
}

export const Colored: Story = {
	render: (args) => {
		return (
			<div style={{ display: 'flex', flexFlow: 'wrap', maxInlineSize: '100%' }}>
				{colors.map((color, index) => {
					return (
						<div style={{ padding: '8px' }}>
							<Button key={index} {...args} color={color} />
						</div>
					)
				})}
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
