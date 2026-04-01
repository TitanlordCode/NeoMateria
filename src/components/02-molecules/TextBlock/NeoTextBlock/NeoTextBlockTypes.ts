import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import type {
	NeoHeadlineTag,
	NeoHeadlineAlign,
} from '@/components/01-atoms/Headline/NeoHeadlineTypes'
import type { NeoHeadingGroupVariant } from '@/components/02-molecules/HeadingGroup/NeoHeadingGroup/NeoHeadingGroupTypes'

export interface NeoTextBlockProps {
	heading: string
	headingTag?: NeoHeadlineTag
	headingVariant?: NeoHeadingGroupVariant
	body?: string
	ctaText?: string
	ctaHref?: string
	color?: SurfaceColor
	align?: NeoHeadlineAlign
	class?: string
}
