import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'

import NeoLinkGroup from '@/components/02-molecules/LinkGroup/NeoLinkGroup.vue'
import type { NeoLinkGroupProps, NeoLinkGroupLink } from './NeoLinkGroupTypes'
import { linkGroupSizes, linkGroupVariants } from './NeoLinkGroupTypes'
import { ariaLabelArgType } from '../../../../.storybook/utils/argTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'

const exampleLinks: NeoLinkGroupLink[] = [
	{ text: 'Home', href: '/' },
	{ text: 'About', href: '/about' },
	{ text: 'Products', href: '/products', active: true },
	{ text: 'Contact', href: '/contact' },
]

const meta = {
	title: 'Molecules/NeoLinkGroup',
	component: NeoLinkGroup,
	tags: ['autodocs'],
	argTypes: {
		...ariaLabelArgType,
		color: {
			description: 'Theme color for link hover/active states.',
			table: { category: 'Appearance' },
		},
		title: {
			control: 'text',
			description:
				'Heading rendered above the links. When omitted, `ariaLabel` must be provided to label the nav landmark accessibly.',
			table: { category: 'Content' },
		},
		links: {
			control: false,
			description: 'Array of link objects. Each link: `{ text, href, active?, external? }`.',
			table: { category: 'Content' },
		},
		size: {
			control: 'select',
			options: linkGroupSizes,
			description: 'Controls font size and link spacing.',
			table: { category: 'Appearance' },
		},
		variant: {
			control: 'select',
			options: linkGroupVariants,
			description:
				'`vertical`: links are stacked in a column. `horizontal`: links are arranged in a row.',
			table: { category: 'Appearance' },
		},
	},
	args: {
		title: 'Navigation',
		links: exampleLinks,
		color: 'blue',
		size: 'medium',
		variant: 'vertical',
	},
} satisfies Meta<typeof NeoLinkGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutTitle: Story = {
	args: {
		title: undefined,
		ariaLabel: 'Navigation',
	},
}

export const Horizontal: Story = {
	args: {
		variant: 'horizontal',
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

export const WithExternalLinks: Story = {
	args: {
		title: 'External Resources',
		links: [
			{ text: 'GitHub', href: 'https://github.com', external: true },
			{ text: 'Documentation', href: 'https://docs.example.com', external: true },
			{ text: 'Support', href: 'https://support.example.com', external: true },
		],
	},
}

export const FooterExample: Story = {
	parameters: {
		docs: {
			source: {
				code: `<div style="display: flex; gap: 48px; flex-wrap: wrap;">
  <NeoLinkGroup
    title="Company"
    color="blue"
    size="small"
    :links="[
      { text: 'About Us', href: '/about' },
      { text: 'Careers', href: '/careers' },
      { text: 'Press', href: '/press' },
    ]"
  />
  <NeoLinkGroup
    title="Products"
    color="blue"
    size="small"
    :links="[
      { text: 'Features', href: '/features' },
      { text: 'Pricing', href: '/pricing' },
    ]"
  />
  <!-- repeat for more sections -->
</div>`,
			},
		},
	},
	render: (args: NeoLinkGroupProps) => {
		return defineComponent({
			name: 'FooterExampleRender',
			setup() {
				const sections = [
					{
						title: 'Company',
						links: [
							{ text: 'About Us', href: '/about' },
							{ text: 'Careers', href: '/careers' },
							{ text: 'Press', href: '/press' },
						],
					},
					{
						title: 'Products',
						links: [
							{ text: 'Features', href: '/features' },
							{ text: 'Pricing', href: '/pricing' },
							{ text: 'Enterprise', href: '/enterprise' },
						],
					},
					{
						title: 'Resources',
						links: [
							{ text: 'Documentation', href: '/docs' },
							{ text: 'Blog', href: '/blog' },
							{ text: 'Community', href: '/community' },
						],
					},
					{
						title: 'Legal',
						links: [
							{ text: 'Privacy Policy', href: '/privacy' },
							{ text: 'Terms of Service', href: '/terms' },
							{ text: 'Cookie Policy', href: '/cookies' },
						],
					},
				]

				return () => (
					<div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
						{sections.map((section, index) => (
							<NeoLinkGroup
								key={index}
								{...args}
								title={section.title}
								links={section.links}
								size="small"
							/>
						))}
					</div>
				)
			},
		})
	},
}

export const OnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
}

export const AllColors: Story = {
	parameters: {
		a11y: { config: { rules: [{ id: 'landmark-unique', enabled: false }] } },
	},
	render: createSimpleColorShowcase(NeoLinkGroup, ['vertical', 'horizontal']),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		a11y: { config: { rules: [{ id: 'landmark-unique', enabled: false }] } },
	},
	render: createSimpleColorShowcase(NeoLinkGroup, ['vertical', 'horizontal'], {
		dark: true,
	}),
}
