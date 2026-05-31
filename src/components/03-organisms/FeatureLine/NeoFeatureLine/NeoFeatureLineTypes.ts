import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import type { NeoHeadlineTag } from '@/components/01-atoms/Headline/NeoHeadlineTypes'
import type { NeoHeadingGroupVariant } from '@/components/02-molecules/HeadingGroup/NeoHeadingGroup/NeoHeadingGroupTypes'
import type { NeoSectionProps } from '@/components/02-molecules/Section/NeoSectionTypes'

export const featureLineImageRatios = ['4/3', '16/9', '1/1'] as const
export type NeoFeatureLineImageRatio = (typeof featureLineImageRatios)[number]

export interface NeoFeatureLineProps {
	imageSrc: string
	imageAlt: string
	title: string
	subtitle?: string
	body?: string
	headingTag?: NeoHeadlineTag
	headingVariant?: NeoHeadingGroupVariant
	reverse?: boolean
	imageRatio?: NeoFeatureLineImageRatio
	ctaText?: string
	ctaHref?: string
	color?: SurfaceColor
	class?: string
	section?: NeoSectionProps
	noSection?: boolean
}
