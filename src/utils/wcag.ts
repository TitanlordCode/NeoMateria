export function luminance(hex: string) {
	const c = hex.replace('#', '')
	const rgb = [
		parseInt(c.substr(0, 2), 16) / 255,
		parseInt(c.substr(2, 2), 16) / 255,
		parseInt(c.substr(4, 2), 16) / 255,
	].map((v) => {
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
	})

	return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]
}

export function contrast(hex1: string, hex2: string) {
	const L1 = luminance(hex1)
	const L2 = luminance(hex2)
	return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)
}

export function isAccessible(bg: string, fg: string, minRatio = 4.5) {
	return contrast(bg, fg) >= minRatio
}
