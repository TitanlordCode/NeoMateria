/**
 * Normalizes a hex color string to 6-digit format without hash symbol
 * @param hex - Hex color string (with or without #, 3 or 6 digits)
 * @returns Normalized 6-digit hex string without hash
 * @throws Error if hex format is invalid
 * @example
 * normalizeHex('#abc') // 'aabbcc'
 * normalizeHex('ff0000') // 'ff0000'
 */
function normalizeHex(hex: string): string {
	hex = hex.replace('#', '')

	// Expand 3-digit hex (#abc → #aabbcc)
	if (hex.length === 3) {
		hex = hex
			.split('')
			.map((ch) => ch + ch)
			.join('')
	}

	if (hex.length !== 6) {
		throw new Error(`Invalid hex color: ${hex}`)
	}

	return hex
}

/**
 * Calculates the relative luminance of a color according to WCAG standards
 * Uses the formula: L = 0.2126 * R + 0.7152 * G + 0.0722 * B
 * @param hex - Hex color string
 * @returns Relative luminance value between 0 (darkest) and 1 (lightest)
 * @see https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 * @example
 * luminance('#ffffff') // 1
 * luminance('#000000') // 0
 */
export function luminance(hex: string) {
	const c = normalizeHex(hex)
	const rgb = [
		parseInt(c.substr(0, 2), 16) / 255,
		parseInt(c.substr(2, 2), 16) / 255,
		parseInt(c.substr(4, 2), 16) / 255,
	].map((v) => {
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
	})

	return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]
}

/**
 * Calculates the contrast ratio between two colors according to WCAG standards
 * @param hex1 - First hex color string
 * @param hex2 - Second hex color string
 * @returns Contrast ratio between 1 (no contrast) and 21 (maximum contrast)
 * @see https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
 * @example
 * contrast('#ffffff', '#000000') // 21 (maximum contrast)
 * contrast('#ffffff', '#ffffff') // 1 (no contrast)
 */
export function contrast(hex1: string, hex2: string) {
	const L1 = luminance(hex1)
	const L2 = luminance(hex2)
	return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)
}

/**
 * Checks if a color combination meets WCAG accessibility standards
 * @param bg - Background hex color
 * @param fg - Foreground/text hex color
 * @param minRatio - Minimum contrast ratio required (default: 4.5 for WCAG AA)
 * @returns True if the contrast ratio meets or exceeds the minimum ratio
 * @see https://www.w3.org/TR/WCAG21/#contrast-minimum
 * @example
 * isAccessible('#000000', '#ffffff') // true (ratio: 21)
 * isAccessible('#000000', '#333333') // false (ratio: ~4.36)
 * isAccessible('#000000', '#ffffff', 7) // true (for WCAG AAA)
 */
export function isAccessible(bg: string, fg: string, minRatio = 4.5) {
	return contrast(bg, fg) >= minRatio
}
