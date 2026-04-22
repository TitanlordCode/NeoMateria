import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, ref } from 'vue'
import { placeholder } from '../../../../.storybook/utils/placeholder'

import NeoCoverPanelGrid from './NeoCoverPanelGrid.vue'
import NeoCoverPanel from '@/components/02-molecules/CoverPanel/NeoCoverPanel.vue'
import NeoPennant from '@/components/01-atoms/Pennant/NeoPennant.vue'
import type { NeoCoverPanelGridProps } from './NeoCoverPanelGridTypes'
import { coverPanelGridGaps } from './NeoCoverPanelGridTypes'
import type { Color } from '@/assets/typescript/colors'

const meta = {
	title: 'Organisms/NeoCoverPanelGrid',
	component: NeoCoverPanelGrid,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
A responsive grid layout for \`NeoCoverPanel\` items. Uses CSS \`auto-fill\` with a \`minmax\` column constraint — the grid drops columns as the container narrows, but never exceeds \`columns\`.

**How \`columns\` and \`minColumnWidth\` interact:**
The grid tries to fill as many columns as possible. \`minColumnWidth\` is the floor — a column will never be narrower than this value. \`columns\` is the ceiling — the grid will never add more columns than this even when space allows.

Set \`minColumnWidth\` based on the minimum readable size of your content. Lower values produce more columns at medium widths.
				`,
			},
		},
		controls: { exclude: ['color'] },
	},
	argTypes: {
		columns: {
			control: { type: 'select' },
			options: [2, 3, 4, 5, 6],
			description:
				'Maximum number of columns at full container width. Works with `minColumnWidth` — see component docs for full explanation.',
			table: { category: 'Layout' },
		},
		minColumnWidth: {
			control: { type: 'number', min: 80, max: 400, step: 10 },
			description:
				'Minimum pixel width each column must be before the grid drops a column. Defaults to `160`.',
			table: { category: 'Layout' },
		},
		gap: {
			control: 'select',
			options: coverPanelGridGaps,
			description:
				'Gap between grid items. `small` = `--neo-gap-sm`, `medium` = `--neo-gap-md`, `large` = `--neo-gap-lg`.',
			table: { category: 'Layout' },
		},
	},
	args: {
		columns: 4,
		minColumnWidth: 160,
		gap: 'medium',
	},
} satisfies Meta<typeof NeoCoverPanelGrid>

export default meta
type Story = StoryObj<typeof meta>

const sampleColors = [
	'#64748b',
	'#475569',
	'#334155',
	'#6366f1',
	'#8b5cf6',
	'#ec4899',
	'#ef4444',
	'#f97316',
	'#eab308',
	'#22c55e',
	'#06b6d4',
	'#3b82f6',
]

const sampleItems = Array.from({ length: 12 }, (_, index) => ({
	imageSrc: placeholder(300, 450, sampleColors[index % sampleColors.length]),
	imageAlt: `Cover ${index + 1}`,
	title: `Item ${index + 1}`,
	color: 'blue' as const,
}))

const HeartIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
		style={{ blockSize: '18px', inlineSize: '18px' }}
	>
		<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
	</svg>
)

const HeartFilledIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
		style={{ blockSize: '18px', inlineSize: '18px' }}
	>
		<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
	</svg>
)

const BookmarkIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
		style={{ blockSize: '18px', inlineSize: '18px' }}
	>
		<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
	</svg>
)

const BookmarkFilledIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
		style={{ blockSize: '18px', inlineSize: '18px' }}
	>
		<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
	</svg>
)

const StarPennant = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
	</svg>
)

export const Default: Story = {
	tags: ['snapshot'],
	render: (args: NeoCoverPanelGridProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => (
					<NeoCoverPanelGrid {...args}>
						{sampleItems.map((item) => (
							<NeoCoverPanel
								key={item.imageSrc}
								color={item.color}
								imageSrc={item.imageSrc}
								imageAlt={item.imageAlt}
								title={item.title}
							/>
						))}
					</NeoCoverPanelGrid>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoCoverPanelGrid :columns="4" gap="medium">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>`,
			},
		},
	},
}

export const TwoColumns: Story = {
	tags: ['snapshot'],
	args: { columns: 2 },
	render: (args: NeoCoverPanelGridProps) => {
		return defineComponent({
			name: 'TwoColumnsRender',
			setup() {
				return () => (
					<div style={{ padding: '16px' }}>
						<NeoCoverPanelGrid {...args}>
							{sampleItems.slice(0, 6).map((item) => (
								<NeoCoverPanel
									key={item.imageSrc}
									color={item.color}
									imageSrc={item.imageSrc}
									imageAlt={item.imageAlt}
									title={item.title}
								/>
							))}
						</NeoCoverPanelGrid>
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoCoverPanelGrid :columns="2" gap="medium">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>`,
			},
		},
	},
}

