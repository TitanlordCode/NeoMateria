import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import type { NeoHeadlineTag } from '@/components/01-atoms/Headline/NeoHeadlineTypes'

export interface NeoFeatureCardProps {
	imageSrc: string
	imageAlt: string
	category?: string
	title: string
	headingTag?: NeoHeadlineTag
	excerpt?: string
	href?: string
	color?: SurfaceColor
	class?: string
}
