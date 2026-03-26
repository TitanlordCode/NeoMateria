import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const textareaSizes = ['small', 'medium', 'large'] as const

export const textareaVariants = ['primary', 'secondary', 'tertiary'] as const

export type NeoTextAreaSize = (typeof textareaSizes)[number]
export type NeoTextAreaVariant = (typeof textareaVariants)[number]

type NeoTextAreaBase = {
	name: string
	placeholder?: string
	value?: string
	helpText?: string
	errorMessage?: string
	size: NeoTextAreaSize
	color: SurfaceColor
	disabled?: boolean
	readonly?: boolean
	rounded?: boolean
	variant?: NeoTextAreaVariant
	rows?: number
	maxLength?: number
	minLength?: number
	resize?: 'none' | 'vertical' | 'horizontal' | 'both'
}

type NeoTextAreaWithLabel = { label: string; ariaLabel?: never }
type NeoTextAreaWithAriaLabel = { label?: never; ariaLabel: string }
type NeoTextAreaRequired = { required: true; requiredText: string }
type NeoTextAreaOptional = { required?: never; requiredText?: never }

export type NeoTextAreaProps = NeoTextAreaBase &
	(NeoTextAreaWithLabel | NeoTextAreaWithAriaLabel) &
	(NeoTextAreaRequired | NeoTextAreaOptional)
