import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, type PropType } from 'vue'
import { placeholder } from '../../../.storybook/utils/placeholder'

import NeoNavigation from '@/components/03-organisms/Navigation/NeoNavigation.vue'
import NeoFooter from '@/components/03-organisms/Footer/NeoFooter.vue'
import NeoFeatureLine from '@/components/03-organisms/FeatureLine/NeoFeatureLine/NeoFeatureLine.vue'
import NeoHero from '@/components/03-organisms/Hero/NeoHero/NeoHero.vue'
import NeoHeadingGroup from '@/components/02-molecules/HeadingGroup/NeoHeadingGroup/NeoHeadingGroup.vue'
import NeoStat from '@/components/02-molecules/Stat/NeoStat/NeoStat.vue'
import NeoCallout from '@/components/02-molecules/Callout/NeoCallout/NeoCallout.vue'
import NeoTextBlock from '@/components/02-molecules/TextBlock/NeoTextBlock/NeoTextBlock.vue'
import NeoLink from '@/components/01-atoms/Link/NeoLink.vue'
import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
import NeoLinkButton from '@/components/01-atoms/Button/NeoLinkButton/NeoLinkButton.vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

interface FeaturePageStoryArgs {
	color: SurfaceColor
}

const meta: Meta<FeaturePageStoryArgs> = {
	title: 'Pages/Feature Page',
	tags: [],
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof meta>

const navLinks = [
	{ text: 'Features', href: '#features', active: true },
	{ text: 'Pricing', href: '#pricing' },
	{
		text: 'Resources',
		children: [
			{ text: 'Documentation', href: '#docs' },
			{ text: 'Changelog', href: '#changelog' },
			{ text: 'Blog', href: '#blog' },
		],
	},
	{ text: 'GitHub', href: 'https://github.com/titanlordcode/NeoMateria', external: true },
]

const footerSections = [
	{
		title: 'Product',
		links: [
			{ text: 'Features', href: '#features' },
			{ text: 'Pricing', href: '#pricing' },
			{ text: 'Changelog', href: '#changelog' },
		],
	},
	{
		title: 'Developers',
		links: [
			{ text: 'Documentation', href: '#docs' },
			{ text: 'GitHub', href: 'https://github.com/titanlordcode/NeoMateria', external: true },
			{ text: 'npm', href: 'https://npmjs.com/package/neo-materia', external: true },
		],
	},
	{
		title: 'Company',
		links: [
			{ text: 'About', href: '#about' },
			{ text: 'Blog', href: '#blog' },
			{ text: 'Contact', href: '#contact' },
		],
	},
]

const FeaturePageComponent = defineComponent({
	name: 'FeaturePageRender',
	props: {
		color: { type: String as PropType<SurfaceColor>, required: true },
		dark: { type: Boolean, default: false },
	},
	setup(props) {
		return () => (
			<div
				class={props.dark ? 'u-onDark' : undefined}
				style={{
					display: 'flex',
					flexDirection: 'column',
					fontFamily: 'inherit',
					minBlockSize: '100vh',
					...(props.dark ? { background: '#111', color: 'var(--neo-color-grey100)' } : {}),
				}}
			>
				<NeoNavigation
					color={props.color}
					ariaLabel="Main navigation"
					menuLabel="Menu"
					closeLabel="Close"
					links={navLinks}
				>
					{{
						logo: () => (
							<NeoLink href="#" color={props.color} size="medium" variant="default">
								<strong>NeoMateria</strong>
							</NeoLink>
						),
						actions: () => (
							<NeoButton text="Get Started" color={props.color} variant="primary" size="small" />
						),
					}}
				</NeoNavigation>

				<NeoHero
					title="Build Interfaces That Scale"
					subtitle="NeoMateria gives teams a shared design language — accessible, themeable, and ready for production."
					color={props.color}
					variant="centered"
					size="lg"
				>
					{{
						actions: () => (
							<>
								<NeoButton text="Get Started Free" color={props.color} variant="primary" />
								<NeoLinkButton
									href="#features"
									text="Explore Features"
									color={props.color}
									variant="secondary"
								/>
							</>
						),
					}}
				</NeoHero>

				<section style={{ paddingBlock: '64px', paddingInline: '24px' }}>
					<div
						style={{
							maxInlineSize: '900px',
							margin: '0 auto',
							display: 'flex',
							gap: '32px',
							justifyContent: 'center',
							flexWrap: 'wrap',
						}}
					>
						<NeoStat value="40+" label="Components" color={props.color} size="lg" />
						<NeoStat value="100%" label="TypeScript" color={props.color} size="lg" />
						<NeoStat value="WCAG 2.1" label="Accessible" color={props.color} size="lg" />
						<NeoStat value="0" label="Dependencies" color={props.color} size="lg" />
					</div>
				</section>

				<section
					id="features"
					style={{
						paddingBlock: '80px',
						paddingInline: '24px',
						backgroundColor: props.dark ? 'var(--neo-color-grey800)' : 'var(--neo-color-grey50)',
					}}
				>
					<div style={{ maxInlineSize: '1100px', margin: '0 auto' }}>
						<NeoHeadingGroup
							title="Everything your team needs"
							subtitle="From a single button to full page layouts — compose with confidence."
							variant="secondary"
							align="center"
							color={props.color}
							style={{ marginBlockEnd: '64px' }}
						/>
						<div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
							<NeoFeatureLine
								imageSrc={placeholder(800, 600)}
								imageAlt="Accessible component illustration"
								title="Accessible by Default"
								subtitle="WCAG 2.1 AA compliance"
								body="Every component ships with ARIA attributes, keyboard navigation, and focus management — built in, not bolted on. Tested with automated tooling and real screen readers."
								color={props.color}
								ctaText="View accessibility docs"
								ctaHref="#docs"
							/>
							<NeoFeatureLine
								imageSrc={placeholder(800, 600)}
								imageAlt="Theme customization illustration"
								title="One Prop. Every Color."
								subtitle="Design token architecture"
								body="Pass a single color prop and watch it cascade through the entire component tree via CSS custom properties. Light and dark mode support comes for free."
								color={props.color}
								reverse
								ctaText="Explore theming"
								ctaHref="#docs"
							/>
						</div>
					</div>
				</section>

				<section style={{ paddingBlock: '64px', paddingInline: '24px' }}>
					<div style={{ maxInlineSize: '800px', margin: '0 auto' }}>
						<NeoCallout color={props.color} variant="filled" style={{ marginBlockEnd: '48px' }}>
							NeoMateria is free to use in personal and commercial projects.
						</NeoCallout>
						<NeoTextBlock
							heading="Ready to get started?"
							headingVariant="secondary"
							body="Install NeoMateria in seconds and start composing your first page. Full TypeScript types, Storybook stories, and documentation included."
							ctaText="Read the docs"
							ctaHref="#docs"
							color={props.color}
							align="center"
						/>
					</div>
				</section>

				<NeoFooter
					color={props.color}
					layout="multi-column"
					sections={footerSections}
					copyrightText="© 2025 NeoMateria by TitanlordCode. All rights reserved."
				/>
			</div>
		)
	},
})

const featurePageSourceCode = (color: string) =>
	`<script setup lang="ts">
import NeoNavigation from 'neo-materia/NeoNavigation'
import NeoFooter from 'neo-materia/NeoFooter'
import NeoFeatureLine from 'neo-materia/NeoFeatureLine'
import NeoHero from 'neo-materia/NeoHero'
import NeoHeadingGroup from 'neo-materia/NeoHeadingGroup'
import NeoStat from 'neo-materia/NeoStat'
import NeoCallout from 'neo-materia/NeoCallout'
import NeoTextBlock from 'neo-materia/NeoTextBlock'
import NeoLink from 'neo-materia/NeoLink'
import NeoButton from 'neo-materia/NeoButton'
import NeoLinkButton from 'neo-materia/NeoLinkButton'

const navLinks = [
  { text: 'Features', href: '#features', active: true },
  { text: 'Pricing', href: '#pricing' },
  { text: 'GitHub', href: 'https://github.com/titanlordcode/NeoMateria', external: true },
]

const footerSections = [
  {
    title: 'Product',
    links: [
      { text: 'Features', href: '#features' },
      { text: 'Pricing', href: '#pricing' },
      { text: 'Changelog', href: '#changelog' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { text: 'Documentation', href: '#docs' },
      { text: 'GitHub', href: 'https://github.com/titanlordcode/NeoMateria', external: true },
      { text: 'npm', href: 'https://npmjs.com/package/neo-materia', external: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About', href: '#about' },
      { text: 'Blog', href: '#blog' },
      { text: 'Contact', href: '#contact' },
    ],
  },
]
<` +
	`/script>

<template>
  <NeoNavigation color="${color}" :links="navLinks">
    <template #logo>
      <NeoLink href="#" color="${color}" size="medium" variant="default">
        <strong>NeoMateria</strong>
      </NeoLink>
    </template>
    <template #actions>
      <NeoButton text="Get Started" color="${color}" variant="primary" size="small" />
    </template>
  </NeoNavigation>

  <NeoHero
    title="Build Interfaces That Scale"
    subtitle="NeoMateria gives teams a shared design language — accessible, themeable, and ready for production."
    color="${color}"
    variant="centered"
    size="lg"
  >
    <template #actions>
      <NeoButton text="Get Started Free" color="${color}" variant="primary" />
      <NeoLinkButton href="#features" text="Explore Features" color="${color}" variant="secondary" />
    </template>
  </NeoHero>

  <!-- Stats -->
  <section>
    <NeoStat value="40+" label="Components" color="${color}" size="lg" />
    <NeoStat value="100%" label="TypeScript" color="${color}" size="lg" />
    <NeoStat value="WCAG 2.1" label="Accessible" color="${color}" size="lg" />
    <NeoStat value="0" label="Dependencies" color="${color}" size="lg" />
  </section>

  <!-- Features -->
  <section id="features">
    <NeoHeadingGroup
      title="Everything your team needs"
      subtitle="From a single button to full page layouts — compose with confidence."
      variant="secondary"
      align="center"
      color="${color}"
    />
    <NeoFeatureLine
      image-src="..."
      image-alt="Accessible component illustration"
      title="Accessible by Default"
      subtitle="WCAG 2.1 AA compliance"
      body="Every component ships with ARIA attributes, keyboard navigation, and focus management."
      color="${color}"
      cta-text="View accessibility docs"
      cta-href="#docs"
    />
    <NeoFeatureLine
      image-src="..."
      image-alt="Theme customization illustration"
      title="One Prop. Every Color."
      subtitle="Design token architecture"
      body="Pass a single color prop and watch it cascade through the entire component tree via CSS custom properties."
      color="${color}"
      reverse
      cta-text="Explore theming"
      cta-href="#docs"
    />
  </section>

  <!-- CTA -->
  <section>
    <NeoCallout color="${color}" variant="filled">
      NeoMateria is open source under the MIT license. Free to use in personal and commercial projects.
    </NeoCallout>
    <NeoTextBlock
      heading="Ready to get started?"
      heading-variant="secondary"
      body="Install NeoMateria in seconds and start composing your first page."
      cta-text="Read the docs"
      cta-href="#docs"
      color="${color}"
      align="center"
    />
  </section>

  <NeoFooter
    color="${color}"
    layout="multi-column"
    :sections="footerSections"
    copyright-text="© 2025 NeoMateria by TitanlordCode. All rights reserved."
  />
</template>`

export const Default: Story = {
	tags: ['no-test'],
	args: { color: 'blue' },
	parameters: {
		docs: {
			source: { code: featurePageSourceCode('blue') },
		},
	},
	render: (args) =>
		defineComponent({
			name: 'DefaultStoryRender',
			setup() {
				return () => <FeaturePageComponent color={args.color} />
			},
		}),
}

export const Green: Story = {
	tags: ['no-test'],
	args: { color: 'green' },
	parameters: {
		docs: {
			source: { code: featurePageSourceCode('green') },
		},
	},
	render: (args) =>
		defineComponent({
			name: 'GreenStoryRender',
			setup() {
				return () => <FeaturePageComponent color={args.color} />
			},
		}),
}

export const Purple: Story = {
	tags: ['no-test'],
	args: { color: 'purple' },
	parameters: {
		docs: {
			source: { code: featurePageSourceCode('purple') },
		},
	},
	render: (args) =>
		defineComponent({
			name: 'PurpleStoryRender',
			setup() {
				return () => <FeaturePageComponent color={args.color} />
			},
		}),
}

export const DarkMode: Story = {
	tags: ['no-test'],
	args: { color: 'blue' },
	globals: { backgrounds: '#000' },
	parameters: {
		docs: {
			source: { code: featurePageSourceCode('blue') },
		},
	},
	render: (args) =>
		defineComponent({
			name: 'DarkModeStoryRender',
			setup() {
				return () => <FeaturePageComponent color={args.color} dark={true} />
			},
		}),
}
