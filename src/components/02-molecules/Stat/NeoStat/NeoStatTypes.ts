import type { Color } from '@/assets/typescript/colors'

export const statSizes = ['sm', 'md', 'lg'] as const
export type NeoStatSize = (typeof statSizes)[number]

export interface NeoStatProps {
	value: string
	label: string
	color?: Color
	size?: NeoStatSize
	class?: string
}
