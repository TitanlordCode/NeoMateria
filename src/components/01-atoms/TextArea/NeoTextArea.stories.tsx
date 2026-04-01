import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NeoTextArea from './NeoTextArea.vue'
import { textareaSizes, textareaVariants } from './NeoTextAreaTypes'
import { ariaLabelArgType, disabledArgType } from '../../../../.storybook/utils/argTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'

const meta = {
	title: 'Atoms/NeoTextArea',
	component: NeoTextArea,
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
		required: { control: 'boolean', table: { category: 'State' } },
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
		minLength: { control: 'number', table: { category: 'Validation' } },
	},
	args: {
		name: 'example-textarea',
		ariaLabel: 'Label',
		placeholder: 'Enter your text here...',
		size: 'medium',
		variant: 'primary',
		color: 'blue',
	},
} satisfies Meta<typeof NeoTextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
	args: {
		label: 'Description',
		ariaLabel: undefined,
	},
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
		label: 'Textarea Field',
		ariaLabel: undefined,
		required: true,
		requiredText: 'This field is required',
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
		maxLength: 200,
		helpText: 'Maximum 200 characters',
	},
}

export const AllColors: Story = {
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
	globals: {
		backgrounds: '#000',
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
