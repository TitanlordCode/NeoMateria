import type { Color } from '@/assets/typescript/colors'

export const checkboxSizes = ['small', 'medium', 'large'] as const

export type NeoCheckboxSize = (typeof checkboxSizes)[number]

export interface NeoCheckboxProps {
	class?: string
	name: string
	label?: string
	checked?: boolean
	value?: string
	disabled?: boolean
	required?: boolean
	size: NeoCheckboxSize
	color: Color
	indeterminate?: boolean
}
