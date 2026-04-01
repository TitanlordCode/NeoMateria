import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

const isDevEnvironment = window.location.pathname.includes('/dev/')
const isLocalhost = window.location.hostname === 'localhost'

const envLabel = isDevEnvironment ? 'DEV' : isLocalhost ? 'LOC' : null

const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')

// Cached after the async favicon fetch completes (env label only)
let faviconDataUrl: string | null = null

const buildEnvSvg = (isDark: boolean, favicon: string): string => {
	const badgeWidth = 44
	const textX = 40
	const textWidth = 80
	const badgeX = textX + textWidth + 6
	const totalWidth = badgeX + badgeWidth + 4
	// manager-head.html overrides Storybook's max-width: 150px to 215px for the brand img
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="32" viewBox="0 0 ${totalWidth} 32">
		<image href="${favicon}" x="0" y="0" width="32" height="32"/>
		<text x="${textX}" y="21" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="14" font-weight="600" fill="${isDark ? '#e5e7eb' : '#333333'}">NeoMateria</text>
		<rect x="${badgeX}" y="7" width="${badgeWidth}" height="18" rx="9" fill="#f59e0b"/>
		<text x="${badgeX + badgeWidth / 2}" y="20" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">⚠ ${envLabel}</text>
	</svg>`
}

const applyTheme = (isDark: boolean) => {
	const baseConfig = {
		base: (isDark ? 'dark' : 'light') as 'light' | 'dark',
		brandTitle: envLabel ? `NeoMateria — ⚠ ${envLabel}` : 'NeoMateria',
		brandUrl: 'https://github.com/TitanlordCode/NeoMateria',
		brandTarget: '_blank',
		fontBase: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
		fontCode: 'monospace',
		colorPrimary: '#3b82f6',
		colorSecondary: '#3b82f6',
	}

	let brandImage: string | undefined
	if (!envLabel) {
		brandImage = './favicon.ico'
	} else if (faviconDataUrl) {
		brandImage = `data:image/svg+xml,${encodeURIComponent(buildEnvSvg(isDark, faviconDataUrl))}`
	}
	// else: env label but favicon not yet loaded — no image (text-only fallback)

	addons.setConfig({ theme: create({ ...baseConfig, brandImage }) })
}

// Apply immediately
applyTheme(colorScheme.matches)

// Re-apply whenever the user switches system dark/light mode
colorScheme.addEventListener('change', (event) => applyTheme(event.matches))

if (envLabel) {
	// Fetch the favicon, convert to base64, then embed it alongside the env badge in an SVG
	fetch('./favicon.ico')
		.then((response) => response.blob())
		.then(
			(blob) =>
				new Promise<string>((resolve, reject) => {
					const reader = new FileReader()
					reader.onload = () => resolve(reader.result as string)
					reader.onerror = reject
					reader.readAsDataURL(blob)
				}),
		)
		.then((dataUrl) => {
			faviconDataUrl = dataUrl
			applyTheme(colorScheme.matches)
		})
		.catch(() => {
			// favicon failed to load — text-only fallback already applied above
		})
}
