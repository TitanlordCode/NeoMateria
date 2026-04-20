export const tooltipPlacements = ['top', 'bottom', 'left', 'right'] as const

export type NeoTooltipPlacement = (typeof tooltipPlacements)[number]

export type NeoTooltipProps = {
	text: string
	placement?: NeoTooltipPlacement
	openDelay?: number
	/** Force the tooltip to stay visible — useful for testing and docs. */
	visible?: boolean
}

export type NeoTooltipSlots = {
	/** The element that triggers the tooltip on hover. */
	activator?: () => unknown
}
