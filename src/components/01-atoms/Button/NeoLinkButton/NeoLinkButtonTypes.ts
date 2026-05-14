import type { VNodeChild } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import type { NeoButtonSize, NeoButtonVariant } from '../NeoButton/NeoButtonTypes'

export type NeoLinkButtonSize = NeoButtonSize
export type NeoLinkButtonVariant = NeoButtonVariant

export type NeoLinkButtonSlots = {
	/** Default slot content rendered inside the link. Falls back to the `text` prop if empty. */
	default?: () => VNodeChild
	/** Content rendered before the label and start icon (e.g. a decorative icon). */
	prefix?: () => VNodeChild
	/** Icon displayed before the label text. Automatically wrapped in `NeoIcon`. */
	iconStart?: () => VNodeChild
	/** Icon displayed after the label text. Automatically wrapped in `NeoIcon`. */
	iconEnd?: () => VNodeChild
	/** Content rendered after the label and end icon. */
	suffix?: () => VNodeChild
}

// WCAG 2.5.3: text and ariaLabel are mutually exclusive — providing both would announce conflicting accessible names.
type NeoLinkButtonWithText = { text: string; ariaLabel?: never }
type NeoLinkButtonWithAriaLabel = { text?: never; ariaLabel: string }
type NeoLinkButtonWithSlot = { text?: never; ariaLabel?: never }

export type NeoLinkButtonProps = {
	href: string
	external?: boolean
	disabled?: boolean
	color?: SurfaceColor
	size?: NeoLinkButtonSize
	variant?: NeoLinkButtonVariant
	rounded?: boolean
	fullWidth?: boolean
} & (NeoLinkButtonWithText | NeoLinkButtonWithAriaLabel | NeoLinkButtonWithSlot)
