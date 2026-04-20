import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

const isDevEnvironment = window.location.pathname.includes('/dev/')
const isLocalhost = window.location.hostname === 'localhost'

const envLabel = isDevEnvironment ? 'DEV' : isLocalhost ? 'LOC' : null

const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')

// Builds the sidebar brand image as an inline SVG data URL.
// The logo paths are inlined directly so no network fetch is needed.
// textColor adapts to the system color scheme; the blue circle is always #1A73E8.
const buildBrandSvg = (isDark: boolean): string => {
	const logoTextColor = isDark ? '#f1f5f9' : '#1f2937'
	const labelColor = isDark ? '#e5e7eb' : '#333333'

	// Logo occupies a 51×32 area (288×182 viewBox scaled to 32px tall)
	const logoWidth = 51
	const logoHeight = 32
	const gap = 8
	const textX = logoWidth + gap
	const textY = 21

	let totalWidth = textX + 86

	let envBadge = ''
	if (envLabel) {
		const badgeWidth = 44
		const badgeX = totalWidth + 6
		totalWidth = badgeX + badgeWidth + 4
		envBadge =
			`<rect x="${badgeX}" y="7" width="${badgeWidth}" height="18" rx="9" fill="#f59e0b"/>` +
			`<text x="${badgeX + badgeWidth / 2}" y="20" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">⚠ ${envLabel}</text>`
	}

	const svg =
		`<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${logoHeight}" viewBox="0 0 ${totalWidth} ${logoHeight}">` +
		`<svg x="0" y="0" width="${logoWidth}" height="${logoHeight}" viewBox="0 0 288 182">` +
		`<path fill="${logoTextColor}" d="M41 1C27.6667 1 14.3333 1 1 1C1 61 1 121 1 181C14.3333 181 27.6667 181 41 181C41 121 41 61 41 1Z"/>` +
		`<path fill="${logoTextColor}" d="M149 1C135.6667 1 122.3333 1 109 1C109 61 109 121 109 181C122.3333 181 135.6667 181 149 181C149 121 149 61 149 1Z"/>` +
		`<path fill="${logoTextColor}" d="M287 1C273.6667 1 260.3333 1 247 1C247 61 247 121 247 181C260.3333 181 273.6667 181 287 181C287 121 287 61 287 1Z"/>` +
		`<path fill="${logoTextColor}" d="M30 1C41.9495 1 53.899 1 65.8485 1C84.2323 61 102.6162 121 121 181C109.0505 181 97.101 181 85.1515 181C66.7677 121 48.3838 61 30 1Z"/>` +
		`<path fill="${logoTextColor}" d="M117 1C129.606 1 142.212 1 154.818 1C174.212 41.6667 161.106 14.3333 180.5 55C165.894 62 163.424 64.5 154.818 80.5C135.424 39.8333 136.394 41.6667 117 1Z"/>` +
		`<path fill="${logoTextColor}" d="M216 54.5C229.606 59.5 238.394 71.5 241 78.5C260.394 37.8333 259.606 41.6667 279 1C266.394 1 253.788 1 241.182 1C221.788 41.6667 235.394 13.8333 216 54.5Z"/>` +
		`<path fill="#1A73E8" d="M199 126C215.0165 126 228 113.0165 228 97C228 80.9837 215.0165 68 199 68C182.9835 68 170 80.9837 170 97C170 113.0165 182.9835 126 199 126Z"/>` +
		`</svg>` +
		`<text x="${textX}" y="${textY}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="14" font-weight="600" fill="${labelColor}">NeoMateria</text>` +
		envBadge +
		`</svg>`

	return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const applyTheme = (isDark: boolean) => {
	addons.setConfig({
		theme: create({
			base: (isDark ? 'dark' : 'light') as 'light' | 'dark',
			brandTitle: envLabel ? `NeoMateria — ⚠ ${envLabel}` : 'NeoMateria',
			brandUrl: 'https://github.com/TitanlordCode/NeoMateria',
			brandTarget: '_blank',
			brandImage: buildBrandSvg(isDark),
			fontBase: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
			fontCode: 'monospace',
			colorPrimary: '#3b82f6',
			colorSecondary: '#3b82f6',
		}),
	})
}

applyTheme(colorScheme.matches)
colorScheme.addEventListener('change', (event) => applyTheme(event.matches))
