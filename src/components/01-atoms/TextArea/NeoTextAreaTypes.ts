import type { Color } from '@/assets/typescript/colors'

export const textareaSizes = ['small', 'medium', 'large'] as const

export const textareaVariants = ['primary', 'secondary', 'tertiary'] as const

export type NeoTextAreaSize = (typeof textareaSizes)[number]
export type NeoTextAreaVariant = (typeof textareaVariants)[number]

export interface NeoTextAreaProps {
	class?: string
	name: string
	label?: string
	placeholder?: string
	value?: string
	helpText?: string
	errorMessage?: string
	size: NeoTextAreaSize
	color: Color
	disabled?: boolean
	readonly?: boolean
	required?: boolean
	rounded?: boolean
	variant?: NeoTextAreaVariant
	rows?: number
	maxlength?: number
	minlength?: number
	resize?: 'none' | 'vertical' | 'horizontal' | 'both'
}
