import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const sheetPositions = ['left', 'right', 'bottom'] as const
export const sheetSizes = ['small', 'medium', 'large', 'full'] as const
export const sheetVariants = ['default', 'filled'] as const

export type NeoSheetPosition = (typeof sheetPositions)[number]
export type NeoSheetSize = (typeof sheetSizes)[number]
export type NeoSheetVariant = (typeof sheetVariants)[number]

export interface NeoSheetProps {
	color?: SurfaceColor
	variant?: NeoSheetVariant
	position?: NeoSheetPosition
	size?: NeoSheetSize
	open?: boolean
	closeOnOverlayClick?: boolean
	closeOnEscape?: boolean
	modal?: boolean
	ariaLabel?: string
	ariaLabelledby?: string
	showCloseButton?: boolean
	closeAriaLabel?: string
	zIndex?: number
	teleportTo?: string
}

export interface NeoSheetSlots {
	/** Sheet body content. */
	default?: () => unknown
	/** Custom icon for the built-in close button. Defaults to the `×` multiplication-sign character. */
	closeIcon?: () => unknown
}
