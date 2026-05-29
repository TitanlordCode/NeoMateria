import type { VNodeChild } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import type { NeoHeadlineTag } from '@/components/01-atoms/Headline/NeoHeadlineTypes'
import type { NeoSectionProps } from '@/components/02-molecules/Section/NeoSectionTypes'

export const heroVariants = ['centered', 'split'] as const
export type NeoHeroVariant = (typeof heroVariants)[number]

export const heroSizes = ['sm', 'md', 'lg'] as const
export type NeoHeroSize = (typeof heroSizes)[number]

export interface NeoHeroProps {
	title: string
	subtitle?: string
	headingTag?: NeoHeadlineTag
	color?: SurfaceColor
	variant?: NeoHeroVariant
	size?: NeoHeroSize
	class?: string
	section?: NeoSectionProps
	noSection?: boolean
}

export interface NeoHeroSlots {
	/** Action elements (buttons, links) displayed below the subtitle. */
	actions?: () => VNodeChild
	/** Media content (image, video) displayed beside the text in `split` variant. */
	media?: () => VNodeChild
}
