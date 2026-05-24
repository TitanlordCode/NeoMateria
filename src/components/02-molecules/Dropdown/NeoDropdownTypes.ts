import type { VNodeChild } from 'vue'

export const dropdownPlacements = ['bottom-start', 'bottom-end', 'top-start', 'top-end'] as const
export type NeoDropdownPlacement = (typeof dropdownPlacements)[number]

export interface NeoDropdownProps {
	open?: boolean
	defaultOpen?: boolean
	placement?: NeoDropdownPlacement
	closeOnEscape?: boolean
	closeOnClickOutside?: boolean
	teleportTo?: string
}

export type NeoDropdownSlots = {
	/** The element that opens and closes the panel. Receives `isOpen` (current state) and `toggle` (function to flip state) as slot props. */
	trigger: (props: { isOpen: boolean; toggle: () => void }) => VNodeChild
	/** Content rendered inside the panel. Typically a list of `NeoNavItem` links or action buttons. */
	default: () => VNodeChild
}
