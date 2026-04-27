/**
 * Server-side (Node.js) Playwright browser commands for visual snapshot testing.
 * Extracted from vitest.config.mts so they can be unit-tested independently.
 */
import { createRequire } from 'node:module'
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const _require = createRequire(import.meta.url)

// ─── PNG / pixel-compare helpers (lazy-loaded from playwright-core) ──────────

type PNGInstance = { data: Buffer }
type PNGClass = {
	new (opts: { width: number; height: number }): PNGInstance
	sync: {
		read: (buf: Buffer) => { data: Buffer; width: number; height: number }
		write: (png: object) => Buffer
	}
}
type CompareFn = (
	actual: Buffer,
	expected: Buffer,
	diff: Buffer | null,
	width: number,
	height: number,
) => number

let _PNG: PNGClass | null = null
let _compare: CompareFn | null = null

export function loadImageTools(): void {
	if (_PNG) return
	_PNG = (_require('playwright-core/lib/utilsBundle') as { PNG: PNGClass }).PNG
	_compare = (
		_require('playwright-core/lib/server/utils/image_tools/compare') as {
			compare: CompareFn
		}
	).compare
}

// ─── Types ───────────────────────────────────────────────────────────────────

export type SnapshotStatus =
	| { status: 'created' }
	| { status: 'match' }
	| { status: 'mismatch'; modifiedPath: string; diffPath?: string }
	| { status: 'missing' }

export interface SnapshotDirs {
	snapshots: string
	modified: string
	diff: string
}

export interface SnapshotCommandOptions {
	/**
	 * Milliseconds to wait after resetting the iframe container scale / expanding
	 * the outer page viewport so Chrome has time to rasterize newly visible content.
	 * Default: 100. Set to 0 in unit tests.
	 */
	rasterizationDelay?: number
}

// Minimal shape of the Playwright context passed to browser commands.
type BrowserCtx = {
	page?: {
		// Intersection of the two overloads we actually call:
		//   • no-arg form  → returns serialisable unknown (caller casts as needed)
		//   • generic form → arg type is inferred from the passed value
		evaluate: ((fn: () => unknown) => Promise<unknown>) &
			(<T>(fn: (arg: T) => unknown, arg: T) => Promise<unknown>)
		setViewportSize: (size: { width: number; height: number }) => Promise<void>
		viewportSize: () => { width: number; height: number } | null
		waitForLoadState: (state: string, opts?: { timeout?: number }) => Promise<void>
	}
	iframe?: {
		locator: (sel: string) => {
			evaluate: (fn: () => Promise<number>) => Promise<number>
			screenshot: (options?: { type?: string }) => Promise<Buffer>
		}
	}
}

// ─── Factory ─────────────────────────────────────────────────────────────────

/**
 * Creates the three snapshot browser commands bound to the given directory paths.
 * Pass `{ rasterizationDelay: 0 }` in unit tests to skip the 100 ms wait.
 */
