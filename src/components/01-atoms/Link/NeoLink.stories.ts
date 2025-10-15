import type { Meta, StoryObj } from '@storybook/vue3'
import NeoLink from './NeoLink.vue'

const meta = {
	title: 'Atoms/NeoLink',
	component: NeoLink,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		variant: {
			control: 'select',
			options: ['default', 'underline', 'button'],
		},
		target: {
			control: 'select',
			options: ['_blank', '_self', '_parent', '_top'],
		},
		color: {
			control: 'select',
			options: ['grey500', 'blue500', 'red500', 'green500', 'yellow500', 'purple500'],
		},
	},
	args: {
		href: 'https://example.com',
		text: 'Click me',
		size: 'medium',
		variant: 'default',
		color: 'blue500',
	},
} satisfies Meta<typeof NeoLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}

export const Underline: Story = {
	args: {
		variant: 'underline',
	},
}

export const Button: Story = {
	args: {
		variant: 'button',
	},
}

export const External: Story = {
	args: {
		external: true,
		target: '_blank',
		text: 'Open in new tab',
	},
}

export const Disabled: Story = {
	args: {
		disabled: true,
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

export const WithSlot: Story = {
	render: (args) => ({
		components: { NeoLink },
		setup() {
			return { args }
		},
		template: `
			<NeoLink v-bind="args">
				<strong>Custom content</strong> with <em>formatting</em>
			</NeoLink>
		`,
	}),
}
