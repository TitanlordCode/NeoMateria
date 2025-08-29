import type { Meta, StoryObj } from '@storybook/vue3'

import { expect, fn, userEvent, waitFor, within } from '@storybook/test'

import NeoButton from '@/components/01-atoms/Button/NeoButton.vue'
import { colors, colorNames } from '@/assets/typescript/colors'
import { buttonSizes, buttonVariants } from './NeoButtonTypes'

const meta: Meta<typeof NeoButton> = {
	title: 'Atoms/NeoButton',
	component: NeoButton,
	tags: ['autodocs'],
	argTypes: {
		text: { control: 'text' },
		size: { control: 'select', options: buttonSizes },
		variant: { control: 'select', options: buttonVariants },
		disabled: { control: 'boolean' },
		color: { control: 'select', options: colors },
	},
	args: {
		text: 'Click me',
		size: 'small',
		color: 'grey500',
		variant: 'primary',
		disabled: false,
		rounded: false,
		onClick: fn(),
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		text: 'Default NeoButton',
	},
}

export const Disabled: Story = {
	args: {
		text: 'Disabled NeoButton',
		disabled: true,
	},
}

export const Rounded: Story = {
	args: {
		text: 'Rounded NeoButton',
		rounded: true,
	},
}

export const PrimaryColored: Story = {
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
										<NeoButton key={index} {...args} color={color} text={color} />
									</div>
								)
							})}
					</div>
				))}
			</div>
		)
	},
}

export const SecondaryColored: Story = {
	args: {
		variant: 'secondary',
	},
	render: PrimaryColored.render,
}

export const TertiaryColored: Story = {
	args: {
		variant: 'tertiary',
	},
	render: PrimaryColored.render,
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
