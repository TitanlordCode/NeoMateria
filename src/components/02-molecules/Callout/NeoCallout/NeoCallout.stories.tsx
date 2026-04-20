import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, h } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import { colors } from '@/assets/typescript/colors'
import { createAllColorsRender } from '../../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../../.storybook/utils/createA11yPlay'
import NeoCallout from './NeoCallout.vue'
import type { NeoCalloutProps } from './NeoCalloutTypes'
import { calloutVariants } from './NeoCalloutTypes'
import { InfoIcon } from '@/components/01-atoms/Icon/defaultIcons'
import { infoIconSvg } from '../../../../../.storybook/utils/iconSnippets'

const surfaceColors = colors.filter((color): color is SurfaceColor => color !== 'white')

const meta = {
	title: 'Molecules/NeoCallout',
	component: NeoCallout,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: surfaceColors,
			description: 'Theme color. Sets border/background and text color.',
			table: { category: 'Appearance' },
		},
		variant: {
			control: 'select',
			options: calloutVariants,
			description: '`bordered` — outline box. `filled` — solid background.',
			table: { category: 'Appearance' },
		},
		icon: {
			control: false,
			description: 'Optional icon displayed at the start of the callout.',
			table: { category: 'Slots' },
		},
		default: { control: false, description: 'Main callout content.', table: { category: 'Slots' } },
	},
	args: {
		color: 'blue',
		variant: 'bordered',
	},
} satisfies Meta<typeof NeoCallout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
	render: (args: NeoCalloutProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => (
					<NeoCallout {...args}>
						This feature is currently in beta. Behaviour may change in future releases.
					</NeoCallout>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoCallout color="blue">
  This feature is currently in beta.
</NeoCallout>`,
			},
		},
	},
}

export const WithIcon: Story = {
	tags: ['snapshot'],
	args: { color: 'blue', variant: 'bordered' },
	render: (args: NeoCalloutProps) => {
		return defineComponent({
			name: 'WithIconRender',
			setup() {
				return () => (
					<NeoCallout {...args} v-slots={{ icon: () => InfoIcon }}>
						This feature is currently in beta. Behaviour may change in future releases.
					</NeoCallout>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoCallout color="blue" variant="bordered">
  <template #icon>${infoIconSvg}</template>
  This feature is currently in beta. Behaviour may change in future releases.
</NeoCallout>`,
			},
		},
	},
}

export const Filled: Story = {
	tags: ['snapshot'],
	args: { color: 'blue', variant: 'filled' },
	render: (args: NeoCalloutProps) => {
		return defineComponent({
			name: 'FilledRender',
			setup() {
				return () => (
					<NeoCallout {...args} v-slots={{ icon: () => InfoIcon }}>
						Your session will expire in 5 minutes. Save your work to avoid losing progress.
					</NeoCallout>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoCallout color="blue" variant="filled">
  <template #icon>${infoIconSvg}</template>
  Your session will expire in 5 minutes.
</NeoCallout>`,
			},
		},
	},
}

export const RTL: Story = {
	tags: ['snapshot'],
	globals: {
		direction: 'rtl',
	},
	render: (args: NeoCalloutProps) => {
		return defineComponent({
			name: 'RTLRender',
			setup() {
				return () => <NeoCallout {...args}>هذا إشعار مهم يحتاج إلى انتباهك.</NeoCallout>
			},
		})
	},
}

export const AllColors: Story = {
	tags: ['snapshot'],
	render: createAllColorsRender<typeof NeoCallout>(NeoCallout, [
		{
			name: 'Bordered',
			variant: 'bordered',
			renderComponent: (color, Component) =>
				h(
					Component,
					{ color, variant: 'bordered' },
					{ default: () => `${color} — bordered callout`, icon: () => InfoIcon },
				),
		},
	]),
}

export const AllColorsFilled: Story = {
	tags: ['snapshot'],
	render: () => {
		return defineComponent({
			name: 'AllColorsFilledRender',
			setup() {
				return () => (
					<div
						style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxInlineSize: '480px' }}
					>
						{surfaceColors.map((color) => (
							<NeoCallout
								key={color}
								color={color}
								variant="filled"
								v-slots={{ icon: () => InfoIcon }}
							>
								{color} — filled callout
							</NeoCallout>
						))}
					</div>
				)
			},
		})
	},
}

export const AllColorsA11y: Story = {
	...AllColors,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}

export const AllColorsFilledA11y: Story = {
	...AllColorsFilled,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}
