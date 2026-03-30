import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, ref } from 'vue'
import { fn } from 'storybook/test'
import { colors, type Color } from '@/assets/typescript/colors'

import NeoCoverPanel from './NeoCoverPanel.vue'
import type { NeoCoverPanelProps } from './NeoCoverPanelTypes'
import { coverPanelClickBehaviors } from './NeoCoverPanelTypes'
import NeoPennant from '@/components/01-atoms/Pennant/NeoPennant.vue'
import { HeartIcon, HeartFilledIcon } from '@/components/01-atoms/Icon/defaultIcons'
import { placeholder } from '../../../../.storybook/utils/placeholder'

const coverPlaceholder = placeholder(300, 450)

const meta = {
	title: 'Molecules/NeoCoverPanel',
	component: NeoCoverPanel,
	tags: ['autodocs'],
	argTypes: {
		color: {
			description: 'Theme color for overlays and action button accents.',
			table: { category: 'Appearance' },
		},
		clickBehavior: {
			control: 'select',
			options: coverPanelClickBehaviors,
			description:
				'`none`: image is decorative. `link`: image acts as a link (uses `href`). `action`: image triggers an action button — emits `image-click`.',
			table: { category: 'Behavior' },
		},
		rounded: {
			control: 'boolean',
			description: 'Applies rounded corners to the panel.',
			table: { category: 'Appearance' },
		},
		imageSrc: { control: 'text', table: { category: 'Content' } },
		imageAlt: { control: 'text', table: { category: 'Content' } },
		title: { control: 'text', table: { category: 'Content' } },
		imageAriaLabel: {
			control: 'text',
			description:
				'Accessible label for the image when it is interactive (`clickBehavior` is `link` or `action`).',
			table: { category: 'Accessibility' },
		},
		actionAriaLabel: {
			control: 'text',
			description: 'Accessible label for the action button overlay.',
			table: { category: 'Accessibility' },
		},
		actionActive: {
			control: 'boolean',
			description:
				"Marks the action button as toggled on (e.g. a 'favored' state). Sets `aria-pressed`.",
			table: { category: 'Behavior' },
		},
	},
	args: {
		color: 'blue',
		imageSrc: 'https://picsum.photos/seed/coverpanel1/300/450',
		imageAlt: 'Cover image',
		title: 'Cover Panel Title',
		clickBehavior: 'none',
		'onImage-click': fn(),
		'onAction-click': fn(),
	},
} satisfies Meta<typeof NeoCoverPanel>

export default meta
type Story = StoryObj<typeof meta>

const baseProps = (args: NeoCoverPanelProps) => ({
	color: args.color,
	imageSrc: args.imageSrc,
	imageAlt: args.imageAlt,
	title: args.title,
	imageAriaLabel: args.imageAriaLabel,
	rounded: args.rounded,
})

const StarPennant = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="14"
		height="14"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
	</svg>
)

export const Default: Story = {
	parameters: {
		docs: {
			source: {
				code: `<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover image"
  title="Cover Panel Title"
  click-behavior="none"
/>`,
			},
		},
	},
	render: (args: NeoCoverPanelProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => (
					<div style={{ inlineSize: '160px', padding: '16px' }}>
						<NeoCoverPanel {...baseProps(args)} clickBehavior="none" />
					</div>
				)
			},
		})
	},
}

/**
 * The image surface itself is a `<button>` (clickBehavior="action").
 * Clicking it emits `image-click` — useful for selection, expanding a modal, etc.
 * The floating action button (heart) emits `action-click` independently.
 * Both are demonstrated here with separate visible state.
 */
export const ImageClickAndActionButton: Story = {
	parameters: {
		docs: {
			source: {
				code: `<script setup>
import { ref } from 'vue'

const isSelected = ref(false)
const isFavored = ref(false)
</script>

<template>
  <NeoCoverPanel
    color="blue"
    image-src="/path/to/cover.jpg"
    image-alt="Cover placeholder"
    click-behavior="action"
    :image-aria-label="isSelected ? 'Deselect this item' : 'Select this item'"
    :action-aria-label="isFavored ? 'Remove from favorites' : 'Add to favorites'"
    :action-active="isFavored"
    @image-click="isSelected = !isSelected"
    @action-click="isFavored = !isFavored"
  >
    <template #action-icon="{ active }">
      <HeartFilledIcon v-if="active" />
      <HeartIcon v-else />
    </template>
  </NeoCoverPanel>
</template>`,
			},
		},
	},
	args: {
		imageSrc: coverPlaceholder,
		imageAlt: 'Cover placeholder',
		clickBehavior: 'action',
		imageAriaLabel: 'Select this item',
		actionAriaLabel: 'Add to favorites',
		actionActive: false,
	},
	render: (args: NeoCoverPanelProps) => {
		return defineComponent({
			name: 'ImageClickAndActionButtonRender',
			setup() {
				const isSelected = ref(false)
				const isFavored = ref(false)

				return () => (
					<div style={{ display: 'flex', gap: '24px', padding: '16px', alignItems: 'flex-start' }}>
						<div style={{ inlineSize: '160px' }}>
							<NeoCoverPanel
								{...baseProps(args)}
								clickBehavior="action"
								imageAriaLabel={isSelected.value ? 'Deselect this item' : 'Select this item'}
								actionAriaLabel={isFavored.value ? 'Remove from favorites' : 'Add to favorites'}
								actionActive={isFavored.value}
								onImage-click={() => {
									isSelected.value = !isSelected.value
								}}
								onAction-click={() => {
									isFavored.value = !isFavored.value
								}}
								v-slots={{
									'action-icon': ({ active }: { active: boolean }) =>
										active ? HeartFilledIcon : HeartIcon,
								}}
							/>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '8px',
								fontSize: '14px',
								fontFamily: 'monospace',
								paddingBlockStart: '8px',
							}}
						>
							<div>
								Image click:{' '}
								<strong style={{ color: isSelected.value ? 'green' : 'inherit' }}>
									{isSelected.value ? 'selected' : 'idle'}
								</strong>
							</div>
							<div>
								Action button:{' '}
								<strong style={{ color: isFavored.value ? '#e11d48' : 'inherit' }}>
									{isFavored.value ? 'favoured' : 'idle'}
								</strong>
							</div>
						</div>
					</div>
				)
			},
		})
	},
}

