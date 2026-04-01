import type { Color } from '@/assets/typescript/colors'
import type {
	NeoHeadlineTag,
	NeoHeadlineAlign,
} from '@/components/01-atoms/Headline/NeoHeadlineTypes'

export const headingGroupVariants = ['primary', 'secondary', 'tertiary'] as const
export type NeoHeadingGroupVariant = (typeof headingGroupVariants)[number]

export interface NeoHeadingGroupProps {
	title: string
	subtitle?: string
	overline?: string
	headingTag?: NeoHeadlineTag
	variant?: NeoHeadingGroupVariant
	align?: NeoHeadlineAlign
	color?: Color
	class?: string
}
