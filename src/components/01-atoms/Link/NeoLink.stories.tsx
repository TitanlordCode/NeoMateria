import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NeoLink from './NeoLink.vue'
import { defineComponent } from 'vue'
import type { NeoLinkProps } from './NeoLinkTypes'
import { linkSizes, linkVariants } from './NeoLinkTypes'
import { disabledArgType } from '../../../../.storybook/utils/argTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../.storybook/utils/createA11yPlay'

const meta = {
	title: 'Atoms/NeoLink',
	component: NeoLink,
	tags: ['autodocs'],
	argTypes: {
		...disabledArgType,
		href: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Destination URL the link points to.',
		},
		text: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Link label text. Falls back to the default slot if omitted.',
		},
		color: {
			description: 'Theme color applied to the link text and underline.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			options: linkSizes,
			description: 'Controls font size.',
			table: { category: 'Appearance' },
		},
		variant: {
			control: 'select',
			options: linkVariants,
			description:
				'`default`: colored text, no underline at rest. `underline`: always underlined. `button`: renders the link styled as a button for call-to-action usage.',
			table: { category: 'Appearance' },
		},
		external: {
			control: 'boolean',
			table: { category: 'Behavior' },
			description: 'Opens in a new tab and applies a safe `rel`. Sets sensible defaults.',
		},
		target: {
			control: 'select',
			options: ['_blank', '_self', '_parent', '_top'],
			table: { category: 'Behavior' },
			description: 'The anchor `target` attribute. Overrides the `external` default.',
		},
		rel: {
			control: 'text',
			table: { category: 'Behavior' },
			description: 'The anchor `rel` attribute. Overrides the `external` default.',
		},
	},
	args: {
		href: 'https://example.com',
		text: 'Click me',
		size: 'medium',
		variant: 'default',
		color: 'blue',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
}

export const Underline: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'underline',
	},
}

export const Button: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'button',
	},
}

export const External: Story = {
	tags: ['snapshot'],
	args: {
		external: true,
		target: '_blank',
		text: 'Open in new tab',
	},
}

export const Disabled: Story = {
	tags: ['snapshot'],
	args: {
		disabled: true,
	},
}

export const Small: Story = {
	tags: ['snapshot'],
	args: {
		size: 'small',
	},
}

export const Large: Story = {
	tags: ['snapshot'],
	args: {
		size: 'large',
	},
}

export const WithSlot: Story = {
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<!-- Use the default slot for rich link content instead of the text prop -->
<NeoLink href="https://example.com" color="blue">
  <strong>Custom content</strong> with <em>formatting</em>
</NeoLink>`,
			},
		},
	},
	render: (args: NeoLinkProps) => {
		return defineComponent({
			name: 'WithSlotRender',
			setup() {
				return () => (
					<NeoLink {...args}>
						<strong>Custom content</strong> with <em>formatting</em>
					</NeoLink>
				)
			},
		})
	},
}

export const OnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
}

export const RTL: Story = {
	tags: ['snapshot'],
	globals: {
		direction: 'rtl',
	},
	args: {
		text: 'انقر هنا',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
}

export const AllColors: Story = {
	tags: ['snapshot'],
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: createSimpleColorShowcase(NeoLink, ['default', 'underline', 'button'], {
		defaultProps: {
			href: '#',
		},
	}),
}

export const AllColorsOnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: createSimpleColorShowcase(NeoLink, ['default', 'underline', 'button'], {
		defaultProps: {
			href: '#',
		},
		dark: true,
	}),
}

export const AllColorsA11y: Story = {
	...AllColors,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}

export const AllColorsOnDarkA11y: Story = {
	...AllColorsOnDark,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}
