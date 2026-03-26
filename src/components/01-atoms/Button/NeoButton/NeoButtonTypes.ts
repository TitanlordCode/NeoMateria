import type { VNodeChild } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const buttonSizes = ['small', 'medium', 'large'] as const

export const buttonVariants = ['primary', 'secondary', 'tertiary', 'ghost'] as const

export type NeoButtonSize = (typeof buttonSizes)[number]
export type NeoButtonVariant = (typeof buttonVariants)[number]

type NeoButtonBase = {
	size?: NeoButtonSize
	color: SurfaceColor
	disabled?: boolean
	pressed?: boolean
	rounded?: boolean
	variant?: NeoButtonVariant
	fullWidth?: boolean
}

export type NeoButtonSlots = {
	/** Default slot content rendered inside the button. Falls back to the `text` prop if empty. */
	default?: () => VNodeChild
	/** Content rendered before the label and start icon (e.g. a loading spinner). */
	prefix?: () => VNodeChild
	/** Icon displayed before the label text. Automatically wrapped in `NeoIcon`. */
	iconStart?: () => VNodeChild
	/** Icon displayed after the label text. Automatically wrapped in `NeoIcon`. */
	iconEnd?: () => VNodeChild
	/** Content rendered after the label and end icon. */
	suffix?: () => VNodeChild
}

// WCAG 2.5.3: text and ariaLabel are mutually exclusive — providing both would announce conflicting accessible names.
type NeoButtonWithText = { text: string; ariaLabel?: never }
type NeoButtonWithAriaLabel = { text?: never; ariaLabel: string }
type NeoButtonWithSlot = { text?: never; ariaLabel?: never }

export type NeoButtonProps = NeoButtonBase & (NeoButtonWithText | NeoButtonWithAriaLabel | NeoButtonWithSlot)
