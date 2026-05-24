import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, ref } from 'vue'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'

import NeoDropdown from '@/components/02-molecules/Dropdown/NeoDropdown.vue'
import NeoIconButton from '@/components/01-atoms/Button/NeoIconButton/NeoIconButton.vue'
import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
import NeoNavItem from '@/components/01-atoms/NavItem/NeoNavItem.vue'
import NeoTooltip from '@/components/01-atoms/Tooltip/NeoTooltip.vue'
import type { NeoDropdownProps } from './NeoDropdownTypes'
import { dropdownPlacements } from './NeoDropdownTypes'
import { MoreHorizontalIcon } from '../../01-atoms/Icon/defaultIcons'
import { moreHorizontalIconSvg } from '../../../../.storybook/utils/iconSnippets'

const meta = {
	title: 'Molecules/NeoDropdown',
	component: NeoDropdown,
	tags: ['autodocs'],
	argTypes: {
		placement: {
			control: 'select',
			options: dropdownPlacements,
			description:
				"Where the panel opens relative to the trigger. `bottom-start` aligns the panel's leading edge to the trigger's leading edge; `bottom-end` aligns the trailing edges.",
			table: { category: 'Appearance' },
		},
		open: {
			control: false,
			description:
				'Controlled open state. When provided the component is fully controlled — you must update it via `@update:open`. Omit to use uncontrolled mode with `defaultOpen`.',
			table: { category: 'State' },
		},
		defaultOpen: {
			control: false,
			description:
				'Initial open state for uncontrolled mode. Only applied on mount; ignored once the component is mounted. Has no effect when `open` is provided.',
			table: { category: 'State' },
		},
		closeOnEscape: {
			control: 'boolean',
			description:
				'Close the panel when the user presses Escape. Disable for persistent panels that should only close via an explicit trigger click.',
			table: { category: 'Behavior' },
		},
		closeOnClickOutside: {
			control: 'boolean',
			description:
				'Close the panel when the user clicks anywhere outside the trigger and panel. Uses a transparent full-screen backdrop to capture the click.',
			table: { category: 'Behavior' },
		},
		teleportTo: {
			control: 'text',
			description:
				"CSS selector for a Teleport target. When set, the panel renders under the target (typically `'body'`) and is positioned via JS from the trigger's bounding rect — escapes any ancestor `overflow: hidden` clipping (e.g. inside a navigation bar). Leave undefined for the default in-place panel.",
			table: { category: 'Behavior' },
		},
	},
	args: {
		placement: 'bottom-start',
		closeOnEscape: true,
		closeOnClickOutside: true,
		'onUpdate:open': fn(),
	},
	parameters: {
		snapshot: { viewports: ['sm', 'md', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoDropdown>

export default meta

type Story = StoryObj<typeof meta>

const dividerStyle = {
	border: 'none',
	borderBlockStart: '1px solid var(--NeoDropdown-color-panelBorder)',
	inlineSize: '100%',
	margin: '4px 0',
}

const ProfileIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
		<circle cx="12" cy="7" r="4"></circle>
	</svg>
)

const SettingsIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<circle cx="12" cy="12" r="3"></circle>
		<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
	</svg>
)

const HelpCircleIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<circle cx="12" cy="12" r="10"></circle>
		<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
		<line x1="12" y1="17" x2="12.01" y2="17"></line>
	</svg>
)

const LogOutIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
		<polyline points="16 17 21 12 16 7"></polyline>
		<line x1="21" y1="12" x2="9" y2="12"></line>
	</svg>
)

