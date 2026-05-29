import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { colors } from '@/assets/typescript/colors'
import NeoStat from './NeoStat.vue'
import type { NeoStatProps } from './NeoStatTypes'
import { statSizes } from './NeoStatTypes'

const meta = {
	title: 'Molecules/NeoStat',
	component: NeoStat,
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: 'text',
			table: { category: 'Content' },
			description: 'The headline statistic, displayed prominently.',
		},
		label: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Descriptive caption shown beneath the value.',
		},
		color: {
			control: 'select',
			options: colors,
			description: 'Accent color applied to the value.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			options: statSizes,
			description: 'Controls the font size of the value and label.',
			table: { category: 'Appearance' },
		},
	},
	args: {
		value: '12,400',
		label: 'Active users',
		size: 'md',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'md', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoStat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
	render: (args: NeoStatProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => <NeoStat {...args} />
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoStat value="12,400" label="Active users" />`,
			},
		},
	},
}

export const Colored: Story = {
	tags: ['snapshot'],
	args: { color: 'blue' },
	render: (args: NeoStatProps) => {
		return defineComponent({
			name: 'ColoredRender',
			setup() {
				return () => <NeoStat {...args} />
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoStat value="12,400" label="Active users" color="blue" />`,
			},
		},
	},
}

export const AllSizes: Story = {
	tags: ['no-test'],
	render: () => {
		return defineComponent({
			name: 'AllSizesRender',
			setup() {
				return () => (
					<div style={{ display: 'flex', gap: '48px', alignItems: 'flex-end' }}>
						<NeoStat value="99k" label="Small" size="sm" color="blue" />
						<NeoStat value="99k" label="Medium" size="md" color="blue" />
						<NeoStat value="99k" label="Large" size="lg" color="blue" />
					</div>
				)
			},
		})
	},
}

export const StatRow: Story = {
	tags: ['no-test'],
	render: () => {
		return defineComponent({
			name: 'StatRowRender',
			setup() {
				const stats = [
					{ value: '12,400', label: 'Active users', color: 'blue' },
					{ value: '98.2%', label: 'Uptime', color: 'green' },
					{ value: '4.9★', label: 'Rating', color: 'amber' },
					{ value: '2.1s', label: 'Load time', color: 'purple' },
				]
				return () => (
					<div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
						{stats.map((stat) => (
							<NeoStat
								key={stat.label}
								value={stat.value}
								label={stat.label}
								color={stat.color as never}
							/>
						))}
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoStat value="12,400" label="Active users" color="blue" />
<NeoStat value="98.2%" label="Uptime" color="green" />
<NeoStat value="4.9★" label="Rating" color="amber" />
<NeoStat value="2.1s" label="Load time" color="purple" />`,
			},
		},
	},
}
