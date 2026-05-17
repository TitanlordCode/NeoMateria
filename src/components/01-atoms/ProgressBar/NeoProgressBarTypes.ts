import type { Color } from '@/assets/typescript/colors'

export const progressBarSizes = ['xs', 'small', 'medium'] as const
export type NeoProgressBarSize = (typeof progressBarSizes)[number]

export interface NeoProgressBarProps {
	color?: Color
	value: number
	ariaLabel: string
	size?: NeoProgressBarSize
	rounded?: boolean
	/** Maximum number of fraction digits used when announcing the value via `aria-valuetext`. Defaults to 2. */
	decimals?: number
	/** BCP 47 locale used to format `aria-valuetext` (e.g. `de-DE`). Falls back to `<html lang>` then runtime default. */
	locale?: string
}
