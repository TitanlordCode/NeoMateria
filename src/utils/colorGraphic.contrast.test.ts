import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { contrast } from './wcag'

/**
 * Locks in the WCAG 1.4.11 graphical contrast contract for `--neo-theme-colorGraphic`.
 * The default NeoProgressBar track is `grey200` in light mode and `grey700` in dark mode;
 * every theme color's graphic shade must reach 3:1 against the track in its mode, except
 * for colors whose lightest hue is fundamentally too bright to ever pass on a light track.
 */

const LIGHT_TRACK = '#eeeeee'
const DARK_TRACK = '#616161'
const MIN_RATIO = 3

// Math-impossible families on a light track — even their 900 shade is too bright.
// Documented in `generate-colors.ts` (see best-effort fallback) and in the showcase
// `NonWCAGCompliantEntries` entry for NeoProgressBar.
const LIGHT_EXCEPTIONS = ['yellow', 'amber', 'white']

const colorsCss = readFileSync(join(__dirname, '..', 'assets', 'styles', 'colors.css'), 'utf8')

const cssVarHex: Record<string, string> = {}
for (const match of colorsCss.matchAll(/--neo-color-([a-zA-Z0-9]+):\s*(#[0-9a-fA-F]+)/g)) {
	cssVarHex[match[1]] = match[2]
}

interface ThemeGraphic {
	family: string
	lightHex: string
	darkHex: string
}

const themes: ThemeGraphic[] = []
for (const part of colorsCss.split('.Themed--').slice(1)) {
	const familyMatch = part.match(/^([a-zA-Z]+)/)
	if (!familyMatch) continue
	const family = familyMatch[1]

	const graphicMatches = [
		...part.matchAll(/--neo-theme-colorGraphic:\s*var\(--neo-color-([a-zA-Z0-9]+)\)/g),
	]
	if (graphicMatches.length < 2) continue

	const lightHex = cssVarHex[graphicMatches[0][1]]
	const darkHex = cssVarHex[graphicMatches[1][1]]
	if (!lightHex || !darkHex) continue

	themes.push({ family, lightHex, darkHex })
}

describe('--neo-theme-colorGraphic contrast', () => {
	it('parses at least 19 themes from colors.css', () => {
		expect(themes.length).toBeGreaterThanOrEqual(19)
	})

	describe('light mode (grey200 track)', () => {
		for (const theme of themes) {
			if (LIGHT_EXCEPTIONS.includes(theme.family)) {
				it.skip(`${theme.family} — math-impossible on light track`, () => {})
				continue
			}
			it(`${theme.family} ≥ ${MIN_RATIO}:1`, () => {
				const ratio = contrast(LIGHT_TRACK, theme.lightHex)
				expect(ratio).toBeGreaterThanOrEqual(MIN_RATIO)
			})
		}
	})

	describe('dark mode (grey700 track)', () => {
		for (const theme of themes) {
			it(`${theme.family} ≥ ${MIN_RATIO}:1`, () => {
				const ratio = contrast(DARK_TRACK, theme.darkHex)
				expect(ratio).toBeGreaterThanOrEqual(MIN_RATIO)
			})
		}
	})
})
