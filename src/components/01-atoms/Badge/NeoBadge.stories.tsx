import type { Meta, StoryObj } from '@storybook/vue3'
import NeoBadge from './NeoBadge.vue'
import { colors } from '@/assets/typescript/colors'
import { defineComponent } from 'vue'
import type { NeoBadgeProps } from './NeoBadgeTypes'

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

export const Default: Story = {}

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
	render: (args: NeoBadgeProps) => {
		return defineComponent({
			name: 'StatusBadgesRender',
			setup() {
				return () => (
					<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
						<NeoBadge {...args} color="green" text="Active" />
						<NeoBadge {...args} color="yellow" text="Pending" />
						<NeoBadge {...args} color="red" text="Error" />
						<NeoBadge {...args} color="grey" text="Inactive" />
					</div>
				)
			},
		})
	},
}

export const WithNotification: Story = {
	render: (args: NeoBadgeProps) => {
		return defineComponent({
			name: 'WithNotificationRender',
			setup() {
				return () => (
					<div style={{ position: 'relative', display: 'inline-block' }}>
						<button
							style={{
								padding: '12px 24px',
								background: 'var(--neo-color-blue500)',
								color: 'var(--neo-color-white)',
								border: 'none',
								borderRadius: '4px',
								cursor: 'pointer',
							}}
						>
							Notifications
						</button>
						<NeoBadge
							{...args}
							variant="solid"
							size="small"
							color="red"
							text="5"
							style={{ position: 'absolute', top: '-8px', right: '-8px' }}
						/>
					</div>
				)
			},
		})
	},
}

export const DotIndicator: Story = {
	render: (args: NeoBadgeProps) => {
		return defineComponent({
			name: 'DotIndicatorRender',
			setup() {
				return () => (
					<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<NeoBadge {...args} variant="dot" color="green" />
						<span>Online</span>
					</div>
				)
			},
		})
	},
}
