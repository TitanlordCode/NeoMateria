import type { Meta, StoryObj } from '@storybook/vue3'
import NeoIcon from './NeoIcon.vue'
import { addIcon, deleteIcon } from './exampleIcons.tsx'

const meta = {
	title: 'Atoms/NeoIcon',
	component: NeoIcon,
	args: {
		color: 'grey500',
		size: 'medium',
		default: () => deleteIcon,
	},
} satisfies Meta<typeof NeoIcon>

export default meta
type Story = StoryObj<typeof NeoIcon>

export const Default: Story = {}

export const AddExample: Story = {
	args: {
		color: 'green500',
		default: () => addIcon,
	},
}
export const DeleteExample: Story = {
	args: {
		color: 'red500',
		default: () => deleteIcon,
	},
}
