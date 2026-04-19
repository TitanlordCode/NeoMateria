import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NeoIcon from './NeoIcon.vue'
import { AddIcon, DeleteIcon } from './defaultIcons'
import type { NeoIconProps } from './NeoIconTypes.ts'
import { defineComponent } from 'vue'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'
import { deleteIconSvg, addIconSvg } from '../../../../.storybook/utils/iconSnippets'
import { createA11yPlay } from '../../../../.storybook/utils/createA11yPlay'

const meta = {
	title: 'Atoms/NeoIcon',
	component: NeoIcon,
	tags: ['autodocs'],
	argTypes: {
		default: {
			control: false,
			description: 'The icon SVG content. Pass a raw SVG element or a Vue component.',
			table: { category: 'Slots' },
		},
	},
	args: {
		color: 'grey',
		colorVariant: 'theme',
		size: 'medium',
		default: DeleteIcon,
	},
	render: (args) =>
		defineComponent({
			name: 'NeoIconRender',
			render: () => <NeoIcon {...args}>{args.default}</NeoIcon>,
		}),
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

export const Default: Story = {
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<NeoIcon color="grey" size="medium">
  ${deleteIconSvg}
</NeoIcon>`,
			},
		},
	},
}
export const Small: Story = {
	tags: ['snapshot'],
	args: {
		size: 'small',
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoIcon color="grey" size="small">
  ${deleteIconSvg}
</NeoIcon>`,
			},
		},
	},
}
export const Large: Story = {
	tags: ['snapshot'],
	args: {
		size: 'large',
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoIcon color="grey" size="large">
  ${deleteIconSvg}
</NeoIcon>`,
			},
		},
	},
}

export const colorVariantTheme: Story = {
	tags: ['snapshot'],
	args: {
		colorVariant: 'theme',
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- color-variant="theme" uses the 500 shade of the color token -->
<NeoIcon color="grey" color-variant="theme">
  ${deleteIconSvg}
</NeoIcon>`,
			},
		},
	},
}
export const colorVariantText: Story = {
	tags: ['snapshot'],
	args: {
		colorVariant: 'text',
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- color-variant="text" uses the accessible (darker) text shade -->
<NeoIcon color="grey" color-variant="text">
  ${deleteIconSvg}
</NeoIcon>`,
			},
		},
	},
}

export const BigFonts: Story = {
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<!-- NeoIcon scales with the surrounding font-size -->
<div style="display: flex; flex-direction: column; font-size: 32px; inline-size: fit-content;">
  <span>With Font size 32px</span>
  <NeoIcon color="grey" size="medium">
    ${deleteIconSvg}
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
	tags: ['no-test'],
	args: {
		color: 'green',
		default: AddIcon,
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoIcon color="green" size="medium">
  ${addIconSvg}
</NeoIcon>`,
			},
		},
	},
}
export const DeleteExample: Story = {
	tags: ['no-test'],
	args: {
		color: 'red',
		default: DeleteIcon,
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoIcon color="red" size="medium">
  ${deleteIconSvg}
</NeoIcon>`,
			},
		},
	},
}

export const OnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
}

export const RTL: Story = {
	tags: ['snapshot'],
	globals: {
		direction: 'rtl',
	},
}

export const AllColors: Story = {
	tags: ['snapshot'],
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
	tags: ['snapshot'],
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

export const AllColorsA11y: Story = {
	...AllColors,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}

export const AllColorsOnDarkA11y: Story = {
	...AllColorsOnDark,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}
