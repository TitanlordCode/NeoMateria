import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, ref } from 'vue'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'

import NeoSheet from '@/components/02-molecules/Sheet/NeoSheet.vue'
import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
import NeoNavItem from '@/components/01-atoms/NavItem/NeoNavItem.vue'
import NeoInput from '@/components/01-atoms/Input/NeoInput.vue'
import type { NeoSheetProps } from './NeoSheetTypes'
import { sheetPositions, sheetSizes, sheetVariants } from './NeoSheetTypes'
import { ariaLabelArgType } from '../../../../.storybook/utils/argTypes'

const meta: Meta<typeof NeoSheet> = {
	title: 'Molecules/NeoSheet',
	component: NeoSheet,
	tags: ['autodocs'],
	argTypes: {
		...ariaLabelArgType,
		color: {
			description: 'Theme color. Only visible in the `filled` variant.',
			table: { category: 'Appearance' },
		},
		variant: {
			control: 'select',
			options: sheetVariants,
			description:
				'`default`: neutral background (white / grey900 in dark mode). `filled`: uses the theme color as background, establishing its own dark context via `setOnDark`.',
			table: { category: 'Appearance' },
		},
		position: {
			control: 'select',
			options: sheetPositions,
			description: 'Which edge the sheet slides in from.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			options: sheetSizes,
			description: 'Width (for `left`/`right`) or height (for `bottom`) of the sheet.',
			table: { category: 'Appearance' },
		},
		open: {
			control: 'boolean',
			description:
				'Controls whether the sheet is visible. Must be paired with `@update:open` to close via overlay/Escape.',
			table: { category: 'State' },
		},
		modal: {
			control: 'boolean',
			description:
				'When true, renders a dimmed backdrop overlay behind the sheet. When false, the background remains interactive — useful for stacked sheet patterns.',
			table: { category: 'Behavior' },
		},
		closeOnOverlayClick: {
			control: 'boolean',
			description:
				'Clicking the overlay emits `update:open(false)`. Only applies when `modal` is true.',
			table: { category: 'Behavior' },
		},
		closeOnEscape: {
			control: 'boolean',
			description: 'Pressing Escape emits `update:open(false)`.',
			table: { category: 'Behavior' },
		},
		zIndex: {
			control: 'number',
			description:
				'CSS z-index of the sheet. Managed automatically when using the stacking system — only override if you need to break out of the stacking context.',
			table: { category: 'Behavior' },
		},
		ariaLabelledby: {
			control: 'text',
			description:
				'ID of the element that labels the sheet (e.g. a heading inside the sheet). Used for `aria-labelledby` on the sheet panel.',
			table: { category: 'Accessibility' },
		},
		closeAriaLabel: {
			control: 'text',
			description: 'Accessible label for the close button rendered in the sheet header.',
			table: { category: 'Accessibility' },
		},
	},
	args: {
		position: 'right',
		size: 'medium',
		color: 'blue',
		open: false,
		closeOnOverlayClick: true,
		closeOnEscape: true,
		modal: true,
		'onUpdate:open': fn(),
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const isOpen = ref(false)
</script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`,
			},
		},
	},
	render: (args: NeoSheetProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				const isOpen = ref(false)

				const openSheet = () => {
					isOpen.value = true
				}

				const handleUpdate = (value: boolean) => {
					isOpen.value = value
				}

				return () => (
					<div>
						<NeoButton
							text="Open Sheet"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={openSheet}
						/>
						<NeoSheet {...args} open={isOpen.value} onUpdate:open={handleUpdate}>
							<h2 style={{ margin: '0 0 16px 0' }}>Sheet Title</h2>
							<p>This is a basic sheet. Click outside or press Escape to close.</p>
							<div style={{ marginTop: '24px' }}>
								<NeoButton
									text="Close"
									color={args.color ?? 'blue'}
									variant="secondary"
									onClick={() => handleUpdate(false)}
								/>
							</div>
						</NeoSheet>
					</div>
				)
			},
		})
	},
}

export const DefaultInteraction: Story = {
	...Default,
	tags: ['!dev'],
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Open sheet via trigger button', async () => {
			await userEvent.click(canvas.getByText('Open Sheet'))
			await waitFor(() => expect(document.querySelector('.NeoSheet')).not.toBeNull())
		})

		await step('Overlay has visible dimensions', async () => {
			const overlay = document.querySelector('.NeoSheet-overlay') as HTMLElement
			expect(overlay).not.toBeNull()
			const rect = overlay.getBoundingClientRect()
			expect(rect.height).toBeGreaterThan(0)
			expect(rect.width).toBeGreaterThan(0)
		})

		await step('Clicking the overlay closes the sheet', async () => {
			const overlay = document.querySelector('.NeoSheet-overlay') as HTMLElement
			await userEvent.click(overlay)
			await waitFor(() => expect(document.querySelector('.NeoSheet')).toBeNull())
		})

		await step('Pressing Escape closes the sheet', async () => {
			await userEvent.click(canvas.getByText('Open Sheet'))
			await waitFor(() => expect(document.querySelector('.NeoSheet')).not.toBeNull())
			await userEvent.keyboard('{Escape}')
			await waitFor(() => expect(document.querySelector('.NeoSheet')).toBeNull())
		})

		await step('Clicking inside the sheet does not close it', async () => {
			await userEvent.click(canvas.getByText('Open Sheet'))
			await waitFor(() => expect(document.querySelector('.NeoSheet')).not.toBeNull())
			const sheetContent = document.querySelector('.NeoSheet-content') as HTMLElement
			await userEvent.click(sheetContent)
			expect(document.querySelector('.NeoSheet')).not.toBeNull()
			await userEvent.keyboard('{Escape}')
			await waitFor(() => expect(document.querySelector('.NeoSheet')).toBeNull())
		})
	},
}

export const PositionLeft: Story = {
	args: {
		position: 'left',
	},
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const isOpen = ref(false)
</script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="left" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`,
			},
		},
	},
	render: Default.render,
}

