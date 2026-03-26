import type { VNodeChild } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const footerLayouts = ['simple', 'multi-column', 'centered'] as const
export type NeoFooterLayout = (typeof footerLayouts)[number]

export interface NeoFooterLink {
	text: string
	href: string
	external?: boolean
}

export interface NeoFooterSection {
	title: string
	links: NeoFooterLink[]
}

export interface NeoFooterProps {
	color: SurfaceColor
	layout?: NeoFooterLayout

	sections?: NeoFooterSection[]
	copyrightText?: string
	ariaLabel?: string
}

export type NeoFooterSlots = {
	/** Brand logo displayed in the footer header area. */
	logo?: () => VNodeChild
	/** Custom sections content, replacing the auto-rendered `sections` prop output. */
	sections?: () => VNodeChild
	/** Social media icons or links. */
	social?: () => VNodeChild
	/** Legal links (privacy policy, terms of service, etc.). */
	legal?: () => VNodeChild
	/** Additional content rendered at the very bottom of the footer. */
	bottom?: () => VNodeChild
}
