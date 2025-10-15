import type { Color } from '@/assets/typescript/colors'

export const radioSizes = ['small', 'medium', 'large'] as const

export type NeoRadioSize = (typeof radioSizes)[number]

export interface NeoRadioProps {
	class?: string
	name: string
	label?: string
	value: string
	checked?: boolean
	disabled?: boolean
	required?: boolean
	size: NeoRadioSize
	color: Color
}
