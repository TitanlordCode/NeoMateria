import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mkdtempSync, rmSync, readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { createRequire } from 'node:module'
import { createSnapshotCommands } from './vitest.snapshot-commands'

const _req = createRequire(import.meta.url)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { PNG } = _req('playwright-core/lib/utilsBundle') as { PNG: any }

/** Create a solid-color PNG buffer for use as a mock screenshot or baseline. */
function makePng(width: number, height: number, r = 255, g = 0, b = 0): Buffer {
	const png = new PNG({ width, height })
	for (let i = 0; i < width * height; i++) {
		png.data[i * 4 + 0] = r
		png.data[i * 4 + 1] = g
		png.data[i * 4 + 2] = b
		png.data[i * 4 + 3] = 255
	}
	return PNG.sync.write(png)
}

// ─── Test fixtures ────────────────────────────────────────────────────────────

let tmpDir: string
let dirs: { snapshots: string; modified: string; diff: string }
let commands: ReturnType<typeof createSnapshotCommands>

beforeEach(() => {
	delete process.env.CI
	tmpDir = mkdtempSync(join(tmpdir(), 'neo-snap-test-'))
	dirs = {
		snapshots: join(tmpDir, 'snapshots'),
		modified: join(tmpDir, 'modified'),
		diff: join(tmpDir, 'diff'),
	}
	// rasterizationDelay:0 so tests don't wait 100 ms per screenshot
	commands = createSnapshotCommands(dirs, { rasterizationDelay: 0 })
})

afterEach(() => {
	rmSync(tmpDir, { recursive: true, force: true })
	vi.restoreAllMocks()
	delete process.env.CI
})

// ─── compareSnapshot ──────────────────────────────────────────────────────────

describe('compareSnapshot', () => {
	const storyId = 'atoms-button--default'
	const viewport = 'mobile'
	const pngBuffer = makePng(375, 36)
	const base64 = pngBuffer.toString('base64')

	it('creates a new baseline and returns created (non-CI)', async () => {
		const result = await commands.compareSnapshot(null, storyId, viewport, base64)

		expect(result.status).toBe('created')
		const saved = join(dirs.snapshots, `${storyId}--${viewport}.png`)
		expect(existsSync(saved)).toBe(true)
		expect(readFileSync(saved)).toEqual(pngBuffer)
	})

	it('returns missing when no baseline exists in CI', async () => {
		process.env.CI = 'true'
		const result = await commands.compareSnapshot(null, storyId, viewport, base64)

		expect(result.status).toBe('missing')
		expect(existsSync(dirs.snapshots)).toBe(false)
	})

	it('returns match for a pixel-identical screenshot', async () => {
		mkdirSync(dirs.snapshots, { recursive: true })
		writeFileSync(join(dirs.snapshots, `${storyId}--${viewport}.png`), pngBuffer)

		const result = await commands.compareSnapshot(null, storyId, viewport, base64)
		expect(result.status).toBe('match')
	})

	it('returns mismatch with modifiedPath (no diffPath) for a size difference', async () => {
		const tallPng = makePng(375, 100)
		mkdirSync(dirs.snapshots, { recursive: true })
		writeFileSync(join(dirs.snapshots, `${storyId}--${viewport}.png`), tallPng)

		const result = await commands.compareSnapshot(null, storyId, viewport, base64)

		expect(result.status).toBe('mismatch')
		if (result.status === 'mismatch') {
			expect(result.modifiedPath).toContain(storyId)
			expect(result.diffPath).toBeUndefined()
			expect(existsSync(result.modifiedPath)).toBe(true)
		}
	})

	it('overwrites the baseline and returns match on size difference when --update', async () => {
		const originalArgv = process.argv.slice()
		process.argv.push('--update')

		const tallPng = makePng(375, 100)
		mkdirSync(dirs.snapshots, { recursive: true })
		writeFileSync(join(dirs.snapshots, `${storyId}--${viewport}.png`), tallPng)

		const result = await commands.compareSnapshot(null, storyId, viewport, base64)

		expect(result.status).toBe('match')
		expect(readFileSync(join(dirs.snapshots, `${storyId}--${viewport}.png`))).toEqual(pngBuffer)
		process.argv.splice(0, process.argv.length, ...originalArgv)
	})

	it('returns mismatch with both modifiedPath and diffPath for a pixel difference', async () => {
		const bluePng = makePng(375, 36, 0, 0, 255)
		mkdirSync(dirs.snapshots, { recursive: true })
		writeFileSync(join(dirs.snapshots, `${storyId}--${viewport}.png`), bluePng)

		const result = await commands.compareSnapshot(null, storyId, viewport, base64)

		expect(result.status).toBe('mismatch')
		if (result.status === 'mismatch') {
			expect(result.modifiedPath).toContain(storyId)
			expect(result.diffPath).toBeDefined()
			expect(existsSync(result.modifiedPath)).toBe(true)
			expect(existsSync(result.diffPath!)).toBe(true)
		}
	})

	it('overwrites the baseline and returns match on pixel difference when --update', async () => {
		const originalArgv = process.argv.slice()
		process.argv.push('--update')

		const bluePng = makePng(375, 36, 0, 0, 255)
		mkdirSync(dirs.snapshots, { recursive: true })
		writeFileSync(join(dirs.snapshots, `${storyId}--${viewport}.png`), bluePng)

		const result = await commands.compareSnapshot(null, storyId, viewport, base64)
		expect(result.status).toBe('match')
		process.argv.splice(0, process.argv.length, ...originalArgv)
	})

	it('accepts -u as shorthand for --update', async () => {
		const originalArgv = process.argv.slice()
		process.argv.push('-u')

		const bluePng = makePng(375, 36, 0, 0, 255)
		mkdirSync(dirs.snapshots, { recursive: true })
		writeFileSync(join(dirs.snapshots, `${storyId}--${viewport}.png`), bluePng)

		const result = await commands.compareSnapshot(null, storyId, viewport, base64)
		expect(result.status).toBe('match')
		process.argv.splice(0, process.argv.length, ...originalArgv)
	})
})