const renderDropdownItems = () => (
	<>
		<NeoNavItem
			color="grey"
			size="small"
			label="Profile"
			href="#"
			v-slots={{ iconStart: () => ProfileIcon }}
		/>
		<NeoNavItem
			color="grey"
			size="small"
			label="Settings"
			href="#"
			v-slots={{ iconStart: () => SettingsIcon }}
		/>
		<NeoNavItem
			color="grey"
			size="small"
			label="Help"
			href="#"
			v-slots={{ iconStart: () => HelpCircleIcon }}
		/>
		<hr style={dividerStyle} />
		<NeoNavItem
			color="red"
			size="small"
			label="Sign out"
			href="#"
			v-slots={{ iconStart: () => LogOutIcon }}
		/>
	</>
)

const renderWithTextTrigger = (args: NeoDropdownProps) =>
	defineComponent({
		name: 'TextTriggerRender',
		setup() {
			const isOpen = ref(args.defaultOpen ?? false)

			const handleToggle = () => {
				isOpen.value = !isOpen.value
			}

			const handleUpdate = (value: boolean) => {
				isOpen.value = value
			}

			return () => (
				<div style={{ padding: '24px', paddingBlockEnd: '200px' }}>
					<NeoDropdown
						{...args}
						open={isOpen.value}
						onUpdate:open={handleUpdate}
						v-slots={{
							trigger: () => (
								<NeoButton
									color="blue"
									variant="secondary"
									text="Options"
									aria-expanded={isOpen.value}
									onClick={handleToggle}
								/>
							),
							default: renderDropdownItems,
						}}
					/>
				</div>
			)
		},
	})

export const Default: Story = {
	parameters: {
		docs: {
			source: {
				code: `<NeoDropdown placement="bottom-start">
  <template #trigger="{ isOpen, toggle }">
    <NeoButton
      color="blue"
      variant="secondary"
      text="Options"
      :aria-expanded="isOpen"
      @click="toggle"
    />
  </template>
  <NeoNavItem color="grey" size="small" label="Profile" href="#" />
  <NeoNavItem color="grey" size="small" label="Settings" href="#" />
  <NeoNavItem color="grey" size="small" label="Help" href="#" />
  <hr />
  <NeoNavItem color="red" size="small" label="Sign out" href="#" />
</NeoDropdown>`,
			},
		},
	},
	render: (args: NeoDropdownProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				const isOpen = ref(false)

				const handleToggle = () => {
					isOpen.value = !isOpen.value
				}

				const handleUpdate = (value: boolean) => {
					isOpen.value = value
				}

				return () => (
					<div style={{ padding: '24px', paddingBlockEnd: '200px' }}>
						<NeoDropdown
							{...args}
							open={isOpen.value}
							onUpdate:open={handleUpdate}
							v-slots={{
								trigger: () => (
									<NeoButton
										color="blue"
										variant="secondary"
										text="Options"
										aria-expanded={isOpen.value}
										onClick={handleToggle}
									/>
								),
								default: renderDropdownItems,
							}}
						/>
					</div>
				)
			},
		})
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Open dropdown', async () => {
			await userEvent.click(canvas.getByRole('button'))
			await waitFor(() => {
				expect(document.querySelector('.NeoDropdown-panel')).not.toBeNull()
			})
		})

		await step('Close with Escape', async () => {
			await userEvent.keyboard('{Escape}')
			await waitFor(() => {
				expect(document.querySelector('.NeoDropdown-panel')).toBeNull()
			})
		})
	},
}

