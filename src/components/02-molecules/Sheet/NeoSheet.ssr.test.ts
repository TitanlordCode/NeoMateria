import { describe, it, expect } from 'vitest'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import NeoSheet from './NeoSheet.vue'

/**
 * NeoSheet uses `<Teleport to="body">`. During SSR there is no DOM to teleport
 * to, so Vue inlines the teleported content. The setup script must not touch
 * `document` or `window` at render time — those calls live in onMounted /
 * event handlers and are skipped during SSR.
 */

describe('NeoSheet (SSR)', () => {
	it('renders without throwing when closed (open=false)', async () => {
		const app = createSSRApp({
			components: { NeoSheet },
			template: '<NeoSheet color="blue" :open="false" />',
		})
		await expect(renderToString(app)).resolves.toBeTypeOf('string')
	})

	it('renders without throwing when open=true', async () => {
		const app = createSSRApp({
			components: { NeoSheet },
			template: '<NeoSheet color="blue" :open="true">content</NeoSheet>',
		})
		// Teleport produces placeholder markers during SSR (the real DOM move
		// happens on hydration). Just confirming it renders without throwing.
		const html = await renderToString(app)
		expect(html).toBeTypeOf('string')
	})

	it('handles all positions without throwing', async () => {
		for (const position of ['left', 'right', 'bottom']) {
			const app = createSSRApp({
				components: { NeoSheet },
				template: `<NeoSheet color="blue" :open="true" position="${position}" />`,
			})
			await expect(renderToString(app)).resolves.toBeTypeOf('string')
		}
	})
})