export const SixColumns: Story = {
	tags: ['snapshot'],
	args: { columns: 6, minColumnWidth: 120 },
	render: (args: NeoCoverPanelGridProps) => {
		return defineComponent({
			name: 'SixColumnsRender',
			setup() {
				return () => (
					<div style={{ padding: '16px' }}>
						<NeoCoverPanelGrid {...args}>
							{sampleItems.map((item) => (
								<NeoCoverPanel
									key={item.imageSrc}
									color={item.color}
									imageSrc={item.imageSrc}
									imageAlt={item.imageAlt}
									title={item.title}
									rounded
								/>
							))}
						</NeoCoverPanelGrid>
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoCoverPanelGrid :columns="6" :min-column-width="120" gap="medium">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
    rounded
  />
</NeoCoverPanelGrid>`,
			},
		},
	},
}

/**
 * Pennants let you attach small colored badges to the top edge of each panel.
 * Here each panel shows a rank badge (1–8) and a colored platform indicator.
 * Mix pennant colors and counts per item — up to 5 fit comfortably on a standard-width panel.
 */
export const WithPennants: Story = {
	tags: ['snapshot'],
	render: (args: NeoCoverPanelGridProps) => {
		const pennantConfigs: { rank: Color; platform: Color }[] = [
			{ rank: 'yellow', platform: 'blue' },
			{ rank: 'yellow', platform: 'blueGrey' },
			{ rank: 'yellow', platform: 'purple' },
			{ rank: 'grey', platform: 'red' },
			{ rank: 'grey', platform: 'blue' },
			{ rank: 'grey', platform: 'green' },
			{ rank: 'grey', platform: 'blueGrey' },
			{ rank: 'grey', platform: 'purple' },
		]
		return defineComponent({
			name: 'WithPennantsRender',
			setup() {
				return () => (
					<NeoCoverPanelGrid {...args}>
						{sampleItems.slice(0, 8).map((item, index) => (
							<NeoCoverPanel
								key={item.imageSrc}
								color="blue"
								imageSrc={item.imageSrc}
								imageAlt={item.imageAlt}
								title={item.title}
								rounded
							>
								{{
									pennants: () => (
										<>
											<NeoPennant color={pennantConfigs[index].platform}>{StarPennant}</NeoPennant>
											<NeoPennant color={pennantConfigs[index].rank}>{index + 1}</NeoPennant>
										</>
									),
								}}
							</NeoCoverPanel>
						))}
					</NeoCoverPanelGrid>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoCoverPanelGrid :columns="4" gap="medium">
  <NeoCoverPanel
    v-for="(item, index) in items"
    :key="item.id"
    color="blue"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
    rounded
  >
    <template #pennants>
      <!-- Platform badge -->
      <NeoPennant color="blue"><PlatformIcon /></NeoPennant>
      <!-- Rank badge -->
      <NeoPennant color="yellow">{{ index + 1 }}</NeoPennant>
    </template>
  </NeoCoverPanel>
</NeoCoverPanelGrid>`,
			},
		},
	},
}

/**
 * Real-world grids typically mix panels with different configurations:
 * some have pennants, some have action buttons, some are plain links.
 * This story combines all optional props to show the full range of panel content.
 */
export const MixedContent: Story = {
	tags: ['no-test'],
	render: (args: NeoCoverPanelGridProps) => {
		type RichItem = {
			imageSrc: string
			imageAlt: string
			title: string
			color: Color
			rounded?: boolean
			pennants?: { color: Color; content: 'star' | 'number'; rank?: number }[]
			action?: 'favorite' | 'bookmark'
		}

		const richItems: RichItem[] = [
			{
				imageSrc: placeholder(300, 450, sampleColors[0]),
				imageAlt: 'Cover 1',
				title: 'Item 1',
				color: 'blue',
				rounded: true,
				pennants: [
					{ color: 'blue', content: 'star' },
					{ color: 'yellow', content: 'number', rank: 1 },
				],
				action: 'favorite',
			},
			{
				imageSrc: placeholder(300, 450, sampleColors[1]),
				imageAlt: 'Cover 2',
				title: 'Item 2',
				color: 'purple',
				rounded: true,
				pennants: [{ color: 'yellow', content: 'number', rank: 2 }],
				action: 'bookmark',
			},
			{
				imageSrc: placeholder(300, 450, sampleColors[2]),
				imageAlt: 'Cover 3',
				title: 'Item 3',
				color: 'green',
				rounded: true,
				pennants: [
					{ color: 'green', content: 'star' },
					{ color: 'grey', content: 'number', rank: 3 },
				],
				action: 'favorite',
			},
			{
				imageSrc: placeholder(300, 450, sampleColors[3]),
				imageAlt: 'Cover 4',
				title: 'Item 4',
				color: 'indigo',
				pennants: [{ color: 'red', content: 'star' }],
			},
			{
				imageSrc: placeholder(300, 450, sampleColors[4]),
				imageAlt: 'Cover 5',
				title: 'Item 5',
				color: 'red',
				rounded: true,
				action: 'favorite',
			},
			{
				imageSrc: placeholder(300, 450, sampleColors[5]),
				imageAlt: 'Cover 6',
				title: 'Item 6',
				color: 'pink',
				pennants: [
					{ color: 'purple', content: 'star' },
					{ color: 'pink', content: 'star' },
					{ color: 'grey', content: 'number', rank: 6 },
				],
				action: 'bookmark',
			},
			{
				imageSrc: placeholder(300, 450, sampleColors[6]),
				imageAlt: 'Cover 7',
				title: 'Item 7',
				color: 'orange',
				rounded: true,
			},
			{
				imageSrc: placeholder(300, 450, sampleColors[7]),
				imageAlt: 'Cover 8',
				title: 'Item 8',
				color: 'teal',
				pennants: [{ color: 'teal', content: 'number', rank: 8 }],
				action: 'favorite',
			},
		]

		return defineComponent({
			name: 'MixedContentRender',
			setup() {
				const favorites = ref<Set<number>>(new Set())
				const bookmarks = ref<Set<number>>(new Set())

				const toggleFavorite = (index: number) => {
					const updated = new Set(favorites.value)
					if (updated.has(index)) {
						updated.delete(index)
					} else {
						updated.add(index)
					}
					favorites.value = updated
				}

				const toggleBookmark = (index: number) => {
					const updated = new Set(bookmarks.value)
					if (updated.has(index)) {
						updated.delete(index)
					} else {
						updated.add(index)
					}
					bookmarks.value = updated
				}

				const renderPennants = (pennants: RichItem['pennants']) => {
					if (!pennants) return {}
					return {
						pennants: () => (
							<>
								{pennants.map((pennant, pennantIndex) => (
									<NeoPennant key={pennantIndex} color={pennant.color}>
										{pennant.content === 'star' ? StarPennant : pennant.rank}
									</NeoPennant>
								))}
							</>
						),
					}
				}

				return () => (
					<NeoCoverPanelGrid {...args}>
						{richItems.map((item, index) => {
							if (item.action) {
								const isFavorite = item.action === 'favorite'
								const isActive = isFavorite
									? favorites.value.has(index)
									: bookmarks.value.has(index)
								const handleClick = isFavorite
									? () => toggleFavorite(index)
									: () => toggleBookmark(index)
								return (
									<NeoCoverPanel
										key={item.imageSrc}
										color={item.color}
										imageSrc={item.imageSrc}
										imageAlt={item.imageAlt}
										title={item.title}
										rounded={item.rounded}
										clickBehavior="action"
										actionAriaLabel={isFavorite ? 'Add to favorites' : 'Bookmark'}
										actionActive={isActive}
										onAction-click={handleClick}
									>
										{{
											...renderPennants(item.pennants),
											'action-icon': ({ active }: { active: boolean }) =>
												isFavorite
													? active
														? HeartFilledIcon
														: HeartIcon
													: active
														? BookmarkFilledIcon
														: BookmarkIcon,
										}}
									</NeoCoverPanel>
								)
							}

							return (
								<NeoCoverPanel
									key={item.imageSrc}
									color={item.color}
									imageSrc={item.imageSrc}
									imageAlt={item.imageAlt}
									title={item.title}
									rounded={item.rounded}
									clickBehavior="none"
								>
									{renderPennants(item.pennants)}
								</NeoCoverPanel>
							)
						})}
					</NeoCoverPanelGrid>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoCoverPanelGrid :columns="4" gap="medium">
  <!-- Plain panel — no extras -->
  <NeoCoverPanel color="orange" :image-src="..." image-alt="..." title="..." rounded />

  <!-- With pennants only -->
  <NeoCoverPanel color="indigo" :image-src="..." image-alt="..." title="...">
    <template #pennants>
      <NeoPennant color="red"><StarIcon /></NeoPennant>
    </template>
  </NeoCoverPanel>

  <!-- With pennants + favorite action -->
  <NeoCoverPanel
    color="blue"
    :image-src="..."
    image-alt="..."
    title="..."
    rounded
    click-behavior="action"
    action-aria-label="Add to favorites"
    :action-active="isFavorited"
    @action-click="toggleFavorite"
  >
    <template #pennants>
      <NeoPennant color="blue"><StarIcon /></NeoPennant>
      <NeoPennant color="yellow">1</NeoPennant>
    </template>
    <template #action-icon="{ active }">
      <HeartFilledIcon v-if="active" />
      <HeartIcon v-else />
    </template>
  </NeoCoverPanel>

  <!-- With bookmark action -->
  <NeoCoverPanel
    color="purple"
    :image-src="..."
    image-alt="..."
    title="..."
    rounded
    click-behavior="action"
    action-aria-label="Bookmark"
    :action-active="isBookmarked"
    @action-click="toggleBookmark"
  >
    <template #action-icon="{ active }">
      <BookmarkFilledIcon v-if="active" />
      <BookmarkIcon v-else />
    </template>
  </NeoCoverPanel>
</NeoCoverPanelGrid>`,
			},
		},
	},
}

export const LargeGap: Story = {
	tags: ['no-test'],
	args: { gap: 'large' },
	render: (args: NeoCoverPanelGridProps) => {
		return defineComponent({
			name: 'LargeGapRender',
			setup() {
				return () => (
					<NeoCoverPanelGrid {...args}>
						{sampleItems.slice(0, 8).map((item) => (
							<NeoCoverPanel
								key={item.imageSrc}
								color={item.color}
								imageSrc={item.imageSrc}
								imageAlt={item.imageAlt}
								title={item.title}
							/>
						))}
					</NeoCoverPanelGrid>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoCoverPanelGrid :columns="4" gap="large">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>`,
			},
		},
	},
}

export const FullWidth: Story = {
	tags: ['snapshot'],
	args: {
		section: {
			fullWidth: true,
		},
	},
	render: (args: NeoCoverPanelGridProps) => {
		return defineComponent({
			name: 'FullWidthRender',
			setup() {
				return () => (
					<NeoCoverPanelGrid {...args}>
						{sampleItems.map((item) => (
							<NeoCoverPanel
								key={item.imageSrc}
								color={item.color}
								imageSrc={item.imageSrc}
								imageAlt={item.imageAlt}
								title={item.title}
							/>
						))}
					</NeoCoverPanelGrid>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoCoverPanelGrid :columns="4" gap="medium" :section="{fullWidth: true}">
  <NeoCoverPanel
    v-for="item in items"
    :key="item.id"
    :color="item.color"
    :image-src="item.imageSrc"
    :image-alt="item.imageAlt"
    :title="item.title"
  />
</NeoCoverPanelGrid>`,
			},
		},
	},
}

export const OnDark: Story = {
	tags: ['snapshot'],
	globals: { backgrounds: '#000' },
	render: (args: NeoCoverPanelGridProps) => {
		return defineComponent({
			name: 'OnDarkRender',
			setup() {
				return () => (
					<div class="u-onDark" style={{ padding: '16px' }}>
						<NeoCoverPanelGrid {...args}>
							{sampleItems.map((item) => (
								<NeoCoverPanel
									key={item.imageSrc}
									color={item.color}
									imageSrc={item.imageSrc}
									imageAlt={item.imageAlt}
									title={item.title}
									rounded
								/>
							))}
						</NeoCoverPanelGrid>
					</div>
				)
			},
		})
	},
	parameters: {
		docs: {
			source: {
				code: `<div class="u-onDark">
  <NeoCoverPanelGrid :columns="4" gap="medium">
    <NeoCoverPanel
      v-for="item in items"
      :key="item.id"
      :color="item.color"
      :image-src="item.imageSrc"
      :image-alt="item.imageAlt"
      :title="item.title"
      rounded
    />
  </NeoCoverPanelGrid>
</div>`,
			},
		},
	},
}
