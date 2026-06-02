import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NeoBadge from './NeoBadge.vue'
import type { NeoBadgeProps } from './NeoBadgeTypes'
import { badgeSizes, badgeVariants } from './NeoBadgeTypes'
import { defineComponent } from 'vue'
import { fn } from 'storybook/test'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../.storybook/utils/createA11yPlay'

const meta = {
	title: 'Atoms/NeoBadge',
	component: NeoBadge,
	tags: ['autodocs', 'grimeria'],
	argTypes: {
		text: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Badge label text. Hidden when `variant` is `dot`.',
		},
		color: {
			description: 'Theme color for the badge.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			options: badgeSizes,
			description: 'Controls padding and font size.',
			table: { category: 'Appearance' },
		},
		variant: {
			control: 'select',
			options: badgeVariants,
			description:
				'`solid`: filled background. `outlined`: border only with transparent background. `dot`: shows only a small colored dot, no text.',
			table: { category: 'Appearance' },
		},
		rounded: {
			control: 'boolean',
			description: 'Applies fully rounded corners for a pill shape.',
			table: { category: 'Appearance' },
		},
		dismissible: {
			control: 'boolean',
			description:
				'Shows a close button that emits `dismiss` when clicked. Useful for removable filter tags.',
			table: { category: 'Behavior' },
		},
		default: {
			control: false,
			description: 'Badge label content. Falls back to the `text` prop if empty.',
			table: { category: 'Slots' },
		},
	},
	args: {
		text: 'Badge',
		size: 'medium',
		variant: 'solid',
		color: 'blue',
		onDismiss: fn(),
	},
	parameters: {
		snapshot: { viewports: ['sm', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
}

export const Outlined: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'outlined',
	},
}

export const Dot: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'dot',
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

export const Rounded: Story = {
	tags: ['snapshot'],
	args: {
		rounded: true,
		text: 'Rounded Badge',
	},
}

export const StatusBadges: Story = {
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<div style="display: flex; gap: 12px; flex-wrap: wrap;">
  <NeoBadge color="green" text="Active" />
  <NeoBadge color="yellow" text="Pending" />
  <NeoBadge color="red" text="Error" />
  <NeoBadge color="grey" text="Inactive" />
</div>`,
			},
		},
	},
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
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<div style="position: relative; display: inline-block;">
  <button>Notifications</button>
  <NeoBadge
    variant="solid"
    size="small"
    color="red"
    text="5"
    style="position: absolute; top: -8px; right: -8px;"
  />
</div>`,
			},
		},
	},
	render: (args: NeoBadgeProps) => {
		return defineComponent({
			name: 'WithNotificationRender',
			setup() {
				return () => (
					<div style={{ position: 'relative', display: 'inline-block' }}>
						<button
							style={{
								padding: '12px 24px',
								background: 'var(--neo-color-blue700)',
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
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<div style="display: flex; align-items: center; gap: 8px;">
  <NeoBadge variant="dot" color="green" />
  <span>Online</span>
</div>`,
			},
		},
	},
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

export const Dismissible: Story = {
	tags: ['snapshot'],
	args: {
		dismissible: true,
		text: 'Dismissible Badge',
		rounded: true,
	},
}

export const DismissibleTags: Story = {
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const tags = ref(['TypeScript', 'Vue', 'React', 'Angular'])
const dismiss = (tag) => tags.value = tags.value.filter(existingTag => existingTag !== tag)
</script>

<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <NeoBadge
      v-for="tag in tags"
      :key="tag"
      :text="tag"
      color="blue"
      dismissible
      rounded
      @dismiss="dismiss(tag)"
    />
  </div>
</template>`,
			},
		},
	},
	render: (args: NeoBadgeProps) => {
		return defineComponent({
			name: 'DismissibleTagsRender',
			setup() {
				const tags = ['TypeScript', 'Vue', 'React', 'Angular']
				return () => (
					<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
						{tags.map((tag) => (
							<NeoBadge
								{...args}
								key={tag}
								text={tag}
								dismissible
								rounded
								onDismiss={() => console.log(`Dismissed: ${tag}`)}
							/>
						))}
					</div>
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
		text: 'نشاط',
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
	render: createSimpleColorShowcase(NeoBadge, [
		'solid',
		'outlined',
		{
			variant: 'dot',
			label: 'Dot Variant',
			render: (color, _, args) => (
				<div key={color} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
					<NeoBadge {...args} variant="dot" color={color} />
					<span>{color}</span>
				</div>
			),
		},
	]),
}

export const AllColorsOnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: createSimpleColorShowcase(
		NeoBadge,
		[
			'solid',
			'outlined',
			{
				variant: 'dot',
				label: 'Dot Variant',
				render: (color, _, args) => (
					<div key={color} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
						<NeoBadge {...args} variant="dot" color={color} />
						<span class="NeoBadge-dotLabel">{color}</span>
					</div>
				),
			},
		],
		{
			dark: true,
		},
	),
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
