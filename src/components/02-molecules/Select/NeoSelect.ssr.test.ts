import { describe, it, expect } from 'vitest'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import NeoSelect from './NeoSelect.vue'

/**
 * NeoSelect teleports its dropdown panel to `body`. All `window` listeners
 * live inside open/close handlers, not setup, so SSR must render the trigger
 * without throwing.
 */

describe('NeoSelect (SSR)', () => {
	it('renders the trigger without throwing', async () => {
		const app = createSSRApp({
			components: { NeoSelect },
			template: `
				<NeoSelect
					color="blue"
					id="ssr-test"
					name="ssr-test"
					size="medium"
					label="Pick one"
					:options="options"
				/>
			`,
			data() {
				return {
					options: [
						{ value: 'a', label: 'Alpha' },
						{ value: 'b', label: 'Beta' },
					],
				}
			},
		})
		const html = await renderToString(app)
		expect(html).toContain('Pick one')
	})
})
