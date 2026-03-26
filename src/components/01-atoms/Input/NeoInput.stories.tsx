import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NeoInput from './NeoInput.vue'
import { inputSizes, inputVariants, inputTypes } from './NeoInputTypes'
import { ariaLabelArgType, disabledArgType } from '../../../../.storybook/utils/argTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'

const meta = {
	title: 'Atoms/NeoInput',
	component: NeoInput,
	tags: ['autodocs'],
	argTypes: {
		...ariaLabelArgType,
		...disabledArgType,
		name: { control: 'text', table: { category: 'Content' } },
		label: { control: 'text', table: { category: 'Content' } },
		placeholder: { control: 'text', table: { category: 'Content' } },
		value: { control: 'text', table: { category: 'Content' } },
		color: { description: 'Theme color for focus ring, labels, and accents.' },
		size: {
			control: 'select',
			options: inputSizes,
			table: { category: 'Appearance' },
			description: 'Controls padding and font size of the input field.',
		},
		variant: {
			control: 'select',
			options: inputVariants,
			table: { category: 'Appearance' },
			description: '`default`: standard outlined input. `filled`: solid background input.',
		},
		type: {
			control: 'select',
			options: inputTypes,
			table: { category: 'Appearance' },
			description:
				'HTML input type. Controls the native keyboard on mobile and browser validation behaviour.',
		},
		rounded: {
			control: 'boolean',
			table: { category: 'Appearance' },
			description: 'Applies fully rounded corners.',
		},
		readonly: {
			control: 'boolean',
			table: { category: 'State' },
			description:
				'Makes the field non-editable but still focusable and selectable. Unlike `disabled`, the value is still submitted with forms.',
		},
		required: { control: 'boolean', table: { category: 'State' } },
		helpText: {
			control: 'text',
			table: { category: 'Validation' },
			description:
				'Descriptive text rendered below the input. Used for hints or formatting guidance.',
		},
		errorMessage: {
			control: 'text',
			table: { category: 'Validation' },
			description:
				'Replaces `helpText` and applies error styling when the field has a validation error.',
		},
		autocomplete: {
			control: 'text',
			table: { category: 'Validation' },
			description:
				'HTML `autocomplete` attribute. Hint to the browser for autofill (e.g. `email`, `current-password`, `off`).',
		},
		maxlength: { control: 'number', table: { category: 'Validation' } },
		minlength: { control: 'number', table: { category: 'Validation' } },
		min: { control: 'number', table: { category: 'Validation' } },
		max: { control: 'number', table: { category: 'Validation' } },
		step: { control: 'number', table: { category: 'Validation' } },
		pattern: { control: 'text', table: { category: 'Validation' } },
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

export const WithoutLabel: Story = {
	args: {
		label: undefined,
		ariaLabel: 'Search',
		placeholder: 'Search...',
		name: 'search',
	},
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
		requiredText: 'This field is required',
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

export const OnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
}

export const RTL: Story = {
	globals: {
		direction: 'rtl',
	},
	args: {
		label: 'الاسم الكامل',
		placeholder: 'أدخل اسمك...',
	},
}

export const AllColors: Story = {
	render: createSimpleColorShowcase(
		NeoInput,
		[
			{
				variant: 'primary',
				render: (color, _, args) => (
					<NeoInput {...args} color={color} label={color} size="medium" variant="primary" />
				),
			},
			{
				variant: 'secondary',
				render: (color, _, args) => (
					<NeoInput {...args} color={color} label={color} size="medium" variant="secondary" />
				),
			},
			{
				variant: 'tertiary',
				render: (color, _, args) => (
					<NeoInput {...args} color={color} label={color} size="medium" variant="tertiary" />
				),
			},
		],
		{
			defaultProps: {
				name: 'color-input',
			},
		},
	),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	render: createSimpleColorShowcase(
		NeoInput,
		[
			{
				variant: 'primary',
				render: (color, _, args) => (
					<NeoInput {...args} color={color} label={color} size="medium" variant="primary" />
				),
			},
			{
				variant: 'secondary',
				render: (color, _, args) => (
					<NeoInput {...args} color={color} label={color} size="medium" variant="secondary" />
				),
			},
			{
				variant: 'tertiary',
				render: (color, _, args) => (
					<NeoInput {...args} color={color} label={color} size="medium" variant="tertiary" />
				),
			},
		],
		{
			defaultProps: {
				name: 'color-input',
			},
			dark: true,
		},
	),
}
