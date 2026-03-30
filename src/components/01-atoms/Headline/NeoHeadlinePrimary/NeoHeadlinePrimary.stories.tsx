import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { colors } from '@/assets/typescript/colors'
import NeoHeadlinePrimary from './NeoHeadlinePrimary.vue'
import type { NeoHeadlineProps } from '../NeoHeadlineTypes'
import { headlineTags, headlineAligns } from '../NeoHeadlineTypes'

const meta = {
	title: 'Atoms/Headline/NeoHeadlinePrimary',
	component: NeoHeadlinePrimary,
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
} satisfies Meta<typeof NeoHeadlinePrimary>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args: NeoHeadlineProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => <NeoHeadlinePrimary {...args}>The Quick Brown Fox</NeoHeadlinePrimary>
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHeadlinePrimary>The Quick Brown Fox</NeoHeadlinePrimary>`,
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
				return () => <NeoHeadlinePrimary {...args}>Colored Headline</NeoHeadlinePrimary>
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHeadlinePrimary color="blue">Colored Headline</NeoHeadlinePrimary>`,
			},
		},
	},
}

export const Centered: Story = {
	args: { align: 'center' },
	render: (args: NeoHeadlineProps) => {
		return defineComponent({
			name: 'CenteredRender',
			setup() {
				return () => <NeoHeadlinePrimary {...args}>Centered Headline</NeoHeadlinePrimary>
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHeadlinePrimary align="center">Centered Headline</NeoHeadlinePrimary>`,
			},
		},
	},
}

export const Truncated: Story = {
	render: (args: NeoHeadlineProps) => {
		return defineComponent({
			name: 'TruncatedRender',
			setup() {
				return () => (
					<div style={{ inlineSize: '400px' }}>
						<NeoHeadlinePrimary {...args} truncate>
							An Extremely Long Headline That Gets Truncated After One Line
						</NeoHeadlinePrimary>
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHeadlinePrimary truncate>An Extremely Long Headline That Gets Truncated After One Line</NeoHeadlinePrimary>`,
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
						{colors.map((color) => (
							<NeoHeadlinePrimary key={color} color={color}>
								{color}
							</NeoHeadlinePrimary>
						))}
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
							<NeoHeadlinePrimary key={color} color={color}>
								{color}
							</NeoHeadlinePrimary>
						))}
					</div>
				)
			},
		})
	},
}
