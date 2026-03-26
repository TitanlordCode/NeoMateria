import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent } from 'vue'
import { colors, type Color } from '@/assets/typescript/colors'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import { getColorWrapper } from '../../../../.storybook/utils/colorShowcase'
import { placeholder } from '../../../../.storybook/utils/placeholder'

import NeoProgressPanel from './NeoProgressPanel.vue'
import NeoPennant from '@/components/01-atoms/Pennant/NeoPennant.vue'
import type { NeoProgressPanelProps } from './NeoProgressPanelTypes'

const surfaceColors = colors.filter((color): color is SurfaceColor => color !== 'white')

const meta = {
	title: 'Molecules/NeoProgressPanel',
	component: NeoProgressPanel,
	tags: ['autodocs'],
	argTypes: {
		color: {
			description: 'Theme color for the progress bar fill and border accent.',
			table: { category: 'Appearance' },
		},
		value: {
			control: { type: 'range', min: 0, max: 100, step: 1 },
			description: 'Progress value from 0–100. Drives the width of the progress bar fill.',
			table: { category: 'Content' },
		},
		valueLabel: {
			control: 'text',
			description: "Text displayed below the progress bar (e.g. `'completed'`, `'of total'`, `'pts'`).",
			table: { category: 'Content' },
		},
		subtitle: {
			control: 'text',
			description: 'Optional secondary line below the title — e.g. genre, author, or year.',
			table: { category: 'Content' },
		},
		rounded: {
			control: 'boolean',
			description: 'Applies rounded corners.',
			table: { category: 'Appearance' },
		},
		href: {
			control: 'text',
			description: 'Makes the entire panel a link. When set, the image and title become a single anchor.',
			table: { category: 'Behavior' },
		},
		external: {
			control: 'boolean',
			description: 'Opens the link in a new tab and adds `rel="noopener noreferrer"`. Requires `href`.',
			table: { category: 'Behavior' },
		},
		imageSrc: {
			control: 'text',
			description: 'URL of the cover image displayed on the left side of the panel.',
			table: { category: 'Content' },
		},
		imageAlt: {
			control: 'text',
			description: 'Alt text for the cover image.',
			table: { category: 'Content' },
		},
		title: {
			control: 'text',
			description: 'Primary label for the item. Clamped to 2 lines — override via `--NeoProgressPanel-sizing-titleClamp`.',
			table: { category: 'Content' },
		},
	},
	args: {
		color: 'blue',
		imageSrc: 'https://picsum.photos/seed/progresspanel1/200/300',
		imageAlt: 'Cover image',
		title: 'Item Title',
		value: 68,
		valueLabel: 'completed',
	},
} satisfies Meta<typeof NeoProgressPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args: NeoProgressPanelProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => (
					<div style={{ inlineSize: '320px', padding: '16px' }}>
						<NeoProgressPanel {...args} />
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  :value="68"
  value-label="completed"
/>`,
			},
		},
	},
}

export const WithSubtitle: Story = {
	args: {
		subtitle: 'Action · 2024',
		imageSrc: placeholder(200, 300),
	},
	render: (args: NeoProgressPanelProps) => {
		return defineComponent({
			name: 'WithSubtitleRender',
			setup() {
				return () => (
					<div style={{ inlineSize: '320px', padding: '16px' }}>
						<NeoProgressPanel {...args} />
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  subtitle="Action · 2024"
  :value="68"
  value-label="completed"
/>`,
			},
		},
	},
}

