import type { Color } from '@/assets/typescript/colors'

export const linkSizes = ['small', 'medium', 'large'] as const

export const linkVariants = ['default', 'underline', 'button'] as const

export type NeoLinkSize = (typeof linkSizes)[number]
export type NeoLinkVariant = (typeof linkVariants)[number]

export interface NeoLinkProps {
	class?: string
	href: string
	text?: string
	size: NeoLinkSize
	color: Color
	variant?: NeoLinkVariant
	external?: boolean
	disabled?: boolean
	target?: '_blank' | '_self' | '_parent' | '_top'
	rel?: string
}
