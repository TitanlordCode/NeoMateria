import type { Color } from '@/assets/typescript/colors'
import type { NeoHeadlineTag } from '@/components/01-atoms/Headline/NeoHeadlineTypes'

export interface NeoProgressPanelSlots {
	/**
	 * Optional single pennant overlaid on the top-right corner of the image.
	 * Use a single `<NeoPennant>` here — e.g. a rank indicator or status tag.
	 * The pennant is automatically scaled to fit within 30% of the image width.
	 */
	pennant?: () => unknown
}

export interface NeoProgressPanelProps {
	color?: Color
	imageSrc: string
	imageAlt: string
	title: string
	headingTag?: NeoHeadlineTag
	subtitle?: string
	value: number
	valueLabel?: string
	href?: string
	external?: boolean
	rounded?: boolean
}
