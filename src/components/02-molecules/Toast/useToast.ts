import { dismissToast, pushToast, replaceToast } from './toastStore'
import type { NeoToastApi, NeoToastOptions, NeoToastSeverity } from './NeoToastTypes'

/**
 * Consumer-facing composable for triggering toasts from anywhere in the app.
 *
 * Requires `<NeoToastContainer />` to be mounted somewhere in the tree
 * (typically once in `App.vue`). Calls made before the container mounts are
 * still queued and rendered as soon as the container appears.
 */
export const useToast = (): NeoToastApi => {
	const fire = (severity: NeoToastSeverity) => (message: string, options?: NeoToastOptions) =>
		pushToast(severity, message, options)

	const promise = <T>(
		incoming: Promise<T>,
		messages: {
			loading: string
			success: string | ((value: T) => string)
			error: string | ((reason: unknown) => string)
		},
		options: NeoToastOptions = {},
	): Promise<T> => {
		const id = pushToast('info', messages.loading, { ...options, duration: 0, closable: false })

		incoming.then(
			(value) => {
				const message =
					typeof messages.success === 'function' ? messages.success(value) : messages.success
				replaceToast(id, 'success', message, options)
			},
			(reason) => {
				const message =
					typeof messages.error === 'function' ? messages.error(reason) : messages.error
				replaceToast(id, 'error', message, options)
			},
		)

		return incoming
	}

	return {
		success: fire('success'),
		info: fire('info'),
		warning: fire('warning'),
		error: fire('error'),
		custom: (message, options = {}) => pushToast(options.severity ?? 'info', message, options),
		promise,
		dismiss: dismissToast,
	}
}
