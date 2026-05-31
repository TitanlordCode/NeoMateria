import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NeoTextArea from './NeoTextArea.vue'
import { textareaSizes, textareaVariants } from './NeoTextAreaTypes'
import { ariaLabelArgType, disabledArgType } from '../../../../.storybook/utils/argTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../.storybook/utils/createA11yPlay'

const meta = {
	title: 'Atoms/NeoTextArea',
	component: NeoTextArea,
	tags: ['autodocs'],
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
			description: 'The textarea value (controlled).',
		},
		color: { description: 'Theme color for focus ring, labels, and accents.' },
		size: {
			control: 'select',
			options: textareaSizes,
			table: { category: 'Appearance' },
			description: 'Controls padding and font size.',
		},
		variant: {
			control: 'select',
			options: textareaVariants,
			table: { category: 'Appearance' },
			description: '`default`: standard outlined. `filled`: solid background.',
		},
		rows: {
			control: 'number',
			table: { category: 'Appearance' },
			description:
				'Initial visible line count. The user can resize beyond this unless `resize` is `none`.',
		},
		resize: {
			control: 'select',
			options: ['none', 'vertical', 'horizontal', 'both'],
			table: { category: 'Appearance' },
			description:
				'Controls which directions the user can resize the textarea. `none` disables resizing entirely.',
		},
		rounded: {
			control: 'boolean',
			table: { category: 'Appearance' },
			description: 'Applies fully rounded corners.',
		},
		readonly: {
			control: 'boolean',
			table: { category: 'State' },
			description: 'Non-editable but focusable. Value is still submitted.',
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
			description: 'Descriptive text below the field. Used for hints.',
		},
		errorMessage: {
			control: 'text',
			table: { category: 'Validation' },
			description: 'Replaces `helpText` and applies error styling.',
		},
		maxLength: {
			control: 'number',
			table: { category: 'Validation' },
			description: 'Hard character limit. A character counter is shown below the field.',
		},
		minLength: {
			control: 'number',
			table: { category: 'Validation' },
			description: 'Minimum character count required for the field to be valid.',
		},
	},
	args: {
		name: 'example-textarea',
		ariaLabel: 'Label',
		placeholder: 'Enter your text here...',
		size: 'medium',
		variant: 'primary',
		color: 'blue',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoTextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
}

export const WithLabel: Story = {
	tags: ['snapshot'],
	args: {
		label: 'Description',
		ariaLabel: undefined,
	},
}

export const WithHelpText: Story = {
	tags: ['snapshot'],
	args: {
		helpText: 'Please provide detailed information',
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
		label: 'Textarea Field',
		ariaLabel: undefined,
		required: true,
		requiredText: 'This field is required',
	},
}

export const Disabled: Story = {
	tags: ['snapshot'],
	args: {
		disabled: true,
		value: 'This textarea is disabled',
	},
}

export const Readonly: Story = {
	tags: ['snapshot'],
	args: {
		readonly: true,
		value: 'This textarea is readonly',
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

export const NoResize: Story = {
	tags: ['snapshot'],
	args: {
		resize: 'none',
	},
}

export const WithMaxLength: Story = {
	tags: ['snapshot'],
	args: {
		maxLength: 200,
		helpText: 'Maximum 200 characters',
	},
}

export const RTL: Story = {
	tags: ['snapshot'],
	globals: {
		direction: 'rtl',
	},
	args: {
		ariaLabel: 'تسمية',
		placeholder: 'أدخل النص هنا...',
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
		NeoTextArea,
		[
			{
				variant: 'primary',
				render: (color, _, args) => (
					<NeoTextArea {...args} color={color} label={color} size="medium" variant="primary" />
				),
			},
			{
				variant: 'secondary',
				render: (color, _, args) => (
					<NeoTextArea {...args} color={color} label={color} size="medium" variant="secondary" />
				),
			},
			{
				variant: 'tertiary',
				render: (color, _, args) => (
					<NeoTextArea {...args} color={color} label={color} size="medium" variant="tertiary" />
				),
			},
		],
		{
			defaultProps: {
				name: 'color-textarea',
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
		NeoTextArea,
		[
			{
				variant: 'primary',
				render: (color, _, args) => (
					<NeoTextArea {...args} color={color} label={color} size="medium" variant="primary" />
				),
			},
			{
				variant: 'secondary',
				render: (color, _, args) => (
					<NeoTextArea {...args} color={color} label={color} size="medium" variant="secondary" />
				),
			},
			{
				variant: 'tertiary',
				render: (color, _, args) => (
					<NeoTextArea {...args} color={color} label={color} size="medium" variant="tertiary" />
				),
			},
		],
		{
			defaultProps: {
				name: 'color-textarea',
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
