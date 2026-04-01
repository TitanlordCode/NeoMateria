import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, h } from 'vue'
import { colors } from '@/assets/typescript/colors'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import { placeholder } from '../../../../../.storybook/utils/placeholder'
import { createAllColorsRender } from '../../../../../.storybook/utils/colorShowcase'
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
	argTypes: {
		title: { control: 'text', table: { category: 'Content' } },
		subtitle: { control: 'text', table: { category: 'Content' } },
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
	globals: { backgrounds: '#000' },
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

export const AllColors: Story = {
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
