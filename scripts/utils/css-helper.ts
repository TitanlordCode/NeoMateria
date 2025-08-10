export function toShortHex(hex: string): string {
	const cleanHex = hex.replace(/^#/, '').toLowerCase()

	if (
		cleanHex.length === 6 &&
		cleanHex[0] === cleanHex[1] &&
		cleanHex[2] === cleanHex[3] &&
		cleanHex[4] === cleanHex[5]
	) {
		return '#' + cleanHex[0] + cleanHex[2] + cleanHex[4]
	}

	return hex.startsWith('#') ? hex : '#' + hex
}
