import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { colors } from '@/assets/typescript/colors'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import { getColorWrapper } from '../../../../.storybook/utils/colorShowcase'

const surfaceColors = colors.filter((color): color is SurfaceColor => color !== 'white')

import NeoProgressBar from './NeoProgressBar.vue'
import type { NeoProgressBarProps } from './NeoProgressBarTypes'

const meta = {
	title: 'Atoms/NeoProgressBar',
	component: NeoProgressBar,
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: { type: 'range', min: 0, max: 100, step: 1 },
			description:
				'Progress value from 0–100. Values outside this range are clamped automatically.',
			table: { category: 'Content' },
		},
		ariaLabel: {
			control: 'text',
			description:
				'Accessible label applied to `aria-label`. Required — there is no visible label on this component.',
			table: { category: 'Accessibility' },
		},
		color: {
			description: 'Theme color applied to the fill bar.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			description: 'Height of the track. `xs` = 2 px, `small` = 4 px, `medium` = 8 px.',
			table: { category: 'Appearance' },
		},
		rounded: {
			control: 'boolean',
			description: 'Applies fully rounded caps to the track and fill.',
			table: { category: 'Appearance' },
		},
	},
	args: {
		value: 68,
		ariaLabel: '68% complete',
		color: 'blue',
		size: 'small',
		rounded: false,
	},
} satisfies Meta<typeof NeoProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args: NeoProgressBarProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => (
					<div style={{ inlineSize: '320px', padding: '16px' }}>
						<NeoProgressBar {...args} />
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoProgressBar
  :value="68"
  aria-label="68% complete"
  color="blue"
  size="small"
/>`,
			},
		},
	},
}

export const Sizes: Story = {
	render: (args: NeoProgressBarProps) => {
		return defineComponent({
			name: 'SizesRender',
			setup() {
				const sizes = ['xs', 'small', 'medium'] as const
				return () => (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '16px',
							inlineSize: '320px',
							padding: '16px',
						}}
					>
						{sizes.map((size) => (
							<div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
								<span style={{ fontSize: '0.75rem', color: 'var(--neo-color-grey600)' }}>
									{size}
								</span>
								<NeoProgressBar {...args} size={size} ariaLabel={`${size} size example`} />
							</div>
						))}
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoProgressBar :value="68" aria-label="xs example" size="xs" color="blue" />
<NeoProgressBar :value="68" aria-label="small example" size="small" color="blue" />
<NeoProgressBar :value="68" aria-label="medium example" size="medium" color="blue" />`,
			},
		},
	},
}

export const Rounded: Story = {
	args: { rounded: true, size: 'medium' },
	render: (args: NeoProgressBarProps) => {
		return defineComponent({
			name: 'RoundedRender',
			setup() {
				return () => (
					<div style={{ inlineSize: '320px', padding: '16px' }}>
						<NeoProgressBar {...args} />
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoProgressBar :value="68" aria-label="68% complete" color="blue" size="medium" rounded />`,
			},
		},
	},
}

export const AllColors: Story = {
	render: (args: NeoProgressBarProps) => {
		return defineComponent({
			name: 'AllColorsRender',
			setup() {
				return () => (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '8px',
							maxInlineSize: '360px',
							padding: '16px',
						}}
					>
						{surfaceColors.map((color: SurfaceColor) =>
							getColorWrapper(
								'NeoProgressBar',
								color,
								<NeoProgressBar
									key={color}
									{...args}
									color={color}
									ariaLabel={`${color} progress bar`}
								/>,
								'default',
								false,
							),
						)}
					</div>
				)
			},
		})
	},
}

export const AllColorsOnDark: Story = {
	globals: { backgrounds: '#000' },
	render: (args: NeoProgressBarProps) => {
		return defineComponent({
			name: 'AllColorsOnDarkRender',
			setup() {
				return () => (
					<div
						class="u-onDark"
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '8px',
							maxInlineSize: '360px',
							padding: '16px',
						}}
					>
						{surfaceColors.map((color: SurfaceColor) =>
							getColorWrapper(
								'NeoProgressBar',
								color,
								<NeoProgressBar
									key={color}
									{...args}
									color={color}
									ariaLabel={`${color} progress bar`}
								/>,
								'default',
								true,
							),
						)}
					</div>
				)
			},
		})
	},
}
