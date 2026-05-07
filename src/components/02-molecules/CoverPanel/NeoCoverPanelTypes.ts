import type { Color } from '@/assets/typescript/colors'
import type { VNodeChild } from 'vue'

export const coverPanelClickBehaviors = ['action', 'link', 'none'] as const
export type NeoCoverPanelClickBehavior = (typeof coverPanelClickBehaviors)[number]

type NeoCoverPanelBase = {
	color?: Color
	imageSrc: string
	imageAlt: string
	imageWidth?: number
	imageHeight?: number
	title: string
	imageAriaLabel?: string
	rounded?: boolean
}

type WithAction = {
	actionAriaLabel: string
	actionActive?: boolean
}

type WithoutAction = {
	actionAriaLabel?: never
	actionActive?: never
}

export type NeoCoverPanelActionBehavior = { clickBehavior: 'action' }
export type NeoCoverPanelLinkBehavior = { clickBehavior: 'link'; href: string; external?: boolean }
export type NeoCoverPanelNoBehavior = { clickBehavior?: 'none' }

export type NeoCoverPanelProps = NeoCoverPanelBase &
	(WithAction | WithoutAction) &
	(NeoCoverPanelActionBehavior | NeoCoverPanelLinkBehavior | NeoCoverPanelNoBehavior)

export type NeoCoverPanelSlots = {
	/** Pennant badges displayed at the top of the panel, anchored to the end edge and filling inward. Up to 5 small-sized pennants fit on a panel of ~240 px wide. */
	pennants?: () => VNodeChild
	/** Custom icon for the action overlay button. Receives `active` (current pressed state). */
	'action-icon'?: (props: { active: boolean }) => VNodeChild
}
