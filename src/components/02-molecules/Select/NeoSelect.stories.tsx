import type { Meta, StoryObj } from '@storybook/vue3'

// import { fn } from '@storybook/test'

import NeoSelect from './NeoSelect.vue'
import type { NeoSelectProps } from './NeoSelectTypes'
import { colors } from '@/assets/typescript/colors'

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
