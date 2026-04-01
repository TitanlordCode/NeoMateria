import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { placeholder } from '../../../../../.storybook/utils/placeholder'
import NeoFeatureLine from './NeoFeatureLine.vue'
import type { NeoFeatureLineProps } from './NeoFeatureLineTypes'
import { featureLineImageRatios } from './NeoFeatureLineTypes'
import { headlineTags } from '@/components/01-atoms/Headline/NeoHeadlineTypes'
import { headingGroupVariants } from '@/components/02-molecules/HeadingGroup/NeoHeadingGroup/NeoHeadingGroupTypes'

const meta = {
	title: 'Organisms/NeoFeatureLine',
	component: NeoFeatureLine,
	tags: ['autodocs'],
	argTypes: {
		imageSrc: { control: 'text', table: { category: 'Content' } },
		imageAlt: { control: 'text', table: { category: 'Content' } },
		title: { control: 'text', table: { category: 'Content' } },
		subtitle: { control: 'text', table: { category: 'Content' } },
		body: { control: 'text', table: { category: 'Content' } },
		ctaText: { control: 'text', table: { category: 'Content' } },
		ctaHref: { control: 'text', table: { category: 'Content' } },
		reverse: {
			control: 'boolean',
			description: 'Swaps image and content order at `bp-md` and above.',
			table: { category: 'Layout' },
		},
		imageRatio: {
			control: 'select',
			options: featureLineImageRatios,
			description: 'Aspect ratio of the image.',
			table: { category: 'Layout' },
		},
		headingVariant: {
			control: 'select',
			options: headingGroupVariants,
			description: 'Controls the headline size.',
			table: { category: 'Appearance' },
		},
		headingTag: {
			control: 'select',
			options: headlineTags,
			description: 'HTML element for the heading.',
			table: { category: 'Appearance' },
		},
		color: {
			description: 'Accent color applied to the heading and CTA.',
			table: { category: 'Appearance' },
		},
	},
	args: {
		imageSrc: 'https://picsum.photos/seed/featureline/800/600',
		imageAlt: 'Feature image',
		title: 'Build better products faster',
		subtitle: 'A modern design system for Vue 3',
		body: 'NeoMateria gives your team a shared visual language and a complete set of accessible, production-ready components.',
		color: 'blue',
	},
} satisfies Meta<typeof NeoFeatureLine>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args: NeoFeatureLineProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => (
					<div style={{ maxInlineSize: '960px', padding: '24px' }}>
						<NeoFeatureLine {...args} />
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoFeatureLine
  image-src="..."
  image-alt="Feature image"
  title="Build better products faster"
  subtitle="A modern design system for Vue 3"
  body="NeoMateria gives your team..."
  color="blue"
/>`,
			},
		},
	},
}

export const Reversed: Story = {
	args: { reverse: true, color: 'purple' },
	render: (args: NeoFeatureLineProps) => {
		return defineComponent({
			name: 'ReversedRender',
			setup() {
				return () => (
					<div style={{ maxInlineSize: '960px', padding: '24px' }}>
						<NeoFeatureLine {...args} />
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoFeatureLine
  image-src="..."
  image-alt="Feature image"
  title="Build better products faster"
  color="purple"
  reverse
/>`,
			},
		},
	},
}

export const WithCTA: Story = {
	args: { color: 'blue', ctaText: 'Get started', ctaHref: '#' },
	render: (args: NeoFeatureLineProps) => {
		return defineComponent({
			name: 'WithCTARender',
			setup() {
				return () => (
					<div style={{ maxInlineSize: '960px', padding: '24px' }}>
						<NeoFeatureLine {...args} />
					</div>
				)
			},
		})
	},
}

export const Stacked: Story = {
	render: () => {
		return defineComponent({
			name: 'StackedRender',
			setup() {
				return () => (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '80px',
							maxInlineSize: '960px',
							padding: '24px',
						}}
					>
						<NeoFeatureLine
							imageSrc={placeholder(800, 600)}
							imageAlt="Feature 1"
							title="Accessible by default"
							body="Every component is built with WCAG 2.1 AA compliance in mind, tested with automated tooling and screen readers."
							color="blue"
							ctaText="Learn more"
							ctaHref="#"
						/>
						<NeoFeatureLine
							imageSrc={placeholder(800, 600)}
							imageAlt="Feature 2"
							title="Fully themed"
							body="One color prop propagates through the entire component tree via CSS custom properties."
							color="purple"
							ctaText="See the tokens"
							ctaHref="#"
							reverse
						/>
						<NeoFeatureLine
							imageSrc={placeholder(800, 600)}
							imageAlt="Feature 3"
							title="Zero dependencies"
							body="No runtime dependencies beyond Vue 3. Ship less, load faster."
							color="green"
							ctaText="Browse components"
							ctaHref="#"
						/>
					</div>
				)
			},
		})
	},
}
