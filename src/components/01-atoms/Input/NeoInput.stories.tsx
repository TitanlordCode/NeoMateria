import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NeoInput from './NeoInput.vue'
import { inputSizes, inputVariants, inputTypes } from './NeoInputTypes'
import { ariaLabelArgType, disabledArgType } from '../../../../.storybook/utils/argTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../.storybook/utils/createA11yPlay'

const meta = {
	title: 'Atoms/NeoInput',
	component: NeoInput,
	tags: ['autodocs', 'grimeria'],
	argTypes: {
		...ariaLabelArgType,
		...disabledArgType,
		name: {
			control: 'text',
			table: { category: 'Content' },
			description: 'The `name` attribute submitted with the form.',
		},
		label: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Visible label text. Mutually exclusive with `ariaLabel`.',
		},
		placeholder: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Placeholder shown when the field is empty.',
		},
		value: {
			control: 'text',
			table: { category: 'Content' },
			description: 'The input value (controlled).',
		},
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
		required: {
			control: 'boolean',
			table: { category: 'State' },
			description: 'Marks the field as required. Requires `requiredText` to be set.',
		},
		requiredText: {
			control: 'text',
			table: { category: 'State' },
			description: 'Assistive text describing the requirement, surfaced when `required` is set.',
		},
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
		maxlength: {
			control: 'number',
			table: { category: 'Validation' },
			description: 'Maximum number of characters allowed.',
		},
		minlength: {
			control: 'number',
			table: { category: 'Validation' },
			description: 'Minimum number of characters required.',
		},
		min: {
			control: 'number',
			table: { category: 'Validation' },
			description: 'Minimum value (for `number`/`date`-style types).',
		},
		max: {
			control: 'number',
			table: { category: 'Validation' },
			description: 'Maximum value (for `number`/`date`-style types).',
		},
		step: {
			control: 'number',
			table: { category: 'Validation' },
			description: 'Step increment for `number`-style types.',
		},
		pattern: {
			control: 'text',
			table: { category: 'Validation' },
			description: 'Regex the value must match for native validation.',
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
	parameters: {
		snapshot: { viewports: ['sm', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
	args: {},
}

export const WithoutLabel: Story = {
	tags: ['snapshot'],
	args: {
		label: undefined,
		ariaLabel: 'Search',
		placeholder: 'Search...',
		name: 'search',
	},
}

export const WithHelpText: Story = {
	tags: ['snapshot'],
	args: {
		helpText: 'This is a helpful hint',
	},
}

export const WithError: Story = {
	tags: ['snapshot'],
	args: {
		errorMessage: 'This field is required',
	},
}

export const Required: Story = {
	tags: ['snapshot'],
	args: {
		required: true,
		requiredText: 'This field is required',
	},
}

export const Disabled: Story = {
	tags: ['snapshot'],
	args: {
		disabled: true,
		value: 'Disabled input',
	},
}

export const Readonly: Story = {
	tags: ['snapshot'],
	args: {
		readonly: true,
		value: 'Readonly input',
	},
}

export const Email: Story = {
	tags: ['no-test'],
	args: {
		type: 'email',
		placeholder: 'email@example.com',
		label: 'Email',
	},
}

export const Password: Story = {
	tags: ['snapshot'],
	args: {
		type: 'password',
		placeholder: 'Enter password',
		label: 'Password',
	},
}

export const Number: Story = {
	tags: ['no-test'],
	args: {
		type: 'number',
		placeholder: '0',
		label: 'Quantity',
		min: 0,
		max: 100,
	},
}

export const Small: Story = {
	tags: ['snapshot'],
	args: {
		size: 'small',
	},
}

export const Large: Story = {
	tags: ['snapshot'],
	args: {
		size: 'large',
	},
}

export const Secondary: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'secondary',
	},
}

export const Tertiary: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'tertiary',
	},
}

export const Rounded: Story = {
	tags: ['snapshot'],
	args: {
		rounded: true,
	},
}

export const OnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
}

export const RTL: Story = {
	tags: ['snapshot'],
	globals: {
		direction: 'rtl',
	},
	args: {
		label: 'الاسم الكامل',
		placeholder: 'أدخل اسمك...',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
}

export const AllColors: Story = {
	tags: ['snapshot'],
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
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
		},
	),
}

export const AllColorsOnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
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

export const AllColorsA11y: Story = {
	...AllColors,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}

export const AllColorsOnDarkA11y: Story = {
	...AllColorsOnDark,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}
