import type { VNodeChild } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const calloutVariants = ['bordered', 'filled', 'accent'] as const
export type NeoCalloutVariant = (typeof calloutVariants)[number]

export const calloutSizes = ['small', 'medium'] as const
export type NeoCalloutSize = (typeof calloutSizes)[number]

export interface NeoCalloutProps {
	color: SurfaceColor
	variant?: NeoCalloutVariant
	size?: NeoCalloutSize
	rounded?: boolean
	class?: string
}

export interface NeoCalloutSlots {
	/** Optional icon displayed at the start of the callout. */
	icon?: () => VNodeChild
	/** Main callout content. */
	default?: () => VNodeChild
}
