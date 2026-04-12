import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const switchSizes = ['small', 'medium', 'large'] as const

export type NeoSwitchSize = (typeof switchSizes)[number]

type NeoSwitchBase = {
	modelValue: boolean
	color: SurfaceColor
	size?: NeoSwitchSize
	disabled?: boolean
}

type NeoSwitchWithLabel = { label: string; ariaLabel?: never }
type NeoSwitchWithAriaLabel = { label?: never; ariaLabel: string }

export type NeoSwitchProps = NeoSwitchBase & (NeoSwitchWithLabel | NeoSwitchWithAriaLabel)
