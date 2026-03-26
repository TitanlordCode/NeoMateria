import type { Color } from '@/assets/typescript/colors'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const cardSizes = ['small', 'medium', 'large'] as const
export const cardVariants = ['default', 'compact', 'featured'] as const

export type NeoCardSize = (typeof cardSizes)[number]
export type NeoCardVariant = (typeof cardVariants)[number]

export interface NeoCardTag {
	text: string
	color?: Color
}

type NeoCardBase = {
	color: SurfaceColor
	size?: NeoCardSize
	variant?: NeoCardVariant
	rounded?: boolean
	imageSrc: string
	imageAlt: string
	imageObjectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
	title: string
	description?: string
	tags?: NeoCardTag[]
}

export type NeoCardClickable = {
	href: string
	external?: boolean
	actionText?: never
	actionHref?: never
	secondaryActionText?: never
	secondaryActionHref?: never
}

export type NeoCardActionable = {
	href?: never
	external?: never
	actionText?: string
	actionHref?: string
	secondaryActionText?: string
	secondaryActionHref?: string
}

export type NeoCardProps = NeoCardBase & (NeoCardClickable | NeoCardActionable)
