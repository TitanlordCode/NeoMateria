import { ref } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import type { NeoToastEntry, NeoToastOptions, NeoToastSeverity } from './NeoToastTypes'

/**
 * Module-level reactive state shared by every `useToast()` call and the
 * `<NeoToastContainer>` that renders the queue. Mirrors the pattern used by
 * `useSheetStack.ts` — no Pinia / external store needed.
 */
export const toasts = ref<NeoToastEntry[]>([])

const SEVERITY_COLORS: Record<NeoToastSeverity, SurfaceColor> = {
	success: 'green',
	info: 'blue',
	warning: 'amber',
	error: 'red',
}

const SEVERITY_DURATIONS: Record<NeoToastSeverity, number> = {
	success: 5000,
	info: 5000,
	warning: 8000,
	// Errors require explicit dismissal so they aren't missed mid-task.
	error: 0,
}

const SEVERITY_LIVE: Record<NeoToastSeverity, 'polite' | 'assertive'> = {
	success: 'polite',
	info: 'polite',
	warning: 'assertive',
	error: 'assertive',
}

let counter = 0
const nextId = () => `neo-toast-${++counter}`

export const containerMaxRef = ref<number>(5)

const enforceCap = () => {
	while (toasts.value.length > containerMaxRef.value) {
		toasts.value.shift()
	}
}

export const pushToast = (
	severity: NeoToastSeverity,
	message: string,
	options: NeoToastOptions = {},
): string => {
	const entry: NeoToastEntry = {
		id: nextId(),
		severity,
		message,
		duration: options.duration ?? SEVERITY_DURATIONS[severity],
		closable: options.closable ?? true,
		action: options.action,
		color: options.color ?? SEVERITY_COLORS[severity],
		showIcon: options.icon !== false,
		ariaLive: options.ariaLive ?? SEVERITY_LIVE[severity],
		createdAt: Date.now(),
	}

	toasts.value.push(entry)
	enforceCap()
	return entry.id
}

/**
 * Replace an existing toast in place, preserving its position in the queue —
 * used by `toast.promise` to transition loading → success/error without the
 * mount/unmount flicker that would happen if we dismissed and re-pushed.
 */
export const replaceToast = (
	id: string,
	severity: NeoToastSeverity,
	message: string,
	options: NeoToastOptions = {},
): string | null => {
	const index = toasts.value.findIndex((toast) => toast.id === id)
	if (index === -1) {
		return pushToast(severity, message, options)
	}

	const replacement: NeoToastEntry = {
		id: toasts.value[index].id,
		severity,
		message,
		duration: options.duration ?? SEVERITY_DURATIONS[severity],
		closable: options.closable ?? true,
		action: options.action,
		color: options.color ?? SEVERITY_COLORS[severity],
		showIcon: options.icon !== false,
		ariaLive: options.ariaLive ?? SEVERITY_LIVE[severity],
		createdAt: Date.now(),
	}
	toasts.value.splice(index, 1, replacement)
	return replacement.id
}

export const dismissToast = (id?: string) => {
	if (id === undefined) {
		toasts.value = []
		return
	}
	const index = toasts.value.findIndex((toast) => toast.id === id)
	if (index !== -1) {
		toasts.value.splice(index, 1)
	}
}
