import type { Meta, StoryObj } from '@storybook/vue3'
import NeoIcon from './NeoIcon.vue'
import { addIcon, deleteIcon } from './exampleIcons.tsx'
import type { NeoIconProps } from './NeoIconTypes.ts'
import { defineComponent } from 'vue'

const meta = {
	title: 'Atoms/NeoIcon',
	component: NeoIcon,
	tags: ['autodocs'],
	args: {
		color: 'grey',
		colorVariant: 'theme',
		size: 'medium',
		default: () => deleteIcon,
	},
	parameters: {
		docs: {
			description: {
				component: 'This is a Wrapper to unify svg Icons with colors and font sizes.',
			},
		},
	},
} satisfies Meta<typeof NeoIcon>

export default meta
type Story = StoryObj<typeof NeoIcon>

export const Default: Story = {}
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

export const colorVariantTheme: Story = {
	args: {
		colorVariant: 'theme',
	},
}
export const colorVariantText: Story = {
	args: {
		colorVariant: 'text',
	},
}

export const BigFonts: Story = {
	render: (args: NeoIconProps) => {
		return defineComponent({
			name: 'ColorRender',
			setup() {
				return () => (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							fontSize: '32px',
							inlineSize: 'fit-content',
						}}
					>
						<span>With Font size 32px</span>
						<NeoIcon {...args}>{deleteIcon}</NeoIcon>
					</div>
				)
			},
		})
	},
}
export const AddExample: Story = {
	args: {
		color: 'green',
		default: () => addIcon,
	},
}
export const DeleteExample: Story = {
	args: {
		color: 'red',
		default: () => deleteIcon,
	},
}
