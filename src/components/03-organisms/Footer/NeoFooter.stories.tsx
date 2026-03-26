import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'

import NeoFooter from '@/components/03-organisms/Footer/NeoFooter.vue'
import NeoLink from '@/components/01-atoms/Link/NeoLink.vue'
import { footerLayouts, type NeoFooterProps } from './NeoFooterTypes'
import { ariaLabelArgType } from '../../../../.storybook/utils/argTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'

const exampleSections = [
	{
		title: 'Product',
		links: [
			{ text: 'Features', href: '#features' },
			{ text: 'Pricing', href: '#pricing' },
			{ text: 'Documentation', href: '#docs' },
			{ text: 'Changelog', href: '#changelog' },
		],
	},
	{
		title: 'Company',
		links: [
			{ text: 'About Us', href: '#about' },
			{ text: 'Blog', href: '#blog' },
			{ text: 'Careers', href: '#careers' },
			{ text: 'Contact', href: '#contact' },
		],
	},
	{
		title: 'Resources',
		links: [
			{ text: 'Community', href: '#community' },
			{ text: 'Support', href: '#support' },
			{ text: 'API Reference', href: '#api' },
			{ text: 'Tutorials', href: '#tutorials' },
		],
	},
	{
		title: 'Legal',
		links: [
			{ text: 'Privacy Policy', href: '#privacy' },
			{ text: 'Terms of Service', href: '#terms' },
			{ text: 'Cookie Policy', href: '#cookies' },
		],
	},
] satisfies NeoFooterProps['sections']

const meta = {
	title: 'Organisms/NeoFooter',
	component: NeoFooter,
	tags: ['autodocs'],
	argTypes: {
		...ariaLabelArgType,
		color: {
			description: 'Theme color for link hover/active states and accents.',
			table: { category: 'Appearance' },
		},
		sections: {
			control: false,
			description:
				'Array of link-group sections. Each section: `{ title: string, links: Array<{ text, href, external? }> }`.',
			table: { category: 'Content' },
		},
		copyrightText: {
			control: 'text',
			description: 'Copyright line rendered at the bottom of the footer.',
			table: { category: 'Content' },
		},
		layout: {
			control: 'select',
			options: footerLayouts,
			description:
				'`multi-column`: sections displayed in a responsive grid. `simple`: single-row layout with sections collapsed. `centered`: all content centred horizontally.',
			table: { category: 'Appearance' },
		},
	},
	args: {
		color: 'blue',
		layout: 'multi-column',
		// @ts-expect-error - Vue slot inference conflict with prop type
		sections: exampleSections,
		copyrightText: '© 2026 NeoMateria. All rights reserved.',
	},
} satisfies Meta<typeof NeoFooter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Simple: Story = {
	args: {
		layout: 'simple',
	},
}

export const Centered: Story = {
	args: {
		layout: 'centered',
	},
}

export const WithLogo: Story = {
	parameters: {
		docs: {
			source: {
				code: `<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #logo>
    <div style="font-size: 24px; font-weight: bold; color: var(--neo-theme-color);">
      NeoMateria
    </div>
  </template>
</NeoFooter>`,
			},
		},
	},
	render: (args: NeoFooterProps) => {
		return defineComponent({
			name: 'WithLogoRender',
			setup() {
				return () => (
					<NeoFooter
						{...args}
						v-slots={{
							logo: () => (
								<div
									style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--neo-theme-color)' }}
								>
									NeoMateria
								</div>
							),
						}}
					/>
				)
			},
		})
	},
}

export const WithSocialLinks: Story = {
	parameters: {
		docs: {
			source: {
				code: `<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #social>
    <NeoLink href="https://twitter.com" color="blue" size="medium">Twitter</NeoLink>
    <NeoLink href="https://github.com" color="grey" size="medium">GitHub</NeoLink>
    <NeoLink href="https://discord.com" color="indigo" size="medium">Discord</NeoLink>
  </template>
</NeoFooter>`,
			},
		},
	},
	render: (args: NeoFooterProps) => {
		return defineComponent({
			name: 'WithSocialLinksRender',
			setup() {
				return () => (
					<NeoFooter
						{...args}
						v-slots={{
							social: () => (
								<>
									<NeoLink href="#twitter" color="blue" size="medium">
										Twitter
									</NeoLink>
									<NeoLink href="#github" color="grey" size="medium">
										GitHub
									</NeoLink>
									<NeoLink href="#discord" color="indigo" size="medium">
										Discord
									</NeoLink>
								</>
							),
						}}
					/>
				)
			},
		})
	},
}

