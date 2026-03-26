import type { VNodeChild } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const linkGroupSizes = ['small', 'medium', 'large'] as const
export const linkGroupVariants = ['vertical', 'horizontal'] as const

export type NeoLinkGroupSize = (typeof linkGroupSizes)[number]
export type NeoLinkGroupVariant = (typeof linkGroupVariants)[number]

export interface NeoLinkGroupLink {
	text: string
	href: string
	external?: boolean
	active?: boolean
}

type NeoLinkGroupBase = {
	color?: SurfaceColor
	size?: NeoLinkGroupSize
	variant?: NeoLinkGroupVariant
	links: NeoLinkGroupLink[]
}

type NeoLinkGroupWithTitle = { title: string; ariaLabel?: string }
type NeoLinkGroupWithAriaLabel = { title?: never; ariaLabel: string }

export type NeoLinkGroupProps = NeoLinkGroupBase & (NeoLinkGroupWithTitle | NeoLinkGroupWithAriaLabel)

export type NeoLinkGroupSlots = {
	/** Custom title element, replacing the auto-rendered heading from the `title` prop. */
	title?: () => VNodeChild
	/** Additional content rendered after the link list (e.g. a description or CTA). */
	default?: () => VNodeChild
}
