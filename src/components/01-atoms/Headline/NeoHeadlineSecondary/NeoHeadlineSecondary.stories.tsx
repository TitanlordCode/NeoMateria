import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { colors } from '@/assets/typescript/colors'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import NeoHeadlineSecondary from './NeoHeadlineSecondary.vue'
import type { NeoHeadlineProps } from '../NeoHeadlineTypes'
import { headlineTags, headlineAligns } from '../NeoHeadlineTypes'
import { getColorWrapper } from '../../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../../.storybook/utils/createA11yPlay'

const meta = {
	title: 'Atoms/Headline/NeoHeadlineSecondary',
	component: NeoHeadlineSecondary,
	tags: ['autodocs', 'grimeria'],
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
		default: {
			control: false,
			description: 'Headline text or rich content.',
			table: { category: 'Slots' },
		},
	},
	args: {
		tag: 'h2',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoHeadlineSecondary>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
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
	tags: ['snapshot'],
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

export const RTL: Story = {
	tags: ['snapshot'],
	globals: {
		direction: 'rtl',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: (args: NeoHeadlineProps) => {
		return defineComponent({
			name: 'RTLRender',
			setup() {
				return () => <NeoHeadlineSecondary {...args}>الثعلب البني السريع</NeoHeadlineSecondary>
			},
		})
	},
}

export const AllColors: Story = {
	tags: ['snapshot'],
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
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
	tags: ['snapshot'],
	globals: { backgrounds: '#000' },
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
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
