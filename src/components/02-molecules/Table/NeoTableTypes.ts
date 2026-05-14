import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const tableColumnAligns = ['start', 'center', 'end'] as const
export type NeoTableAlign = (typeof tableColumnAligns)[number]

export const tableSizes = ['compact', 'default', 'spacious'] as const
export type NeoTableSize = (typeof tableSizes)[number]

export const tableSortDirections = ['asc', 'desc'] as const
export type NeoTableSortDirection = (typeof tableSortDirections)[number]

export const tableMobileLayouts = ['scroll', 'cards'] as const
export type NeoTableMobileLayout = (typeof tableMobileLayouts)[number]

export const tableHeaderAxes = ['column', 'row'] as const
export type NeoTableHeaderAxis = (typeof tableHeaderAxes)[number]

export interface NeoTableColumn {
	key: string
	label: string
	sortable?: boolean
	width?: string
	align?: NeoTableAlign
	truncate?: boolean
}

export interface NeoTableProps {
	columns: NeoTableColumn[]
	rows: Record<string, unknown>[]
	caption?: string
	color?: SurfaceColor
	size?: NeoTableSize
	striped?: boolean
	hoverable?: boolean
	stickyHeader?: boolean
	rowHref?: string
	sortBy?: string
	sortDirection?: NeoTableSortDirection
	highlightRow?: (row: Record<string, unknown>) => boolean
	mobileLayout?: NeoTableMobileLayout
	headerAxis?: NeoTableHeaderAxis
}
