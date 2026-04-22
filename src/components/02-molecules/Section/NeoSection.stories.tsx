import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import NeoSection from './NeoSection.vue'

// Interface to match your prop definition
interface NeoSectionProps {
	fullWidth?: boolean
	gap?: string
	padding?: string
}

const meta = {
	title: 'Molecules/NeoSection',
	component: NeoSection,
	tags: ['autodocs'],
	argTypes: {
		fullWidth: {
			control: 'boolean',
			description:
				'If true, ignores the 1280px max-width but maintains the 12-column grid and outer padding.',
			table: { category: 'Appearance' },
		},
		gap: {
			control: 'text',
			description:
				'Sets the column-gap. Use CSS variables like `var(--neo-gap-lg)` or a string like "8px"',
			table: { category: 'Appearance' },
		},
	},
	args: {
		fullWidth: false,
		gap: 'var(--neo-gap-md)',
	},
} satisfies Meta<typeof NeoSection>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Internal helper to render colored blocks to visualize the 12-column grid
 */
const GridVisualizer = () => (
	<>
		<div
			style={{
				background: 'var(--neo-color-blue-500, #3b82f6)',
				color: 'white',
				padding: '16px',
				textAlign: 'center',
			}}
		>
			Default: Spans 12 Columns (Full Container)
		</div>
		<div
			style={{
				background: 'var(--neo-color-green-500, #10b981)',
				color: 'white',
				padding: '16px',
				textAlign: 'center',
				gridColumn: 'content-start / span 6',
			}}
		>
			Manual: Span 6 (Left)
		</div>
		<div
			style={{
				background: 'var(--neo-color-orange-500, #f59e0b)',
				color: 'white',
				padding: '16px',
				textAlign: 'center',
				gridColumn: 'span 6 / content-end',
			}}
		>
			Manual: Span 6 (Right)
		</div>
	</>
)

export const Default: Story = {
	tags: ['snapshot'],
	render: (args: NeoSectionProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => (
					<NeoSection {...args}>
						<GridVisualizer />
					</NeoSection>
				)
			},
		})
	},
}

export const FullWidth: Story = {
	tags: ['snapshot'],
	args: {
		fullWidth: true,
		padding: 'var(--neo-spacing-layout-sm)',
	},
	render: (args: NeoSectionProps) => {
		return defineComponent({
			name: 'FullWidthRender',
			setup() {
				return () => (
					<NeoSection {...args}>
						<div
							style={{
								background: 'var(--neo-color-purple-500, #8b5cf6)',
								color: 'white',
								padding: '16px',
								textAlign: 'center',
							}}
						>
							Full Width Grid (Stretches to Viewport)
						</div>
						<GridVisualizer />
					</NeoSection>
				)
			},
		})
	},
}

export const CustomGap: Story = {
	tags: ['snapshot'],
	args: {
		gap: 'var(--neo-gap-xl)',
	},
	render: (args: NeoSectionProps) => {
		return defineComponent({
			name: 'CustomGapRender',
			setup() {
				return () => (
					<NeoSection {...args}>
						<div style={{ gridColumn: 'span 4', background: '#eee', padding: '10px' }}>
							Column 1
						</div>
						<div style={{ gridColumn: 'span 4', background: '#eee', padding: '10px' }}>
							Column 2
						</div>
						<div style={{ gridColumn: 'span 4', background: '#eee', padding: '10px' }}>
							Column 3
						</div>
					</NeoSection>
				)
			},
		})
	},
}

export const FullBleedChild: Story = {
	tags: ['snapshot'],
	name: 'Breaking the Container',
	render: (args: NeoSectionProps) => {
		return defineComponent({
			name: 'FullBleedRender',
			setup() {
				return () => (
					<NeoSection {...args}>
						<div style={{ background: '#333', color: 'white', padding: '16px' }}>
							Standard Container
						</div>
						<div
							style={{
								gridColumn: 'full-start / full-end',
								background: 'var(--neo-color-red-500, #ef4444)',
								color: 'white',
								padding: '16px',
								textAlign: 'center',
							}}
						>
							Full Bleed (Ignores 1280px and Padding)
						</div>
					</NeoSection>
				)
			},
		})
	},
}
