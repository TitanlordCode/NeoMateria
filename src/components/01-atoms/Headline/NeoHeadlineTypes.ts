import type { Color } from '@/assets/typescript/colors'

export const headlineTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'] as const
export type NeoHeadlineTag = (typeof headlineTags)[number]

export const headlineAligns = ['start', 'center', 'end'] as const
export type NeoHeadlineAlign = (typeof headlineAligns)[number]

export interface NeoHeadlineProps {
	tag?: NeoHeadlineTag
	color?: Color
	align?: NeoHeadlineAlign
	truncate?: boolean
	clamp?: number
	class?: string
}

export interface NeoHeadlineSlots {
	/** Default slot — headline text or rich content. */
	default?: () => unknown
}