export const PositionBottom: Story = {
	args: {
		position: 'bottom',
	},
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const isOpen = ref(false)
</script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="bottom" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`,
			},
		},
	},
	render: Default.render,
}

export const SizeSmall: Story = {
	args: {
		size: 'small',
	},
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const isOpen = ref(false)
</script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" size="small" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`,
			},
		},
	},
	render: Default.render,
}

export const SizeLarge: Story = {
	args: {
		size: 'large',
	},
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const isOpen = ref(false)
</script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" size="large" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`,
			},
		},
	},
	render: Default.render,
}

export const SizeFull: Story = {
	args: {
		size: 'full',
	},
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const isOpen = ref(false)
</script>

<template>
  <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="right" size="full" v-model:open="isOpen">
    <h2>Sheet Title</h2>
    <p>This is a basic sheet. Click outside or press Escape to close.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
  </NeoSheet>
</template>`,
			},
		},
	},
	render: Default.render,
}

export const PersistentSheet: Story = {
	args: {
		closeOnOverlayClick: false,
		closeOnEscape: false,
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- Disable all automatic close triggers — user must interact with a close button -->
<NeoSheet
  color="blue"
  position="right"
  :close-on-overlay-click="false"
  :close-on-escape="false"
  v-model:open="isOpen"
>
  <h2>Persistent Sheet</h2>
  <p>Cannot be closed by clicking outside or pressing Escape.</p>
  <NeoButton text="Close Sheet" color="blue" variant="primary" @click="isOpen = false" />
</NeoSheet>`,
			},
		},
	},
	render: (args: NeoSheetProps) => {
		return defineComponent({
			name: 'PersistentRender',
			setup() {
				const isOpen = ref(false)

				return () => (
					<div>
						<NeoButton
							text="Open Persistent Sheet"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								isOpen.value = true
							}}
						/>
						<NeoSheet
							{...args}
							open={isOpen.value}
							onUpdate:open={(value: boolean) => {
								isOpen.value = value
							}}
						>
							<h2 style={{ margin: '0 0 16px 0' }}>Persistent Sheet</h2>
							<p>This sheet cannot be closed by clicking outside or pressing Escape.</p>
							<p>You must use the close button below.</p>
							<div style={{ marginTop: '24px' }}>
								<NeoButton
									text="Close Sheet"
									color={args.color ?? 'blue'}
									variant="primary"
									onClick={() => {
										isOpen.value = false
									}}
								/>
							</div>
						</NeoSheet>
					</div>
				)
			},
		})
	},
}

export const PersistentSheetInteraction: Story = {
	...PersistentSheet,
	tags: ['!dev'],
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Open persistent sheet', async () => {
			await userEvent.click(canvas.getByText('Open Persistent Sheet'))
			await waitFor(() => expect(document.querySelector('.NeoSheet')).not.toBeNull())
		})

		await step('Overlay has visible dimensions', async () => {
			const overlay = document.querySelector('.NeoSheet-overlay') as HTMLElement
			expect(overlay).not.toBeNull()
			const rect = overlay.getBoundingClientRect()
			expect(rect.height).toBeGreaterThan(0)
			expect(rect.width).toBeGreaterThan(0)
		})

		await step('Clicking overlay does not close persistent sheet', async () => {
			const overlay = document.querySelector('.NeoSheet-overlay') as HTMLElement
			await userEvent.click(overlay)
			expect(document.querySelector('.NeoSheet')).not.toBeNull()
		})

		await step('Escape does not close persistent sheet', async () => {
			await userEvent.keyboard('{Escape}')
			expect(document.querySelector('.NeoSheet')).not.toBeNull()
		})

		await step('Close button closes the sheet', async () => {
			await userEvent.click(within(document.body).getByText('Close Sheet'))
			await waitFor(() => expect(document.querySelector('.NeoSheet')).toBeNull())
		})
	},
}

