import type { Color } from '@/assets/typescript/colors'

export const progressBarSizes = ['xs', 'small', 'medium'] as const
export type NeoProgressBarSize = (typeof progressBarSizes)[number]

export interface NeoProgressBarProps {
	color?: Color
	value: number
	ariaLabel: string
	size?: NeoProgressBarSize
	rounded?: boolean
}
