import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { colors } from '@/assets/typescript/colors'
import NeoHeadingGroup from './NeoHeadingGroup.vue'
import type { NeoHeadingGroupProps } from './NeoHeadingGroupTypes'
import { headingGroupVariants } from './NeoHeadingGroupTypes'
import { headlineTags, headlineAligns } from '@/components/01-atoms/Headline/NeoHeadlineTypes'

const meta = {
	title: 'Molecules/NeoHeadingGroup',
	component: NeoHeadingGroup,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text', table: { category: 'Content' } },
		subtitle: { control: 'text', table: { category: 'Content' } },
		overline: {
			control: 'text',
			description: 'Small uppercase label rendered above the title.',
			table: { category: 'Content' },
		},
		variant: {
			control: 'select',
			options: headingGroupVariants,
			description: 'Controls which headline size is used for the title.',
			table: { category: 'Appearance' },
		},
		headingTag: {
			control: 'select',
			options: headlineTags,
			description: 'The HTML element for the title. Decouples visual size from document semantics.',
			table: { category: 'Appearance' },
		},
		align: {
			control: 'select',
			options: headlineAligns,
			description: 'Text alignment for the entire group.',
			table: { category: 'Appearance' },
		},
		color: {
			control: 'select',
			options: colors,
			description: 'Accent color applied to the title and overline.',
			table: { category: 'Appearance' },
		},
	},
	args: {
		title: 'Section Heading',
		variant: 'primary',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'md', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoHeadingGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
	render: (args: NeoHeadingGroupProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => <NeoHeadingGroup {...args} />
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHeadingGroup title="Section Heading" />`,
			},
		},
	},
}

export const WithOverline: Story = {
	tags: ['snapshot'],
	args: {
		overline: 'Features',
		title: 'Everything You Need',
		subtitle: 'A complete design system for building beautiful interfaces at scale.',
		color: 'blue',
	},
	render: (args: NeoHeadingGroupProps) => {
		return defineComponent({
			name: 'WithOverlineRender',
			setup() {
				return () => <NeoHeadingGroup {...args} />
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHeadingGroup
  overline="Features"
  title="Everything You Need"
  subtitle="A complete design system for building beautiful interfaces at scale."
  color="blue"
/>`,
			},
		},
	},
}

export const Centered: Story = {
	tags: ['snapshot'],
	args: {
		overline: 'About Us',
		title: 'Built for developers',
		subtitle: 'Opinionated, accessible, and production-ready.',
		align: 'center',
		color: 'purple',
	},
	render: (args: NeoHeadingGroupProps) => {
		return defineComponent({
			name: 'CenteredRender',
			setup() {
				return () => <NeoHeadingGroup {...args} />
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoHeadingGroup
  overline="About Us"
  title="Built for developers"
  subtitle="Opinionated, accessible, and production-ready."
  align="center"
  color="purple"
/>`,
			},
		},
	},
}

export const AllVariants: Story = {
	tags: ['no-test'],
	render: () => {
		return defineComponent({
			name: 'AllVariantsRender',
			setup() {
				return () => (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
						<NeoHeadingGroup
							title="Primary — Page Hero"
							subtitle="The largest headline. Use once per page, typically in a hero section."
							variant="primary"
						/>
						<NeoHeadingGroup
							title="Secondary — Section Header"
							subtitle="Mid-size. Use for major sections within a page."
							variant="secondary"
						/>
						<NeoHeadingGroup
							title="Tertiary — Subsection"
							subtitle="Smaller weight. Use for subsections or card headers."
							variant="tertiary"
						/>
					</div>
				)
			},
		})
	},
}

export const OnDark: Story = {
	tags: ['snapshot'],
	globals: { backgrounds: '#000' },
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	args: {
		overline: 'Dark Mode',
		title: 'Looks Great in the Dark',
		subtitle: 'Inherits color from the container context.',
		color: 'blue',
	},
	render: (args: NeoHeadingGroupProps) => {
		return defineComponent({
			name: 'OnDarkRender',
			setup() {
				return () => (
					<div class="u-onDark" style={{ padding: '32px' }}>
						<NeoHeadingGroup {...args} />
					</div>
				)
			},
		})
	},
}
