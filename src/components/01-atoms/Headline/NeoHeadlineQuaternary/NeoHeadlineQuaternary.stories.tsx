import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { colors } from '@/assets/typescript/colors'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import { getColorWrapper } from '../../../../../.storybook/utils/colorShowcase'
import NeoHeadlineQuaternary from './NeoHeadlineQuaternary.vue'
import type { NeoHeadlineProps } from '../NeoHeadlineTypes'
import { headlineTags, headlineAligns } from '../NeoHeadlineTypes'

const meta = {
	title: 'Atoms/Headline/NeoHeadlineQuaternary',
	component: NeoHeadlineQuaternary,
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
		tag: 'h4',
	},
} satisfies Meta<typeof NeoHeadlineQuaternary>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args: NeoHeadlineProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => <NeoHeadlineQuaternary {...args}>Card Title</NeoHeadlineQuaternary>
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHeadlineQuaternary>Card Title</NeoHeadlineQuaternary>`,
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
				return () => <NeoHeadlineQuaternary {...args}>Colored Card Title</NeoHeadlineQuaternary>
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHeadlineQuaternary color="blue">Colored Card Title</NeoHeadlineQuaternary>`,
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
								'NeoHeadlineQuaternary',
								color as SurfaceColor,
								<NeoHeadlineQuaternary key={color} color={color}>
									{color}
								</NeoHeadlineQuaternary>,
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
							<NeoHeadlineQuaternary key={color} color={color}>
								{color}
							</NeoHeadlineQuaternary>
						))}
					</div>
				)
			},
		})
	},
}
