import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import NeoToastContainer from './NeoToastContainer.vue'
import { useToast } from './useToast'
import { dismissToast, toasts } from './toastStore'

/**
 * Pure-Node SSR smoke tests. No jsdom — `document` and `window` are undefined.
 * Anything that touches the DOM unconditionally during setup/render will throw.
 */

describe('NeoToastContainer (SSR)', () => {
	beforeEach(() => dismissToast())
	afterEach(() => dismissToast())

	it('document and window are undefined in this environment', () => {
		expect(typeof document).toBe('undefined')
		expect(typeof window).toBe('undefined')
	})

	it('renders to an empty string without throwing', async () => {
		const app = createSSRApp(NeoToastContainer)
		const html = await renderToString(app)
		// Teleport is gated by a `mounted` ref so SSR output is empty —
		// the actual DOM mount happens after hydration.
		expect(html).toBe('<!---->')
	})

	it('renders cleanly even when toasts are queued before SSR', async () => {
		// Simulate a store hydration step (or a router guard) pushing toasts before render.
		useToast().success('Pre-render toast.')
		expect(toasts.value).toHaveLength(1)

		const app = createSSRApp(NeoToastContainer)
		const html = await renderToString(app)
		// Server output stays empty — toasts are still in the queue, waiting for hydration.
		expect(html).toBe('<!---->')
		expect(toasts.value).toHaveLength(1)
	})

	it('accepts position and max props without throwing', async () => {
		const app = createSSRApp({
			components: { NeoToastContainer },
			template: '<NeoToastContainer position="bottom-center" :max="3" />',
		})
		await expect(renderToString(app)).resolves.toBe('<!---->')
	})
})
