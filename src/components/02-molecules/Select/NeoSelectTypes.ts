import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const selectSizes = ['small', 'medium', 'large'] as const

export const selectVariants = ['primary', 'secondary', 'tertiary'] as const

export const selectModes = ['single', 'multi'] as const

export type NeoSelectSize = (typeof selectSizes)[number]
export type NeoSelectVariant = (typeof selectVariants)[number]
export type NeoSelectMode = (typeof selectModes)[number]

type NeoSelectBase = {
	name: string
	selectProps?: { placeholder?: string }
	options: { value: string; label: string }[]
	helpText?: string
	errorMessage?: string
	size: NeoSelectSize
	color: SurfaceColor
	disabled?: boolean
	rounded?: boolean
	variant?: NeoSelectVariant
}

type NeoSelectSingle = { mode?: 'single'; selectValue?: string }
type NeoSelectMulti = { mode: 'multi'; selectValue?: string[] }
type NeoSelectWithLabel = { label: string; ariaLabel?: never }
type NeoSelectWithAriaLabel = { label?: never; ariaLabel: string }
type NeoSelectRequired = { required: true; requiredText: string }
type NeoSelectOptional = { required?: never; requiredText?: never }

export type NeoSelectProps = NeoSelectBase &
	(NeoSelectSingle | NeoSelectMulti) &
	(NeoSelectWithLabel | NeoSelectWithAriaLabel) &
	(NeoSelectRequired | NeoSelectOptional)
