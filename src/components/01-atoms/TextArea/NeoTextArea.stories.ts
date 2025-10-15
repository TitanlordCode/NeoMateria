import type { Meta, StoryObj } from '@storybook/vue3'
import NeoTextArea from './NeoTextArea.vue'

const meta = {
	title: 'Atoms/NeoTextArea',
	component: NeoTextArea,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary'],
		},
		resize: {
			control: 'select',
			options: ['none', 'vertical', 'horizontal', 'both'],
		},
		color: {
			control: 'select',
			options: ['grey500', 'blue500', 'red500', 'green500', 'yellow500', 'purple500'],
		},
	},
	args: {
		name: 'example-textarea',
		label: 'Label',
		placeholder: 'Enter your text here...',
		size: 'medium',
		variant: 'primary',
		color: 'blue500',
	},
} satisfies Meta<typeof NeoTextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}

export const WithHelpText: Story = {
	args: {
		helpText: 'Please provide detailed information',
	},
}

export const WithError: Story = {
	args: {
		errorMessage: 'This field is required',
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
		value: 'This textarea is disabled',
	},
}

export const Readonly: Story = {
	args: {
		readonly: true,
		value: 'This textarea is readonly',
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

export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},
}

export const Tertiary: Story = {
	args: {
		variant: 'tertiary',
	},
}

export const Rounded: Story = {
	args: {
		rounded: true,
	},
}

export const NoResize: Story = {
	args: {
		resize: 'none',
	},
}

export const WithMaxLength: Story = {
	args: {
		maxlength: 200,
		helpText: 'Maximum 200 characters',
	},
}
