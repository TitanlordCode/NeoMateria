/**
 * Generates a deterministic SVG data URI for use as a placeholder image in stories.
 *
 * Benefits over picsum.photos:
 * - Always identical output for the same inputs → safe for snapshot testing
 * - No network request → stories work offline and load instantly
 * - Pure geometry (no text) → pixel-identical across headless Chromium runs
 *
 * @example
 * // Portrait cover (300×450, default grey)
 * placeholder(300, 450)
 *
 * // Custom background color
 * placeholder(200, 300, '#6366f1')
 */
export const placeholder = (width: number, height: number, bgColor = '#94a3b8'): string => {
	const svg = [
		`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`,
		`<rect width="100%" height="100%" fill="${bgColor}"/>`,
		`</svg>`,
	].join('')

	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}
