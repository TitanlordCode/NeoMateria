import type { Color } from '@/assets/typescript/colors'

export const selectSizes = ['small', 'medium', 'large'] as const

export const selectVariants = ['primary', 'secondary', 'tertiary'] as const

export type NeoSelectSize = (typeof selectSizes)[number]
export type NeoSelectVariant = (typeof selectVariants)[number]
export interface NeoSelectProps {
	class?: string
	name: string
	label: string
	selectProps?: { placeholder?: string }
	options: { value: string; label: string }[]
	selectValue?: string
	helpText?: string
	errorMessage?: string
	size: NeoSelectSize
	color: Color
	disabled?: boolean
	rounded?: boolean
	variant?: NeoSelectVariant
}
