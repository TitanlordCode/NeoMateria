import { existsSync, readFileSync, readdirSync, rmSync } from 'node:fs'
import { join, resolve } from 'node:path'

const manifestPath = resolve(process.cwd(), '.snapshot-run-manifest')
const snapshotsDir = resolve(process.cwd(), '__snapshots__')

if (!existsSync(manifestPath)) {
	console.error('No manifest found — run npm run test:storybook:update first.')
	process.exit(1)
}

if (!existsSync(snapshotsDir)) {
	console.log('No __snapshots__ directory found — nothing to clean up.')
	process.exit(0)
}

const manifest = new Set(
	readFileSync(manifestPath, 'utf8')
		.split('\n')
		.filter(Boolean),
)

const snapshotFiles = readdirSync(snapshotsDir).filter((file) => file.endsWith('.png'))

let deletedCount = 0
for (const filename of snapshotFiles) {
	if (!manifest.has(filename)) {
		rmSync(join(snapshotsDir, filename))
		console.log(`Deleted: ${filename}`)
		deletedCount++
	}
}

if (deletedCount === 0) {
	console.log('Nothing to clean up — all baselines are current.')
} else {
	console.log(`Cleanup complete. ${deletedCount} file(s) deleted.`)
}
