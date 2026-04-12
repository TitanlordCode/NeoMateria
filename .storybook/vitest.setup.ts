import { afterEach } from 'vitest'
import { page, commands } from '@vitest/browser/context'

// Three viewports: page.viewport() resizes the Storybook preview iframe so
// components respond to breakpoint mixins just as they would in a real browser.
const viewports = [
	{ name: 'mobile', width: 375, height: 667 },
	{ name: 'tablet', width: 768, height: 1024 },
	{ name: 'desktop', width: 1280, height: 800 },
] as const

type SnapshotStatus =
	| { status: 'created' }
	| { status: 'match' }
	| { status: 'mismatch'; modifiedPath: string; diffPath?: string }
	| { status: 'missing' }

// Cast to include the custom commands defined in vitest.config.mts.
const snapshotCommands = commands as typeof commands & {
	prepareForSnapshot: () => Promise<void>
	compareSnapshot: (
		storyId: string,
		viewportName: string,
		base64: string,
	) => Promise<SnapshotStatus>
}

afterEach(async (context) => {
	const storyContext = context as typeof context & { story?: { tags?: string[] } }
	if (!storyContext.story?.tags?.includes('snapshot')) return

	const storyId = (context.task.meta as { storyId?: string })?.storyId
	if (!storyId) return

	for (const viewport of viewports) {
		// Resize the preview iframe so responsive breakpoints fire correctly.
		await page.viewport(viewport.width, viewport.height)

		// Freeze animations and wait for any images that lazy-loaded after the
		// viewport resize. The animation CSS injection is idempotent.
		await snapshotCommands.prepareForSnapshot()

		// Capture the story as raw base64 (not saved to disk) for comparison.
		const base64 = await page.screenshot({ save: false })

		const result = await snapshotCommands.compareSnapshot(storyId, viewport.name, base64)

		if (result.status === 'missing') {
			throw new Error(
				`Missing snapshot baseline: ${storyId} @ ${viewport.name}\n` +
					`Commit the PNG files from __snapshots__/ to fix this in CI.`,
			)
		}

		if (result.status === 'mismatch') {
			const lines = [
				`Snapshot mismatch: ${storyId} @ ${viewport.name}`,
				`Modified: ${result.modifiedPath}`,
			]
			if (result.diffPath) lines.push(`Diff:     ${result.diffPath}`)
			lines.push(
				`Drag files from __snapshots_modified__/ → __snapshots__/ to accept, or run "npm run test:storybook:update".`,
			)
			throw new Error(lines.join('\n'))
		}

		// 'created' → baseline written on first run (passes)
		// 'match'   → pixel-identical to baseline (passes)
	}
})
