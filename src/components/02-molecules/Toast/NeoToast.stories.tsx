import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, ref } from 'vue'
import { createA11yPlay } from '../../../../.storybook/utils/createA11yPlay'

import NeoToast from './NeoToast.vue'
import NeoToastContainer from './NeoToastContainer.vue'
import { useToast } from './useToast'
import { dismissToast, pushToast } from './toastStore'
import {
	toastPositions,
	toastSeverities,
	type NeoToastEntry,
	type NeoToastPosition,
	type NeoToastSeverity,
} from './NeoToastTypes'
import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'

// Stable, non-auto-dismissing entry factory for static stories/snapshots.
const SEVERITY_DEFAULT_COLOR = {
	success: 'green',
	info: 'blue',
	warning: 'amber',
	error: 'red',
} as const

const buildEntry = (
	overrides: Partial<NeoToastEntry> & Pick<NeoToastEntry, 'severity' | 'message'>,
): NeoToastEntry => ({
	id: `static-${overrides.severity}`,
	duration: 0,
	closable: true,
	color: SEVERITY_DEFAULT_COLOR[overrides.severity],
	showIcon: true,
	ariaLive:
		overrides.severity === 'success' || overrides.severity === 'info' ? 'polite' : 'assertive',
	createdAt: 0,
	...overrides,
})

const DEFAULT_ENTRY: NeoToastEntry = buildEntry({ severity: 'success', message: 'Settings saved.' })

const meta = {
	title: 'Molecules/NeoToast',
	component: NeoToast,
	tags: ['autodocs'],
	args: {
		entry: DEFAULT_ENTRY,
	},
	parameters: {
		snapshot: { viewports: ['sm', 'md', 'lg', 'xl'] },
		docs: {
			description: {
				component:
					'Transient floating notification. Mount `<NeoToastContainer />` once in your app shell, then fire toasts from anywhere via the `useToast()` composable.',
			},
		},
	},
	argTypes: {
		entry: {
			control: false,
			description:
				'Internal entry record. Consumers fire toasts via `useToast()`, not by passing entries directly.',
			table: { category: 'Internal' },
		},
	},
} satisfies Meta<typeof NeoToast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
	args: {
		entry: buildEntry({ severity: 'success', message: 'Settings saved.' }),
	},
	parameters: {
		docs: {
			source: {
				code: `import { useToast } from 'neo-materia'

const toast = useToast()
toast.success('Settings saved.')`,
			},
		},
	},
}

