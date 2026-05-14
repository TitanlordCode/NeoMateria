import type { ComputedRef, InjectionKey } from 'vue'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'

export const tabVariants = ['underline', 'pills', 'filled'] as const
export type NeoTabVariant = (typeof tabVariants)[number]

export const tabSizes = ['small', 'medium', 'large'] as const
export type NeoTabSize = (typeof tabSizes)[number]

export const tabOrientations = ['horizontal', 'vertical'] as const
export type NeoTabOrientation = (typeof tabOrientations)[number]

export interface NeoTabsProps {
	class?: string
	activeTab?: string
	defaultActiveTab?: string
	variant?: NeoTabVariant
	size?: NeoTabSize
	color?: SurfaceColor
	orientation?: NeoTabOrientation
	fullWidth?: boolean
}

export interface NeoTabPanelProps {
	id: string
	label: string
	disabled?: boolean
}

export interface NeoTabsContext {
	instanceId: string
	activeTab: ComputedRef<string>
	registerTab: (tab: NeoTabPanelProps) => void
	unregisterTab: (id: string) => void
}

export const neoTabsContextKey: InjectionKey<NeoTabsContext> = Symbol('NeoTabsContext')