export function createSnapshotCommands(dirs: SnapshotDirs, options: SnapshotCommandOptions = {}) {
	const { rasterizationDelay = 100 } = options

	const MANIFEST_PATH = resolve(process.cwd(), '.snapshot-run-manifest')
	writeFileSync(MANIFEST_PATH, '')

	// ── compareSnapshot ─────────────────────────────────────────────────────

	const HEADLESS_VIEWPORT_HEIGHT = 1080

	const compareSnapshot = async (
		_context: unknown,
		storyId: string,
		viewportName: string,
		base64: string,
		diffThreshold: number = 0,
	): Promise<SnapshotStatus> => {
		const snapshotPath = join(dirs.snapshots, `${storyId}--${viewportName}.png`)
		appendFileSync(MANIFEST_PATH, `${storyId}--${viewportName}.png\n`)
		const modifiedPath = join(dirs.modified, `${storyId}--${viewportName}.png`)
		const diffPath = join(dirs.diff, `${storyId}--${viewportName}--diff.png`)
		const currentBuffer = Buffer.from(base64, 'base64')

		const isCI = Boolean(process.env.CI)
		const shouldUpdate = process.argv.includes('--update') || process.argv.includes('-u')

		if (!existsSync(snapshotPath)) {
			if (isCI) return { status: 'missing' }
			mkdirSync(dirs.snapshots, { recursive: true })
			writeFileSync(snapshotPath, currentBuffer)
			return { status: 'created' }
		}

		loadImageTools()
		const PNG = _PNG!
		const compare = _compare!

		const baselinePng = PNG.sync.read(readFileSync(snapshotPath))
		const currentPng = PNG.sync.read(currentBuffer)

		if (baselinePng.width !== currentPng.width || baselinePng.height !== currentPng.height) {
			if (shouldUpdate) {
				writeFileSync(snapshotPath, currentBuffer)
				return { status: 'match' }
			}
			mkdirSync(dirs.modified, { recursive: true })
			writeFileSync(modifiedPath, currentBuffer)
			return { status: 'mismatch', modifiedPath }
		}

		const diffPng = new PNG({ width: baselinePng.width, height: baselinePng.height })
		const diffPixels = compare(
			currentPng.data,
			baselinePng.data,
			diffPng.data,
			baselinePng.width,
			baselinePng.height,
		)

		if (diffPixels === 0) return { status: 'match' }

		if (
			diffThreshold !== undefined &&
			diffPixels / (baselinePng.width * baselinePng.height) <= diffThreshold
		) {
			return { status: 'match' }
		}

		if (shouldUpdate) {
			writeFileSync(snapshotPath, currentBuffer)
			return { status: 'match' }
		}

		mkdirSync(dirs.modified, { recursive: true })
		writeFileSync(modifiedPath, currentBuffer)
		mkdirSync(dirs.diff, { recursive: true })
		writeFileSync(diffPath, PNG.sync.write(diffPng))
		return { status: 'mismatch', modifiedPath, diffPath }
	}

	// ── prepareForSnapshot ──────────────────────────────────────────────────

	const prepareForSnapshot = async (context: unknown): Promise<number> => {
		const ctx = context as BrowserCtx

		if (ctx.page) {
			await ctx.page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {})
		}

		if (!ctx.iframe) return 0
		return ctx.iframe.locator('html').evaluate(async (): Promise<number> => {
			if (!document.getElementById('__vt-freeze-animations__')) {
				const style = document.createElement('style')
				style.id = '__vt-freeze-animations__'
				style.textContent =
					'html { scrollbar-width: none !important; } ' +
					'::-webkit-scrollbar { display: none !important; } ' +
					'*, *::before, *::after { ' +
					'animation: none !important; ' +
					'transition-duration: 0ms !important; ' +
					'transition-delay: 0ms !important; }'
				document.head.appendChild(style)
			}
			await Promise.all(
				Array.from(document.images)
					.filter((img) => !img.complete)
					.map(
						(img) =>
							new Promise<void>((resolve) => {
								img.onload = img.onerror = () => resolve()
							}),
					),
			)
			await new Promise<void>((resolve) => setTimeout(resolve, 0))
			for (let attempt = 0; attempt < 10; attempt++) {
				const running = document
					.getAnimations()
					.filter((animation) => animation.playState === 'running')
				if (running.length === 0) break
				await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
			}
			const container = document.getElementById('storybook-root') ?? document.body
			if (container.scrollHeight > container.clientHeight) return container.scrollHeight
			let maxBottom = 0
			for (const child of container.children) {
				const bottom = child.getBoundingClientRect().bottom
				if (bottom > maxBottom) maxBottom = bottom
			}
			return maxBottom || container.scrollHeight
		})
	}

	// ── captureStoryScreenshot ──────────────────────────────────────────────

	// The default headless Chromium viewport height is 720 px. When page.viewport(w, h)
	// is called with h > 720, vitest's setIframeViewport applies
	//   transform: scale(720 / h)
	// to the iframe container so it fits on screen visually. Screenshots capture
	// visual (scaled) pixels rather than logical pixels, producing wrong dimensions.
	//
	// The fix: whenever effectiveHeight > 720 (which includes ALL tablet and desktop
	// viewports, since their base heights are 1024 / 800), we:
	//   1. Save the container's cssText (which carries the scale transform).
	//   2. Reset it to scale(1) at the full logical dimensions.
	//   3. Expand the outer Playwright page so Chrome rasterizes all content.
	//   4. Screenshot — now at correct logical dimensions.
	//   5. Restore the container style and page viewport.

	const captureStoryScreenshot = async (
		context: unknown,
		viewportWidth: number,
		viewportHeight: number,
		contentHeight: number,
	): Promise<string> => {
		const ctx = context as BrowserCtx

		if (!ctx.iframe) return ''

		const effectiveHeight = Math.ceil(Math.max(contentHeight, viewportHeight))
		const needsScaleReset = effectiveHeight > HEADLESS_VIEWPORT_HEIGHT

		const originalViewport = ctx.page?.viewportSize() ?? {
			width: 1920,
			height: HEADLESS_VIEWPORT_HEIGHT,
		}
		let savedContainerStyle = ''

		if (needsScaleReset && ctx.page) {
			savedContainerStyle = (await ctx.page.evaluate(() => {
				const iframe = document.querySelector('[data-vitest="true"]') as HTMLElement | null
				return iframe?.parentElement?.style.cssText ?? ''
			})) as string

			await ctx.page.evaluate(
				({ w, h }: { w: number; h: number }) => {
					const iframe = document.querySelector('[data-vitest="true"]') as HTMLElement | null
					if (iframe?.parentElement) {
						iframe.parentElement.style.cssText = `width:${w}px;height:${h}px;transform:scale(1);transform-origin:left top;`
					}
				},
				{ w: viewportWidth, h: effectiveHeight },
			)

			await ctx.page.setViewportSize({ width: originalViewport.width, height: effectiveHeight })
			await new Promise<void>((resolve) => setTimeout(resolve, rasterizationDelay))
		}

		const buffer = await ctx.iframe.locator('body').screenshot({ type: 'png' })

		if (needsScaleReset && ctx.page) {
			await ctx.page.evaluate((style: string) => {
				const iframe = document.querySelector('[data-vitest="true"]') as HTMLElement | null
				if (iframe?.parentElement) iframe.parentElement.style.cssText = style
			}, savedContainerStyle)
			await ctx.page.setViewportSize(originalViewport)
		}

		// Crop whitespace below short stories whose bodies are padded to 100 vh.
		if (contentHeight > 0 && contentHeight < viewportHeight) {
			loadImageTools()
			const PNG = _PNG!
			const img = PNG.sync.read(buffer)
			const croppedHeight = Math.min(Math.ceil(contentHeight), img.height)
			if (croppedHeight < img.height) {
				const cropped = new PNG({ width: img.width, height: croppedHeight })
				img.data.copy(cropped.data, 0, 0, img.width * croppedHeight * 4)
				return PNG.sync.write(cropped).toString('base64')
			}
		}

		return buffer.toString('base64')
	}

	return { compareSnapshot, prepareForSnapshot, captureStoryScreenshot }
}
