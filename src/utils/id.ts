let counter = 0

/**
 * Generates a unique ID string suitable for HTML element IDs
 * Combines timestamp, counter, and random value for guaranteed uniqueness
 * @param prefix - Optional prefix for the ID (default: 'id')
 * @returns Unique ID string in format: prefix-timestamp-counter-random
 * @example
 * generateUniqueId('button') // 'button-lw3xk9-1-abc123'
 * generateUniqueId() // 'id-lw3xk9-2-def456'
 */
export function generateUniqueId(prefix = 'id') {
	counter++
	// Use crypto for better randomness (works in browser & Node)
	const randomPart =
		typeof crypto !== 'undefined' && crypto.getRandomValues
			? crypto.getRandomValues(new Uint32Array(1))[0].toString(36)
			: Math.random().toString(36).slice(2)

	return `${prefix}-${Date.now().toString(36)}-${counter}-${randomPart}`
}
