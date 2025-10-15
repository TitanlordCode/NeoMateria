import type { Color } from '@/assets/typescript/colors'

export const spinnerSizes = ['small', 'medium', 'large'] as const

export type NeoSpinnerSize = (typeof spinnerSizes)[number]

export interface NeoSpinnerProps {
	class?: string
	size: NeoSpinnerSize
	color: Color
	label?: string
}
