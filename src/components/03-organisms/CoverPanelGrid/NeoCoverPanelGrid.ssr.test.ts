import { describe, it, expect } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import NeoCoverPanelGrid from './NeoCoverPanelGrid.vue'
import NeoHero from '../Hero/NeoHero/NeoHero.vue'
import NeoFeatureLine from '../FeatureLine/NeoFeatureLine/NeoFeatureLine.vue'
import NeoSection from '@/components/02-molecules/Section/NeoSection.vue'

/**
 * Guards the nested-NeoSection fix. By default an organism wraps its content
 * in `<section class="NeoSection">`. It must skip that wrapper when either
 * (a) `noSection` is set, or (b) it is already nested inside a `NeoSection`
 * (auto-detected via inject) — otherwise the doubled section breaks the inner
 * grid's percentage track sizing at wide viewports.
 */

const countSections = (html: string) => (html.match(/class="NeoSection/g) ?? []).length

const heroProps = { title: 'Title' }
const featureLineProps = { imageSrc: '/x.png', imageAlt: 'x', title: 'Title' }

describe('organism section wrapper (SSR)', () => {
	it('NeoCoverPanelGrid wraps in NeoSection by default', async () => {
		const html = await renderToString(createSSRApp(NeoCoverPanelGrid))
		expect(html).toContain('NeoSection')
		expect(html).toContain('NeoCoverPanelGrid')
	})

	it('NeoCoverPanelGrid skips NeoSection when noSection', async () => {
		const html = await renderToString(createSSRApp(h(NeoCoverPanelGrid, { noSection: true })))
		expect(html).not.toContain('NeoSection')
		expect(html).toContain('NeoCoverPanelGrid')
	})

	it('NeoHero wraps in NeoSection by default', async () => {
		const html = await renderToString(createSSRApp(h(NeoHero, heroProps)))
		expect(html).toContain('NeoSection')
		expect(html).toContain('NeoHero')
	})

	it('NeoHero skips NeoSection when noSection', async () => {
		const html = await renderToString(createSSRApp(h(NeoHero, { ...heroProps, noSection: true })))
		expect(html).not.toContain('NeoSection')
		expect(html).toContain('NeoHero')
	})

	it('NeoFeatureLine wraps in NeoSection by default', async () => {
		const html = await renderToString(createSSRApp(h(NeoFeatureLine, featureLineProps)))
		expect(html).toContain('NeoSection')
		expect(html).toContain('NeoFeatureLine')
	})

	it('NeoFeatureLine skips NeoSection when noSection', async () => {
		const html = await renderToString(
			createSSRApp(h(NeoFeatureLine, { ...featureLineProps, noSection: true })),
		)
		expect(html).not.toContain('NeoSection')
		expect(html).toContain('NeoFeatureLine')
	})

	it('auto-skips its own NeoSection when nested inside a NeoSection', async () => {
		const html = await renderToString(
			createSSRApp(h(NeoSection, null, { default: () => h(NeoCoverPanelGrid) })),
		)
		// Only the outer NeoSection — the grid must not add a second one.
		expect(countSections(html)).toBe(1)
		expect(html).toContain('NeoCoverPanelGrid')
	})

	it('renders exactly one NeoSection for each nested organism', async () => {
		const html = await renderToString(
			createSSRApp(
				h(NeoSection, null, {
					default: () => [h(NeoHero, heroProps), h(NeoFeatureLine, featureLineProps)],
				}),
			),
		)
		expect(countSections(html)).toBe(1)
	})
})
