import type { VNode } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const toastSeverities = ['success', 'info', 'warning', 'error'] as const
export type NeoToastSeverity = (typeof toastSeverities)[number]

export const toastPositions = [
	'top-start',
	'top-center',
	'top-end',
	'bottom-start',
	'bottom-center',
	'bottom-end',
] as const
export type NeoToastPosition = (typeof toastPositions)[number]

export type NeoToastAction = {
	label: string
	onClick: (id: string) => void
}

export interface NeoToastOptions {
	/** Milliseconds before auto-dismiss. `0` keeps the toast until manually dismissed. */
	duration?: number
	/** Show the close button. Defaults to `true`. */
	closable?: boolean
	/** Optional single action button (e.g. "Undo"). */
	action?: NeoToastAction
	/** Override the severity → color mapping (e.g. brand color). */
	color?: SurfaceColor
	/** Pass `false` to hide the leading severity icon. */
	icon?: false
	/** Override the inferred ARIA live region behaviour. */
	ariaLive?: 'polite' | 'assertive'
}

/** Internal representation of a toast stored in the queue. */
export interface NeoToastEntry {
	id: string
	severity: NeoToastSeverity
	message: string
	duration: number
	closable: boolean
	action?: NeoToastAction
	color: SurfaceColor
	showIcon: boolean
	ariaLive: 'polite' | 'assertive'
	/** Set internally by `toast.promise` so the toast can be transitioned in-place. */
	createdAt: number
}

export interface NeoToastProps {
	entry: NeoToastEntry
}

export interface NeoToastSlots {
	/** Override the leading severity icon. Receives the entry as a scoped slot prop. */
	icon?: (props: { entry: NeoToastEntry }) => VNode | VNode[]
	/** Override the message body. */
	message?: (props: { entry: NeoToastEntry }) => VNode | VNode[]
}

export interface NeoToastContainerProps {
	/** Where toasts dock relative to the viewport. Defaults to `'top-end'`. */
	position?: NeoToastPosition
	/** Maximum number of concurrent toasts. Oldest is evicted when exceeded. Defaults to `5`. */
	max?: number
	/** CSS `z-index` for the floating container. Defaults to `9999`. */
	zIndex?: number
}

export interface NeoToastApi {
	success: (message: string, options?: NeoToastOptions) => string
	info: (message: string, options?: NeoToastOptions) => string
	warning: (message: string, options?: NeoToastOptions) => string
	error: (message: string, options?: NeoToastOptions) => string
	/**
	 * Generic emit — useful when the severity is computed.
	 * The default severity is `'info'` if not specified.
	 */
	custom: (message: string, options?: NeoToastOptions & { severity?: NeoToastSeverity }) => string
	/**
	 * Renders a `loading` toast tied to the promise, then transitions it to
	 * `success` or `error` based on the outcome. Returns the original promise.
	 */
	promise: <T>(
		promise: Promise<T>,
		messages: {
			loading: string
			success: string | ((value: T) => string)
			error: string | ((reason: unknown) => string)
		},
		options?: NeoToastOptions,
	) => Promise<T>
	/** Dismiss a specific toast by id, or all toasts when called without arguments. */
	dismiss: (id?: string) => void
}
