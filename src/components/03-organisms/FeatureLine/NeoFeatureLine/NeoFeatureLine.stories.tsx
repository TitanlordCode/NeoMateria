import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { placeholder } from '../../../../../.storybook/utils/placeholder'
import NeoFeatureLine from './NeoFeatureLine.vue'
import { featureLineImageRatios } from './NeoFeatureLineTypes'
import { headlineTags } from '@/components/01-atoms/Headline/NeoHeadlineTypes'
import { headingGroupVariants } from '@/components/02-molecules/HeadingGroup/NeoHeadingGroup/NeoHeadingGroupTypes'

const meta = {
	title: 'Organisms/NeoFeatureLine',
	component: NeoFeatureLine,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
A media-and-text row organism for feature sections. Image sits on one side, heading group + body + CTA on the other; the \`reverse\` prop flips the order at \`bp-md\` and above.

This component wraps itself in a \`NeoSection\`. If you place it **inside another \`NeoSection\`**, it auto-detects the ancestor and skips its own wrapper — so you never get a doubled section. To force-skip the wrapper in any other container, set \`no-section\`.
				`,
			},
		},
	},
	argTypes: {
		imageSrc: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Source URL of the feature image.',
		},
		imageAlt: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Alt text for the feature image.',
		},
		title: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Heading text for the feature line.',
		},
		subtitle: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Overline/eyebrow text shown above the title.',
		},
		body: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Body copy describing the feature.',
		},
		ctaText: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Label for the call-to-action link. Requires `ctaHref` to render.',
		},
		ctaHref: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Destination URL for the call-to-action link. Requires `ctaText` to render.',
		},
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
		section: {
			control: false,
			description: 'Props forwarded to the internal `NeoSection` wrapper (e.g. `fullWidth`).',
			table: { category: 'Layout' },
		},
		noSection: {
			control: 'boolean',
			description:
				'Force-skip the internal `NeoSection` wrapper. A `NeoSection` ancestor is auto-detected and skipped already; use this to opt out inside non-`NeoSection` containers.',
			table: { category: 'Layout' },
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
	tags: ['snapshot'],
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
	tags: ['snapshot'],
	args: { reverse: true, color: 'purple' },
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
	tags: ['snapshot'],
	args: { color: 'blue', ctaText: 'Get started', ctaHref: '#' },
}

export const Stacked: Story = {
	tags: ['snapshot'],
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

export const FullWidth: Story = {
	tags: ['snapshot'],
	args: {
		section: {
			fullWidth: true,
		},
	},
}
