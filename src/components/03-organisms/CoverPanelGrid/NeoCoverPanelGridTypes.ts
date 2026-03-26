export const coverPanelGridGaps = ['small', 'medium', 'large'] as const
export type NeoCoverPanelGridGap = (typeof coverPanelGridGaps)[number]

export interface NeoCoverPanelGridProps {
	columns?: 2 | 3 | 4 | 5 | 6
	minColumnWidth?: number
	gap?: NeoCoverPanelGridGap
}
