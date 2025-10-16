import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const CACHE_DIR = '.cache'

/**
 * Generates a hash for the given content
 */
function generateHash(content: string): string {
	return createHash('md5').update(content).digest('hex')
}

/**
 * Gets the cache file path for a given script name
 */
function getCacheFilePath(scriptName: string): string {
	return `${CACHE_DIR}/${scriptName}.hash`
}

/**
 * Checks if the source files have changed since the last generation
 * @param scriptName - Name of the script (used for cache file naming)
 * @param sourceFiles - Array of source file paths to check
 * @param outputFiles - Array of output file paths to check if they exist
 * @returns true if generation should be skipped, false otherwise
 */
export function shouldSkipGeneration(
	scriptName: string,
	sourceFiles: string[],
	outputFiles: string[],
): boolean {
	// Check if all output files exist
	const allOutputsExist = outputFiles.every((file) => existsSync(file))
	if (!allOutputsExist) {
		console.log(`⚠️  Output files missing for ${scriptName}, regenerating...`)
		return false
	}

	// Read all source files and concatenate their contents
	let combinedContent = ''
	try {
		for (const file of sourceFiles) {
			if (existsSync(file)) {
				combinedContent += readFileSync(file, 'utf-8')
			}
		}
	} catch (error) {
		console.log(`⚠️  Error reading source files for ${scriptName}:`, error)
		return false
	}

	// Generate hash of current content
	const currentHash = generateHash(combinedContent)

	// Check if cache file exists
	const cacheFile = getCacheFilePath(scriptName)
	if (!existsSync(cacheFile)) {
		return false
	}

	// Read cached hash
	const cachedHash = readFileSync(cacheFile, 'utf-8').trim()

	// Compare hashes
	if (currentHash === cachedHash) {
		console.log(`✅ ${scriptName}: No changes detected, skipping generation`)
		return true
	}

	return false
}

/**
 * Updates the cache with the current source file hashes
 * @param scriptName - Name of the script (used for cache file naming)
 * @param sourceFiles - Array of source file paths
 */
export function updateCache(scriptName: string, sourceFiles: string[]): void {
	// Read all source files and concatenate their contents
	let combinedContent = ''
	for (const file of sourceFiles) {
		if (existsSync(file)) {
			combinedContent += readFileSync(file, 'utf-8')
		}
	}

	// Generate hash of current content
	const currentHash = generateHash(combinedContent)

	// Write hash to cache file
	const cacheFile = getCacheFilePath(scriptName)
	mkdirSync(dirname(cacheFile), { recursive: true })
	writeFileSync(cacheFile, currentHash)
}
