import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, h } from 'vue'
import { colors } from '@/assets/typescript/colors'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import { placeholder } from '../../../../../.storybook/utils/placeholder'
import { createAllColorsRender } from '../../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../../.storybook/utils/createA11yPlay'
import NeoHero from './NeoHero.vue'
import type { NeoHeroProps } from './NeoHeroTypes'
import { heroVariants, heroSizes } from './NeoHeroTypes'
import { headlineTags } from '@/components/01-atoms/Headline/NeoHeadlineTypes'
import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
import NeoLinkButton from '@/components/01-atoms/Button/NeoLinkButton/NeoLinkButton.vue'
import NeoImage from '@/components/01-atoms/Image/NeoImage.vue'

const surfaceColors = colors.filter((color): color is SurfaceColor => color !== 'white')

const meta = {
	title: 'Organisms/NeoHero',
	component: NeoHero,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
A page-level hero region with a headline, optional subtitle, actions, and media. Two variants: \`centered\` stacks content centered; \`split\` puts text on one side and media on the other.

This component wraps itself in a \`NeoSection\`. If you place it **inside another \`NeoSection\`**, it auto-detects the ancestor and skips its own wrapper — so you never get a doubled section. To force-skip the wrapper in any other container, set \`no-section\`.
				`,
			},
		},
	},
	argTypes: {
		title: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Main hero headline, rendered as the primary heading.',
		},
		subtitle: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Supporting copy shown beneath the title.',
		},
		variant: {
			control: 'select',
			options: heroVariants,
			description: '`centered` — stacked, text centered. `split` — text left, media right.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			options: heroSizes,
			description: 'Controls vertical padding.',
			table: { category: 'Appearance' },
		},
		headingTag: {
			control: 'select',
			options: headlineTags,
			description:
				'HTML element for the heading. Defaults to `h1` — change only for non-page-level heroes.',
			table: { category: 'Appearance' },
		},
		color: {
			control: 'select',
			options: surfaceColors,
			description: 'Accent color applied to the title.',
			table: { category: 'Appearance' },
		},
		actions: {
			control: false,
			description: 'CTA buttons or interactive elements rendered below the headline and body copy.',
			table: { category: 'Slots' },
		},
		media: {
			control: false,
			description: 'Media content (image, video) displayed beside the text in `split` variant.',
			table: { category: 'Slots' },
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
		title: 'Build beautiful interfaces',
		subtitle: 'A complete Vue 3 design system — accessible, themed, and ready for production.',
		variant: 'centered',
		size: 'md',
		color: 'blue',
	},
} satisfies Meta<typeof NeoHero>

export default meta
type Story = StoryObj<typeof meta>

export const Centered: Story = {
	tags: ['snapshot'],
	render: (args: NeoHeroProps) => {
		return defineComponent({
			name: 'CenteredRender',
			setup() {
				return () => (
					<NeoHero {...args}>
						{{
							actions: () => (
								<>
									<NeoButton text="Get started" color={args.color ?? 'blue'} variant="primary" />
									<NeoLinkButton
										href="#"
										text="View docs"
										color={args.color ?? 'blue'}
										variant="secondary"
									/>
								</>
							),
						}}
					</NeoHero>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHero
  title="Build beautiful interfaces"
  subtitle="A complete Vue 3 design system."
  color="blue"
>
  <template #actions>
    <NeoButton text="Get started" color="blue" variant="primary" />
    <NeoLinkButton href="#" text="View docs" color="blue" variant="secondary" />
  </template>
</NeoHero>`,
			},
		},
	},
}

export const Split: Story = {
	tags: ['snapshot'],
	args: { variant: 'split' },
	render: (args: NeoHeroProps) => {
		return defineComponent({
			name: 'SplitRender',
			setup() {
				return () => (
					<NeoHero {...args}>
						{{
							actions: () => (
								<>
									<NeoButton text="Get started" color={args.color ?? 'blue'} variant="primary" />
									<NeoLinkButton
										href="#"
										text="Learn more"
										color={args.color ?? 'blue'}
										variant="secondary"
									/>
								</>
							),
							media: () => (
								<NeoImage
									src={placeholder(560, 420)}
									alt="Hero image"
									object-fit="cover"
									style={{ borderRadius: '12px', blockSize: '100%', inlineSize: '100%' }}
								/>
							),
						}}
					</NeoHero>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHero title="Build beautiful interfaces" variant="split" color="blue">
  <template #actions>
    <NeoButton text="Get started" color="blue" variant="primary" />
  </template>
  <template #media>
    <img src="..." alt="Hero image" />
  </template>
</NeoHero>`,
			},
		},
	},
}

export const Small: Story = {
	tags: ['snapshot'],
	args: { size: 'sm', variant: 'centered' },
	render: (args: NeoHeroProps) => {
		return defineComponent({
			name: 'SmallRender',
			setup() {
				return () => <NeoHero {...args} />
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHero title="Page Banner" size="sm" variant="centered" color="blue" />`,
			},
		},
	},
}

export const OnDark: Story = {
	tags: ['snapshot'],
	globals: { backgrounds: '#000' },
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	args: { variant: 'centered', color: 'blue' },
	render: (args: NeoHeroProps) => {
		return defineComponent({
			name: 'OnDarkRender',
			setup() {
				return () => (
					<div class="u-onDark" style={{ background: '#111', color: 'var(--neo-color-grey100)' }}>
						<NeoHero {...args}>
							{{
								actions: () => (
									<>
										<NeoButton text="Get started" color={args.color ?? 'blue'} variant="primary" />
										<NeoLinkButton
											href="#"
											text="View docs"
											color={args.color ?? 'blue'}
											variant="secondary"
										/>
									</>
								),
							}}
						</NeoHero>
					</div>
				)
			},
		})
	},
}

export const RTL: Story = {
	tags: ['snapshot'],
	globals: {
		direction: 'rtl',
	},
	args: {
		title: 'ابنِ واجهات جميلة',
		subtitle: 'نظام تصميم Vue 3 متكامل — سهل الوصول، قابل للتخصيص، وجاهز للإنتاج.',
	},
}

export const AllColors: Story = {
	tags: ['snapshot'],
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: createAllColorsRender<typeof NeoHero>(NeoHero, [
		{
			name: 'Centered',
			variant: 'centered',
			renderComponent: (color, Component) =>
				h(Component, {
					color,
					variant: 'centered',
					title: `${color} — Build beautiful interfaces`,
					subtitle: 'A complete Vue 3 design system.',
					size: 'sm',
				}),
		},
	]),
}

export const AllColorsA11y: Story = {
	...AllColors,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}

export const FullWidth: Story = {
	tags: ['snapshot'],
	args: {
		section: {
			fullWidth: true,
		},
	},
}