export const PlacementBottomEnd: Story = {
	tags: ['snapshot'],
	args: {
		placement: 'bottom-end',
		defaultOpen: true,
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- Aligned to the right of the trigger -->
<NeoDropdown placement="bottom-end">
  <template #trigger="{ isOpen, toggle }">
    <NeoButton color="blue" variant="secondary" text="Options" :aria-expanded="isOpen" @click="toggle" />
  </template>
  <NeoNavItem color="grey" size="small" label="Profile" href="#" />
  <NeoNavItem color="grey" size="small" label="Settings" href="#" />
  <NeoNavItem color="grey" size="small" label="Help" href="#" />
  <hr />
  <NeoNavItem color="red" size="small" label="Sign out" href="#" />
</NeoDropdown>`,
			},
		},
	},
	render: (args: NeoDropdownProps) => {
		return defineComponent({
			name: 'PlacementBottomEndRender',
			setup() {
				const isOpen = ref(args.defaultOpen ?? false)

				const handleToggle = () => {
					isOpen.value = !isOpen.value
				}

				const handleUpdate = (value: boolean) => {
					isOpen.value = value
				}

				return () => (
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
							padding: '24px',
							paddingBlockEnd: '200px',
						}}
					>
						<NeoDropdown
							{...args}
							open={isOpen.value}
							onUpdate:open={handleUpdate}
							v-slots={{
								trigger: () => (
									<NeoButton
										color="blue"
										variant="secondary"
										text="Options"
										aria-expanded={isOpen.value}
										onClick={handleToggle}
									/>
								),
								default: renderDropdownItems,
							}}
						/>
					</div>
				)
			},
		})
	},
}

export const WithIconTrigger: Story = {
	tags: ['snapshot'],
	args: {
		defaultOpen: true,
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- Wrap the icon-only trigger in NeoTooltip to surface the label as a visible hint -->
<NeoDropdown placement="bottom-end">
  <template #trigger="{ isOpen, toggle }">
    <NeoTooltip text="More options" placement="bottom">
      <template #activator>
        <NeoIconButton
          color="blue"
          variant="ghost"
          aria-label="More options"
          :aria-expanded="isOpen"
          @click="toggle"
        >
          ${moreHorizontalIconSvg}
        </NeoIconButton>
      </template>
    </NeoTooltip>
  </template>
  <NeoNavItem color="grey" size="small" label="Profile" href="#" />
  <NeoNavItem color="grey" size="small" label="Settings" href="#" />
  <NeoNavItem color="grey" size="small" label="Help" href="#" />
  <hr />
  <NeoNavItem color="red" size="small" label="Sign out" href="#" />
</NeoDropdown>`,
			},
		},
	},
	render: (args: NeoDropdownProps) => {
		return defineComponent({
			name: 'WithIconTriggerRender',
			setup() {
				const isOpen = ref(args.defaultOpen ?? false)

				const handleToggle = () => {
					isOpen.value = !isOpen.value
				}

				const handleUpdate = (value: boolean) => {
					isOpen.value = value
				}

				return () => (
					<div style={{ padding: '24px', paddingBlockEnd: '200px' }}>
						<NeoDropdown
							{...args}
							open={isOpen.value}
							onUpdate:open={handleUpdate}
							v-slots={{
								trigger: () => (
									<NeoTooltip text="More options" placement="bottom">
										{{
											activator: () => (
												<NeoIconButton
													color="blue"
													variant="ghost"
													ariaLabel="More options"
													aria-expanded={isOpen.value}
													onClick={handleToggle}
												>
													{MoreHorizontalIcon}
												</NeoIconButton>
											),
										}}
									</NeoTooltip>
								),
								default: renderDropdownItems,
							}}
						/>
					</div>
				)
			},
		})
	},
}

