import type { Meta, StoryObj } from '@storybook/vue3'

// import { fn } from '@storybook/test'

import NeoSelect from './NeoSelect.vue'
import type { NeoSelectProps } from './NeoSelectTypes'
import { colors } from '@/assets/typescript/colors'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'

const exampleOptions = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'orange', label: 'Orange' },
	{ value: 'banana', label: 'Banana' },
] satisfies NeoSelectProps['options']

const meta: Meta<typeof NeoSelect> = {
	title: 'Molecules/NeoSelect',
	component: NeoSelect,
	tags: ['autodocs'],
	argTypes: {
		color: { control: 'select', options: colors },
	},
	args: {
		name: 'fruit',
		label: 'Choose a fruit',
		selectProps: { placeholder: 'Select one...' },
		variant: 'primary',
		color: 'grey',
		options: exampleOptions,
	},
	parameters: {
		a11y: {
			config: {
				rules: [{ id: 'aria-valid-attr-value', enabled: false }], // Bug that doesn't recognize the value
			},
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		label: 'Default',
	},
}

export const MultiSelect: Story = {
	args: {
		label: 'Choose fruits',
		mode: 'multi',
		selectProps: { placeholder: 'Select multiple...' },
		selectValue: ['apple', 'banana'],
	},
}

export const MultiSelectEmpty: Story = {
	args: {
		label: 'Choose your favorite programming languages',
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
		backgrounds: { value: '#000' },
	},
}

export const RTL: Story = {
	globals: {
		direction: 'rtl',
	},
	args: {
		label: 'اختر فاكهة',
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
		backgrounds: { value: '#000' },
	},
	render: createSimpleColorShowcase(NeoSelect, ['primary', 'secondary', 'tertiary'], {
		defaultProps: {
			name: 'color-select',
			options: exampleOptions,
		},
		dark: true,
	}),
}