export const LinkMode: Story = {
	parameters: {
		docs: {
			source: {
				code: `<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="link"
  href="/item/details"
  image-aria-label="View item details"
/>`,
			},
		},
	},
	args: {
		imageSrc: coverPlaceholder,
		imageAlt: 'Cover placeholder',
		clickBehavior: 'link',
		href: '#cover-item',
		imageAriaLabel: 'View cover item details',
	},
	render: (args: NeoCoverPanelProps) => {
		return defineComponent({
			name: 'LinkModeRender',
			setup() {
				return () => (
					<div style={{ inlineSize: '160px', padding: '16px' }}>
						<NeoCoverPanel {...baseProps(args)} clickBehavior="link" href="#cover-item" />
					</div>
				)
			},
		})
	},
}

export const WithPennants: Story = {
	parameters: {
		docs: {
			source: {
				code: `<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="none"
  action-aria-label="Add to favorites"
>
  <template #pennants>
    <NeoPennant color="yellow"><!-- icon --></NeoPennant>
    <NeoPennant color="blue"><!-- icon --></NeoPennant>
    <NeoPennant color="red"><!-- icon --></NeoPennant>
  </template>
  <template #action-icon="{ active }">
    <HeartFilledIcon v-if="active" />
    <HeartIcon v-else />
  </template>
</NeoCoverPanel>`,
			},
		},
	},
	args: {
		imageSrc: coverPlaceholder,
		imageAlt: 'Cover placeholder',
		actionAriaLabel: 'Add to favorites',
	},
	render: (args: NeoCoverPanelProps) => {
		return defineComponent({
			name: 'WithPennantsRender',
			setup() {
				return () => (
					<div style={{ inlineSize: '160px', padding: '16px' }}>
						<NeoCoverPanel
							{...baseProps(args)}
							clickBehavior="none"
							actionAriaLabel="Add to favorites"
							v-slots={{
								pennants: () => (
									<>
										<NeoPennant color="yellow">{StarPennant}</NeoPennant>
										<NeoPennant color="blue">{StarPennant}</NeoPennant>
										<NeoPennant color="red">{StarPennant}</NeoPennant>
									</>
								),
								'action-icon': ({ active }: { active: boolean }) =>
									active ? HeartFilledIcon : HeartIcon,
							}}
						/>
					</div>
				)
			},
		})
	},
}

/**
 * Up to 5 pennants sit side-by-side in a single row, anchored to the end (right) edge.
 * Pennants are absolutely positioned and do not affect panel dimensions.
 */
export const WithManyPennants: Story = {
	parameters: {
		docs: {
			source: {
				code: `<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="none"
>
  <template #pennants>
    <NeoPennant color="yellow"><!-- icon --></NeoPennant>
    <NeoPennant color="blue"><!-- icon --></NeoPennant>
    <NeoPennant color="green"><!-- icon --></NeoPennant>
    <NeoPennant color="purple"><!-- icon --></NeoPennant>
    <NeoPennant color="red"><!-- icon --></NeoPennant>
  </template>
</NeoCoverPanel>`,
			},
		},
	},
	args: {
		imageSrc: coverPlaceholder,
		imageAlt: 'Cover placeholder',
	},
	render: (args: NeoCoverPanelProps) => {
		return defineComponent({
			name: 'WithManyPennantsRender',
			setup() {
				return () => (
					<div style={{ inlineSize: '160px', padding: '16px' }}>
						<NeoCoverPanel
							{...baseProps(args)}
							clickBehavior="none"
							v-slots={{
								pennants: () => (
									<>
										<NeoPennant color="yellow">{StarPennant}</NeoPennant>
										<NeoPennant color="blue">{StarPennant}</NeoPennant>
										<NeoPennant color="green">{StarPennant}</NeoPennant>
										<NeoPennant color="purple">{StarPennant}</NeoPennant>
										<NeoPennant color="red">{StarPennant}</NeoPennant>
									</>
								),
							}}
						/>
					</div>
				)
			},
		})
	},
}

