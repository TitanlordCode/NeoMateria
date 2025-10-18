import type { Meta, StoryObj } from '@storybook/vue3'
import NeoInput from './NeoInput.vue'
import { colors } from '@/assets/typescript/colors'

const meta = {
	title: 'Atoms/NeoInput',
	component: NeoInput,
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
		type: {
			control: 'select',
			options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time'],
		},
		color: {
			control: 'select',
			options: colors,
		},
	},
	args: {
		name: 'example-input',
		label: 'Label',
		placeholder: 'Enter text...',
		size: 'medium',
		variant: 'primary',
		color: 'blue',
		type: 'text',
	},
} satisfies Meta<typeof NeoInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}

export const WithHelpText: Story = {
	args: {
		helpText: 'This is a helpful hint',
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
		value: 'Disabled input',
	},
}

export const Readonly: Story = {
	args: {
		readonly: true,
		value: 'Readonly input',
	},
}

export const Email: Story = {
	args: {
		type: 'email',
		placeholder: 'email@example.com',
		label: 'Email',
	},
}

export const Password: Story = {
	args: {
		type: 'password',
		placeholder: 'Enter password',
		label: 'Password',
	},
}

export const Number: Story = {
	args: {
		type: 'number',
		placeholder: '0',
		label: 'Quantity',
		min: 0,
		max: 100,
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
