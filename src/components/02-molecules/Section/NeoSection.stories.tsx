import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import NeoSection from './NeoSection.vue'
import type { NeoSectionProps } from './NeoSectionTypes'

const meta = {
	title: 'Molecules/NeoSection',
	component: NeoSection,
	tags: ['autodocs'],
	argTypes: {
		fullWidth: {
			control: 'boolean',
			description:
				'Removes the global max-width cap, stretching the 12 columns across the full viewport (minus padding).',
			table: { category: 'Appearance' },
		},
		columnGap: {
			control: 'text',
			description: 'Sets the column-gap between grid columns. Use a CSS variable or a pixel value.',
			table: { category: 'Appearance' },
		},
		rowGap: {
			control: 'text',
			description: 'Sets the row-gap between wrapped rows. Defaults to 0.',
			table: { category: 'Appearance' },
		},
		padding: {
			control: 'text',
			description:
				'Overrides the inline padding (gutter) of the section. Accepts a CSS length or variable.',
			table: { category: 'Appearance' },
		},
	},
	args: {
		fullWidth: false,
		columnGap: 'var(--neo-gap-md)',
		rowGap: '0',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'md', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoSection>

export default meta
type Story = StoryObj<typeof meta>

const GridVisualizer = () => (
	<>
		<div
			style={{
				background: 'var(--neo-color-blue500)',
				color: 'white',
				padding: '16px',
				textAlign: 'center',
			}}
		>
			Default: Spans 12 Columns (Full Container)
		</div>
		<div
			style={{
				background: 'var(--neo-color-green500)',
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
				background: 'var(--neo-color-orange500)',
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
								background: 'var(--neo-color-purple500)',
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
		columnGap: '32px',
		rowGap: '16px',
	},
	render: (args: NeoSectionProps) => {
		return defineComponent({
			name: 'CustomGapRender',
			setup() {
				return () => (
					<NeoSection {...args}>
						<div
							style={{
								gridColumn: 'span 4',
								background: 'var(--neo-color-grey200)',
								padding: '10px',
							}}
						>
							Column 1
						</div>
						<div
							style={{
								gridColumn: 'span 4',
								background: 'var(--neo-color-grey200)',
								padding: '10px',
							}}
						>
							Column 2
						</div>
						<div
							style={{
								gridColumn: 'span 4',
								background: 'var(--neo-color-grey200)',
								padding: '10px',
							}}
						>
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
						<div
							style={{ background: 'var(--neo-color-grey800)', color: 'white', padding: '16px' }}
						>
							Standard Container
						</div>
						<div
							style={{
								gridColumn: 'full-start / full-end',
								background: 'var(--neo-color-red500)',
								color: 'white',
								padding: '16px',
								textAlign: 'center',
							}}
						>
							Full Bleed (Ignores Max-Width and Padding)
						</div>
					</NeoSection>
				)
			},
		})
	},
}
