export const tooltipPlacements = ['top', 'bottom', 'left', 'right'] as const

export type NeoTooltipPlacement = (typeof tooltipPlacements)[number]

export type NeoTooltipProps = {
	text: string
	placement?: NeoTooltipPlacement
	openDelay?: number
	visible?: boolean
}

export type NeoTooltipSlots = {
	/** The element that triggers the tooltip on hover. */
	activator?: () => unknown
}
