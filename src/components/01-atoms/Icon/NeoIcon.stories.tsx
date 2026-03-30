import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NeoIcon from './NeoIcon.vue'
import { AddIcon, DeleteIcon } from './defaultIcons'
import type { NeoIconProps } from './NeoIconTypes.ts'
import { defineComponent } from 'vue'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'

const meta = {
	title: 'Atoms/NeoIcon',
	component: NeoIcon,
	tags: ['autodocs'],
	argTypes: {},
	args: {
		color: 'grey',
		colorVariant: 'theme',
		size: 'medium',
		default: () => DeleteIcon,
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
	parameters: {
		docs: {
			source: {
				code: `<!-- NeoIcon scales with the surrounding font-size -->
<div style="font-size: 32px;">
  <span>With Font size 32px</span>
  <NeoIcon color="grey" size="medium">
    <DeleteIcon />
  </NeoIcon>
</div>`,
			},
		},
	},
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
						<NeoIcon {...args}>{DeleteIcon}</NeoIcon>
					</div>
				)
			},
		})
	},
}
export const AddExample: Story = {
	args: {
		color: 'green',
		default: () => AddIcon,
	},
}
export const DeleteExample: Story = {
	args: {
		color: 'red',
		default: () => DeleteIcon,
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
}

export const AllColors: Story = {
	render: createSimpleColorShowcase(NeoIcon, [
		{
			variant: 'theme',
			label: 'Theme Color Variant',
			render: (color, _, args) => (
				<NeoIcon {...args} color={color} colorVariant="theme">
					{DeleteIcon}
				</NeoIcon>
			),
		},
		{
			variant: 'text',
			label: 'Text Color Variant',
			render: (color, _, args) => (
				<NeoIcon {...args} color={color} colorVariant="text">
					{DeleteIcon}
				</NeoIcon>
			),
		},
	]),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	render: createSimpleColorShowcase(
		NeoIcon,
		[
			{
				variant: 'theme',
				label: 'Theme Color Variant',
				render: (color, _, args) => (
					<NeoIcon {...args} color={color} colorVariant="theme">
						{DeleteIcon}
					</NeoIcon>
				),
			},
			{
				variant: 'text',
				label: 'Text Color Variant',
				render: (color, _, args) => (
					<NeoIcon {...args} color={color} colorVariant="text">
						{DeleteIcon}
					</NeoIcon>
				),
			},
		],
		{
			dark: true,
		},
	),
}
