// scripts/generate-icons.ts
import fs from 'fs'
import path from 'path'

const icons = [
	{ name: 'home', style: 'materialiconsoutlined' },
	{ name: 'search', style: 'materialiconsoutlined' },
	{ name: 'settings', style: 'materialiconsoutlined' },
	{ name: 'close', style: 'materialiconsoutlined' },
	{ name: 'keyboard_arrow_up', style: 'materialiconsoutlined' }, // filled version
	{ name: 'keyboard_arrow_right', style: 'materialiconsoutlined' }, // filled version
	{ name: 'keyboard_arrow_down', style: 'materialiconsoutlined' }, // filled version
	{ name: 'keyboard_arrow_left', style: 'materialiconsoutlined' }, // filled version
]

const outDir = path.resolve(__dirname, '../src/assets/icons') // works fine

const baseUrl = 'https://fonts.gstatic.com/s/i'

async function downloadIcons() {
	for (const icon of icons) {
		const url = `${baseUrl}/${icon.style}/${icon.name}/v15/24px.svg`
		const res = await fetch(url)
		if (!res.ok) {
			console.error(`❌ Failed to fetch ${icon.name}: ${res.status}`)
			continue
		}
		const svg = await res.text()
		fs.writeFileSync(path.join(outDir, `${icon.name}.svg`), svg, 'utf-8')
		console.log(`✅ Saved ${icon.name}.svg`)
	}
}

downloadIcons()