export const NavigationWithSearch: Story = {
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const isOpen = ref(false)
const searchQuery = ref('')
</script>

<template>
  <NeoButton text="Open Navigation" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet color="blue" position="left" aria-label="Main navigation" v-model:open="isOpen">
    <div style="display: flex; flex-direction: column; gap: 16px; height: 100%;">
      <h2>Navigation</h2>
      <NeoInput name="search" aria-label="Search" color="blue" placeholder="Search..."
        v-model:value="searchQuery" />
      <nav style="display: flex; flex-direction: column; gap: 4px;">
        <NeoNavItem label="Home" href="/" color="blue">
          <template #iconStart><span>🏠</span></template>
        </NeoNavItem>
        <!-- more items... -->
      </nav>
    </div>
  </NeoSheet>
</template>`,
			},
		},
	},
	render: (args: NeoSheetProps) => {
		return defineComponent({
			name: 'NavigationWithSearchRender',
			setup() {
				const isOpen = ref(false)
				const searchQuery = ref('')
				const expandedItems = ref<Record<string, boolean>>({
					products: false,
					settings: false,
				})

				const navItems = [
					{ label: 'Home', href: '/', icon: '🏠' },
					{ label: 'Dashboard', href: '/dashboard', icon: '📊' },
					{
						label: 'Products',
						id: 'products',
						icon: '📦',
						children: [
							{ label: 'All Products', href: '/products' },
							{ label: 'Categories', href: '/products/categories' },
							{ label: 'Inventory', href: '/products/inventory' },
						],
					},
					{ label: 'Orders', href: '/orders', icon: '🛒', active: true },
					{ label: 'Customers', href: '/customers', icon: '👥' },
					{
						label: 'Settings',
						id: 'settings',
						icon: '⚙️',
						children: [
							{ label: 'General', href: '/settings/general' },
							{ label: 'Security', href: '/settings/security' },
							{ label: 'Notifications', href: '/settings/notifications' },
						],
					},
				]

				const toggleItem = (id: string) => {
					expandedItems.value[id] = !expandedItems.value[id]
				}

				return () => (
					<div>
						<NeoButton
							text="Open Navigation"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								isOpen.value = true
							}}
						/>
						<NeoSheet
							{...args}
							position="left"
							open={isOpen.value}
							onUpdate:open={(value: boolean) => {
								isOpen.value = value
							}}
							ariaLabel="Main navigation"
						>
							<div
								style={{ display: 'flex', flexDirection: 'column', gap: '16px', blockSize: '100%' }}
							>
								<div
									style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
								>
									<h2 style={{ margin: 0, fontSize: '18px' }}>Navigation</h2>
									<NeoButton
										text="Close"
										color={args.color ?? 'blue'}
										size="small"
										variant="ghost"
										onClick={() => {
											isOpen.value = false
										}}
									/>
								</div>

								<NeoInput
									name="nav-search"
									ariaLabel="Search"
									color={args.color ?? 'blue'}
									size="medium"
									placeholder="Search..."
									value={searchQuery.value}
									onUpdate:value={(value) => {
										searchQuery.value = String(value)
									}}
								/>

								<nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
									{navItems.map((item) => (
										<div key={item.label}>
											<NeoNavItem
												label={item.label}
												href={item.children ? undefined : item.href}
												color={args.color ?? 'blue'}
												active={item.active}
												hasChildren={Boolean(item.children)}
												expanded={item.id ? expandedItems.value[item.id] : false}
												onToggle={() => item.id && toggleItem(item.id)}
												v-slots={{
													iconStart: () => <span>{item.icon}</span>,
												}}
											/>
											{item.children && expandedItems.value[item.id!] && (
												<div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
													{item.children.map((child) => (
														<NeoNavItem
															key={child.label}
															label={child.label}
															href={child.href}
															color={args.color ?? 'blue'}
															level={1}
															size="small"
														/>
													))}
												</div>
											)}
										</div>
									))}
								</nav>

								<div
									style={{ borderTop: '1px solid var(--neo-color-grey200)', paddingTop: '16px' }}
								>
									<NeoNavItem
										label="Logout"
										color="red"
										v-slots={{
											iconStart: () => <span>🚪</span>,
										}}
									/>
								</div>
							</div>
						</NeoSheet>
					</div>
				)
			},
		})
	},
}

export const MultipleSheets: Story = {
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const leftOpen = ref(false)
const rightOpen = ref(false)
const bottomOpen = ref(false)
</script>

<template>
  <NeoButton text="Open Left" color="blue" variant="primary" @click="leftOpen = true" />
  <NeoButton text="Open Right" color="green" variant="primary" @click="rightOpen = true" />
  <NeoButton text="Open Bottom" color="purple" variant="primary" @click="bottomOpen = true" />

  <NeoSheet position="left" color="blue" v-model:open="leftOpen">
    <h2>Left Sheet</h2>
    <p>This is the left sheet.</p>
    <NeoButton text="Close" color="blue" variant="secondary" @click="leftOpen = false" />
  </NeoSheet>
  <NeoSheet position="right" color="green" v-model:open="rightOpen">
    <h2>Right Sheet</h2>
    <p>This is the right sheet.</p>
    <NeoButton text="Close" color="green" variant="secondary" @click="rightOpen = false" />
  </NeoSheet>
  <NeoSheet position="bottom" color="purple" v-model:open="bottomOpen">
    <h2>Bottom Sheet</h2>
    <p>This is the bottom sheet.</p>
    <NeoButton text="Close" color="purple" variant="secondary" @click="bottomOpen = false" />
  </NeoSheet>
</template>`,
			},
		},
	},
	render: () => {
		return defineComponent({
			name: 'MultipleSheetsRender',
			setup() {
				const leftOpen = ref(false)
				const rightOpen = ref(false)
				const bottomOpen = ref(false)

				return () => (
					<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
						<NeoButton
							text="Open Left Sheet"
							color="blue"
							variant="primary"
							onClick={() => {
								leftOpen.value = true
							}}
						/>
						<NeoButton
							text="Open Right Sheet"
							color="green"
							variant="primary"
							onClick={() => {
								rightOpen.value = true
							}}
						/>
						<NeoButton
							text="Open Bottom Sheet"
							color="purple"
							variant="primary"
							onClick={() => {
								bottomOpen.value = true
							}}
						/>

						<NeoSheet
							position="left"
							size="small"
							color="blue"
							open={leftOpen.value}
							zIndex={1000}
							onUpdate:open={(value: boolean) => {
								leftOpen.value = value
							}}
						>
							<h2 style={{ margin: '0 0 16px 0' }}>Left Sheet</h2>
							<p>This is the left sheet (z-index: 1000)</p>
							<NeoButton
								text="Close"
								color="blue"
								variant="secondary"
								onClick={() => {
									leftOpen.value = false
								}}
							/>
						</NeoSheet>

						<NeoSheet
							position="right"
							size="small"
							color="green"
							open={rightOpen.value}
							zIndex={1001}
							onUpdate:open={(value: boolean) => {
								rightOpen.value = value
							}}
						>
							<h2 style={{ margin: '0 0 16px 0' }}>Right Sheet</h2>
							<p>This is the right sheet (z-index: 1001)</p>
							<NeoButton
								text="Close"
								color="green"
								variant="secondary"
								onClick={() => {
									rightOpen.value = false
								}}
							/>
						</NeoSheet>

						<NeoSheet
							position="bottom"
							size="small"
							color="purple"
							open={bottomOpen.value}
							zIndex={1002}
							onUpdate:open={(value: boolean) => {
								bottomOpen.value = value
							}}
						>
							<h2 style={{ margin: '0 0 16px 0' }}>Bottom Sheet</h2>
							<p>This is the bottom sheet (z-index: 1002)</p>
							<NeoButton
								text="Close"
								color="purple"
								variant="secondary"
								onClick={() => {
									bottomOpen.value = false
								}}
							/>
						</NeoSheet>
					</div>
				)
			},
		})
	},
}

