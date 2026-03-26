import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, type PropType } from 'vue'

import NeoNavigation from '@/components/03-organisms/Navigation/NeoNavigation.vue'
import NeoFooter from '@/components/03-organisms/Footer/NeoFooter.vue'
import NeoCard from '@/components/02-molecules/Card/NeoCard.vue'
import NeoAccordion from '@/components/02-molecules/Accordion/NeoAccordion.vue'
import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
import NeoLink from '@/components/01-atoms/Link/NeoLink.vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

interface LandingPageStoryArgs {
	color: SurfaceColor
}

const meta: Meta<LandingPageStoryArgs> = {
	title: 'Pages/Landing Page',
	tags: [],
	parameters: {
		layout: 'fullscreen',
		a11y: {
			config: {
				rules: [{ id: 'heading-order', enabled: false }],
			},
		},
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
					fontFamily: 'inherit',
					minBlockSize: '100vh',
					display: 'flex',
					flexDirection: 'column',
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

				<section
					style={{
						paddingBlock: '80px',
						paddingInline: '24px',
						textAlign: 'center',
						flex: '1',
					}}
				>
					<div style={{ maxInlineSize: '720px', margin: '0 auto' }}>
						<h1
							style={{
								fontSize: '2.5rem',
								fontWeight: '700',
								marginBlockEnd: '16px',
								lineHeight: '1.2',
							}}
						>
							A Vue 3 Component Library Built for Scale
						</h1>
						<p
							style={{
								fontSize: '1.125rem',
								color: props.dark ? 'var(--neo-color-grey400)' : 'var(--neo-color-grey600)',
								marginBlockEnd: '32px',
								lineHeight: '1.6',
							}}
						>
							NeoMateria provides accessible, theme-ready components following atomic design
							principles. Drop them into your Vue 3 project and ship faster.
						</p>
						<div
							style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}
						>
							<NeoButton text="Get Started" color={props.color} variant="primary" />
							<NeoButton text="View Components" color={props.color} variant="secondary" />
						</div>
					</div>
				</section>

				<section
					id="components"
					style={{
						paddingBlock: '64px',
						paddingInline: '24px',
						backgroundColor: props.dark ? 'var(--neo-color-grey800)' : 'var(--neo-color-grey50)',
					}}
				>
					<div style={{ maxInlineSize: '1100px', margin: '0 auto' }}>
						<h2
							style={{
								fontSize: '1.75rem',
								fontWeight: '700',
								textAlign: 'center',
								marginBlockEnd: '40px',
							}}
						>
							Why NeoMateria?
						</h2>
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
					<div style={{ maxInlineSize: '720px', margin: '0 auto' }}>
						<h2
							style={{
								fontSize: '1.75rem',
								fontWeight: '700',
								textAlign: 'center',
								marginBlockEnd: '40px',
							}}
						>
							Frequently Asked Questions
						</h2>
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
					copyrightText="© 2025 NeoMateria. Open source under the MIT license."
				/>
			</div>
		)
	},
})

const landingPageSourceCode = (color: string) =>
	`<script setup lang="ts">
import NeoNavigation from 'neo-materia/NeoNavigation'
import NeoFooter from 'neo-materia/NeoFooter'
import NeoCard from 'neo-materia/NeoCard'
import NeoAccordion from 'neo-materia/NeoAccordion'
import NeoButton from 'neo-materia/NeoButton'
import NeoLink from 'neo-materia/NeoLink'

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

const features = [
  {
    title: 'Atomic Design',
    description: 'Built on atomic design principles — atoms, molecules, and organisms compose naturally into any layout.',
    imageSrc: '...',
    imageAlt: 'Diagram showing atomic design layers',
    tags: [{ text: 'Design System' }],
  },
  /* ... */
]

const faqItems = [
  { title: 'How do I install NeoMateria?', content: 'Install via npm: npm install neo-materia...' },
  /* ... */
]

const footerSections = [
  {
    title: 'Components',
    links: [{ text: 'Atoms', href: '#atoms' }, /* ... */],
  },
  /* ... */
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

  <!-- Hero -->
  <section>
    <h1>A Vue 3 Component Library Built for Scale</h1>
    <p>NeoMateria provides accessible, theme-ready components following atomic design principles.</p>
    <NeoButton text="Get Started" color="${color}" variant="primary" />
    <NeoButton text="View Components" color="${color}" variant="secondary" />
  </section>

  <!-- Features -->
  <section>
    <h2>Why NeoMateria?</h2>
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

  <!-- FAQ -->
  <section>
    <h2>Frequently Asked Questions</h2>
    <NeoAccordion
      v-for="item in faqItems"
      :key="item.title"
      color="${color}"
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
    copyright-text="© 2025 NeoMateria. Open source under the MIT license."
  />
</template>`

const darkLandingPageSourceCode =
	`<script setup lang="ts">
import NeoNavigation from 'neo-materia/NeoNavigation'
import NeoFooter from 'neo-materia/NeoFooter'
import NeoCard from 'neo-materia/NeoCard'
import NeoAccordion from 'neo-materia/NeoAccordion'
import NeoButton from 'neo-materia/NeoButton'
import NeoLink from 'neo-materia/NeoLink'

const navLinks = [ /* same as light mode */ ]
const features = [ /* same as light mode */ ]
const faqItems = [ /* same as light mode */ ]
const footerSections = [ /* same as light mode */ ]
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

    <!-- Hero -->
    <section>
      <h1>A Vue 3 Component Library Built for Scale</h1>
      <p>NeoMateria provides accessible, theme-ready components following atomic design principles.</p>
      <NeoButton text="Get Started" color="blue" variant="primary" />
      <NeoButton text="View Components" color="blue" variant="secondary" />
    </section>

    <!-- Features -->
    <section>
      <h2>Why NeoMateria?</h2>
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

    <!-- FAQ -->
    <section>
      <h2>Frequently Asked Questions</h2>
      <NeoAccordion
        v-for="item in faqItems"
        :key="item.title"
        color="blue"
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
      copyright-text="© 2025 NeoMateria. Open source under the MIT license."
    />
  </div>
</template>`

export const Default: Story = {
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
