import type { Color } from '@/assets/typescript/colors'

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

export interface NeoInputProps {
	class?: string
	name: string
	label?: string
	type?: NeoInputType
	placeholder?: string
	value?: string | number
	helpText?: string
	errorMessage?: string
	size: NeoInputSize
	color: Color
	disabled?: boolean
	readonly?: boolean
	required?: boolean
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