export const StackedRight: Story = {
	parameters: {
		docs: {
			source: {
				code: `<!-- Multiple sheets on the same side stack automatically — no wiring needed.
     Use modal={false} to keep the background interactive. -->
<script setup>
const open1 = ref(false)
const open2 = ref(false)
</script>

<template>
  <NeoButton text="Sheet 1 (large)" color="blue" variant="primary" @click="open1 = true" />
  <NeoButton text="Sheet 2 (medium)" color="blue" variant="primary" @click="open2 = true" />

  <NeoSheet position="right" size="large" color="blue" :modal="false" v-model:open="open1">
    <h2>Sheet 1</h2>
    <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
  </NeoSheet>
  <NeoSheet position="right" size="medium" color="blue" :modal="false" v-model:open="open2">
    <h2>Sheet 2</h2>
    <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
  </NeoSheet>
</template>`,
			},
		},
	},
	render: (args: NeoSheetProps) => {
		return defineComponent({
			name: 'StackedRightRender',
			setup() {
				const open1 = ref(false)
				const open2 = ref(false)
				const open3 = ref(false)

				return () => (
					<div style={{ display: 'flex', gap: '12px' }}>
						<NeoButton
							text="Sheet 1 (large)"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								open1.value = true
							}}
						/>
						<NeoButton
							text="Sheet 2 (medium)"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								open2.value = true
							}}
						/>
						<NeoButton
							text="Sheet 3 (small)"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								open3.value = true
							}}
						/>

						<NeoSheet
							position="right"
							size="large"
							color={args.color ?? 'blue'}
							open={open1.value}
							modal={false}
							onUpdate:open={(value: boolean) => {
								open1.value = value
							}}
						>
							<h2 style={{ margin: '0 0 8px 0' }}>Sheet 1 — large</h2>
							<p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
								Open any combination of the three sheets. Stacking is automatic — no coordination
								needed. Each sheet only stacks with others on the same side. Background stays
								interactive because <code>modal={false}</code>.
							</p>
							<NeoButton
								text="Close"
								color={args.color ?? 'blue'}
								variant="secondary"
								onClick={() => {
									open1.value = false
								}}
							/>
						</NeoSheet>

						<NeoSheet
							position="right"
							size="medium"
							color={args.color ?? 'blue'}
							open={open2.value}
							modal={false}
							onUpdate:open={(value: boolean) => {
								open2.value = value
							}}
						>
							<h2 style={{ margin: '0 0 8px 0' }}>Sheet 2 — medium</h2>
							<p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
								Any sheet already open on the right gets offset by 24px per depth level. The indent
								adjusts for size differences so smaller sheets always peek out.
							</p>
							<NeoButton
								text="Close"
								color={args.color ?? 'blue'}
								variant="secondary"
								onClick={() => {
									open2.value = false
								}}
							/>
						</NeoSheet>

						<NeoSheet
							position="right"
							size="small"
							color={args.color ?? 'blue'}
							open={open3.value}
							modal={false}
							onUpdate:open={(value: boolean) => {
								open3.value = value
							}}
						>
							<h2 style={{ margin: '0 0 8px 0' }}>Sheet 3 — small</h2>
							<p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
								Close sheets in any order — the remaining sheets re-stack and recalculate their
								offsets automatically.
							</p>
							<NeoButton
								text="Close"
								color={args.color ?? 'blue'}
								variant="secondary"
								onClick={() => {
									open3.value = false
								}}
							/>
						</NeoSheet>
					</div>
				)
			},
		})
	},
}

