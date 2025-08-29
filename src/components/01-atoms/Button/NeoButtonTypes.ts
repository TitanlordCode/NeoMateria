import type { Color } from '@/assets/typescript/colors'

export const buttonSizes = ['small', 'medium', 'large'] as const

export const buttonVariants = ['primary', 'secondary', 'tertiary'] as const

export type NeoButtonSize = (typeof buttonSizes)[number]
export type NeoButtonVariant = (typeof buttonVariants)[number]
export interface NeoButtonProps {
	class: string
	text: string
	size: NeoButtonSize
	color: Color
	disabled?: boolean
	rounded?: boolean
	variant?: NeoButtonVariant
}
