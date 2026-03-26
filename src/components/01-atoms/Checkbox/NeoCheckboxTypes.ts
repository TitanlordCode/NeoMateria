import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const checkboxSizes = ['small', 'medium', 'large'] as const

export type NeoCheckboxSize = (typeof checkboxSizes)[number]

type NeoCheckboxBase = {
	name: string
	checked?: boolean
	value?: string
	disabled?: boolean
	size: NeoCheckboxSize
	color: SurfaceColor
	indeterminate?: boolean
}

type NeoCheckboxWithLabel = { label: string; ariaLabel?: never }
type NeoCheckboxWithAriaLabel = { label?: never; ariaLabel: string }
type NeoCheckboxRequired = { required: true; requiredText: string }
type NeoCheckboxOptional = { required?: never; requiredText?: never }

export type NeoCheckboxProps = NeoCheckboxBase &
	(NeoCheckboxWithLabel | NeoCheckboxWithAriaLabel) &
	(NeoCheckboxRequired | NeoCheckboxOptional)
