import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const inputSizes = ['small', 'medium', 'large'] as const

export const inputVariants = ['primary', 'secondary', 'tertiary'] as const

export const inputTypes = [
	'text',
	'email',
	'password',
	'number',
	'tel',
	'url',
	'search',
	'date',
	'time',
] as const

export type NeoInputSize = (typeof inputSizes)[number]
export type NeoInputVariant = (typeof inputVariants)[number]
export type NeoInputType = (typeof inputTypes)[number]

type NeoInputBase = {
	name: string
	type?: NeoInputType
	placeholder?: string
	value?: string | number
	helpText?: string
	errorMessage?: string
	size?: NeoInputSize
	color: SurfaceColor
	disabled?: boolean
	readonly?: boolean
	rounded?: boolean
	variant?: NeoInputVariant
	autocomplete?: string
	maxlength?: number
	minlength?: number
	min?: number
	max?: number
	step?: number
	pattern?: string
}

type NeoInputWithLabel = { label: string; ariaLabel?: never }
type NeoInputWithAriaLabel = { label?: never; ariaLabel: string }
type NeoInputRequired = { required: true; requiredText: string }
type NeoInputOptional = { required?: never; requiredText?: never }

/**
 * Either a visible `label` or an `ariaLabel`, never both.
 * Use camelCase `:ariaLabel="..."` in templates — vue-tsc rejects kebab-case on discriminated-union props.
 */
export type NeoInputProps = NeoInputBase &
	(NeoInputWithLabel | NeoInputWithAriaLabel) &
	(NeoInputRequired | NeoInputOptional)
