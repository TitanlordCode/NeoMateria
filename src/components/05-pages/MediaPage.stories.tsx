import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, type PropType } from 'vue'
import { placeholder } from '../../../.storybook/utils/placeholder'

import NeoNavigation from '@/components/03-organisms/Navigation/NeoNavigation.vue'
import NeoFooter from '@/components/03-organisms/Footer/NeoFooter.vue'
import NeoCoverPanelGrid from '@/components/03-organisms/CoverPanelGrid/NeoCoverPanelGrid.vue'
import NeoCoverPanel from '@/components/02-molecules/CoverPanel/NeoCoverPanel.vue'
import NeoProgressPanel from '@/components/02-molecules/ProgressPanel/NeoProgressPanel.vue'
import NeoPennant from '@/components/01-atoms/Pennant/NeoPennant.vue'
import NeoLink from '@/components/01-atoms/Link/NeoLink.vue'
import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
import NeoHero from '@/components/03-organisms/Hero/NeoHero/NeoHero.vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import type { Color } from '@/assets/typescript/colors'

interface MediaPageStoryArgs {
	color: SurfaceColor
}

const meta: Meta<MediaPageStoryArgs> = {
	title: 'Pages/Media Library',
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
	{ text: 'Browse', href: '#browse', active: true },
	{ text: 'Top Rated', href: '#top-rated' },
	{
		text: 'Genres',
		children: [
			{ text: 'Drama', href: '#drama' },
			{ text: 'Action', href: '#action' },
			{ text: 'Comedy', href: '#comedy' },
			{ text: 'Science Fiction', href: '#sci-fi' },
		],
	},
	{ text: 'New Releases', href: '#new' },
]

const footerSections = [
	{
		title: 'Browse',
		links: [
			{ text: 'All Titles', href: '#all' },
			{ text: 'New Releases', href: '#new' },
			{ text: 'Top Rated', href: '#top' },
		],
	},
	{
		title: 'Genres',
		links: [
			{ text: 'Drama', href: '#drama' },
			{ text: 'Action', href: '#action' },
			{ text: 'Science Fiction', href: '#sci-fi' },
		],
	},
	{
		title: 'Account',
		links: [
			{ text: 'My List', href: '#list' },
			{ text: 'History', href: '#history' },
			{ text: 'Settings', href: '#settings' },
		],
	},
]

const topRated: Array<{
	color: Color
	title: string
	subtitle: string
	value: number
	rank: string
}> = [
	{
		color: 'blue',
		title: 'The Last Expedition',
		subtitle: 'Adventure · Drama · 2024',
		value: 84,
		rank: '1',
	},
	{
		color: 'grey',
		title: 'Echoes of Tomorrow',
		subtitle: 'Science Fiction · 2023',
		value: 71,
		rank: '2',
	},
	{
		color: 'red',
		title: 'A Quiet Street',
		subtitle: 'Drama · Comedy · 2024',
		value: 63,
		rank: '3',
	},
]

const librarySeedColors = [
	'#64748b',
	'#6366f1',
	'#ec4899',
	'#ef4444',
	'#f97316',
	'#eab308',
	'#22c55e',
	'#06b6d4',
	'#8b5cf6',
	'#475569',
	'#334155',
	'#0ea5e9',
	'#10b981',
	'#f43f5e',
	'#a855f7',
	'#14b8a6',
]

const libraryItems = Array.from({ length: 16 }, (_, index) => ({
	imageSrc: placeholder(300, 450, librarySeedColors[index % librarySeedColors.length]),
	imageAlt: `Library item ${index + 1}`,
	title: `Title ${index + 1}`,
}))