export const Controlled: Story = {
	tags: ['no-test'],
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const isOpen = ref(false)
</script>

<template>
  <NeoDropdown :open="isOpen" @update:open="isOpen = $event">
    <template #trigger="{ isOpen, toggle }">
      <NeoButton color="blue" variant="secondary" text="Options" :aria-expanded="isOpen" @click="toggle" />
    </template>
    <NeoNavItem color="grey" size="small" label="Profile" href="#" />
    <NeoNavItem color="grey" size="small" label="Settings" href="#" />
    <NeoNavItem color="grey" size="small" label="Help" href="#" />
    <hr />
    <NeoNavItem color="red" size="small" label="Sign out" href="#" />
  </NeoDropdown>
</template>`,
			},
		},
	},
	render: (args: NeoDropdownProps) => {
		return defineComponent({
			name: 'ControlledRender',
			setup() {
				const isOpen = ref(false)

				return () => (
					<div
						style={{
							alignItems: 'center',
							display: 'flex',
							gap: '16px',
							padding: '24px',
							paddingBlockEnd: '200px',
						}}
					>
						<NeoDropdown
							{...args}
							open={isOpen.value}
							onUpdate:open={(value: boolean) => {
								isOpen.value = value
							}}
							v-slots={{
								trigger: ({ toggle }: { isOpen: boolean; toggle: () => void }) => (
									<NeoButton color="blue" variant="secondary" text="Options" onClick={toggle} />
								),
								default: renderDropdownItems,
							}}
						/>
						<span style={{ color: 'var(--neo-color-grey700)', fontSize: '14px' }}>
							{isOpen.value ? 'Open' : 'Closed'}
						</span>
					</div>
				)
			},
		})
	},
}

export const PersistentDropdown: Story = {
	tags: ['no-test'],
	args: {
		closeOnEscape: false,
		closeOnClickOutside: false,
		defaultOpen: true,
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- Panel stays open until manually toggled — useful for persistent filter panels -->
<NeoDropdown :close-on-escape="false" :close-on-click-outside="false">
  <template #trigger="{ isOpen, toggle }">
    <NeoButton color="blue" variant="secondary" text="Options" :aria-expanded="isOpen" @click="toggle" />
  </template>
  <NeoNavItem color="grey" size="small" label="Profile" href="#" />
  <NeoNavItem color="grey" size="small" label="Settings" href="#" />
  <NeoNavItem color="grey" size="small" label="Help" href="#" />
  <hr />
  <NeoNavItem color="red" size="small" label="Sign out" href="#" />
</NeoDropdown>`,
			},
		},
	},
	render: (args: NeoDropdownProps) => renderWithTextTrigger(args),
}

export const OnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	args: {
		defaultOpen: true,
	},
	render: (args: NeoDropdownProps) => renderWithTextTrigger(args),
}

export const Interaction: Story = {
	tags: ['!dev'],
	render: (args: NeoDropdownProps) => {
		return defineComponent({
			name: 'InteractionRender',
			setup() {
				const isOpen = ref(false)

				const handleToggle = () => {
					isOpen.value = !isOpen.value
				}

				const handleUpdate = (value: boolean) => {
					isOpen.value = value
				}

				return () => (
					<div style={{ padding: '24px', paddingBlockEnd: '200px' }}>
						<NeoDropdown
							{...args}
							open={isOpen.value}
							onUpdate:open={handleUpdate}
							v-slots={{
								trigger: () => (
									<NeoButton
										color="blue"
										variant="secondary"
										text="Options"
										aria-expanded={isOpen.value}
										onClick={handleToggle}
									/>
								),
								default: renderDropdownItems,
							}}
						/>
					</div>
				)
			},
		})
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Open dropdown via trigger', async () => {
			await userEvent.click(canvas.getByRole('button'))
			await waitFor(() => {
				expect(document.querySelector('.NeoDropdown-panel')).not.toBeNull()
			})
		})

		await step('Close dropdown by clicking outside', async () => {
			await waitFor(() => {
				expect(document.querySelector('.NeoDropdown-backdrop')).not.toBeNull()
			})
			const backdrop = document.querySelector('.NeoDropdown-backdrop') as HTMLElement
			await userEvent.click(backdrop)
			await waitFor(() => {
				expect(document.querySelector('.NeoDropdown-panel')).toBeNull()
			})
		})

		await step('Open again and close with Escape', async () => {
			await userEvent.click(canvas.getByRole('button'))
			await waitFor(() => expect(document.querySelector('.NeoDropdown-panel')).not.toBeNull())
			await userEvent.keyboard('{Escape}')
			await waitFor(() => expect(document.querySelector('.NeoDropdown-panel')).toBeNull())
		})
	},
}
