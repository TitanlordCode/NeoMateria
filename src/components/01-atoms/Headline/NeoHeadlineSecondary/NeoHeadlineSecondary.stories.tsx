import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { colors } from '@/assets/typescript/colors'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import NeoHeadlineSecondary from './NeoHeadlineSecondary.vue'
import type { NeoHeadlineProps } from '../NeoHeadlineTypes'
import { headlineTags, headlineAligns } from '../NeoHeadlineTypes'
import { getColorWrapper } from '../../../../../.storybook/utils/colorShowcase'

const meta = {
	title: 'Atoms/Headline/NeoHeadlineSecondary',
	component: NeoHeadlineSecondary,
	tags: ['autodocs'],
	argTypes: {
		tag: {
			control: 'select',
			options: headlineTags,
			description: 'The HTML element to render. Decouples visual style from document semantics.',
			table: { category: 'Appearance' },
		},
		color: {
			control: 'select',
			options: colors,
			description: 'Optional accent color applied via the themed system (`colorAccessible` shade).',
			table: { category: 'Appearance' },
		},
		align: {
			control: 'select',
			options: headlineAligns,
			description: 'Text alignment.',
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
		tag: 'h2',
	},
} satisfies Meta<typeof NeoHeadlineSecondary>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args: NeoHeadlineProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => <NeoHeadlineSecondary {...args}>The Quick Brown Fox</NeoHeadlineSecondary>
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHeadlineSecondary>The Quick Brown Fox</NeoHeadlineSecondary>`,
			},
		},
	},
}

export const Colored: Story = {
	args: { color: 'blue' },
	render: (args: NeoHeadlineProps) => {
		return defineComponent({
			name: 'ColoredRender',
			setup() {
				return () => <NeoHeadlineSecondary {...args}>Colored Headline</NeoHeadlineSecondary>
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHeadlineSecondary color="blue">Colored Headline</NeoHeadlineSecondary>`,
			},
		},
	},
}

export const AllColors: Story = {
	render: () => {
		return defineComponent({
			name: 'AllColorsRender',
			setup() {
				return () => (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
						{colors.map((color) =>
							getColorWrapper(
								'NeoHeadlineSecondary',
								color as SurfaceColor,
								<NeoHeadlineSecondary key={color} color={color}>
									{color}
								</NeoHeadlineSecondary>,
								'default',
								false,
							),
						)}
					</div>
				)
			},
		})
	},
}

export const AllColorsOnDark: Story = {
	globals: { backgrounds: '#000' },
	render: () => {
		return defineComponent({
			name: 'AllColorsOnDarkRender',
			setup() {
				return () => (
					<div class="u-onDark" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
						{colors.map((color) => (
							<NeoHeadlineSecondary key={color} color={color}>
								{color}
							</NeoHeadlineSecondary>
						))}
					</div>
				)
			},
		})
	},
}
