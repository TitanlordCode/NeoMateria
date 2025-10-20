import type { Meta, StoryObj } from '@storybook/vue3'
import NeoCheckbox from './NeoCheckbox.vue'

const meta = {
	title: 'Atoms/NeoCheckbox',
	component: NeoCheckbox,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		color: {
			control: 'select',
			options: ['grey500', 'blue500', 'red500', 'green500', 'yellow500', 'purple500'],
		},
	},
	args: {
		name: 'example-checkbox',
		label: 'Accept terms and conditions',
		size: 'medium',
		color: 'blue500',
	},
} satisfies Meta<typeof NeoCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}

export const Checked: Story = {
	args: {
		checked: true,
	},
}

export const Indeterminate: Story = {
	args: {
		indeterminate: true,
	},
}

export const Required: Story = {
	args: {
		required: true,
	},
}

export const Disabled: Story = {
	args: {
		disabled: true,
	},
}

export const DisabledChecked: Story = {
	args: {
		disabled: true,
		checked: true,
	},
}

export const Small: Story = {
	args: {
		size: 'small',
	},
}

export const Large: Story = {
	args: {
		size: 'large',
	},
}

export const WithoutLabel: Story = {
	args: {
		label: undefined,
	},
}
