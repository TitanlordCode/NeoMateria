import type { VNodeChild } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const iconButtonSizes = ['small', 'medium', 'large'] as const
export const iconButtonVariants = ['primary', 'secondary', 'tertiary', 'ghost'] as const

export type NeoIconButtonSize = (typeof iconButtonSizes)[number]
export type NeoIconButtonVariant = (typeof iconButtonVariants)[number]

export type NeoIconButtonSlots = {
	/** The icon to display inside the button. Pass a raw SVG element or a Vue component. */
	default: () => VNodeChild
}

export type NeoIconButtonProps = {
	color: SurfaceColor
	size?: NeoIconButtonSize
	variant?: NeoIconButtonVariant
	disabled?: boolean
	pressed?: boolean
	rounded?: boolean
	ariaLabel: string
}
