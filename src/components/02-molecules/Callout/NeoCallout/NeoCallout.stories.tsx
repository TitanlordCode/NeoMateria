import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, h } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import { colors } from '@/assets/typescript/colors'
import { createAllColorsRender } from '../../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../../.storybook/utils/createA11yPlay'
import NeoCallout from './NeoCallout.vue'
import type { NeoCalloutProps } from './NeoCalloutTypes'
import { calloutVariants, calloutSizes } from './NeoCalloutTypes'
import NeoLink from '@/components/01-atoms/Link/NeoLink.vue'
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
			description:
				'`bordered` — outline box. `filled` — solid background. `accent` — left-edge accent border with subtle neutral background, typical for inline annotations.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			options: calloutSizes,
			description:
				'Controls padding and font size. `small` is intended for inline annotations / section labels; `medium` is the default for prominent callouts.',
			table: { category: 'Appearance' },
		},
		rounded: {
			control: 'boolean',
			description:
				'Applies rounded corners. Default is sharp corners. On the `accent` variant the start-side corners stay sharp regardless so the accent edge reads as a single straight line.',
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
	parameters: {
		snapshot: { viewports: ['sm', 'md', 'lg', 'xl'] },
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

export const Rounded: Story = {
	tags: ['snapshot'],
	args: { color: 'blue', variant: 'bordered', rounded: true },
	render: (args: NeoCalloutProps) => {
		return defineComponent({
			name: 'RoundedRender',
			setup() {
				return () => (
					<NeoCallout {...args}>
						Opt into rounded corners with the <code>rounded</code> prop. Default is sharp so the
						callout sits flush against grid edges and matches the rest of the library.
					</NeoCallout>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoCallout color="blue" variant="bordered" rounded>
  Opt into rounded corners with the rounded prop.
</NeoCallout>`,
			},
		},
	},
}

export const Accent: Story = {
	tags: ['snapshot'],
	args: { color: 'blue', variant: 'accent', size: 'small' },
	render: (args: NeoCalloutProps) => {
		return defineComponent({
			name: 'AccentRender',
			setup() {
				return () => (
					<NeoCallout {...args}>
						Inline annotation: left-edge accent border with subtle neutral background. Pairs well
						with <code>size="small"</code> for section labels and form hints.
					</NeoCallout>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoCallout color="blue" variant="accent" size="small">
  Inline annotation: left-edge accent border with subtle neutral background.
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

export const WithLink: Story = {
	tags: ['snapshot'],
	args: { color: 'blue', variant: 'bordered' },
	render: (args: NeoCalloutProps) => {
		return defineComponent({
			name: 'WithLinkRender',
			setup() {
				return () => (
					<NeoCallout {...args} v-slots={{ icon: () => InfoIcon }}>
						This feature is currently in beta.{' '}
						<NeoLink href="https://example.com/changelog" size="medium" color="blue">
							Read the changelog
						</NeoLink>{' '}
						for the latest updates.
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
  This feature is currently in beta.
  <NeoLink href="https://example.com/changelog" size="medium" color="blue">
    Read the changelog
  </NeoLink>
  for the latest updates.
</NeoCallout>`,
			},
		},
	},
}

export const FilledWithLink: Story = {
	tags: ['snapshot'],
	args: { color: 'green', variant: 'filled' },
	render: (args: NeoCalloutProps) => {
		return defineComponent({
			name: 'FilledWithLinkRender',
			setup() {
				return () => (
					<NeoCallout {...args} v-slots={{ icon: () => InfoIcon }}>
						Your changes were saved successfully.{' '}
						<NeoLink href="https://example.com/details" size="medium" color="blue">
							View details
						</NeoLink>
						.
					</NeoCallout>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoCallout color="green" variant="filled">
  <template #icon>${infoIconSvg}</template>
  Your changes were saved successfully.
  <NeoLink href="https://example.com/details" size="medium" color="blue">
    View details
  </NeoLink>.
</NeoCallout>`,
			},
		},
	},
}

export const AllColorsWithLink: Story = {
	tags: ['snapshot'],
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: createAllColorsRender<typeof NeoCallout>(NeoCallout, [
		{
			name: 'Bordered with link',
			variant: 'bordered',
			renderComponent: (color, Component) =>
				h(
					Component,
					{ color, variant: 'bordered' },
					{
						default: () => [
							`${color} bordered — `,
							h(
								NeoLink,
								{ href: 'https://example.com', size: 'medium', color: 'blue' },
								{ default: () => 'nested link' },
							),
						],
						icon: () => InfoIcon,
					},
				),
		},
		{
			name: 'Filled with link',
			variant: 'filled',
			renderComponent: (color, Component) =>
				h(
					Component,
					{ color, variant: 'filled' },
					{
						default: () => [
							`${color} filled — `,
							h(
								NeoLink,
								{ href: 'https://example.com', size: 'medium', color: 'blue' },
								{ default: () => 'nested link' },
							),
						],
						icon: () => InfoIcon,
					},
				),
		},
	]),
}

export const AllColorsWithLinkA11y: Story = {
	...AllColorsWithLink,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}

export const RTL: Story = {
	tags: ['snapshot'],
	globals: {
		direction: 'rtl',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
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
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
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
