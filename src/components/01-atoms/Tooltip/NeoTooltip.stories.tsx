import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NeoTooltip from './NeoTooltip.vue'
import NeoButton from '../Button/NeoButton/NeoButton.vue'
import { tooltipPlacements } from './NeoTooltipTypes'
import { createA11yPlay } from '../../../../.storybook/utils/createA11yPlay'

// Centers the story and adds generous padding so the tooltip never clips against
// the viewport edge regardless of placement. The withTheme decorator above this
// creates a full-width block div, so we must flex-center ourselves.
const withTooltipPadding = () => ({
	template:
		'<div style="display: flex; justify-content: center; align-items: center; min-block-size: 160px; padding: 80px 200px;"><story /></div>',
})

const meta = {
	title: 'Atoms/NeoTooltip',
	component: NeoTooltip,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		text: { control: 'text', table: { category: 'Content' } },
		placement: {
			control: 'select',
			options: tooltipPlacements,
			table: { category: 'Behavior' },
			description: 'Which side of the trigger the tooltip appears on.',
		},
		openDelay: {
			control: 'number',
			table: { category: 'Behavior' },
			description: 'Milliseconds to wait before showing the tooltip.',
		},
		visible: {
			control: 'boolean',
			table: { category: 'State' },
			description: 'Force the tooltip to stay visible (useful for docs and testing).',
		},
	},
	args: {
		text: 'Helpful tooltip text',
		placement: 'top',
		openDelay: 0,
		visible: false,
	},
	render: (args) => ({
		components: { NeoTooltip, NeoButton },
		setup: () => ({ args }),
		template: `
			<NeoTooltip v-bind="args">
				<template #activator>
					<NeoButton color="blue" size="medium" variant="secondary" text="Hover me" />
				</template>
			</NeoTooltip>
		`,
	}),
} satisfies Meta<typeof NeoTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Top: Story = {
	tags: ['snapshot'],
	decorators: [withTooltipPadding],
	args: {
		placement: 'top',
		visible: true,
	},
}

export const Bottom: Story = {
	tags: ['snapshot'],
	decorators: [withTooltipPadding],
	args: {
		placement: 'bottom',
		visible: true,
	},
}

export const Left: Story = {
	tags: ['snapshot'],
	decorators: [withTooltipPadding],
	args: {
		placement: 'left',
		visible: true,
	},
}

export const Right: Story = {
	tags: ['snapshot'],
	decorators: [withTooltipPadding],
	args: {
		placement: 'right',
		visible: true,
	},
}

export const WithDelay: Story = {
	tags: ['no-test'],
	args: {
		openDelay: 500,
	},
}

export const OnDark: Story = {
	tags: ['snapshot'],
	decorators: [withTooltipPadding],
	globals: {
		backgrounds: '#000',
	},
	args: {
		visible: true,
	},
}

export const DefaultA11y: Story = {
	...Top,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}
