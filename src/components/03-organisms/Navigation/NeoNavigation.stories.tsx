import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, ref } from 'vue'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'

import NeoNavigation from '@/components/03-organisms/Navigation/NeoNavigation.vue'
import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
import NeoImage from '@/components/01-atoms/Image/NeoImage.vue'
import {
	navigationVariants,
	navigationCollapseActions,
	type NeoNavigationProps,
} from './NeoNavigationTypes'
import { ariaLabelArgType } from '../../../../.storybook/utils/argTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'

const exampleLinks: NeoNavigationProps['links'] = [
	{ text: 'Home', href: '/', active: true },
	{ text: 'Games', href: '/games' },
	{ text: 'About', href: '/about' },
	{ text: 'Contact', href: '/contact' },
]

const nestedLinks: NeoNavigationProps['links'] = [
	{ text: 'Home', href: '/', active: true },
	{
		text: 'Products',
		children: [
			{ text: 'All Products', href: '/products' },
			{ text: 'Featured', href: '/products/featured' },
			{ text: 'New Arrivals', href: '/products/new' },
			{ text: 'On Sale', href: '/products/sale' },
		],
	},
	{
		text: 'Categories',
		children: [
			{ text: 'Electronics', href: '/categories/electronics' },
			{ text: 'Clothing', href: '/categories/clothing' },
			{ text: 'Home & Garden', href: '/categories/home' },
		],
	},
	{ text: 'About', href: '/about' },
	{ text: 'Contact', href: '/contact' },
]

const renderBrandLogo = (text: string = 'NeoMateria') => (
	<div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
		<NeoImage src="/favicon.ico" alt="" width={24} height={24} objectFit="contain" />
		<span style={{ color: 'var(--neo-theme-color)', fontSize: '18px', fontWeight: 'bold' }}>
			{text}
		</span>
	</div>
)

const meta = {
	title: 'Organisms/NeoNavigation',
	component: NeoNavigation,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		() => ({
			template: `<story /><main style="padding: 24px; min-block-size: 1500px;"><p aria-hidden="true" style="visibility: hidden;">Page content goes here. Scroll to see the sticky navigation.</p></main>`,
		}),
	],
	argTypes: {
		...ariaLabelArgType,
		color: {
			description: 'Theme color for active link states, hover accents, and the mobile menu header.',
			table: { category: 'Appearance' },
		},
		links: {
			control: false,
			description:
				'Array of navigation links. Each link: `{ text, href, active?, external?, children? }`. Add a `children` array to create a dropdown.',
			table: { category: 'Content' },
		},
		menuLabel: {
			control: 'text',
			description: 'Text for the mobile hamburger menu button.',
			table: { category: 'Content' },
		},
		closeLabel: {
			control: 'text',
			description: 'Text for the mobile menu close button.',
			table: { category: 'Content' },
		},
		menuAriaLabel: {
			control: 'text',
			description:
				'Accessible label for the mobile menu toggle button. Used when `menuLabel` is not descriptive enough on its own.',
			table: { category: 'Accessibility' },
		},
		variant: {
			control: 'select',
			options: navigationVariants,
			description:
				'`default`: standard nav with inline dropdowns. `compact`: always shows the mobile hamburger toggle; actions remain visible on desktop. `flyout`: parent links open a full-width panel below the bar instead of an inline dropdown.',
			table: { category: 'Appearance' },
		},
		collapseActions: {
			control: 'select',
			options: [undefined, ...navigationCollapseActions],
			description:
				'`mobile`: action slot buttons are visible inline on desktop, collapsed into a dropdown on mobile. `always`: action buttons are always collapsed into a dropdown regardless of viewport.',
			table: { category: 'Behavior' },
		},
		actionsMenuAriaLabel: {
			control: 'text',
			description:
				"Accessible label for the 'more actions' dropdown trigger button shown when `collapseActions` is set.",
			table: { category: 'Accessibility' },
		},
		mobileBreakpoint: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description:
				'Viewport breakpoint at which the navigation switches from the mobile hamburger layout to the full desktop layout.',
			table: { category: 'Behavior' },
		},
	},
	args: {
		color: 'blue',
		variant: 'default',
		ariaLabel: 'Main navigation',
		menuLabel: 'Menu',
		closeLabel: 'Close',
		// @ts-expect-error - Vue slot inference conflict with prop type
		links: exampleLinks,
		'onToggle-mobile-menu': fn(),
	},
} satisfies Meta<typeof NeoNavigation>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Compact: Story = {
	args: {
		variant: 'compact',
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- Compact: always shows mobile menu toggle, actions still visible on desktop -->
<NeoNavigation color="blue" variant="compact" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`,
			},
		},
	},
	render: (args: NeoNavigationProps) => {
		return defineComponent({
			name: 'CompactRender',
			setup() {
				return () => (
					<NeoNavigation
						{...args}
						v-slots={{
							logo: () => renderBrandLogo(),
							actions: () => (
								<>
									<NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
									<NeoButton
										text="Sign Up"
										color={args.color}
										size="medium"
										variant="primary"
										rounded
									/>
								</>
							),
						}}
					/>
				)
			},
		})
	},
}

export const Flyout: Story = {
	args: {
		variant: 'flyout',
		// @ts-expect-error - Vue slot inference conflict with prop type
		links: nestedLinks,
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- Flyout: parent links open a full-width panel below the nav bar instead of inline dropdowns -->
<NeoNavigation color="blue" variant="flyout" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`,
			},
		},
	},
	render: (args: NeoNavigationProps) => {
		return defineComponent({
			name: 'FlyoutRender',
			setup() {
				return () => (
					<NeoNavigation
						{...args}
						v-slots={{
							logo: () => renderBrandLogo(),
							actions: () => (
								<>
									<NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
									<NeoButton
										text="Sign Up"
										color={args.color}
										size="medium"
										variant="primary"
										rounded
									/>
								</>
							),
						}}
					/>
				)
			},
		})
	},
}

