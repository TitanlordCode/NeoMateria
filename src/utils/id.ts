let counter = 0

export function generateUniqueId(prefix = 'id') {
	counter++
	// Use crypto for better randomness (works in browser & Node)
	const randomPart =
		typeof crypto !== 'undefined' && crypto.getRandomValues
			? crypto.getRandomValues(new Uint32Array(1))[0].toString(36)
			: Math.random().toString(36).slice(2)

	return `${prefix}-${Date.now().toString(36)}-${counter}-${randomPart}`
}
