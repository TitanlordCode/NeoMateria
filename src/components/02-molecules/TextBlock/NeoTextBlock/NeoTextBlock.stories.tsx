import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { colors } from '@/assets/typescript/colors'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import NeoTextBlock from './NeoTextBlock.vue'
import type { NeoTextBlockProps } from './NeoTextBlockTypes'
import { headlineTags, headlineAligns } from '@/components/01-atoms/Headline/NeoHeadlineTypes'
import { headingGroupVariants } from '@/components/02-molecules/HeadingGroup/NeoHeadingGroup/NeoHeadingGroupTypes'

const surfaceColors = colors.filter((color): color is SurfaceColor => color !== 'white')

const bodyText =
	'Build faster with a complete set of accessible, production-ready Vue components that follow your design tokens automatically.'

const meta = {
	title: 'Molecules/NeoTextBlock',
	component: NeoTextBlock,
	tags: ['autodocs'],
	argTypes: {
		heading: { control: 'text', table: { category: 'Content' } },
		body: { control: 'text', table: { category: 'Content' } },
		ctaText: { control: 'text', table: { category: 'Content' } },
		ctaHref: { control: 'text', table: { category: 'Content' } },
		headingVariant: {
			control: 'select',
			options: headingGroupVariants,
			description: 'Size of the heading.',
			table: { category: 'Appearance' },
		},
		headingTag: {
			control: 'select',
			options: headlineTags,
			description: 'HTML element for the heading.',
			table: { category: 'Appearance' },
		},
		color: {
			control: 'select',
			options: surfaceColors,
			description: 'Accent color applied to the heading and CTA.',
			table: { category: 'Appearance' },
		},
		align: {
			control: 'select',
			options: headlineAligns,
			description: 'Text alignment.',
			table: { category: 'Appearance' },
		},
	},
	args: {
		heading: 'Design systems made easy',
		body: bodyText,
		headingVariant: 'secondary',
	},
} satisfies Meta<typeof NeoTextBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args: NeoTextBlockProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => (
					<div style={{ maxInlineSize: '640px' }}>
						<NeoTextBlock {...args} />
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoTextBlock
  heading="Design systems made easy"
  body="${bodyText}"
/>`,
			},
		},
	},
}

export const WithCTA: Story = {
	args: {
		color: 'blue',
		ctaText: 'Get started',
		ctaHref: '#',
	},
	render: (args: NeoTextBlockProps) => {
		return defineComponent({
			name: 'WithCTARender',
			setup() {
				return () => (
					<div style={{ maxInlineSize: '640px' }}>
						<NeoTextBlock {...args} />
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoTextBlock
  heading="Design systems made easy"
  body="${bodyText}"
  color="blue"
  cta-text="Get started"
  cta-href="#"
/>`,
			},
		},
	},
}

export const Centered: Story = {
	args: {
		align: 'center',
		color: 'purple',
		ctaText: 'Learn more',
		ctaHref: '#',
	},
	render: (args: NeoTextBlockProps) => {
		return defineComponent({
			name: 'CenteredRender',
			setup() {
				return () => (
					<div style={{ maxInlineSize: '640px' }}>
						<NeoTextBlock {...args} />
					</div>
				)
			},
		})
	},
}