export const WithLogo: Story = {
	parameters: {
		docs: {
			source: {
				code: `<NeoNavigation color="blue" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
</NeoNavigation>`,
			},
		},
	},
	render: (args: NeoNavigationProps) => {
		return defineComponent({
			name: 'WithLogoRender',
			setup() {
				return () => (
					<NeoNavigation
						{...args}
						v-slots={{
							logo: () => renderBrandLogo(),
						}}
					/>
				)
			},
		})
	},
}

export const WithActions: Story = {
	parameters: {
		docs: {
			source: {
				code: `<NeoNavigation color="blue" :links="links" aria-label="Main navigation">
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`,
			},
		},
	},
	render: (args: NeoNavigationProps) => {
		return defineComponent({
			name: 'WithActionsRender',
			setup() {
				return () => (
					<NeoNavigation
						{...args}
						v-slots={{
							actions: () => (
								<>
									<NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
									<NeoButton
										text="Sign Up"
										color={args.color}
										size="medium"
										variant="primary"
										rounded
									/>
								</>
							),
						}}
					/>
				)
			},
		})
	},
}

export const Complete: Story = {
	parameters: {
		docs: {
			source: {
				code: `<NeoNavigation color="blue" :links="links" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">Titanlord</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`,
			},
		},
	},
	render: (args: NeoNavigationProps) => {
		return defineComponent({
			name: 'CompleteRender',
			setup() {
				return () => (
					<NeoNavigation
						{...args}
						v-slots={{
							logo: () => renderBrandLogo('Titanlord'),
							actions: () => (
								<>
									<NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
									<NeoButton
										text="Sign Up"
										color={args.color}
										size="medium"
										variant="primary"
										rounded
									/>
								</>
							),
						}}
					/>
				)
			},
		})
	},
}