export const WithPennant: Story = {
	args: {
		imageSrc: placeholder(200, 300),
		title: 'First Place Entry',
		subtitle: 'Drama · 2024',
		value: 84,
		valueLabel: 'completed',
	},
	render: (args: NeoProgressPanelProps) => {
		return defineComponent({
			name: 'WithPennantRender',
			setup() {
				return () => (
					<div style={{ inlineSize: '320px', padding: '16px' }}>
						<NeoProgressPanel {...args}>
							{{
								pennant: () => (
									<NeoPennant color={args.color ?? 'blue'}>
										<span style={{ fontSize: '1rem', fontWeight: '700' }}>1</span>
									</NeoPennant>
								),
							}}
						</NeoProgressPanel>
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="First Place Entry"
  subtitle="Drama · 2024"
  :value="84"
  value-label="completed"
>
  <template #pennant>
    <NeoPennant color="blue">
      <span style="font-size: 1rem; font-weight: 700">1</span>
    </NeoPennant>
  </template>
</NeoProgressPanel>`,
			},
		},
	},
}

export const Clickable: Story = {
	args: {
		imageSrc: placeholder(200, 300),
		href: '#item-details',
	},
	render: (args: NeoProgressPanelProps) => {
		return defineComponent({
			name: 'ClickableRender',
			setup() {
				return () => (
					<div style={{ inlineSize: '320px', padding: '16px' }}>
						<NeoProgressPanel {...args} />
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="Item Title"
  :value="68"
  href="#item-details"
/>`,
			},
		},
	},
}

export const LongText: Story = {
	args: {
		imageSrc: placeholder(200, 300),
		title: 'An Extraordinarily Long Title That Demonstrates How Line Clamping Works in Practice',
		subtitle: 'Adventure · Science Fiction · Thriller · 2024',
		valueLabel: 'of the total target value for this reporting period',
		value: 42,
	},
	render: (args: NeoProgressPanelProps) => {
		return defineComponent({
			name: 'LongTextRender',
			setup() {
				return () => (
					<div style={{ inlineSize: '320px', padding: '16px' }}>
						<NeoProgressPanel {...args} />
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoProgressPanel
  color="blue"
  image-src="..."
  image-alt="Cover image"
  title="An Extraordinarily Long Title That Demonstrates How Line Clamping Works in Practice"
  subtitle="Adventure · Science Fiction · Thriller · 2024"
  :value="42"
  value-label="of the total target value for this reporting period"
/>`,
			},
		},
	},
}

export const TopThree: Story = {
	render: () => {
		return defineComponent({
			name: 'TopThreeRender',
			setup() {
				const items = [
					{
						color: 'blue' as Color,
						imageSrc: placeholder(200, 300),
						imageAlt: 'First place cover',
						title: 'First Place Item',
						subtitle: 'Drama · 2024',
						value: 42,
						valueLabel: 'completed',
						rank: '1',
					},
					{
						color: 'grey' as Color,
						imageSrc: placeholder(200, 300),
						imageAlt: 'Second place cover',
						title: 'Second Place Item',
						subtitle: 'Action · 2023',
						value: 31,
						valueLabel: 'completed',
						rank: '2',
					},
					{
						color: 'red' as Color,
						imageSrc: placeholder(200, 300),
						imageAlt: 'Third place cover',
						title: 'Third Place Item',
						subtitle: 'Comedy · 2024',
						value: 27,
						valueLabel: 'completed',
						rank: '3',
					},
				]

				return () => (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '12px',
							inlineSize: '320px',
							padding: '16px',
						}}
					>
						{items.map((item) => (
							<NeoProgressPanel key={item.rank} {...item}>
								{{
									pennant: () => (
										<NeoPennant color={item.color}>
											<span style={{ fontSize: '1rem', fontWeight: '700' }}>{item.rank}</span>
										</NeoPennant>
									),
								}}
							</NeoProgressPanel>
						))}
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoProgressPanel color="blue" title="First Place Item" :value="42" value-label="completed">
  <template #pennant>
    <NeoPennant color="blue">
      <span style="font-size: 1rem; font-weight: 700">1</span>
    </NeoPennant>
  </template>
</NeoProgressPanel>
<NeoProgressPanel color="grey" title="Second Place Item" :value="31" value-label="completed">
  <template #pennant>
    <NeoPennant color="grey">
      <span style="font-size: 1rem; font-weight: 700">2</span>
    </NeoPennant>
  </template>
</NeoProgressPanel>
<NeoProgressPanel color="red" title="Third Place Item" :value="27" value-label="completed">
  <template #pennant>
    <NeoPennant color="red">
      <span style="font-size: 1rem; font-weight: 700">3</span>
    </NeoPennant>
  </template>
</NeoProgressPanel>`,
			},
		},
	},
}

export const AllColors: Story = {
	render: (args: NeoProgressPanelProps) => {
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
								'NeoProgressPanel',
								color,
								<NeoProgressPanel
									key={color}
									{...args}
									color={color}
									imageSrc={placeholder(200, 300)}
									imageAlt="Cover placeholder"
									title={color}
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
	render: (args: NeoProgressPanelProps) => {
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
								'NeoProgressPanel',
								color,
								<NeoProgressPanel
									key={color}
									{...args}
									color={color}
									imageSrc={placeholder(200, 300)}
									imageAlt="Cover placeholder"
									title={color}
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
