import type { Color } from '@/assets/typescript/colors'

type NeoPennantBase = {
	color?: Color
}

export type NeoPennantLink = { href: string; ariaLabel: string; external?: boolean }
export type NeoPennantStatic = { href?: never; ariaLabel?: never; external?: never }

export type NeoPennantProps = NeoPennantBase & (NeoPennantLink | NeoPennantStatic)
