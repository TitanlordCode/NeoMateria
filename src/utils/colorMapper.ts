import type { Color } from '@/assets/typescript/colors'

/**
 * Maps a color family to a specific shade based on variant
 * @param color - Color family (e.g., "blue", "green") or undefined
 * @param variant - Component variant (e.g., "primary", "secondary")
 * @param defaultColor - Default color to use if color is undefined
 * @returns Color with shade (e.g., "blue500", "green300")
 */
export function getColorShade(
	color: Color | undefined,
	variant?: 'primary' | 'secondary' | 'tertiary' | string,
	defaultColor: string = 'grey500',
): string {
	if (!color) {
		return defaultColor
	}

	// Map variants to shade numbers
	const shadeMap: Record<string, string> = {
		primary: '500',
		secondary: '300',
		tertiary: '200',
	}

	const shade = variant ? shadeMap[variant] || '500' : '500'

	return `${color}${shade}`
}
