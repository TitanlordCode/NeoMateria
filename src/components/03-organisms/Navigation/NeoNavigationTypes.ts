import type { VNodeChild } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const navigationVariants = ['default', 'compact', 'flyout'] as const
export type NeoNavigationVariant = (typeof navigationVariants)[number]

export interface NeoNavigationLink {
	text: string
	href?: string
	active?: boolean
	external?: boolean
	children?: NeoNavigationLink[]
}

type NeoNavigationToggleWithLabels = {
	menuLabel: string
	closeLabel: string
	menuAriaLabel?: string
}

type NeoNavigationToggleIconOnly = {
	menuLabel?: never
	closeLabel?: never
	menuAriaLabel: string
}

export const navigationCollapseActions = ['mobile', 'always'] as const
export type NeoNavigationCollapseActions = (typeof navigationCollapseActions)[number]

export type NeoNavigationProps = {
	color: SurfaceColor
	variant?: NeoNavigationVariant
	links?: NeoNavigationLink[]
	mobileBreakpoint?: 'sm' | 'md' | 'lg'
	ariaLabel: string
	/**
	 * Collapses action buttons into a `•••` dropdown. `'mobile'` shows them inline on
	 * desktop and collapsed on mobile — required when combining a logo with multiple
	 * action buttons to prevent overflow on narrow screens. `'always'` collapses at
	 * all viewport sizes.
	 */
	collapseActions?: NeoNavigationCollapseActions
	actionsMenuAriaLabel?: string
} & (NeoNavigationToggleWithLabels | NeoNavigationToggleIconOnly)

export type NeoNavigationExpose = {
	/** Programmatically close the mobile menu. */
	close: () => void
}

export type NeoNavigationSlots = {
	/** Brand logo displayed in the navigation bar. */
	logo?: () => VNodeChild
	/** Custom links content, replacing the auto-rendered `links` prop output. */
	links?: () => VNodeChild
	/** Custom dropdown chevron icon. Receives `isOpen` to allow rotation or icon swap. */
	dropdownIcon?: (props: { isOpen: boolean }) => VNodeChild
	/** Action buttons displayed in the navigation bar (e.g. login, search). */
	actions?: () => VNodeChild
	/** Custom trigger button for the collapsed actions dropdown. Receives `isOpen` and `toggle`. */
	actionsMenuTrigger?: (props: { isOpen: boolean; toggle: () => void }) => VNodeChild
	/** Custom icon for the mobile hamburger menu button. */
	menuIcon?: () => VNodeChild
	/** Custom content for the mobile menu panel, replacing auto-generated links. */
	mobileMenu?: () => VNodeChild
	/** Brand logo displayed inside the mobile menu panel. */
	mobileLogo?: () => VNodeChild
	/** Action buttons displayed inside the mobile menu panel. */
	mobileActions?: () => VNodeChild
}