export const StackedLeft: Story = {
	parameters: {
		docs: {
			source: {
				code: `<!-- Left and right stacks are fully independent of each other -->
<NeoSheet position="left" size="large" color="blue" :modal="false" v-model:open="open1">
  <h2>Sheet 1 — large</h2>
  <p>Open multiple left sheets to see the stacking peek effect.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
</NeoSheet>
<NeoSheet position="left" size="medium" color="blue" :modal="false" v-model:open="open2">
  <h2>Sheet 2 — medium</h2>
  <p>Left and right sheets are fully independent stacks.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
</NeoSheet>`,
			},
		},
	},
	render: (args: NeoSheetProps) => {
		return defineComponent({
			name: 'StackedLeftRender',
			setup() {
				const open1 = ref(false)
				const open2 = ref(false)
				const open3 = ref(false)

				return () => (
					<div style={{ display: 'flex', gap: '12px' }}>
						<NeoButton
							text="Sheet 1 (large)"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								open1.value = true
							}}
						/>
						<NeoButton
							text="Sheet 2 (medium)"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								open2.value = true
							}}
						/>
						<NeoButton
							text="Sheet 3 (small)"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								open3.value = true
							}}
						/>

						<NeoSheet
							position="left"
							size="large"
							color={args.color ?? 'blue'}
							open={open1.value}
							modal={false}
							onUpdate:open={(value: boolean) => {
								open1.value = value
							}}
						>
							<h2 style={{ margin: '0 0 8px 0' }}>Sheet 1 — large</h2>
							<p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
								Same stacking behaviour as the right position — open all three and verify the peek
								offset appears on the right edge of background sheets.
							</p>
							<NeoButton
								text="Close"
								color={args.color ?? 'blue'}
								variant="secondary"
								onClick={() => {
									open1.value = false
								}}
							/>
						</NeoSheet>

						<NeoSheet
							position="left"
							size="medium"
							color={args.color ?? 'blue'}
							open={open2.value}
							modal={false}
							onUpdate:open={(value: boolean) => {
								open2.value = value
							}}
						>
							<h2 style={{ margin: '0 0 8px 0' }}>Sheet 2 — medium</h2>
							<p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
								Left and right sheets are fully independent stacks — opening a left sheet does not
								affect any right sheet's offset.
							</p>
							<NeoButton
								text="Close"
								color={args.color ?? 'blue'}
								variant="secondary"
								onClick={() => {
									open2.value = false
								}}
							/>
						</NeoSheet>

						<NeoSheet
							position="left"
							size="small"
							color={args.color ?? 'blue'}
							open={open3.value}
							modal={false}
							onUpdate:open={(value: boolean) => {
								open3.value = value
							}}
						>
							<h2 style={{ margin: '0 0 8px 0' }}>Sheet 3 — small</h2>
							<p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
								Close sheets in any order — the remaining left sheets re-stack independently.
							</p>
							<NeoButton
								text="Close"
								color={args.color ?? 'blue'}
								variant="secondary"
								onClick={() => {
									open3.value = false
								}}
							/>
						</NeoSheet>
					</div>
				)
			},
		})
	},
}

