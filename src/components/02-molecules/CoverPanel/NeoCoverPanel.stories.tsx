import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, ref } from 'vue'
import { fn } from 'storybook/test'
import { colors, type Color } from '@/assets/typescript/colors'

import NeoCoverPanel from './NeoCoverPanel.vue'
import type { NeoCoverPanelProps } from './NeoCoverPanelTypes'
import { coverPanelClickBehaviors } from './NeoCoverPanelTypes'
import NeoPennant from '@/components/01-atoms/Pennant/NeoPennant.vue'
import { HeartIcon, HeartFilledIcon, StarIcon } from '@/components/01-atoms/Icon/defaultIcons'
import { placeholder } from '../../../../.storybook/utils/placeholder'
import { createA11yPlay } from '../../../../.storybook/utils/createA11yPlay'
import { starIconSvg } from '../../../../.storybook/utils/iconSnippets'

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
		imageWidth: {
			control: 'number',
			description:
				'Intrinsic width of the image in pixels. Set alongside `imageHeight` to prevent layout shift (CLS) before the image loads.',
			table: { category: 'Content' },
		},
		imageHeight: {
			control: 'number',
			description:
				'Intrinsic height of the image in pixels. Set alongside `imageWidth` to prevent layout shift (CLS) before the image loads.',
			table: { category: 'Content' },
		},
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
		pennants: {
			control: false,
			description:
				'Pennant badges displayed at the top of the panel, anchored to the end edge. Up to 5 small-sized pennants fit on a panel of ~240px wide.',
			table: { category: 'Slots' },
		},
		'action-icon': {
			control: false,
			description:
				'Custom icon for the action overlay button. Receives `active` (current pressed state).',
			table: { category: 'Slots' },
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
	parameters: {
		snapshot: { viewports: ['sm', 'md', 'lg', 'xl'] },
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

export const Default: Story = {
	tags: ['snapshot'],
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
	tags: ['snapshot'],
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
								fontFamily: 'sans-serif',
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
	tags: ['snapshot'],
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
	tags: ['snapshot'],
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
    <NeoPennant color="yellow">${starIconSvg}</NeoPennant>
    <NeoPennant color="blue">${starIconSvg}</NeoPennant>
    <NeoPennant color="red">${starIconSvg}</NeoPennant>
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
										<NeoPennant color="yellow">{StarIcon}</NeoPennant>
										<NeoPennant color="blue">{StarIcon}</NeoPennant>
										<NeoPennant color="red">{StarIcon}</NeoPennant>
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
	tags: ['no-test'],
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
    <template v-for="color in ['yellow', 'blue', 'green', 'purple', 'red']" :key="color">
      <NeoPennant :color="color">${starIconSvg}</NeoPennant>
    </template>
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
										<NeoPennant color="yellow">{StarIcon}</NeoPennant>
										<NeoPennant color="blue">{StarIcon}</NeoPennant>
										<NeoPennant color="green">{StarIcon}</NeoPennant>
										<NeoPennant color="purple">{StarIcon}</NeoPennant>
										<NeoPennant color="red">{StarIcon}</NeoPennant>
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
	tags: ['snapshot'],
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
	tags: ['snapshot'],
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

export const RTL: Story = {
	tags: ['snapshot'],
	globals: {
		direction: 'rtl',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	args: {
		title: 'عنوان لوحة الغلاف',
	},
}

export const AllColors: Story = {
	tags: ['snapshot'],
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
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
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
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

export const AllColorsA11y: Story = {
	...AllColors,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}

export const AllColorsOnDarkA11y: Story = {
	...AllColorsOnDark,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}