// ─── captureStoryScreenshot ───────────────────────────────────────────────────

describe('captureStoryScreenshot', () => {
	/** Build a minimal mock context. evaluate mock chains three one-shot returns. */
	function makeCtx(
		screenshotBuf: Buffer,
		viewportSize = { width: 1280, height: 720 },
		savedStyle = 'width:375px;height:667px;transform:scale(1);transform-origin:left top;',
	) {
		const evaluate = vi
			.fn()
			.mockImplementationOnce(async () => savedStyle) // save container cssText
			.mockImplementationOnce(async () => undefined) // set scale(1) + full dimensions
			.mockImplementationOnce(async () => undefined) // restore container cssText

		return {
			page: {
				viewportSize: vi.fn(() => viewportSize),
				evaluate,
				setViewportSize: vi.fn(async () => {}),
				waitForLoadState: vi.fn(async () => {}),
			},
			iframe: {
				locator: vi.fn(() => ({
					evaluate: vi.fn(async () => 0),
					screenshot: vi.fn(async () => screenshotBuf),
				})),
			},
		}
	}

	it('returns an empty string when ctx.iframe is absent', async () => {
		const result = await commands.captureStoryScreenshot({}, 375, 667, 36)
		expect(result).toBe('')
	})

	// ── Mobile (viewport 375×667, effectiveHeight ≤ 720 → no scale reset) ──────

	it('crops a short mobile story to its content height without touching the scale', async () => {
		const buf = makePng(375, 667) // mock screenshot fills the full viewport
		const ctx = makeCtx(buf)

		const result = await commands.captureStoryScreenshot(ctx, 375, 667, 36)
		const img = PNG.sync.read(Buffer.from(result, 'base64'))

		expect(img.width).toBe(375)
		expect(img.height).toBe(36)
		// effectiveHeight = max(36, 667) = 667 ≤ 720 → no scale reset
		expect(ctx.page.evaluate).not.toHaveBeenCalled()
		expect(ctx.page.setViewportSize).not.toHaveBeenCalled()
	})

	it('returns the full screenshot when content exactly fills the mobile viewport', async () => {
		const buf = makePng(375, 667)
		const ctx = makeCtx(buf)

		const result = await commands.captureStoryScreenshot(ctx, 375, 667, 667)
		const img = PNG.sync.read(Buffer.from(result, 'base64'))

		expect(img.width).toBe(375)
		expect(img.height).toBe(667)
		expect(ctx.page.evaluate).not.toHaveBeenCalled()
	})

	// ── Mobile tall story (effectiveHeight > 720 → scale reset required) ────────

	it('resets the iframe container scale for a tall mobile story', async () => {
		const buf = makePng(375, 1500)
		const ctx = makeCtx(buf)

		const result = await commands.captureStoryScreenshot(ctx, 375, 667, 1500)
		const img = PNG.sync.read(Buffer.from(result, 'base64'))

		// No whitespace crop (contentHeight 1500 > viewportHeight 667)
		expect(img.width).toBe(375)
		expect(img.height).toBe(1500)
		// Scale-reset path: 3 evaluate calls, 2 setViewportSize calls
		expect(ctx.page.evaluate).toHaveBeenCalledTimes(3)
		expect(ctx.page.setViewportSize).toHaveBeenCalledTimes(2)
	})

	it('expands the outer page to effectiveHeight and restores it afterwards', async () => {
		const buf = makePng(375, 1500)
		const ctx = makeCtx(buf)

		await commands.captureStoryScreenshot(ctx, 375, 667, 1500)

		expect(ctx.page.setViewportSize).toHaveBeenNthCalledWith(1, { width: 1280, height: 1500 })
		expect(ctx.page.setViewportSize).toHaveBeenNthCalledWith(2, { width: 1280, height: 720 })
	})

	it('sets the container to scale(1) with logical viewport dimensions', async () => {
		const buf = makePng(375, 1500)
		const ctx = makeCtx(buf)

		await commands.captureStoryScreenshot(ctx, 375, 667, 1500)

		// Second evaluate call: set scale(1) — arg must carry the logical dimensions
		const [, [, setArg]] = ctx.page.evaluate.mock.calls
		expect(setArg).toEqual({ w: 375, h: 1500 })
	})

	it('restores the saved container style after screenshotting', async () => {
		const savedStyle = 'width:375px;height:667px;transform:scale(1);transform-origin:left top;'
		const buf = makePng(375, 1500)
		const ctx = makeCtx(buf, { width: 1280, height: 720 }, savedStyle)

		await commands.captureStoryScreenshot(ctx, 375, 667, 1500)

		// Third evaluate call: restore — second argument must be the saved style string
		const [, , [, restoredStyle]] = ctx.page.evaluate.mock.calls
		expect(restoredStyle).toBe(savedStyle)
	})

	// ── Tablet (viewport 768×1024, effectiveHeight = 1024 > 720 → scale reset) ──

	it('resets the scale for a short tablet story (base viewport > 720 px)', async () => {
		const buf = makePng(768, 50)
		const ctx = makeCtx(
			buf,
			{ width: 1280, height: 720 },
			'width:768px;height:1024px;transform:scale(0.703);transform-origin:left top;',
		)

		// effectiveHeight = max(50, 1024) = 1024 > 720 → scale reset applies
		const result = await commands.captureStoryScreenshot(ctx, 768, 1024, 50)
		const img = PNG.sync.read(Buffer.from(result, 'base64'))

		// Content 50 px < viewport 1024 px → cropped
		expect(img.width).toBe(768)
		expect(img.height).toBe(50)
		expect(ctx.page.evaluate).toHaveBeenCalledTimes(3)
		expect(ctx.page.setViewportSize).toHaveBeenCalledWith({ width: 1280, height: 1024 })
	})

	it('resets the scale for a tall tablet story', async () => {
		const buf = makePng(768, 1800)
		const ctx = makeCtx(
			buf,
			{ width: 1280, height: 720 },
			'width:768px;height:1024px;transform:scale(0.703);transform-origin:left top;',
		)

		const result = await commands.captureStoryScreenshot(ctx, 768, 1024, 1800)
		const img = PNG.sync.read(Buffer.from(result, 'base64'))

		expect(img.width).toBe(768)
		expect(img.height).toBe(1800)
		expect(ctx.page.setViewportSize).toHaveBeenCalledWith({ width: 1280, height: 1800 })
	})

	// ── Desktop (viewport 1280×800, effectiveHeight = 800 > 720 → scale reset) ──

	it('resets the scale for a short desktop story (base viewport > 720 px)', async () => {
		const buf = makePng(1280, 400)
		const ctx = makeCtx(
			buf,
			{ width: 1280, height: 720 },
			'width:1280px;height:800px;transform:scale(0.9);transform-origin:left top;',
		)

		// effectiveHeight = max(400, 800) = 800 > 720 → scale reset applies
		const result = await commands.captureStoryScreenshot(ctx, 1280, 800, 400)
		const img = PNG.sync.read(Buffer.from(result, 'base64'))

		expect(img.width).toBe(1280)
		expect(img.height).toBe(400)
		expect(ctx.page.evaluate).toHaveBeenCalledTimes(3)
		expect(ctx.page.setViewportSize).toHaveBeenCalledWith({ width: 1280, height: 800 })
	})

	it('resets the scale for a tall desktop story', async () => {
		const buf = makePng(1280, 2000)
		const ctx = makeCtx(
			buf,
			{ width: 1280, height: 720 },
			'width:1280px;height:800px;transform:scale(0.9);transform-origin:left top;',
		)

		const result = await commands.captureStoryScreenshot(ctx, 1280, 800, 2000)
		const img = PNG.sync.read(Buffer.from(result, 'base64'))

		expect(img.width).toBe(1280)
		expect(img.height).toBe(2000)
		expect(ctx.page.setViewportSize).toHaveBeenCalledWith({ width: 1280, height: 2000 })
	})
})

