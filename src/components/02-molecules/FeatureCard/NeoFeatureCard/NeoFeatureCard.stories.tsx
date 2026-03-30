import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { colors } from '@/assets/typescript/colors'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import { placeholder } from '../../../../../.storybook/utils/placeholder'
import NeoFeatureCard from './NeoFeatureCard.vue'
import type { NeoFeatureCardProps } from './NeoFeatureCardTypes'
import { headlineTags } from '@/components/01-atoms/Headline/NeoHeadlineTypes'

const surfaceColors = colors.filter((color): color is SurfaceColor => color !== 'white')

const meta = {
	title: 'Molecules/NeoFeatureCard',
	component: NeoFeatureCard,
	tags: ['autodocs'],
	argTypes: {
		imageSrc: { control: 'text', table: { category: 'Content' } },
		imageAlt: { control: 'text', table: { category: 'Content' } },
		category: { control: 'text', table: { category: 'Content' } },
		title: { control: 'text', table: { category: 'Content' } },
		excerpt: { control: 'text', table: { category: 'Content' } },
		href: {
			control: 'text',
			description: 'Makes the entire card a link.',
			table: { category: 'Behavior' },
		},
		headingTag: {
			control: 'select',
			options: headlineTags,
			description: 'HTML element for the title.',
			table: { category: 'Appearance' },
		},
		color: {
			control: 'select',
			options: surfaceColors,
			description: 'Accent color applied to the category label and title.',
			table: { category: 'Appearance' },
		},
	},
	args: {
		imageSrc: 'https://picsum.photos/seed/feature1/800/450',
		imageAlt: 'Feature image',
		category: 'Design Systems',
		title: 'How to build a scalable component library',
		excerpt:
			'A practical guide to structuring Vue components for long-term maintainability and consistency.',
		color: 'blue',
	},
} satisfies Meta<typeof NeoFeatureCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args: NeoFeatureCardProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => (
					<div style={{ maxInlineSize: '480px' }}>
						<NeoFeatureCard {...args} />
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoFeatureCard
  image-src="..."
  image-alt="Feature image"
  category="Design Systems"
  title="How to build a scalable component library"
  excerpt="A practical guide..."
  color="blue"
/>`,
			},
		},
	},
}

export const Clickable: Story = {
	args: { href: '#article' },
	render: (args: NeoFeatureCardProps) => {
		return defineComponent({
			name: 'ClickableRender',
			setup() {
				return () => (
					<div style={{ maxInlineSize: '480px' }}>
						<NeoFeatureCard {...args} />
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoFeatureCard
  image-src="..."
  image-alt="Feature image"
  category="Design Systems"
  title="How to build a scalable component library"
  color="blue"
  href="#article"
/>`,
			},
		},
	},
}

export const CardGrid: Story = {
	render: () => {
		return defineComponent({
			name: 'CardGridRender',
			setup() {
				const cards = [
					{
						title: 'Getting Started with Vue 3',
						category: 'Tutorial',
						color: 'blue' as SurfaceColor,
					},
					{ title: 'Design Token Strategies', category: 'Design', color: 'purple' as SurfaceColor },
					{ title: 'Accessibility First', category: 'A11y', color: 'green' as SurfaceColor },
				]
				return () => (
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(3, 1fr)',
							gap: '24px',
							maxInlineSize: '960px',
						}}
					>
						{cards.map((card) => (
							<NeoFeatureCard
								key={card.title}
								imageSrc={placeholder(800, 450)}
								imageAlt={card.title}
								category={card.category}
								title={card.title}
								excerpt="A deep dive into modern web development practices and component architecture."
								color={card.color}
								href="#"
							/>
						))}
					</div>
				)
			},
		})
	},
}