const MediaPageComponent = defineComponent({
	name: 'MediaPageRender',
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
					...(props.dark
						? { background: 'var(--neo-color-grey950, #0a0a0a)', color: 'var(--neo-color-grey100)' }
						: {}),
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
								<strong>CineVault</strong>
							</NeoLink>
						),
						actions: () => (
							<NeoButton
								text="My List"
								color={props.color}
								variant="secondary"
								size="small"
								rounded
							/>
						),
					}}
				</NeoNavigation>

				<NeoHero
					title="Your Streaming Library"
					subtitle="Discover top-rated titles, browse by genre, and manage your personal list."
					color={props.color}
					variant="centered"
					size="sm"
				/>

				<section
					id="top-rated"
					style={{
						paddingBlock: '48px',
						paddingInline: '24px',
						...(props.dark ? { background: 'var(--neo-color-grey900)' } : {}),
					}}
				>
					<div style={{ margin: '0 auto', maxInlineSize: '1100px' }}>
						<h2
							style={{
								fontSize: '1.5rem',
								fontWeight: '700',
								marginBlock: '0 24px',
							}}
						>
							Top Rated This Season
						</h2>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '12px',
								maxInlineSize: '480px',
							}}
						>
							{topRated.map((item) => (
								<NeoProgressPanel
									key={item.rank}
									color={item.color as SurfaceColor}
									imageSrc={placeholder(200, 300)}
									imageAlt={`${item.title} cover`}
									title={item.title}
									subtitle={item.subtitle}
									value={item.value}
									valueLabel="of all votes"
									href="#"
									rounded
								>
									{{
										pennant: () => <NeoPennant color={item.color}>{item.rank}</NeoPennant>,
									}}
								</NeoProgressPanel>
							))}
						</div>
					</div>
				</section>

				<section
					id="browse"
					style={{
						flex: '1',
						paddingBlock: '48px',
						paddingInline: '24px',
					}}
				>
					<div style={{ margin: '0 auto', maxInlineSize: '1100px' }}>
						<div
							style={{
								alignItems: 'center',
								display: 'flex',
								justifyContent: 'space-between',
								marginBlockEnd: '24px',
							}}
						>
							<h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0' }}>
								Browse the Library
							</h2>
							<NeoLink href="#" color={props.color} size="medium" variant="default">
								View all
							</NeoLink>
						</div>
						<NeoCoverPanelGrid columns={5} gap="medium" minColumnWidth={140}>
							{libraryItems.map((item) => (
								<NeoCoverPanel
									key={item.imageSrc}
									color={props.color}
									imageSrc={item.imageSrc}
									imageAlt={item.imageAlt}
									title={item.title}
									clickBehavior="link"
									href="#"
									rounded
								/>
							))}
						</NeoCoverPanelGrid>
					</div>
				</section>

				<NeoFooter
					color={props.color}
					layout="multi-column"
					sections={footerSections}
					copyrightText="© 2025 CineVault. All rights reserved."
				/>
			</div>
		)
	},
})

const mediaNavLinksCode = `const navLinks = [
  { text: 'Browse', href: '#browse', active: true },
  { text: 'Top Rated', href: '#top-rated' },
  {
    text: 'Genres',
    children: [
      { text: 'Drama', href: '#drama' },
      { text: 'Action', href: '#action' },
      { text: 'Comedy', href: '#comedy' },
      { text: 'Science Fiction', href: '#sci-fi' },
    ],
  },
  { text: 'New Releases', href: '#new' },
]`

const mediaTopRatedCode = `const topRated = [
  { color: 'blue', title: 'The Last Expedition', subtitle: 'Adventure · Drama · 2024', value: 84, rank: '1' },
  { color: 'grey', title: 'Echoes of Tomorrow', subtitle: 'Science Fiction · 2023', value: 71, rank: '2' },
  { color: 'red', title: 'A Quiet Street', subtitle: 'Drama · Comedy · 2024', value: 63, rank: '3' },
]`

const mediaLibraryItemsCode = `const libraryItems = [
  { imageSrc: 'https://placehold.co/300x450', imageAlt: 'Library item 1', title: 'Title 1' },
  { imageSrc: 'https://placehold.co/300x450', imageAlt: 'Library item 2', title: 'Title 2' },
  { imageSrc: 'https://placehold.co/300x450', imageAlt: 'Library item 3', title: 'Title 3' },
  { imageSrc: 'https://placehold.co/300x450', imageAlt: 'Library item 4', title: 'Title 4' },
]`

const mediaFooterSectionsCode = `const footerSections = [
  {
    title: 'Browse',
    links: [
      { text: 'All Titles', href: '#all' },
      { text: 'New Releases', href: '#new' },
      { text: 'Top Rated', href: '#top' },
    ],
  },
  {
    title: 'Genres',
    links: [
      { text: 'Drama', href: '#drama' },
      { text: 'Action', href: '#action' },
      { text: 'Science Fiction', href: '#sci-fi' },
    ],
  },
  {
    title: 'Account',
    links: [
      { text: 'My List', href: '#list' },
      { text: 'History', href: '#history' },
      { text: 'Settings', href: '#settings' },
    ],
  },
]`

const mediaPageSourceCode = (color: string) =>
	`<script setup lang="ts">
import NeoNavigation from 'neo-materia/NeoNavigation'
import NeoFooter from 'neo-materia/NeoFooter'
import NeoCoverPanelGrid from 'neo-materia/NeoCoverPanelGrid'
import NeoCoverPanel from 'neo-materia/NeoCoverPanel'
import NeoProgressPanel from 'neo-materia/NeoProgressPanel'
import NeoPennant from 'neo-materia/NeoPennant'
import NeoLink from 'neo-materia/NeoLink'
import NeoButton from 'neo-materia/NeoButton'
import NeoHero from 'neo-materia/NeoHero'

${mediaNavLinksCode}

${mediaTopRatedCode}

${mediaLibraryItemsCode}

${mediaFooterSectionsCode}
<` +
	`/script>

<template>
  <NeoNavigation color="${color}" :links="navLinks" aria-label="Main navigation" menu-label="Menu" close-label="Close">
    <template #logo>
      <NeoLink href="#" color="${color}" size="medium" variant="default">
        <strong>CineVault</strong>
      </NeoLink>
    </template>
    <template #actions>
      <NeoButton text="My List" color="${color}" variant="secondary" rounded />
    </template>
  </NeoNavigation>

  <NeoHero
    title="Your Streaming Library"
    subtitle="Discover top-rated titles, browse by genre, and manage your personal list."
    color="${color}"
    variant="centered"
    size="sm"
  />

  <section id="top-rated">
    <h2>Top Rated This Season</h2>
    <NeoProgressPanel
      v-for="item in topRated"
      :key="item.rank"
      :color="item.color"
      :title="item.title"
      :subtitle="item.subtitle"
      :value="item.value"
      value-label="of all votes"
      href="#"
      rounded
    >
      <template #pennant>
        <NeoPennant :color="item.color">{{ item.rank }}</NeoPennant>
      </template>
    </NeoProgressPanel>
  </section>

  <section id="browse">
    <h2>Browse the Library</h2>
    <NeoCoverPanelGrid :columns="5" gap="medium" :min-column-width="140">
      <NeoCoverPanel
        v-for="item in libraryItems"
        :key="item.imageSrc"
        color="${color}"
        :image-src="item.imageSrc"
        :image-alt="item.imageAlt"
        :title="item.title"
        click-behavior="link"
        href="#"
        rounded
      />
    </NeoCoverPanelGrid>
  </section>

  <NeoFooter
    color="${color}"
    layout="multi-column"
    :sections="footerSections"
    copyright-text="© 2025 CineVault. All rights reserved."
  />
</template>`

