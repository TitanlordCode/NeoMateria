import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, type PropType } from 'vue'

import NeoNavigation from '@/components/03-organisms/Navigation/NeoNavigation.vue'
import NeoFooter from '@/components/03-organisms/Footer/NeoFooter.vue'
import NeoCard from '@/components/02-molecules/Card/NeoCard.vue'
import NeoAccordion from '@/components/02-molecules/Accordion/NeoAccordion.vue'
import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
import NeoLinkButton from '@/components/01-atoms/Button/NeoLinkButton/NeoLinkButton.vue'
import NeoLink from '@/components/01-atoms/Link/NeoLink.vue'
import NeoHero from '@/components/03-organisms/Hero/NeoHero/NeoHero.vue'
import NeoHeadingGroup from '@/components/02-molecules/HeadingGroup/NeoHeadingGroup/NeoHeadingGroup.vue'
import NeoStat from '@/components/02-molecules/Stat/NeoStat/NeoStat.vue'
import NeoCallout from '@/components/02-molecules/Callout/NeoCallout/NeoCallout.vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

interface LandingPageStoryArgs {
	color: SurfaceColor
}

const meta: Meta<LandingPageStoryArgs> = {
	title: 'Pages/Landing Page',
	tags: [],
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta

type Story = StoryObj<typeof meta>

const navLinks = [
	{ text: 'Components', href: '#components', active: true },
	{
		text: 'Docs',
		children: [
			{ text: 'Getting Started', href: '#getting-started' },
			{ text: 'Theming', href: '#theming' },
			{ text: 'Accessibility', href: '#a11y' },
		],
	},
	{ text: 'GitHub', href: 'https://github.com/titanlordcode/NeoMateria', external: true },
]

const footerSections = [
	{
		title: 'Components',
		links: [
			{ text: 'Atoms', href: '#atoms' },
			{ text: 'Molecules', href: '#molecules' },
			{ text: 'Organisms', href: '#organisms' },
		],
	},
	{
		title: 'Resources',
		links: [
			{ text: 'Getting Started', href: '#getting-started' },
			{ text: 'Storybook', href: '#storybook' },
			{ text: 'Changelog', href: '#changelog' },
		],
	},
	{
		title: 'Community',
		links: [
			{ text: 'GitHub', href: 'https://github.com/titanlordcode/NeoMateria', external: true },
			{ text: 'npm', href: 'https://npmjs.com/package/neo-materia', external: true },
		],
	},
]

const features = [
	{
		title: 'Atomic Design',
		description:
			'Built on atomic design principles — atoms, molecules, and organisms compose naturally into any layout.',
		imageSrc: 'https://placehold.co/600x340/e8f4fd/1a73e8?text=Atomic+Design',
		imageAlt: 'Diagram showing atomic design layers',
		tags: [{ text: 'Design System' }],
	},
	{
		title: 'Theme-Ready',
		description:
			'Every component adapts to your brand color. Light and dark mode support is built in with CSS custom properties.',
		imageSrc: 'https://placehold.co/600x340/fdf3e8/e87c1a?text=Theming',
		imageAlt: 'Color palette showing theme customization',
		tags: [{ text: 'CSS Variables' }],
	},
	{
		title: 'Accessible by Default',
		description:
			'ARIA attributes, keyboard navigation, and focus management are included out of the box in every component.',
		imageSrc: 'https://placehold.co/600x340/edf8f0/1a8a3c?text=Accessibility',
		imageAlt: 'Accessibility icon with keyboard',
		tags: [{ text: 'WCAG 2.1' }],
	},
]

const faqItems = [
	{
		title: 'How do I install NeoMateria?',
		content:
			'Install via npm: npm install neo-materia. Then import the CSS and register the components globally or locally in your Vue 3 project.',
	},
	{
		title: 'Does it support dark mode?',
		content:
			'Yes. All components include dark mode styles via CSS custom properties. Wrap your app in a dark-mode context and the components adapt automatically.',
	},
	{
		title: 'Can I use only specific components?',
		content:
			'Absolutely. NeoMateria is fully tree-shakeable. Import only the components you need and your bundle will only include those.',
	},
	{
		title: 'Is it TypeScript-friendly?',
		content:
			'Yes. Every component ships with TypeScript types for props, emits, and slots. Use them directly with vue-tsc for full type safety.',
	},
]

const LandingPageComponent = defineComponent({
	name: 'LandingPageRender',
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
					...(props.dark ? { color: 'var(--neo-color-grey100)', background: '#111' } : {}),
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
					title="A Vue 3 Component Library Built for Scale"
					subtitle="NeoMateria provides accessible, theme-ready components following atomic design principles. Drop them into your Vue 3 project and ship faster."
					color={props.color}
					variant="centered"
					size="lg"
				>
					{{
						actions: () => (
							<>
								<NeoButton text="Get Started" color={props.color} variant="primary" />
								<NeoLinkButton
									href="#components"
									text="View Components"
									color={props.color}
									variant="secondary"
								/>
							</>
						),
					}}
				</NeoHero>

				<section
					id="components"
					style={{
						paddingBlock: '64px',
						paddingInline: '24px',
						backgroundColor: props.dark ? 'var(--neo-color-grey800)' : 'var(--neo-color-grey50)',
					}}
				>
					<div style={{ maxInlineSize: '1100px', margin: '0 auto' }}>
						<NeoHeadingGroup
							title="Why NeoMateria?"
							subtitle="Everything you need to build a consistent, accessible, and themeable Vue 3 application."
							variant="secondary"
							align="center"
							color={props.color}
							style={{ marginBlockEnd: '40px' }}
						/>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
								gap: '24px',
							}}
						>
							{features.map((feature) => (
								<NeoCard
									key={feature.title}
									color={props.color}
									title={feature.title}
									description={feature.description}
									imageSrc={feature.imageSrc}
									imageAlt={feature.imageAlt}
									tags={feature.tags}
								/>
							))}
						</div>
					</div>
				</section>

				<section style={{ paddingBlock: '64px', paddingInline: '24px' }}>
					<div
						style={{
							maxInlineSize: '800px',
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
					style={{
						paddingBlock: '64px',
						paddingInline: '24px',
						backgroundColor: props.dark ? 'var(--neo-color-grey800)' : 'var(--neo-color-grey50)',
					}}
				>
					<div style={{ maxInlineSize: '720px', margin: '0 auto' }}>
						<NeoCallout color={props.color} variant="filled" style={{ marginBlockEnd: '32px' }}>
							NeoMateria is free to use in your projects. Contributions are welcome!
						</NeoCallout>
						<NeoHeadingGroup
							title="Frequently Asked Questions"
							variant="secondary"
							align="center"
							color={props.color}
							style={{ marginBlockEnd: '40px' }}
						/>
						<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
							{faqItems.map((item) => (
								<NeoAccordion key={item.title} title={item.title} variant="bordered">
									<p style={{ margin: '0' }}>{item.content}</p>
								</NeoAccordion>
							))}
						</div>
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

const landingNavLinksCode = `const navLinks = [
  { text: 'Components', href: '#components', active: true },
  {
    text: 'Docs',
    children: [
      { text: 'Getting Started', href: '#getting-started' },
      { text: 'Theming', href: '#theming' },
      { text: 'Accessibility', href: '#a11y' },
    ],
  },
  { text: 'GitHub', href: 'https://github.com/titanlordcode/NeoMateria', external: true },
]`

const landingFeaturesCode = `const features = [
  {
    title: 'Atomic Design',
    description: 'Built on atomic design principles — atoms, molecules, and organisms compose naturally into any layout.',
    imageSrc: 'https://placehold.co/600x340',
    imageAlt: 'Diagram showing atomic design layers',
    tags: [{ text: 'Design System' }],
  },
  {
    title: 'Theme-Ready',
    description: 'Every component adapts to your brand color. Light and dark mode support is built in with CSS custom properties.',
    imageSrc: 'https://placehold.co/600x340',
    imageAlt: 'Color palette showing theme customization',
    tags: [{ text: 'CSS Variables' }],
  },
  {
    title: 'Accessible by Default',
    description: 'ARIA attributes, keyboard navigation, and focus management are included out of the box in every component.',
    imageSrc: 'https://placehold.co/600x340',
    imageAlt: 'Accessibility icon with keyboard',
    tags: [{ text: 'WCAG 2.1' }],
  },
]`

const landingFaqItemsCode = `const faqItems = [
  {
    title: 'How do I install NeoMateria?',
    content: 'Install via npm: npm install neo-materia. Then import the CSS and register the components globally or locally in your Vue 3 project.',
  },
  {
    title: 'Does it support dark mode?',
    content: 'Yes. All components include dark mode styles via CSS custom properties. Wrap your app in a dark-mode context and the components adapt automatically.',
  },
  {
    title: 'Can I use only specific components?',
    content: 'Absolutely. NeoMateria is fully tree-shakeable. Import only the components you need and your bundle will only include those.',
  },
  {
    title: 'Is it TypeScript-friendly?',
    content: 'Yes. Every component ships with TypeScript types for props, emits, and slots. Use them directly with vue-tsc for full type safety.',
  },
]`

const landingFooterSectionsCode = `const footerSections = [
  {
    title: 'Components',
    links: [
      { text: 'Atoms', href: '#atoms' },
      { text: 'Molecules', href: '#molecules' },
      { text: 'Organisms', href: '#organisms' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { text: 'Getting Started', href: '#getting-started' },
      { text: 'Storybook', href: '#storybook' },
      { text: 'Changelog', href: '#changelog' },
    ],
  },
  {
    title: 'Community',
    links: [
      { text: 'GitHub', href: 'https://github.com/titanlordcode/NeoMateria', external: true },
      { text: 'npm', href: 'https://npmjs.com/package/neo-materia', external: true },
    ],
  },
]`

const landingPageSourceCode = (color: string) =>
	`<script setup lang="ts">
import NeoNavigation from 'neo-materia/NeoNavigation'
import NeoFooter from 'neo-materia/NeoFooter'
import NeoCard from 'neo-materia/NeoCard'
import NeoAccordion from 'neo-materia/NeoAccordion'
import NeoButton from 'neo-materia/NeoButton'
import NeoLinkButton from 'neo-materia/NeoLinkButton'
import NeoLink from 'neo-materia/NeoLink'
import NeoHero from 'neo-materia/NeoHero'
import NeoHeadingGroup from 'neo-materia/NeoHeadingGroup'
import NeoStat from 'neo-materia/NeoStat'
import NeoCallout from 'neo-materia/NeoCallout'

${landingNavLinksCode}

${landingFeaturesCode}

${landingFaqItemsCode}

${landingFooterSectionsCode}
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
    title="A Vue 3 Component Library Built for Scale"
    subtitle="NeoMateria provides accessible, theme-ready components following atomic design principles."
    color="${color}"
    variant="centered"
    size="lg"
  >
    <template #actions>
      <NeoButton text="Get Started" color="${color}" variant="primary" />
      <NeoLinkButton href="#components" text="View Components" color="${color}" variant="secondary" />
    </template>
  </NeoHero>

  <!-- Features -->
  <section id="components">
    <NeoHeadingGroup
      title="Why NeoMateria?"
      subtitle="Everything you need to build a consistent, accessible, and themeable Vue 3 application."
      variant="secondary"
      align="center"
      color="${color}"
    />
    <NeoCard
      v-for="feature in features"
      :key="feature.title"
      color="${color}"
      :title="feature.title"
      :description="feature.description"
      :image-src="feature.imageSrc"
      :image-alt="feature.imageAlt"
      :tags="feature.tags"
    />
  </section>

  <!-- Stats -->
  <section>
    <NeoStat value="40+" label="Components" color="${color}" size="lg" />
    <NeoStat value="100%" label="TypeScript" color="${color}" size="lg" />
    <NeoStat value="WCAG 2.1" label="Accessible" color="${color}" size="lg" />
    <NeoStat value="0" label="Dependencies" color="${color}" size="lg" />
  </section>

  <!-- FAQ -->
  <section>
    <NeoCallout color="${color}" variant="filled">
      NeoMateria is free to use in your projects. Contributions are welcome!
    </NeoCallout>
    <NeoHeadingGroup
      title="Frequently Asked Questions"
      variant="secondary"
      align="center"
      color="${color}"
    />
    <NeoAccordion
      v-for="item in faqItems"
      :key="item.title"
      :title="item.title"
      variant="bordered"
    >
      <p>{{ item.content }}</p>
    </NeoAccordion>
  </section>

  <NeoFooter
    color="${color}"
    layout="multi-column"
    :sections="footerSections"
    copyright-text="© 2025 NeoMateria by TitanlordCode. All rights reserved."
  />
</template>`

const darkLandingPageSourceCode =
	`<script setup lang="ts">
import NeoNavigation from 'neo-materia/NeoNavigation'
import NeoFooter from 'neo-materia/NeoFooter'
import NeoCard from 'neo-materia/NeoCard'
import NeoAccordion from 'neo-materia/NeoAccordion'
import NeoButton from 'neo-materia/NeoButton'
import NeoLinkButton from 'neo-materia/NeoLinkButton'
import NeoLink from 'neo-materia/NeoLink'
import NeoHero from 'neo-materia/NeoHero'
import NeoHeadingGroup from 'neo-materia/NeoHeadingGroup'
import NeoStat from 'neo-materia/NeoStat'
import NeoCallout from 'neo-materia/NeoCallout'

${landingNavLinksCode}

${landingFeaturesCode}

${landingFaqItemsCode}

${landingFooterSectionsCode}
<` +
	`/script>

<template>
  <!-- Add u-onDark class to the root to activate dark mode styles -->
  <div class="u-onDark" style="min-height: 100vh; background: #111; color: var(--neo-color-grey100);">
    <NeoNavigation color="blue" :links="navLinks">
      <template #logo>
        <NeoLink href="#" color="blue" size="medium" variant="default">
          <strong>NeoMateria</strong>
        </NeoLink>
      </template>
      <template #actions>
        <NeoButton text="Get Started" color="blue" variant="primary" size="small" />
      </template>
    </NeoNavigation>

    <NeoHero
      title="A Vue 3 Component Library Built for Scale"
      subtitle="NeoMateria provides accessible, theme-ready components following atomic design principles."
      color="blue"
      variant="centered"
      size="lg"
    >
      <template #actions>
        <NeoButton text="Get Started" color="blue" variant="primary" />
        <NeoLinkButton href="#components" text="View Components" color="blue" variant="secondary" />
      </template>
    </NeoHero>

    <!-- Features -->
    <section id="components">
      <NeoHeadingGroup
        title="Why NeoMateria?"
        subtitle="Everything you need to build a consistent, accessible, and themeable Vue 3 application."
        variant="secondary"
        align="center"
        color="blue"
      />
      <NeoCard
        v-for="feature in features"
        :key="feature.title"
        color="blue"
        :title="feature.title"
        :description="feature.description"
        :image-src="feature.imageSrc"
        :image-alt="feature.imageAlt"
        :tags="feature.tags"
      />
    </section>

    <!-- Stats -->
    <section>
      <NeoStat value="40+" label="Components" color="blue" size="lg" />
      <NeoStat value="100%" label="TypeScript" color="blue" size="lg" />
      <NeoStat value="WCAG 2.1" label="Accessible" color="blue" size="lg" />
      <NeoStat value="0" label="Dependencies" color="blue" size="lg" />
    </section>

    <!-- FAQ -->
    <section>
      <NeoCallout color="blue" variant="filled">
        NeoMateria is free to use in your projects. Contributions are welcome!
      </NeoCallout>
      <NeoHeadingGroup
        title="Frequently Asked Questions"
        variant="secondary"
        align="center"
        color="blue"
      />
      <NeoAccordion
        v-for="item in faqItems"
        :key="item.title"
        :title="item.title"
        variant="bordered"
      >
        <p>{{ item.content }}</p>
      </NeoAccordion>
    </section>

    <NeoFooter
      color="blue"
      layout="multi-column"
      :sections="footerSections"
      copyright-text="© 2025 NeoMateria by TitanlordCode. All rights reserved."
    />
  </div>
</template>`

export const Default: Story = {
	tags: ['no-test'],
	args: {
		color: 'blue',
	},
	parameters: {
		docs: {
			source: { code: landingPageSourceCode('blue') },
		},
	},
	render: (args) =>
		defineComponent({
			name: 'DefaultStoryRender',
			setup() {
				return () => <LandingPageComponent color={args.color} />
			},
		}),
}

export const Green: Story = {
	tags: ['no-test'],
	args: {
		color: 'green',
	},
	parameters: {
		docs: {
			source: { code: landingPageSourceCode('green') },
		},
	},
	render: (args) =>
		defineComponent({
			name: 'GreenStoryRender',
			setup() {
				return () => <LandingPageComponent color={args.color} />
			},
		}),
}

export const Purple: Story = {
	tags: ['no-test'],
	args: {
		color: 'purple',
	},
	parameters: {
		docs: {
			source: { code: landingPageSourceCode('purple') },
		},
	},
	render: (args) =>
		defineComponent({
			name: 'PurpleStoryRender',
			setup() {
				return () => <LandingPageComponent color={args.color} />
			},
		}),
}

export const DarkMode: Story = {
	tags: ['no-test'],
	args: {
		color: 'blue',
	},
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		docs: {
			source: { code: darkLandingPageSourceCode },
		},
	},
	render: (args) =>
		defineComponent({
			name: 'DarkModeStoryRender',
			setup() {
				return () => <LandingPageComponent color={args.color} dark={true} />
			},
		}),
}
