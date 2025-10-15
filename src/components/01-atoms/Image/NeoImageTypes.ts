export const imageObjectFits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const

export type NeoImageObjectFit = (typeof imageObjectFits)[number]

export interface NeoImageProps {
	class?: string
	src: string
	alt: string
	width?: number | string
	height?: number | string
	loading?: 'eager' | 'lazy'
	objectFit?: NeoImageObjectFit
	rounded?: boolean
	circle?: boolean
}