export const StackedBottom: Story = {
	parameters: {
		docs: {
			source: {
				code: `<!-- Bottom sheets stack independently from left/right sheets -->
<NeoSheet position="bottom" size="large" color="blue" :modal="false" v-model:open="open1">
  <h2>Sheet 1 — large</h2>
  <p>Bottom sheets stack the same way — background sheets peek upward.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
</NeoSheet>
<NeoSheet position="bottom" size="medium" color="blue" :modal="false" v-model:open="open2">
  <h2>Sheet 2 — medium</h2>
  <p>Open all three to see the vertical offset.</p>
  <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
</NeoSheet>`,
			},
		},
	},
	render: (args: NeoSheetProps) => {
		return defineComponent({
			name: 'StackedBottomRender',
			setup() {
				const open1 = ref(false)
				const open2 = ref(false)
				const open3 = ref(false)

				return () => (
					<div style={{ display: 'flex', gap: '12px' }}>
						<NeoButton
							text="Sheet 1 (large)"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								open1.value = true
							}}
						/>
						<NeoButton
							text="Sheet 2 (medium)"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								open2.value = true
							}}
						/>
						<NeoButton
							text="Sheet 3 (small)"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								open3.value = true
							}}
						/>

						<NeoSheet
							position="bottom"
							size="large"
							color={args.color ?? 'blue'}
							open={open1.value}
							modal={false}
							onUpdate:open={(value: boolean) => {
								open1.value = value
							}}
						>
							<h2 style={{ margin: '0 0 8px 0' }}>Sheet 1 — large</h2>
							<p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
								Bottom sheets stack the same way — background sheets peek upward. Open all three to
								see the vertical offset.
							</p>
							<NeoButton
								text="Close"
								color={args.color ?? 'blue'}
								variant="secondary"
								onClick={() => {
									open1.value = false
								}}
							/>
						</NeoSheet>

						<NeoSheet
							position="bottom"
							size="medium"
							color={args.color ?? 'blue'}
							open={open2.value}
							modal={false}
							onUpdate:open={(value: boolean) => {
								open2.value = value
							}}
						>
							<h2 style={{ margin: '0 0 8px 0' }}>Sheet 2 — medium</h2>
							<p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
								Bottom sheets are isolated from left/right stacks — they only offset against other
								bottom sheets.
							</p>
							<NeoButton
								text="Close"
								color={args.color ?? 'blue'}
								variant="secondary"
								onClick={() => {
									open2.value = false
								}}
							/>
						</NeoSheet>

						<NeoSheet
							position="bottom"
							size="small"
							color={args.color ?? 'blue'}
							open={open3.value}
							modal={false}
							onUpdate:open={(value: boolean) => {
								open3.value = value
							}}
						>
							<h2 style={{ margin: '0 0 8px 0' }}>Sheet 3 — small</h2>
							<p style={{ margin: '0 0 16px 0', fontSize: '14px' }}>
								Close sheets in any order — remaining bottom sheets recalculate their peek offset.
							</p>
							<NeoButton
								text="Close"
								color={args.color ?? 'blue'}
								variant="secondary"
								onClick={() => {
									open3.value = false
								}}
							/>
						</NeoSheet>
					</div>
				)
			},
		})
	},
}

export const StackedNested: Story = {
	parameters: {
		docs: {
			source: {
				code: `<!-- Sheets opened from inside other sheets stack automatically.
     close-on-overlay-click="false" keeps the blurred overlay persistent. -->
<script setup>
const open1 = ref(false)
const open2 = ref(false)
</script>

<template>
  <NeoButton text="Open Sheet 1" color="blue" variant="primary" @click="open1 = true" />

  <NeoSheet position="right" size="large" color="blue" :close-on-overlay-click="false"
    v-model:open="open1">
    <h2>Sheet 1</h2>
    <NeoButton text="Open Sheet 2" color="blue" variant="primary" @click="open2 = true" />
    <NeoButton text="Close" color="blue" variant="secondary" @click="open1 = false" />
  </NeoSheet>

  <NeoSheet position="right" size="medium" color="blue" :close-on-overlay-click="false"
    v-model:open="open2">
    <h2>Sheet 2</h2>
    <NeoButton text="Close" color="blue" variant="secondary" @click="open2 = false" />
  </NeoSheet>
</template>`,
			},
		},
	},
	render: (args: NeoSheetProps) => {
		return defineComponent({
			name: 'StackedNestedRender',
			setup() {
				const open1 = ref(false)
				const open2 = ref(false)
				const open3 = ref(false)

				return () => (
					<div>
						<NeoButton
							text="Open Sheet 1"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								open1.value = true
							}}
						/>

						<NeoSheet
							position="right"
							size="large"
							color={args.color ?? 'blue'}
							open={open1.value}
							closeOnOverlayClick={false}
							onUpdate:open={(value: boolean) => {
								open1.value = value
							}}
						>
							<h2 style={{ margin: '0 0 16px 0' }}>Sheet 1 — large</h2>
							<p style={{ margin: '0 0 24px 0', fontSize: '14px' }}>
								Opened from the page. Modal with <code>closeOnOverlayClick={false}</code> — the
								blurred overlay blocks the background and shows a not-allowed cursor. Open Sheet 2
								from here to verify nested stacking.
							</p>
							<div style={{ display: 'flex', gap: '12px' }}>
								<NeoButton
									text="Open Sheet 2"
									color={args.color ?? 'blue'}
									variant="primary"
									onClick={() => {
										open2.value = true
									}}
								/>
								<NeoButton
									text="Close"
									color={args.color ?? 'blue'}
									variant="secondary"
									onClick={() => {
										open1.value = false
									}}
								/>
							</div>
						</NeoSheet>

						<NeoSheet
							position="right"
							size="medium"
							color={args.color ?? 'blue'}
							open={open2.value}
							closeOnOverlayClick={false}
							onUpdate:open={(value: boolean) => {
								open2.value = value
							}}
						>
							<h2 style={{ margin: '0 0 16px 0' }}>Sheet 2 — medium</h2>
							<p style={{ margin: '0 0 24px 0', fontSize: '14px' }}>
								Opened from inside Sheet 1. Sheet 1 should be indented behind this one. Stacking is
								automatic — no parent/child wiring needed. Open Sheet 3 to add another level.
							</p>
							<div style={{ display: 'flex', gap: '12px' }}>
								<NeoButton
									text="Open Sheet 3"
									color={args.color ?? 'blue'}
									variant="primary"
									onClick={() => {
										open3.value = true
									}}
								/>
								<NeoButton
									text="Close"
									color={args.color ?? 'blue'}
									variant="secondary"
									onClick={() => {
										open2.value = false
									}}
								/>
							</div>
						</NeoSheet>

						<NeoSheet
							position="right"
							size="small"
							color={args.color ?? 'blue'}
							open={open3.value}
							closeOnOverlayClick={false}
							onUpdate:open={(value: boolean) => {
								open3.value = value
							}}
						>
							<h2 style={{ margin: '0 0 16px 0' }}>Sheet 3 — small</h2>
							<p style={{ margin: '0 0 24px 0', fontSize: '14px' }}>
								Three sheets deep. Close in reverse order — each sheet removes itself from the stack
								and the remaining ones re-offset automatically.
							</p>
							<NeoButton
								text="Close"
								color={args.color ?? 'blue'}
								variant="secondary"
								onClick={() => {
									open3.value = false
								}}
							/>
						</NeoSheet>
					</div>
				)
			},
		})
	},
}

