import type { Meta, StoryObj } from '@storybook/vue3'

// import { fn } from '@storybook/test'

import Select from './Select.vue'
import type { SelectProps } from './Select.vue'
// import { colors } from '@/assets/typescript/colors'

const exampleOptions = [
	{ value: 'apple', label: 'Apple' },
	{ value: 'orange', label: 'Orange' },
	{ value: 'banana', label: 'Banana' },
] satisfies SelectProps['options']

const meta: Meta<typeof Select> = {
	title: 'Molecules/Select',
	component: Select,
	tags: ['autodocs'],
	argTypes: {},
	args: {
		name: 'fruit',
		label: 'Choose a fruit',
		selectProps: { placeholder: 'Select one...' },
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
		label: 'Default Button',
	},
}
