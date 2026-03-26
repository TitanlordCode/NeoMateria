import type { Color } from '@/assets/typescript/colors'

export const navItemSizes = ['small', 'medium', 'large'] as const

export type NeoNavItemSize = (typeof navItemSizes)[number]

export interface NeoNavItemProps {
	color?: Color
	size?: NeoNavItemSize
	label: string
	href?: string
	external?: boolean
	active?: boolean
	disabled?: boolean
	level?: number
	expanded?: boolean
	hasChildren?: boolean
	ariaLabel?: string
	showConnector?: boolean
}
