// md and lg widths come from breakpoints.ts (Tailwind CSS defaults).
// sm (iPhone SE), xl (1080p Full HD), 2xl (QHD) are standard device resolutions
// that don't map to a CSS breakpoint threshold — hardcoded here.
import { breakpoints } from '../src/assets/typescript/breakpoints'

export const snapshotViewports = [
	{ name: 'sm', width: 375, height: 667 }, // iPhone SE — below all breakpoints
	{ name: 'md', width: breakpoints.md, height: 1024 }, // 768 — iPad portrait, at bp-md
	{ name: 'lg', width: breakpoints.lg, height: 768 }, // 1024 — iPad landscape, at bp-lg
	{ name: 'xl', width: 1920, height: 1080 }, // 1080p Full HD — all breakpoints active
	{ name: '2xl', width: 2592, height: 1440 }, // QHD — overflow/wide layout test
] as const

export type SnapshotViewport = (typeof snapshotViewports)[number]
