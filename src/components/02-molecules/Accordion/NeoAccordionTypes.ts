import type { VNodeChild } from 'vue'

export const accordionSizes = ['small', 'medium', 'large'] as const
export const accordionVariants = ['default', 'bordered', 'filled'] as const

export type NeoAccordionSize = (typeof accordionSizes)[number]
export type NeoAccordionVariant = (typeof accordionVariants)[number]

export interface NeoAccordionProps {
	size?: NeoAccordionSize
	variant?: NeoAccordionVariant
	title: string
	defaultExpanded?: boolean
	disabled?: boolean
	ariaLabel?: string
}

export type NeoAccordionSlots = {
	/** The main expandable content shown when the accordion is open. */
	default?: () => VNodeChild
	/** Custom trigger element replacing the default header. Receives `isExpanded` and `toggle` as slot props. */
	trigger?: (props: { isExpanded: boolean; toggle: () => void }) => VNodeChild
	/** Custom icon replacing the default chevron. Receives `isExpanded` to allow rotation or icon swap. */
	icon?: (props: { isExpanded: boolean }) => VNodeChild
}
