import { afterEach } from 'vitest'
import { page, commands } from 'vitest/browser'
import { snapshotViewports } from './viewports'

type SnapshotStatus =
	| { status: 'created' }
	| { status: 'match' }
	| { status: 'mismatch'; modifiedPath: string; diffPath?: string }
	| { status: 'missing' }

// Cast to include the custom commands defined in vitest.config.mts.
const snapshotCommands = commands as typeof commands & {
	// Returns the story's true content height (measured after freezing animations).
	prepareForSnapshot: () => Promise<number>
	captureStoryScreenshot: (
		viewportWidth: number,
		viewportHeight: number,
		contentHeight: number,
	) => Promise<string>
	compareSnapshot: (
		storyId: string,
		viewportName: string,
		base64: string,
		diffThreshold?: number,
	) => Promise<SnapshotStatus>
}

afterEach(async (context) => {
	const storyContext = context as typeof context & {
		story?: { tags?: string[]; parameters?: Record<string, unknown> }
	}
	if (!storyContext.story?.tags?.includes('snapshot')) return

	const storyId = (context.task.meta as { storyId?: string })?.storyId
	if (!storyId) return

	const snapshotParams = storyContext.story?.parameters?.snapshot as
		| { viewports?: string[]; diffThreshold?: number }
		| undefined
	const storyViewports = snapshotParams?.viewports
	const diffThreshold = snapshotParams?.diffThreshold
	const activeViewports = storyViewports
		? snapshotViewports.filter((viewport) => storyViewports.includes(viewport.name))
		: snapshotViewports

	for (const viewport of activeViewports) {
		// Resize the preview iframe so responsive breakpoints fire correctly.
		await page.viewport(viewport.width, viewport.height)

		// Freeze animations, wait for images, and get the story's true content
		// height — all in one server-side round trip.
		const contentHeight = await snapshotCommands.prepareForSnapshot()

		// If the story is taller than the current viewport, expand the iframe
		// so Chrome renders and paints all off-screen content before we screenshot.
		// page.viewport() is the only API that actually changes window.innerHeight
		// inside the frame — ctx.page.setViewportSize() (server-side) only resizes
		// the outer Playwright page and does NOT affect the iframe's internal viewport.
		const effectiveHeight = Math.ceil(Math.max(viewport.height, contentHeight))
		if (effectiveHeight > viewport.height) {
			await page.viewport(viewport.width, effectiveHeight)
			// Two rAF cycles: first lets layout complete, second lets paint flush.
			await new Promise<void>((resolve) =>
				requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
			)
		}

		// Server-side: screenshot the iframe body and crop whitespace below
		// short stories (those shorter than the original viewport height).
		const base64 = await snapshotCommands.captureStoryScreenshot(
			viewport.width,
			viewport.height,
			contentHeight,
		)

		// Reset viewport to the canonical test height for the next iteration
		// so story-to-story bleed-over doesn't affect content measurements.
		if (effectiveHeight > viewport.height) {
			await page.viewport(viewport.width, viewport.height)
		}

		const result = await snapshotCommands.compareSnapshot(
			storyId,
			viewport.name,
			base64,
			diffThreshold,
		)

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
