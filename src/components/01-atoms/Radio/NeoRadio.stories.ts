import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import NeoRadio from './NeoRadio.vue'

const meta = {
	title: 'Atoms/NeoRadio',
	component: NeoRadio,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		color: {
			control: 'select',
			options: ['grey500', 'blue500', 'red500', 'green500', 'yellow500', 'purple500'],
		},
	},
	args: {
		name: 'example-radio',
		label: 'Option 1',
		value: 'option1',
		size: 'medium',
		color: 'blue500',
	},
} satisfies Meta<typeof NeoRadio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}

export const Checked: Story = {
	args: {
		checked: true,
	},
}

export const Disabled: Story = {
	args: {
		disabled: true,
	},
}

export const DisabledChecked: Story = {
	args: {
		disabled: true,
		checked: true,
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

export const RadioGroup: Story = {
	render: (args) => ({
		components: { NeoRadio },
		setup() {
			const selectedValue = ref('option1')
			return { args, selectedValue }
		},
		template: `
			<div style="display: flex; flex-direction: column; gap: 12px;">
				<NeoRadio
					v-bind="args"
					name="group"
					value="option1"
					label="Option 1"
					:checked="selectedValue === 'option1'"
					@update:checked="selectedValue = $event"
				/>
				<NeoRadio
					v-bind="args"
					name="group"
					value="option2"
					label="Option 2"
					:checked="selectedValue === 'option2'"
					@update:checked="selectedValue = $event"
				/>
				<NeoRadio
					v-bind="args"
					name="group"
					value="option3"
					label="Option 3"
					:checked="selectedValue === 'option3'"
					@update:checked="selectedValue = $event"
				/>
				<p style="margin-top: 16px;">Selected: {{ selectedValue }}</p>
			</div>
		`,
	}),
}