export const FormExample: Story = {
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const isOpen = ref(false)
const name = ref('')
const email = ref('')
</script>

<template>
  <NeoButton text="Open Settings" color="blue" variant="primary" @click="isOpen = true" />
  <NeoSheet
    color="blue"
    position="right"
    size="large"
    :close-on-overlay-click="false"
    close-aria-label="Close"
    aria-label="Settings form"
    v-model:open="isOpen"
  >
    <div style="display: flex; flex-direction: column; gap: 24px; height: 100%;">
      <h2>Settings</h2>
      <form style="display: flex; flex-direction: column; gap: 16px; flex: 1;">
        <NeoInput name="name" label="Name" color="blue" v-model:value="name" />
        <NeoInput name="email" label="Email" type="email" color="blue" v-model:value="email" />
      </form>
      <div style="display: flex; gap: 12px; justify-content: flex-end;">
        <NeoButton text="Cancel" color="blue" variant="secondary" @click="isOpen = false" />
        <NeoButton text="Save Changes" color="blue" variant="primary" @click="isOpen = false" />
      </div>
    </div>
  </NeoSheet>
</template>`,
			},
		},
	},
	render: (args: NeoSheetProps) => {
		return defineComponent({
			name: 'FormExampleRender',
			setup() {
				const isOpen = ref(false)
				const formData = ref({
					name: '',
					email: '',
					message: '',
				})

				return () => (
					<div>
						<NeoButton
							text="Open Settings"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								isOpen.value = true
							}}
						/>
						<NeoSheet
							{...args}
							position="right"
							size="large"
							open={isOpen.value}
							closeOnOverlayClick={false}
							closeAriaLabel="Close"
							onUpdate:open={(value: boolean) => {
								isOpen.value = value
							}}
							ariaLabel="Settings form"
						>
							<div
								style={{ display: 'flex', flexDirection: 'column', gap: '24px', blockSize: '100%' }}
							>
								<h2 style={{ margin: 0 }}>Settings</h2>

								<form style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
									<NeoInput
										name="name"
										label="Name"
										color={args.color ?? 'blue'}
										value={formData.value.name}
										onUpdate:value={(value) => {
											formData.value.name = String(value)
										}}
									/>
									<NeoInput
										name="email"
										label="Email"
										type="email"
										color={args.color ?? 'blue'}
										value={formData.value.email}
										onUpdate:value={(value) => {
											formData.value.email = String(value)
										}}
									/>
								</form>

								<div
									style={{
										display: 'flex',
										gap: '12px',
										justifyContent: 'flex-end',
										borderTop: '1px solid var(--neo-color-grey200)',
										paddingTop: '16px',
									}}
								>
									<NeoButton
										text="Cancel"
										color={args.color ?? 'blue'}
										variant="secondary"
										onClick={() => {
											isOpen.value = false
										}}
									/>
									<NeoButton
										text="Save Changes"
										color={args.color ?? 'blue'}
										variant="primary"
										onClick={() => {
											isOpen.value = false
										}}
									/>
								</div>
							</div>
						</NeoSheet>
					</div>
				)
			},
		})
	},
}

export const OnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const isOpen = ref(false)
</script>

<template>
  <div class="u-onDark">
    <NeoButton text="Open Sheet" color="blue" variant="primary" @click="isOpen = true" />
    <NeoSheet color="blue" position="right" v-model:open="isOpen">
      <h2>Sheet Title</h2>
      <p>This is a basic sheet. Click outside or press Escape to close.</p>
      <NeoButton text="Close" color="blue" variant="secondary" @click="isOpen = false" />
    </NeoSheet>
  </div>
</template>`,
			},
		},
	},
	render: Default.render,
}

