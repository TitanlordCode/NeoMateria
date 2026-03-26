import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'

import NeoCard from '@/components/02-molecules/Card/NeoCard.vue'
import type { NeoCardProps } from './NeoCardTypes'
import { cardSizes, cardVariants } from './NeoCardTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'
import { placeholder } from '../../../../.storybook/utils/placeholder'

const meta = {
	title: 'Molecules/NeoCard',
	component: NeoCard,
	tags: ['autodocs'],
	argTypes: {
		color: {
			description: 'Theme color applied to action buttons and link accents inside the card.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			options: cardSizes,
			description: 'Controls overall card padding and spacing.',
			table: { category: 'Appearance' },
		},
		variant: {
			control: 'select',
			options: cardVariants,
			description:
				'`default`: standard card layout. `compact`: reduced padding for dense lists. `featured`: larger image area for hero content.',
			table: { category: 'Appearance' },
		},
		rounded: {
			control: 'boolean',
			description: 'Applies rounded corners to the card.',
			table: { category: 'Appearance' },
		},
		imageSrc: { control: 'text', table: { category: 'Content' } },
		imageAlt: { control: 'text', table: { category: 'Content' } },
		imageObjectFit: {
			control: 'select',
			options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
			description:
				'CSS `object-fit` value for the card image. `cover` fills the image area by cropping; `contain` shows the full image with letterboxing.',
			table: { category: 'Appearance' },
		},
		title: { control: 'text', table: { category: 'Content' } },
		description: { control: 'text', table: { category: 'Content' } },
		tags: {
			control: 'object',
			description:
				'Array of tag objects `{ text, color? }` rendered as NeoBadge pills below the description.',
			table: { category: 'Content' },
		},
		actionText: {
			control: 'text',
			description: 'Primary call-to-action button. Only available when `href` is not set.',
			table: { category: 'Content' },
		},
		actionHref: {
			control: 'text',
			description: 'URL for the primary action button. Only available when `href` is not set.',
			table: { category: 'Content' },
		},
		secondaryActionText: {
			control: 'text',
			description: 'Secondary call-to-action. Only available when `href` is not set.',
			table: { category: 'Content' },
		},
		secondaryActionHref: {
			control: 'text',
			description: 'URL for the secondary action button. Only available when `href` is not set.',
			table: { category: 'Content' },
		},
		href: {
			control: 'text',
			description:
				'Makes the entire card a clickable link. When set, `actionText`/`actionHref`/`secondaryActionText`/`secondaryActionHref` are not available (discriminated union).',
			table: { category: 'Behavior' },
		},
		external: { control: 'boolean', table: { category: 'Behavior' } },
	},
	args: {
		title: 'Featured Content Title',
		description:
			'This is a versatile content card that can display games, products, articles, or any other type of content with an image, title, description, tags, and actions.',
		imageSrc: placeholder(400, 300),
		imageAlt: 'Content card image',
		color: 'blue',
		size: 'medium',
		variant: 'default',
		rounded: false,
		actionText: 'View More',
		secondaryActionText: 'Learn More',
		secondaryActionHref: '#',
		tags: [
			{ text: 'Featured', color: 'purple' },
			{ text: 'Popular', color: 'green' },
		],
		'onAction-click': fn(),
		'onSecondary-action-click': fn(),
	},
} satisfies Meta<typeof NeoCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		imageSrc: 'https://picsum.photos/seed/content1/400/300',
	},
}

export const Small: Story = {
	args: {
		size: 'small',
	},
}

export const Large: Story = {
	args: {
		size: 'large',
	},
}

export const Compact: Story = {
	args: {
		variant: 'compact',
	},
}

export const Featured: Story = {
	args: {
		variant: 'featured',
		title: 'Featured Content',
		description:
			'This is featured content with a larger image and more prominent styling, perfect for highlighting important items.',
	},
}

export const Rounded: Story = {
	args: {
		rounded: true,
	},
}

export const WithoutDescription: Story = {
	args: {
		description: undefined,
	},
}

export const WithoutTags: Story = {
	args: {
		tags: [],
	},
}

export const WithoutActions: Story = {
	args: {
		actionText: undefined,
		secondaryActionText: undefined,
	},
}

export const Minimal: Story = {
	args: {
		description: undefined,
		tags: [],
		actionText: undefined,
		secondaryActionText: undefined,
	},
}

export const Clickable: Story = {
	args: {
		href: '/products/featured-item',
		actionText: undefined,
		secondaryActionText: undefined,
	},
}

