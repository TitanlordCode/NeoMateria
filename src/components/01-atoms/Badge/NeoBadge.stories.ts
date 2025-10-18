import type { Meta, StoryObj } from '@storybook/vue3'
import NeoBadge from './NeoBadge.vue'
import { colors } from '@/assets/typescript/colors'

const meta = {
	title: 'Atoms/NeoBadge',
	component: NeoBadge,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		variant: {
			control: 'select',
			options: ['solid', 'outlined', 'dot'],
		},
		color: {
			control: 'select',
			options: colors,
		},
	},
	args: {
		text: 'Badge',
		size: 'medium',
		variant: 'solid',
		color: 'blue',
	},
} satisfies Meta<typeof NeoBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}

export const Outlined: Story = {
	args: {
		variant: 'outlined',
	},
}

export const Dot: Story = {
	args: {
		variant: 'dot',
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

export const Rounded: Story = {
	args: {
		rounded: true,
		text: 'Rounded Badge',
	},
}

export const StatusBadges: Story = {
	render: (args) => ({
		components: { NeoBadge },
		setup() {
			return { args }
		},
		template: `
			<div style="display: flex; gap: 12px; flex-wrap: wrap;">
				<NeoBadge v-bind="args" color="green500" text="Active" />
				<NeoBadge v-bind="args" color="yellow500" text="Pending" />
				<NeoBadge v-bind="args" color="red500" text="Error" />
				<NeoBadge v-bind="args" color="grey500" text="Inactive" />
			</div>
		`,
	}),
}

export const WithNotification: Story = {
	render: (args) => ({
		components: { NeoBadge },
		setup() {
			return { args }
		},
		template: `
			<div style="position: relative; display: inline-block;">
				<button style="padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">
					Notifications
				</button>
				<NeoBadge
					v-bind="args"
					variant="solid"
					size="small"
					color="red500"
					text="5"
					style="position: absolute; top: -8px; right: -8px;"
				/>
			</div>
		`,
	}),
}

export const DotIndicator: Story = {
	render: (args) => ({
		components: { NeoBadge },
		setup() {
			return { args }
		},
		template: `
			<div style="display: flex; align-items: center; gap: 8px;">
				<NeoBadge v-bind="args" variant="dot" color="green500" />
				<span>Online</span>
			</div>
		`,
	}),
}