export const WithRichActions: Story = {
	parameters: {
		docs: {
			source: {
				code: `<!-- The actions slot accepts any content — buttons, icon buttons, dropdowns, toggles, etc. -->
<script setup>
const isDark = ref(false)
const language = ref('EN')
</script>

<template>
  <NeoNavigation color="blue" :links="links" aria-label="Main navigation" menuLabel="Menu" closeLabel="Close">
    <template #logo>
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
        <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">Titanlord</span>
      </div>
    </template>
    <template #actions>
      <!-- Language toggle -->
      <NeoButton
        :text="language === 'EN' ? 'DE' : 'EN'"
        color="blue"
        size="small"
        variant="ghost"
        @click="language = language === 'EN' ? 'DE' : 'EN'"
      />
      <!-- Dark mode toggle -->
      <NeoButton
        :text="isDark ? 'Light' : 'Dark'"
        color="blue"
        size="small"
        variant="ghost"
        @click="isDark = !isDark"
      />
      <!-- Login -->
      <NeoButton text="Log in" color="blue" size="small" variant="tertiary" />
      <NeoButton text="Sign up" color="blue" size="small" variant="primary" rounded />
    </template>
  </NeoNavigation>
</template>`,
			},
		},
	},
	render: (args: NeoNavigationProps) => {
		return defineComponent({
			name: 'WithRichActionsRender',
			setup() {
				const isDark = ref(false)
				const language = ref('EN')

				return () => (
					<NeoNavigation
						{...args}
						v-slots={{
							logo: () => renderBrandLogo('Titanlord'),
							actions: () => (
								<>
									<NeoButton
										text={language.value === 'EN' ? 'DE' : 'EN'}
										color={args.color}
										size="small"
										variant="ghost"
										onClick={() => {
											language.value = language.value === 'EN' ? 'DE' : 'EN'
										}}
									/>
									<NeoButton
										text={isDark.value ? 'Light' : 'Dark'}
										color={args.color}
										size="small"
										variant="ghost"
										onClick={() => {
											isDark.value = !isDark.value
										}}
									/>
									<NeoButton text="Log in" color={args.color} size="small" variant="tertiary" />
									<NeoButton
										text="Sign up"
										color={args.color}
										size="small"
										variant="primary"
										rounded
									/>
								</>
							),
						}}
					/>
				)
			},
		})
	},
}

export const CollapseActionsMobile: Story = {
	args: {
		collapseActions: 'mobile',
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- collapseActions="mobile": on mobile the actions are hidden behind a three-dots button;
     on desktop they render inline as normal -->
<NeoNavigation color="blue" :links="links" collapse-actions="mobile" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`,
			},
		},
	},
	render: (args: NeoNavigationProps) => {
		return defineComponent({
			name: 'CollapseActionsMobileRender',
			setup() {
				return () => (
					<NeoNavigation
						{...args}
						v-slots={{
							logo: () => renderBrandLogo(),
							actions: () => (
								<>
									<NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
									<NeoButton
										text="Sign Up"
										color={args.color}
										size="medium"
										variant="primary"
										rounded
									/>
								</>
							),
						}}
					/>
				)
			},
		})
	},
}

export const CollapseActionsAlways: Story = {
	args: {
		collapseActions: 'always',
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- collapseActions="always": actions always behind the three-dots button regardless of viewport -->
<NeoNavigation color="blue" :links="links" collapse-actions="always" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Profile" color="blue" size="medium" variant="ghost" />
    <NeoButton text="Settings" color="blue" size="medium" variant="ghost" />
    <NeoButton text="Sign Out" color="blue" size="medium" variant="tertiary" />
  </template>
</NeoNavigation>`,
			},
		},
	},
	render: (args: NeoNavigationProps) => {
		return defineComponent({
			name: 'CollapseActionsAlwaysRender',
			setup() {
				return () => (
					<NeoNavigation
						{...args}
						v-slots={{
							logo: () => renderBrandLogo(),
							actions: () => (
								<>
									<NeoButton text="Profile" color={args.color} size="medium" variant="ghost" />
									<NeoButton text="Settings" color={args.color} size="medium" variant="ghost" />
									<NeoButton text="Sign Out" color={args.color} size="medium" variant="tertiary" />
								</>
							),
						}}
					/>
				)
			},
		})
	},
}

export const WithDropdowns: Story = {
	args: {
		// @ts-expect-error - Vue slot inference conflict with prop type
		links: nestedLinks,
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- Add children arrays to link items to create dropdown menus -->
<NeoNavigation
  color="blue"
  aria-label="Main navigation"
  :links="[
    { text: 'Home', href: '/', active: true },
    {
      text: 'Products',
      children: [
        { text: 'All Products', href: '/products' },
        { text: 'Featured', href: '/products/featured' },
      ],
    },
    { text: 'About', href: '/about' },
  ]"
>
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
  </template>
</NeoNavigation>`,
			},
		},
	},
	render: (args: NeoNavigationProps) => {
		return defineComponent({
			name: 'WithDropdownsRender',
			setup() {
				return () => (
					<NeoNavigation
						{...args}
						v-slots={{
							logo: () => renderBrandLogo(),
							actions: () => (
								<NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
							),
						}}
					/>
				)
			},
		})
	},
}

export const MinimalWithoutLinks: Story = {
	args: {
		links: [],
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- Pass an empty links array to render a navbar with only logo + actions -->
<NeoNavigation color="blue" :links="[]" aria-label="Main navigation">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">Brand</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Action" color="blue" size="medium" variant="primary" />
  </template>
</NeoNavigation>`,
			},
		},
	},
	render: (args: NeoNavigationProps) => {
		return defineComponent({
			name: 'MinimalWithoutLinksRender',
			setup() {
				return () => (
					<NeoNavigation
						{...args}
						v-slots={{
							logo: () => renderBrandLogo('Brand'),
							actions: () => (
								<NeoButton text="Action" color={args.color} size="medium" variant="primary" />
							),
						}}
					/>
				)
			},
		})
	},
}