export const ClickableExternal: Story = {
	args: {
		href: 'https://example.com',
		external: true,
		actionText: undefined,
		secondaryActionText: undefined,
	},
}

export const ClickableGrid: Story = {
	parameters: {
		docs: {
			source: {
				code: `<!-- Provide href instead of action props to make the entire card clickable -->
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
  <NeoCard
    title="Product One"
    color="blue"
    image-src="/images/product-1.jpg"
    image-alt="Product One"
    href="/products/1"
    :tags="[{ text: 'New', color: 'green' }]"
  />
  <NeoCard
    title="Product Two"
    color="blue"
    image-src="/images/product-2.jpg"
    image-alt="Product Two"
    href="/products/2"
    :tags="[{ text: 'Sale', color: 'red' }]"
  />
</div>`,
			},
		},
	},
	render: (args: NeoCardProps) => {
		return defineComponent({
			name: 'ClickableGridRender',
			setup() {
				const clickableBase = {
					...args,
					actionText: undefined,
					actionHref: undefined,
					secondaryActionText: undefined,
					secondaryActionHref: undefined,
				}
				const items = [
					{
						...clickableBase,
						title: 'Product One',
						imageSrc: placeholder(400, 300),
						href: '/products/1',
						tags: [{ text: 'New', color: 'green' as const }],
					},
					{
						...clickableBase,
						title: 'Product Two',
						imageSrc: placeholder(400, 300),
						href: '/products/2',
						tags: [{ text: 'Sale', color: 'red' as const }],
					},
					{
						...clickableBase,
						title: 'Product Three',
						imageSrc: placeholder(400, 300),
						href: '/products/3',
						tags: [{ text: 'Popular', color: 'purple' as const }],
					},
				]
				return () => (
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
							gap: '24px',
							padding: '24px',
						}}
					>
						{items.map((item, index) => (
							<NeoCard
								key={index}
								{...item}
								description={undefined}
								actionText={undefined}
								secondaryActionText={undefined}
							/>
						))}
					</div>
				)
			},
		})
	},
}

export const GridLayout: Story = {
	parameters: {
		docs: {
			source: {
				code: `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
  <NeoCard
    title="Mountain Adventure"
    color="blue"
    image-src="/images/mountain.jpg"
    image-alt="Mountain Adventure"
    description="Explore scenic mountain trails."
    action-text="View More"
    :tags="[{ text: 'Travel', color: 'blue' }, { text: 'Nature', color: 'green' }]"
    @action-click="handleAction"
  />
  <!-- repeat for more cards -->
</div>`,
			},
		},
	},
	render: (args: NeoCardProps) => {
		return defineComponent({
			name: 'GridLayoutRender',
			setup() {
				const items = [
					{
						...args,
						title: 'Mountain Adventure',
						imageSrc: placeholder(400, 300),
						tags: [
							{ text: 'Travel', color: 'blue' as const },
							{ text: 'Nature', color: 'green' as const },
						],
					},
					{
						...args,
						title: 'Creative Workshop',
						imageSrc: placeholder(400, 300),
						tags: [
							{ text: 'Design', color: 'purple' as const },
							{ text: 'Art', color: 'pink' as const },
						],
					},
					{
						...args,
						title: 'Tech Innovation',
						imageSrc: placeholder(400, 300),
						tags: [
							{ text: 'Technology', color: 'cyan' as const },
							{ text: 'Innovation', color: 'indigo' as const },
						],
					},
					{
						...args,
						title: 'Wellness Guide',
						imageSrc: placeholder(400, 300),
						tags: [
							{ text: 'Health', color: 'green' as const },
							{ text: 'Lifestyle', color: 'lime' as const },
						],
					},
				]
				return () => (
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
							gap: '24px',
							padding: '24px',
						}}
					>
						{items.map((item, index) => (
							<NeoCard key={index} {...item} />
						))}
					</div>
				)
			},
		})
	},
}

export const Interaction: Story = {
	...Default,
	tags: ['!dev'],
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Check action button click', async () => {
			const actionButton = canvas.getByText('View More')
			await userEvent.click(actionButton)
		})

		await waitFor(() => expect(args['onAction-click']).toHaveBeenCalled())
	},
}

export const OnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
}

export const AllColors: Story = {
	render: createSimpleColorShowcase(NeoCard, ['default', 'compact', 'featured'], {
		defaultProps: { imageSrc: placeholder(400, 300) },
	}),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	render: createSimpleColorShowcase(NeoCard, ['default', 'compact', 'featured'], {
		dark: true,
		defaultProps: { imageSrc: placeholder(400, 300) },
	}),
}
