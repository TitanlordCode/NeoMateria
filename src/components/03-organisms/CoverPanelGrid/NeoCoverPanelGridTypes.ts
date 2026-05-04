import type { NeoSectionProps } from '@/components/02-molecules/Section/NeoSectionTypes'

export const coverPanelGridGaps = ['small', 'medium', 'large'] as const
export type NeoCoverPanelGridGap = (typeof coverPanelGridGaps)[number]

export interface NeoCoverPanelGridProps {
	columns?: number
	minColumnWidth?: number
	gap?: NeoCoverPanelGridGap
	section?: NeoSectionProps
}