// ─── prepareForSnapshot ───────────────────────────────────────────────────────

describe('prepareForSnapshot', () => {
	it('returns 0 when ctx.iframe is absent', async () => {
		const result = await commands.prepareForSnapshot({ iframe: undefined })
		expect(result).toBe(0)
	})

	it('calls waitForLoadState and returns the content height from iframe evaluate', async () => {
		const ctx = {
			page: { waitForLoadState: vi.fn(async () => {}) },
			iframe: {
				locator: vi.fn(() => ({ evaluate: vi.fn(async () => 1234) })),
			},
		}
		const result = await commands.prepareForSnapshot(ctx)

		expect(result).toBe(1234)
		expect(ctx.page.waitForLoadState).toHaveBeenCalledWith('networkidle', { timeout: 10_000 })
		expect(ctx.iframe.locator).toHaveBeenCalledWith('html')
	})

	it('continues if waitForLoadState times out', async () => {
		const ctx = {
			page: {
				waitForLoadState: vi.fn(async () => {
					throw new Error('Timeout')
				}),
			},
			iframe: {
				locator: vi.fn(() => ({ evaluate: vi.fn(async () => 500) })),
			},
		}
		const result = await commands.prepareForSnapshot(ctx)
		expect(result).toBe(500) // did not throw
	})
})