export const ActionActive: Story = {
	parameters: {
		docs: {
			source: {
				code: `<NeoCoverPanel
  color="blue"
  image-src="/path/to/cover.jpg"
  image-alt="Cover placeholder"
  click-behavior="none"
  action-aria-label="Remove from favorites"
  :action-active="true"
>
  <template #action-icon="{ active }">
    <HeartFilledIcon v-if="active" />
    <HeartIcon v-else />
  </template>
</NeoCoverPanel>`,
			},
		},
	},
	args: {
		imageSrc: coverPlaceholder,
		imageAlt: 'Cover placeholder',
		actionAriaLabel: 'Remove from favorites',
		actionActive: true,
	},
	render: (args: NeoCoverPanelProps) => {
		return defineComponent({
			name: 'ActionActiveRender',
			setup() {
				return () => (
					<div style={{ inlineSize: '160px', padding: '16px' }}>
						<NeoCoverPanel
							{...baseProps(args)}
							clickBehavior="none"
							actionAriaLabel="Remove from favorites"
							actionActive={true}
							v-slots={{
								'action-icon': ({ active }: { active: boolean }) =>
									active ? HeartFilledIcon : HeartIcon,
							}}
						/>
					</div>
				)
			},
		})
	},
}

export const WithActionCount: Story = {
	parameters: {
		docs: {
			source: {
				code: `<script setup>
import { ref } from 'vue'

const count = ref(42)
const isActive = ref(false)

const handleActionClick = () => {
  isActive.value = !isActive.value
  count.value = isActive.value ? count.value + 1 : count.value - 1
}
</script>

<template>
  <NeoCoverPanel
    color="blue"
    image-src="/path/to/cover.jpg"
    image-alt="Cover placeholder"
    click-behavior="none"
    :action-aria-label="\`\${count} votes\`"
    :action-active="isActive"
    @action-click="handleActionClick"
  >
    <template #action-icon="{ active }">
      <span style="display: inline-flex; align-items: center; gap: 2px; font-size: 11px; font-weight: 700;">
        <HeartFilledIcon v-if="active" />
        <HeartIcon v-else />
        {{ count }}
      </span>
    </template>
  </NeoCoverPanel>
</template>`,
			},
		},
	},
	args: {
		imageSrc: coverPlaceholder,
		imageAlt: 'Cover placeholder',
		actionAriaLabel: '42 votes',
	},
	render: (args: NeoCoverPanelProps) => {
		return defineComponent({
			name: 'WithActionCountRender',
			setup() {
				const count = ref(42)
				const isActive = ref(false)

				const handleActionClick = () => {
					isActive.value = !isActive.value
					count.value = isActive.value ? count.value + 1 : count.value - 1
				}

				return () => (
					<div style={{ inlineSize: '160px', padding: '16px' }}>
						<NeoCoverPanel
							{...baseProps(args)}
							clickBehavior="none"
							actionAriaLabel={`${count.value} votes`}
							actionActive={isActive.value}
							onAction-click={handleActionClick}
							v-slots={{
								'action-icon': ({ active }: { active: boolean }) => (
									<span
										style={{
											alignItems: 'center',
											color: active ? 'white' : 'var(--neo-theme-color)',
											display: 'inline-flex',
											fontSize: '11px',
											fontWeight: '700',
											gap: '2px',
										}}
									>
										{active ? HeartFilledIcon : HeartIcon}
										{count.value}
									</span>
								),
							}}
						/>
					</div>
				)
			},
		})
	},
}

export const AllColors: Story = {
	render: (args: NeoCoverPanelProps) => {
		return defineComponent({
			name: 'AllColorsRender',
			setup() {
				return () => (
					<div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', padding: '16px' }}>
						{colors.map((color: Color) => (
							<div key={color} style={{ inlineSize: '120px' }}>
								<NeoCoverPanel
									{...baseProps(args)}
									color={color}
									imageSrc={placeholder(300, 450)}
									imageAlt={`Cover placeholder for ${color}`}
									clickBehavior="none"
									actionAriaLabel="Add to favorites"
									v-slots={{
										'action-icon': ({ active }: { active: boolean }) =>
											active ? HeartFilledIcon : HeartIcon,
									}}
								/>
							</div>
						))}
					</div>
				)
			},
		})
	},
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	render: (args: NeoCoverPanelProps) => {
		return defineComponent({
			name: 'AllColorsOnDarkRender',
			setup() {
				return () => (
					<div
						class="u-onDark"
						style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', padding: '16px' }}
					>
						{colors.map((color: Color) => (
							<div key={color} style={{ inlineSize: '120px' }}>
								<NeoCoverPanel
									{...baseProps(args)}
									color={color}
									imageSrc={placeholder(300, 450)}
									imageAlt={`Cover placeholder for ${color}`}
									clickBehavior="none"
									actionAriaLabel="Add to favorites"
									v-slots={{
										'action-icon': ({ active }: { active: boolean }) =>
											active ? HeartFilledIcon : HeartIcon,
									}}
								/>
							</div>
						))}
					</div>
				)
			},
		})
	},
}
