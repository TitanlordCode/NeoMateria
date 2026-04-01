import type { Color } from '@/assets/typescript/colors'

export const spinnerSizes = ['small', 'medium', 'large'] as const

export type NeoSpinnerSize = (typeof spinnerSizes)[number]

type NeoSpinnerBase = {
	size: NeoSpinnerSize
	color: Color
	dir?: 'column' | 'row'
}

type NeoSpinnerWithLabel = { label: string; ariaLabel?: never; ariaHidden?: never }
type NeoSpinnerWithAriaLabel = { label?: never; ariaLabel: string; ariaHidden?: never }
type NeoSpinnerHidden = { label?: never; ariaLabel?: never; ariaHidden: true }

export type NeoSpinnerProps = NeoSpinnerBase &
	(NeoSpinnerWithLabel | NeoSpinnerWithAriaLabel | NeoSpinnerHidden)
