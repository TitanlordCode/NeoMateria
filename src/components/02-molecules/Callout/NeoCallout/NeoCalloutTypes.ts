import type { VNodeChild } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const calloutVariants = ['bordered', 'filled'] as const
export type NeoCalloutVariant = (typeof calloutVariants)[number]

export interface NeoCalloutProps {
	color: SurfaceColor
	variant?: NeoCalloutVariant
	class?: string
}

export interface NeoCalloutSlots {
	/** Optional icon displayed at the start of the callout. */
	icon?: () => VNodeChild
	/** Main callout content. */
	default?: () => VNodeChild
}