export const WithLegalLinks: Story = {
	parameters: {
		docs: {
			source: {
				code: `<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #legal>
    <NeoLink href="/privacy" color="grey" size="small">Privacy</NeoLink>
    <NeoLink href="/terms" color="grey" size="small">Terms</NeoLink>
    <NeoLink href="/cookies" color="grey" size="small">Cookies</NeoLink>
  </template>
</NeoFooter>`,
			},
		},
	},
	render: (args: NeoFooterProps) => {
		return defineComponent({
			name: 'WithLegalLinksRender',
			setup() {
				return () => (
					<NeoFooter
						{...args}
						v-slots={{
							legal: () => (
								<>
									<NeoLink href="#privacy" color="grey" size="small">
										Privacy
									</NeoLink>
									<NeoLink href="#terms" color="grey" size="small">
										Terms
									</NeoLink>
									<NeoLink href="#cookies" color="grey" size="small">
										Cookies
									</NeoLink>
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
				code: `<NeoFooter color="blue" :sections="sections" copyright-text="© 2026 NeoMateria.">
  <template #logo>
    <div style="font-size: 24px; font-weight: bold; color: var(--neo-theme-color);">
      NeoMateria
    </div>
  </template>
  <template #social>
    <NeoLink href="https://twitter.com" color="blue" size="medium">Twitter</NeoLink>
    <NeoLink href="https://github.com" color="grey" size="medium">GitHub</NeoLink>
    <NeoLink href="https://discord.com" color="indigo" size="medium">Discord</NeoLink>
    <NeoLink href="https://linkedin.com" color="blue" size="medium">LinkedIn</NeoLink>
  </template>
  <template #legal>
    <NeoLink href="/privacy" color="grey" size="small">Privacy Policy</NeoLink>
    <NeoLink href="/terms" color="grey" size="small">Terms of Service</NeoLink>
    <NeoLink href="/cookies" color="grey" size="small">Cookie Policy</NeoLink>
  </template>
</NeoFooter>`,
			},
		},
	},
	render: (args: NeoFooterProps) => {
		return defineComponent({
			name: 'CompleteRender',
			setup() {
				return () => (
					<NeoFooter
						{...args}
						v-slots={{
							logo: () => (
								<div
									style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--neo-theme-color)' }}
								>
									NeoMateria
								</div>
							),
							social: () => (
								<>
									<NeoLink href="#twitter" color="blue" size="medium">
										Twitter
									</NeoLink>
									<NeoLink href="#github" color="grey" size="medium">
										GitHub
									</NeoLink>
									<NeoLink href="#discord" color="indigo" size="medium">
										Discord
									</NeoLink>
									<NeoLink href="#linkedin" color="blue" size="medium">
										LinkedIn
									</NeoLink>
								</>
							),
							legal: () => (
								<>
									<NeoLink href="#privacy" color="grey" size="small">
										Privacy Policy
									</NeoLink>
									<NeoLink href="#terms" color="grey" size="small">
										Terms of Service
									</NeoLink>
									<NeoLink href="#cookies" color="grey" size="small">
										Cookie Policy
									</NeoLink>
								</>
							),
						}}
					/>
				)
			},
		})
	},
}

export const MinimalWithCopyright: Story = {
	args: {
		sections: [],
		layout: 'centered',
	},
}

export const OnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
}

export const AllColors: Story = {
	parameters: {
		a11y: {
			config: {
				rules: [
					{ id: 'landmark-no-duplicate-contentinfo', enabled: false },
					{ id: 'landmark-unique', enabled: false },
				],
			},
		},
	},
	render: createSimpleColorShowcase(NeoFooter, ['multi-column']),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		a11y: {
			config: {
				rules: [
					{ id: 'landmark-no-duplicate-contentinfo', enabled: false },
					{ id: 'landmark-unique', enabled: false },
				],
			},
		},
	},
	render: createSimpleColorShowcase(NeoFooter, ['multi-column'], {
		dark: true,
	}),
}