export const Severities: Story = {
	tags: ['snapshot'],
	render: () => {
		return defineComponent({
			name: 'SeveritiesRender',
			setup() {
				const messages: Record<NeoToastSeverity, string> = {
					success: 'Settings saved.',
					info: 'A new update is available.',
					warning: 'Your session expires in 2 minutes.',
					error: 'Could not connect to the server.',
				}
				return () => (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px' }}>
						{toastSeverities.map((severity) => (
							<NeoToast
								key={severity}
								entry={buildEntry({ severity, message: messages[severity] })}
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
				code: `toast.success('Settings saved.')
toast.info('A new update is available.')
toast.warning('Your session expires in 2 minutes.')
toast.error('Could not connect to the server.')`,
			},
		},
	},
}

export const WithAction: Story = {
	tags: ['snapshot'],
	args: {
		entry: buildEntry({
			severity: 'info',
			message: 'Project archived.',
			action: { label: 'Undo', onClick: () => {} },
		}),
	},
	parameters: {
		docs: {
			source: {
				code: `toast.info('Project archived.', {
  action: { label: 'Undo', onClick: () => unarchive() },
})`,
			},
		},
	},
}

export const Persistent: Story = {
	tags: ['snapshot'],
	args: {
		entry: buildEntry({
			severity: 'error',
			message: 'Unable to save changes. Please try again.',
		}),
	},
	parameters: {
		docs: {
			source: {
				code: `toast.error('Unable to save changes. Please try again.', { duration: 0 })`,
			},
		},
	},
}

export const LongMessage: Story = {
	tags: ['snapshot'],
	args: {
		entry: buildEntry({
			severity: 'warning',
			message:
				'Your subscription will renew automatically in 7 days. Update your payment method now to avoid any interruption to your access — this can be done from the billing settings page.',
		}),
	},
}

export const NoIcon: Story = {
	tags: ['snapshot'],
	args: {
		entry: buildEntry({ severity: 'success', message: 'Done.', showIcon: false }),
	},
}

export const AllColors: Story = {
	tags: ['snapshot'],
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: () => {
		return defineComponent({
			name: 'AllColorsRender',
			setup() {
				const palette = ['red', 'blue', 'green', 'purple', 'teal', 'pink'] as const
				return () => (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px' }}>
						{palette.map((color) => (
							<NeoToast
								key={color}
								entry={buildEntry({
									severity: 'info',
									message: `Themed in ${color}.`,
									color,
								})}
							/>
						))}
					</div>
				)
			},
		})
	},
}

export const AllColorsOnDark: Story = {
	tags: ['snapshot'],
	globals: { backgrounds: '#000' },
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: () => {
		return defineComponent({
			name: 'AllColorsOnDarkRender',
			setup() {
				const palette = ['red', 'blue', 'green', 'purple', 'teal', 'pink'] as const
				return () => (
					<div
						class="u-onDark"
						style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px' }}
					>
						{palette.map((color) => (
							<NeoToast
								key={color}
								entry={buildEntry({
									severity: 'info',
									message: `Themed in ${color}.`,
									color,
								})}
							/>
						))}
					</div>
				)
			},
		})
	},
}

export const Interactive: Story = {
	tags: ['no-test'],
	parameters: {
		snapshot: { skip: true },
		docs: {
			description: {
				story:
					'Live demonstration of the `useToast()` composable. Click the buttons to trigger real toasts that auto-dismiss based on severity.',
			},
		},
	},
	render: () => {
		return defineComponent({
			name: 'InteractiveRender',
			setup() {
				const toast = useToast()
				return () => (
					<div>
						<NeoToastContainer position="top-end" />
						<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '16px' }}>
							<NeoButton
								color="green"
								variant="primary"
								text="success"
								onClick={() => toast.success('Settings saved.')}
							/>
							<NeoButton
								color="blue"
								variant="primary"
								text="info"
								onClick={() => toast.info('A new update is available.')}
							/>
							<NeoButton
								color="amber"
								variant="primary"
								text="warning"
								onClick={() => toast.warning('Your session expires soon.')}
							/>
							<NeoButton
								color="red"
								variant="primary"
								text="error"
								onClick={() => toast.error('Could not save changes.')}
							/>
							<NeoButton
								color="grey"
								variant="secondary"
								text="undo action"
								onClick={() =>
									toast.info('Project archived.', {
										action: { label: 'Undo', onClick: () => toast.success('Restored.') },
									})
								}
							/>
							<NeoButton
								color="grey"
								variant="secondary"
								text="promise"
								onClick={() => {
									const delay = new Promise((resolve, reject) =>
										setTimeout(
											() => (Math.random() > 0.3 ? resolve('done') : reject('fail')),
											1500,
										),
									)
									toast.promise(delay, {
										loading: 'Saving…',
										success: 'Saved!',
										error: 'Save failed.',
									})
								}}
							/>
							<NeoButton
								color="grey"
								variant="tertiary"
								text="dismiss all"
								onClick={() => toast.dismiss()}
							/>
						</div>
					</div>
				)
			},
		})
	},
}

export const Positions: Story = {
	tags: ['no-test'],
	parameters: {
		snapshot: { skip: true },
		docs: {
			description: {
				story: 'Each position renders the container in a different fixed corner of the viewport.',
			},
		},
	},
	render: () => {
		return defineComponent({
			name: 'PositionsRender',
			setup() {
				const position = ref<NeoToastPosition>('top-end')
				const fire = () => pushToast('info', `Anchored to ${position.value}.`)
				return () => (
					<div>
						<NeoToastContainer position={position.value} />
						<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '16px' }}>
							{toastPositions.map((value) => (
								<NeoButton
									key={value}
									color="blue"
									variant={position.value === value ? 'primary' : 'secondary'}
									text={value}
									onClick={() => {
										dismissToast()
										position.value = value
										fire()
									}}
								/>
							))}
						</div>
					</div>
				)
			},
		})
	},
}

export const DefaultA11y: Story = {
	...Default,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}

export const SeveritiesA11y: Story = {
	...Severities,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}

export const WithActionA11y: Story = {
	...WithAction,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}
