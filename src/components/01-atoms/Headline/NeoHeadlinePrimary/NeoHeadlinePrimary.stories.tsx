import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, h } from 'vue'
import { colors } from '@/assets/typescript/colors'
import { createAllColorsRender } from '../../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../../.storybook/utils/createA11yPlay'
import NeoHeadlinePrimary from './NeoHeadlinePrimary.vue'
import type { NeoHeadlineProps } from '../NeoHeadlineTypes'
import { headlineTags, headlineAligns } from '../NeoHeadlineTypes'

const meta = {
	title: 'Atoms/Headline/NeoHeadlinePrimary',
	component: NeoHeadlinePrimary,
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
} satisfies Meta<typeof NeoHeadlinePrimary>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
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
	tags: ['snapshot'],
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
	tags: ['snapshot'],
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
	tags: ['snapshot'],
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
				return () => <NeoHeadlinePrimary {...args}>الثعلب البني السريع</NeoHeadlinePrimary>
			},
		})
	},
}

export const AllColors: Story = {
	tags: ['snapshot'],
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: createAllColorsRender<typeof NeoHeadlinePrimary>(NeoHeadlinePrimary, [
		{
			name: 'Default',
			variant: 'default',
			renderComponent: (color, Component) => h(Component, { color }, { default: () => color }),
		},
	]),
}

export const AllColorsOnDark: Story = {
	tags: ['snapshot'],
	globals: { backgrounds: '#000' },
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: createAllColorsRender<typeof NeoHeadlinePrimary>(
		NeoHeadlinePrimary,
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