export const DefaultOpen: Story = {
	args: {
		open: true,
		closeAriaLabel: 'Close',
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- Pass open as a static prop (or :open="true") to render the sheet pre-opened -->
<NeoSheet color="blue" position="right" :open="true" close-aria-label="Close">
  <h2>Sheet Title</h2>
  <p>Sheet starts open — useful for accessibility testing.</p>
  <NeoButton text="Action" color="blue" variant="primary" />
</NeoSheet>`,
			},
		},
	},
	render: (args: NeoSheetProps) => {
		return defineComponent({
			name: 'DefaultOpenRender',
			setup() {
				return () => (
					<NeoSheet {...args}>
						<h2 style={{ margin: '0 0 16px 0' }}>Sheet Title</h2>
						<p style={{ margin: '0 0 24px 0' }}>
							This sheet starts open for accessibility testing. All interactive content inside is
							visible and testable without user interaction.
						</p>
						<NeoButton text="Action" color={args.color ?? 'blue'} variant="primary" />
					</NeoSheet>
				)
			},
		})
	},
}

export const Filled: Story = {
	parameters: {
		docs: {
			source: {
				code: `<!-- variant="filled" fills the sheet with the theme color.
     Use color="black" for buttons inside — setOnDark renders them white automatically. -->
<NeoSheet color="blue" position="right" variant="filled" close-aria-label="Close"
  v-model:open="isOpen">
  <h2>Filled Sheet</h2>
  <NeoButton text="Primary Action" color="black" variant="primary" @click="isOpen = false" />
  <NeoButton text="Close" color="black" variant="secondary" @click="isOpen = false" />
</NeoSheet>`,
			},
		},
	},
	render: (args: NeoSheetProps) => {
		return defineComponent({
			name: 'FilledRender',
			setup() {
				const isOpen = ref(false)

				return () => (
					<div>
						<NeoButton
							text="Open Filled Sheet"
							color={args.color ?? 'blue'}
							variant="primary"
							onClick={() => {
								isOpen.value = true
							}}
						/>
						<NeoSheet
							{...args}
							variant="filled"
							open={isOpen.value}
							closeAriaLabel="Close"
							onUpdate:open={(value: boolean) => {
								isOpen.value = value
							}}
						>
							<h2 style={{ margin: '0 0 16px 0' }}>Filled Sheet</h2>
							<p style={{ margin: '0 0 24px 0' }}>
								Use <code>color="black"</code> for buttons inside a filled sheet — the{' '}
								<code>setOnDark</code> cascade automatically renders them white on dark backgrounds.
							</p>
							<div style={{ display: 'flex', gap: '12px' }}>
								<NeoButton
									text="Primary Action"
									color="black"
									variant="primary"
									onClick={() => {
										isOpen.value = false
									}}
								/>
								<NeoButton
									text="Close"
									color="black"
									variant="secondary"
									onClick={() => {
										isOpen.value = false
									}}
								/>
							</div>
						</NeoSheet>
					</div>
				)
			},
		})
	},
}

export const FilledOpen: Story = {
	args: {
		variant: 'filled',
		open: true,
		closeAriaLabel: 'Close',
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoSheet color="blue" position="right" variant="filled" :open="true" close-aria-label="Close">
  <h2>Filled Sheet</h2>
  <NeoButton text="Primary Action" color="black" variant="primary" />
  <NeoButton text="Secondary" color="black" variant="secondary" />
</NeoSheet>`,
			},
		},
	},
	render: (args: NeoSheetProps) => {
		return defineComponent({
			name: 'FilledOpenRender',
			setup() {
				return () => (
					<NeoSheet {...args}>
						<h2 style={{ margin: '0 0 16px 0' }}>Filled Sheet</h2>
						<p style={{ margin: '0 0 24px 0' }}>
							Buttons use <code>color="black"</code>. The <code>setOnDark</code> cascade set by the
							filled sheet automatically renders them white — accessible and visually clear against
							the colored background.
						</p>
						<div style={{ display: 'flex', gap: '12px' }}>
							<NeoButton text="Primary Action" color="black" variant="primary" />
							<NeoButton text="Secondary" color="black" variant="secondary" />
						</div>
					</NeoSheet>
				)
			},
		})
	},
}
