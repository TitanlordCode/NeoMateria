import type { Color } from '@/assets/typescript/colors'

export const textSizes = ['lead', 'base', 'small', 'caption'] as const
export type NeoTextSize = (typeof textSizes)[number]

export const textTags = ['p', 'span', 'div'] as const
export type NeoTextTag = (typeof textTags)[number]

export const textWeights = ['regular', 'medium', 'semibold', 'bold'] as const
export type NeoTextWeight = (typeof textWeights)[number]

export interface NeoTextProps {
	size?: NeoTextSize
	tag?: NeoTextTag
	color?: Color
	weight?: NeoTextWeight
	truncate?: boolean
	clamp?: number
	class?: string
}

export interface NeoTextSlots {
	/** Default slot — the text content. */
	default?: () => unknown
}
