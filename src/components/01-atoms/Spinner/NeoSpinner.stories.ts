import { colors } from '@/assets/typescript/colors'
import type { Meta, StoryObj } from '@storybook/vue3'
import NeoSpinner from './NeoSpinner.vue'

const meta = {
	title: 'Atoms/NeoSpinner',
	component: NeoSpinner,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		color: {
			control: 'select',
			options: colors,
		},
	},
	args: {
		size: 'medium',
		color: 'blue',
	},
} satisfies Meta<typeof NeoSpinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
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

export const CustomLabel: Story = {
	args: {
		label: 'Please wait...',
	},
}

export const WithoutLabel: Story = {
	args: {
		label: '',
	},
}

export const InButton: Story = {
	render: (args) => ({
		components: { NeoSpinner },
		setup() {
			return { args }
		},
		template: `
			<button style="padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
				<NeoSpinner v-bind="args" size="small" label="" />
				Loading...
			</button>
		`,
	}),
	args: {
		color: 'grey',
	},
}
