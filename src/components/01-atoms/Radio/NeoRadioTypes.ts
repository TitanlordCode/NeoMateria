import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const radioSizes = ['small', 'medium', 'large'] as const

export type NeoRadioSize = (typeof radioSizes)[number]

type NeoRadioBase = {
	name: string
	value: string
	checked?: boolean
	disabled?: boolean
	size: NeoRadioSize
	color: SurfaceColor
}

type NeoRadioWithLabel = { label: string; ariaLabel?: never }
type NeoRadioWithAriaLabel = { label?: never; ariaLabel: string }
type NeoRadioRequired = { required: true; requiredText: string }
type NeoRadioOptional = { required?: never; requiredText?: never }

export type NeoRadioProps = NeoRadioBase &
	(NeoRadioWithLabel | NeoRadioWithAriaLabel) &
	(NeoRadioRequired | NeoRadioOptional)
