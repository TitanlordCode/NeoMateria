import type { Meta, StoryObj } from '@storybook/vue3'

import { expect, fn, userEvent, waitFor, within } from '@storybook/test'

import NeoButton from '@/components/01-atoms/Button/NeoButton.vue'
import { colors } from '@/assets/typescript/colors'
import { buttonSizes, buttonVariants } from './NeoButtonTypes'
import { addIcon, deleteIcon } from '../Icon/exampleIcons'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'

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
		size: 'medium',
		color: 'grey',
		variant: 'primary',
		disabled: false,
		rounded: false,
		onClick: fn(),
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Small: Story = {
	args: {
		size: 'small',
	},
}
export const large: Story = {
	args: {
		size: 'large',
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

export const WithIconStart: Story = {
	args: {
		text: 'With Icon Start',
		iconStart: () => addIcon,
	},
}

export const WithIconEnd: Story = {
	args: {
		text: 'With Icon End',
		iconEnd: () => deleteIcon,
	},
}

export const WithIconStartAndEnd: Story = {
	args: {
		...WithIconStart.args,
		...WithIconEnd.args,
		text: 'With Both Icon',
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

export const OnDark: Story = {
	globals: {
		backgrounds: { value: '#000' },
	},
}

export const RTL: Story = {
	globals: {
		direction: 'rtl',
	},
	args: {
		text: 'انقر هنا',
	},
}

export const AllColors: Story = {
	render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary']),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: { value: '#000' },
	},
	render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary'], {
		dark: true,
	}),
}
