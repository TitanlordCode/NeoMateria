/**
 * Generates a deterministic SVG data URI for use as a placeholder image in stories.
 *
 * Benefits over picsum.photos:
 * - Always identical output for the same inputs → safe for snapshot testing
 * - No network request → stories work offline and load instantly
 * - Displays dimensions as text so you can see exactly what size is being used
 *
 * @example
 * // Portrait cover (300×450, default grey)
 * placeholder(300, 450)
 *
 * // Custom background color
 * placeholder(200, 300, '#6366f1')
 *
 * // Custom label (e.g. for AllColors showcase)
 * placeholder(200, 300, '#3b82f6', { label: 'blue' })
 */
export const placeholder = (
	width: number,
	height: number,
	bgColor = '#94a3b8',
	options?: { label?: string; textColor?: string },
): string => {
	const label = options?.label ?? `${width}×${height}`
	const textColor = options?.textColor ?? '#ffffff'
	const fontSize = Math.max(10, Math.min(16, Math.floor(Math.min(width, height) / 6)))

	const svg = [
		`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`,
		`<rect width="100%" height="100%" fill="${bgColor}"/>`,
		`<text x="50%" y="50%" font-family="monospace" font-size="${fontSize}" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${label}</text>`,
		`</svg>`,
	].join('')

	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}
