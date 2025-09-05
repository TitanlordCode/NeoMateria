import type { Meta, StoryObj } from '@storybook/vue3'
import NeoIcon from './NeoIcon.vue'

const addIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 -960 960 960"
		width="24px"
		fill="currentcolor"
	>
		<path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
	</svg>
)

const deleteIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 -960 960 960"
		width="24px"
		fill="currentcolor"
	>
		<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
	</svg>
)

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