const darkMediaPageSourceCode =
	`<script setup lang="ts">
import NeoNavigation from 'neo-materia/NeoNavigation'
import NeoFooter from 'neo-materia/NeoFooter'
import NeoCoverPanelGrid from 'neo-materia/NeoCoverPanelGrid'
import NeoCoverPanel from 'neo-materia/NeoCoverPanel'
import NeoProgressPanel from 'neo-materia/NeoProgressPanel'
import NeoPennant from 'neo-materia/NeoPennant'
import NeoLink from 'neo-materia/NeoLink'
import NeoButton from 'neo-materia/NeoButton'
import NeoHero from 'neo-materia/NeoHero'

${mediaNavLinksCode}

${mediaTopRatedCode}

${mediaLibraryItemsCode}

${mediaFooterSectionsCode}
<` +
	`/script>

<template>
  <!-- Add u-onDark to root to activate dark mode styles -->
  <div class="u-onDark" style="min-height: 100vh; background: var(--neo-color-grey950, #0a0a0a); color: var(--neo-color-grey100);">
    <NeoNavigation color="blue" :links="navLinks" aria-label="Main navigation" menu-label="Menu" close-label="Close">
      <template #logo>
        <NeoLink href="#" color="blue" size="medium" variant="default">
          <strong>CineVault</strong>
        </NeoLink>
      </template>
      <template #actions>
        <NeoButton text="My List" color="blue" variant="secondary" rounded />
      </template>
    </NeoNavigation>

    <NeoHero
      title="Your Streaming Library"
      subtitle="Discover top-rated titles, browse by genre, and manage your personal list."
      color="blue"
      variant="centered"
      size="sm"
    />

    <section id="top-rated" style="background: var(--neo-color-grey900);">
      <h2>Top Rated This Season</h2>
      <NeoProgressPanel v-for="item in topRated" :key="item.rank" :color="item.color" :title="item.title" :subtitle="item.subtitle" :value="item.value" value-label="of all votes" href="#" rounded>
        <template #pennant>
          <NeoPennant :color="item.color">{{ item.rank }}</NeoPennant>
        </template>
      </NeoProgressPanel>
    </section>

    <section id="browse">
      <h2>Browse the Library</h2>
      <NeoCoverPanelGrid :columns="5" gap="medium" :min-column-width="140">
        <NeoCoverPanel v-for="item in libraryItems" :key="item.imageSrc" color="blue" :image-src="item.imageSrc" :image-alt="item.imageAlt" :title="item.title" click-behavior="link" href="#" rounded />
      </NeoCoverPanelGrid>
    </section>

    <NeoFooter color="blue" layout="multi-column" :sections="footerSections" copyright-text="© 2025 CineVault. All rights reserved." />
  </div>
</template>`

export const Default: Story = {
	args: { color: 'blue' },
	parameters: {
		docs: {
			source: { code: mediaPageSourceCode('blue') },
		},
	},
	render: (args) =>
		defineComponent({
			name: 'DefaultStoryRender',
			setup() {
				return () => <MediaPageComponent color={args.color} />
			},
		}),
}

export const Purple: Story = {
	args: { color: 'purple' },
	parameters: {
		docs: {
			source: { code: mediaPageSourceCode('purple') },
		},
	},
	render: (args) =>
		defineComponent({
			name: 'PurpleStoryRender',
			setup() {
				return () => <MediaPageComponent color={args.color} />
			},
		}),
}

export const DarkMode: Story = {
	args: { color: 'blue' },
	globals: { backgrounds: '#000' },
	parameters: {
		docs: {
			source: { code: darkMediaPageSourceCode },
		},
	},
	render: (args) =>
		defineComponent({
			name: 'DarkModeStoryRender',
			setup() {
				return () => <MediaPageComponent color={args.color} dark={true} />
			},
		}),
}
