import type { Meta, StoryObj } from '@storybook/vue3-vite'

import NeoSelect from './NeoSelect.vue'
import type { NeoSelectProps } from './NeoSelectTypes'
import { selectSizes, selectVariants, selectModes } from './NeoSelectTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'

const exampleOptions = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'orange', label: 'Orange' },
	{ value: 'banana', label: 'Banana' },
] satisfies NeoSelectProps['options']

const meta = {
	title: 'Molecules/NeoSelect',
	component: NeoSelect,
	tags: ['autodocs'],
	argTypes: {
		color: {
			description: 'Theme color for focus ring and selected state accents.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			options: selectSizes,
			description: 'Controls padding and font size.',
			table: { category: 'Appearance' },
		},
		variant: {
			control: 'select',
			options: selectVariants,
			description:
				'`primary`: filled background. `secondary`: outlined style. `tertiary`: minimal, no visible border at rest.',
			table: { category: 'Appearance' },
		},
		rounded: {
			control: 'boolean',
			description: 'Applies fully rounded corners to the select input.',
			table: { category: 'Appearance' },
		},
		mode: {
			control: 'select',
			options: selectModes,
			description:
				'`single` (default): one value can be selected, bound to a `string`. `multi`: multiple values, bound to `string[]`. Switching mode changes the type of `selectValue`.',
			table: { category: 'Behavior' },
		},
		selectValue: {
			description:
				'The currently selected value(s). Type depends on `mode`: `string` for single, `string[]` for multi.',
			table: { category: 'State' },
		},
		options: {
			control: 'object',
			description: 'Array of selectable options. Each option: `{ value: string, label: string }`.',
			table: { category: 'Content' },
		},
		selectProps: {
			control: 'object',
			description: 'Additional props passed to the inner select element. Supports `placeholder`.',
			table: { category: 'Behavior' },
		},
		helpText: {
			control: 'text',
			description: 'Hint text rendered below the input to guide the user.',
			table: { category: 'Content' },
		},
		errorMessage: {
			control: 'text',
			description:
				'Validation error text rendered below the input. When set, the input is styled in an error state.',
			table: { category: 'State' },
		},
		disabled: {
			control: 'boolean',
			description: 'Prevents interaction and applies a disabled visual style.',
			table: { category: 'State' },
		},
		required: {
			control: 'boolean',
			description:
				'Marks the field as required. When `true`, `requiredText` must also be provided and is shown next to the label.',
			table: { category: 'State' },
		},
		requiredText: {
			control: 'text',
			description:
				'Text displayed beside the label when `required` is true (e.g. `"required"` or `"*"`). Only available when `required` is set.',
			table: { category: 'Content' },
		},
	},
	args: {
		name: 'fruit',
		ariaLabel: 'Select a fruit',
		size: 'medium',
		selectProps: { placeholder: 'Select one...' },
		variant: 'primary',
		color: 'blue',
		options: exampleOptions,
	},
	parameters: {
		a11y: {
			config: {
				// Disable 'aria-valid-attr-value' check due to Storybook a11y addon false positive
				// The addon incorrectly flags valid aria-activedescendant values during dynamic option focus
				rules: [{ id: 'aria-valid-attr-value', enabled: false }],
			},
		},
	},
} satisfies Meta<typeof NeoSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithLabel: Story = {
	args: {
		label: 'Default',
		ariaLabel: undefined,
	},
}

export const MultiSelect: Story = {
	args: {
		label: 'Choose fruits',
		ariaLabel: undefined,
		mode: 'multi',
		selectProps: { placeholder: 'Select multiple...' },
		selectValue: ['apple', 'banana'],
	},
}

export const MultiSelectEmpty: Story = {
	args: {
		label: 'Choose your favorite programming languages',
		ariaLabel: undefined,
		mode: 'multi',
		selectProps: { placeholder: 'Type to search...' },
		options: [
			{ value: 'typescript', label: 'TypeScript' },
			{ value: 'javascript', label: 'JavaScript' },
			{ value: 'python', label: 'Python' },
			{ value: 'rust', label: 'Rust' },
			{ value: 'go', label: 'Go' },
			{ value: 'java', label: 'Java' },
			{ value: 'csharp', label: 'C#' },
			{ value: 'cpp', label: 'C++' },
		],
	},
}

export const SingleSelectWithSearch: Story = {
	args: {
		label: 'Choose your country',
		ariaLabel: undefined,
		mode: 'single',
		selectProps: { placeholder: 'Type to search countries...' },
		options: [
			{ value: 'us', label: 'United States' },
			{ value: 'uk', label: 'United Kingdom' },
			{ value: 'de', label: 'Germany' },
			{ value: 'fr', label: 'France' },
			{ value: 'es', label: 'Spain' },
			{ value: 'it', label: 'Italy' },
			{ value: 'nl', label: 'Netherlands' },
			{ value: 'be', label: 'Belgium' },
		],
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
		label: 'اختر فاكهة',
		ariaLabel: undefined,
		selectProps: { placeholder: 'اختر واحدة...' },
		options: [
			{ value: 'apple', label: 'تفاح' },
			{ value: 'orange', label: 'برتقال' },
			{ value: 'banana', label: 'موز' },
		],
	},
}

export const AllColors: Story = {
	render: createSimpleColorShowcase(NeoSelect, ['primary', 'secondary', 'tertiary'], {
		defaultProps: {
			name: 'color-select',
			options: exampleOptions,
		},
	}),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	render: createSimpleColorShowcase(NeoSelect, ['primary', 'secondary', 'tertiary'], {
		defaultProps: {
			name: 'color-select',
			options: exampleOptions,
		},
		dark: true,
	}),
}