export const MobileMenu: Story = {
	parameters: {
		viewport: { defaultViewport: 'mobile1' },
		docs: {
			source: {
				code: `<!-- At mobile viewport the nav hides desktop links and shows the hamburger toggle -->
<NeoNavigation color="blue" :links="links" aria-label="Main navigation" menuLabel="Menu" closeLabel="Close">
  <template #logo>
    <div style="display: flex; align-items: center; gap: 8px;">
      <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
      <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
    </div>
  </template>
  <template #actions>
    <NeoButton text="Sign Up" color="blue" size="medium" variant="primary" rounded />
  </template>
</NeoNavigation>`,
			},
		},
	},
	render: (args: NeoNavigationProps) => {
		return defineComponent({
			name: 'MobileMenuRender',
			setup() {
				return () => (
					<NeoNavigation
						{...args}
						v-slots={{
							logo: () => renderBrandLogo(),
							actions: () => (
								<NeoButton
									text="Sign Up"
									color={args.color}
									size="medium"
									variant="primary"
									rounded
								/>
							),
						}}
					/>
				)
			},
		})
	},
}

export const MobileMenuInteraction: Story = {
	...MobileMenu,
	tags: ['!dev'],
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Open mobile menu via toggle button', async () => {
			const menuButton = canvas.getByText('Menu')
			await userEvent.click(menuButton)
			await waitFor(() => expect(document.querySelector('.NeoSheet')).not.toBeNull())
			await waitFor(() => expect(args['onToggle-mobile-menu']).toHaveBeenCalledWith(true))
		})

		await step('Sheet overlay closes the mobile menu', async () => {
			const overlay = document.querySelector('.NeoSheet-overlay') as HTMLElement
			expect(overlay).not.toBeNull()
			const rect = overlay.getBoundingClientRect()
			expect(rect.height).toBeGreaterThan(0)
			await userEvent.click(overlay)
			await waitFor(() => expect(document.querySelector('.NeoSheet')).toBeNull())
		})
	},
}

export const OnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- Wrap in .u-onDark to activate dark-mode token overrides -->
<div class="u-onDark">
  <NeoNavigation color="blue" :links="links" aria-label="Main navigation">
    <template #logo>
      <div style="display: flex; align-items: center; gap: 8px;">
        <NeoImage src="/favicon.ico" alt="" :width="24" :height="24" object-fit="contain" />
        <span style="font-size: 18px; font-weight: bold; color: var(--neo-theme-color);">NeoMateria</span>
      </div>
    </template>
    <template #actions>
      <NeoButton text="Sign In" color="blue" size="medium" variant="tertiary" />
    </template>
  </NeoNavigation>
</div>`,
			},
		},
	},
	render: (args: NeoNavigationProps) => {
		return defineComponent({
			name: 'OnDarkRender',
			setup() {
				return () => (
					<NeoNavigation
						{...args}
						v-slots={{
							logo: () => renderBrandLogo(),
							actions: () => (
								<NeoButton text="Sign In" color={args.color} size="medium" variant="tertiary" />
							),
						}}
					/>
				)
			},
		})
	},
}

export const AllColors: Story = {
	parameters: {
		a11y: { config: { rules: [{ id: 'landmark-unique', enabled: false }] } },
	},
	render: createSimpleColorShowcase(NeoNavigation, ['default']),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		a11y: { config: { rules: [{ id: 'landmark-unique', enabled: false }] } },
	},
	render: createSimpleColorShowcase(NeoNavigation, ['default'], {
		dark: true,
	}),
}
