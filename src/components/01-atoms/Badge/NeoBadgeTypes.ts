import type { VNodeChild } from 'vue'
import type { Color } from '@/assets/typescript/colors'

export const badgeSizes = ['small', 'medium', 'large'] as const

export const badgeVariants = ['solid', 'outlined', 'dot'] as const

export type NeoBadgeSize = (typeof badgeSizes)[number]
export type NeoBadgeVariant = (typeof badgeVariants)[number]

export interface NeoBadgeProps {
	text?: string
	size: NeoBadgeSize
	color: Color
	variant?: NeoBadgeVariant
	rounded?: boolean
	dismissible?: boolean
}

export type NeoBadgeSlots = {
	/** Badge label content. Falls back to the `text` prop if empty. */
	default?: () => VNodeChild
}
