import type { VNodeChild } from 'vue'
import type { Color } from '@/assets/typescript/colors'

export type NeoIconProps = {
	size?: 'small' | 'medium' | 'large'
	color?: Color
	colorVariant?: 'theme' | 'text'
	ariaLabel?: string
	ariaHidden?: boolean
}

export type NeoIconSlots = {
	/** The icon SVG content. Pass a raw SVG element or a Vue component. */
	default?: () => VNodeChild
}
