import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, h } from 'vue'
import { colors } from '@/assets/typescript/colors'
import { createAllColorsRender } from '../../../../../.storybook/utils/colorShowcase'
import NeoText from './NeoText.vue'
import type { NeoTextProps } from './NeoTextTypes'
import { textSizes, textTags, textWeights } from './NeoTextTypes'

const meta = {
	title: 'Atoms/NeoText',
	component: NeoText,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: textSizes,
			description:
				'`lead` — large intro text (textXl, relaxed). `base` — body copy (textMd, normal). `small` — secondary labels (textSm). `caption` — fine print (textXs).',
			table: { category: 'Appearance' },
		},
		tag: {
			control: 'select',
			options: textTags,
			description: 'HTML element to render. Defaults to `p`.',
			table: { category: 'Appearance' },
		},
		color: {
			control: 'select',
			options: colors,
			description: 'Optional accent color applied via the themed system (`colorAccessible` shade).',
			table: { category: 'Appearance' },
		},
		weight: {
			control: 'select',
			options: textWeights,
			description: 'Font weight override. Defaults to inherited weight (regular).',
			table: { category: 'Appearance' },
		},
		truncate: {
			control: 'boolean',
			description: 'Truncates overflowing text to a single line with an ellipsis.',
			table: { category: 'Appearance' },
		},
		clamp: {
			control: 'number',
			description: 'Clamps text to the given number of lines with an ellipsis.',
			table: { category: 'Appearance' },
		},
	},
	args: {
		size: 'base',
	},
} satisfies Meta<typeof NeoText>

export default meta
type Story = StoryObj<typeof meta>

const sampleText =
	'The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.'

export const Default: Story = {
	render: (args: NeoTextProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => <NeoText {...args}>{sampleText}</NeoText>
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoText>${sampleText}</NeoText>`,
			},
		},
	},
}

export const AllSizes: Story = {
	render: () => {
		return defineComponent({
			name: 'AllSizesRender',
			setup() {
				return () => (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
						<NeoText size="lead">lead — {sampleText}</NeoText>
						<NeoText size="base">base — {sampleText}</NeoText>
						<NeoText size="small">small — {sampleText}</NeoText>
						<NeoText size="caption">caption — {sampleText}</NeoText>
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoText size="lead">Lead text</NeoText>
<NeoText size="base">Base text</NeoText>
<NeoText size="small">Small text</NeoText>
<NeoText size="caption">Caption text</NeoText>`,
			},
		},
	},
}

export const Colored: Story = {
	args: { color: 'blue' },
	render: (args: NeoTextProps) => {
		return defineComponent({
			name: 'ColoredRender',
			setup() {
				return () => <NeoText {...args}>{sampleText}</NeoText>
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoText color="blue">${sampleText}</NeoText>`,
			},
		},
	},
}

export const AllColors: Story = {
	render: createAllColorsRender<typeof NeoText>(NeoText, [
		{
			name: 'Default',
			variant: 'default',
			renderComponent: (color, Component) => h(Component, { color }, { default: () => color }),
		},
	]),
}

export const AllColorsOnDark: Story = {
	globals: { backgrounds: '#000' },
	render: createAllColorsRender<typeof NeoText>(
		NeoText,
		[
			{
				name: 'Default',
				variant: 'default',
				renderComponent: (color, Component) => h(Component, { color }, { default: () => color }),
			},
		],
		true,
	),
}
