import { defineComponent, h } from 'vue'
import { colors, type Color } from '../../src/assets/typescript/colors'
import type { VNode, Component as VueComponent } from 'vue'

import './colorShowcase.css'
type NonWCAGCompliantEntry = { component: string; variants: string[]; themes: ('light' | 'dark')[] }
const NonWCAGCompliantEntries: NonWCAGCompliantEntry[] = [
	{
		component: 'NeoBadge',
		variants: ['outlined'],
		themes: ['light'],
	},
	{
		component: 'NeoButton',
		variants: ['secondary', 'tertiary'],
		themes: ['light'],
	},
	{
		component: 'NeoInput',
		variants: ['secondary', 'tertiary'],
		themes: ['light'],
	},
	{
		component: 'NeoTextArea',
		variants: ['secondary', 'tertiary'],
		themes: ['light'],
	},
	{
		component: 'NeoLink',
		variants: ['default', 'underline'],
		themes: ['light'],
	},
	{
		component: 'NeoSpinner',
		variants: [],
		themes: ['light'],
	},
]

/**
 * Shared utilities for color showcase stories
 * These helpers provide consistent visual treatment for special colors
 * (yellow, amber, orange) that use black text in light mode
 */

/**
 * Colors that use black text in light mode for accessibility
 */
export const blackTextColors: Color[] = ['yellow', 'amber', 'orange'] as const

/**
 * Wraps a component in a light background container if it's a special color
 * This helps Storybook's a11y checker understand the context and provides
 * a visual indicator that these colors are optimized for light backgrounds
 *
 * Wraps variants where the color is used as background (solid, primary) or border/text (outlined, secondary).
 *
 * @param color - The color name
 * @param children - The component(s) to wrap
 * @param variant - The variant being rendered (e.g., 'solid', 'outlined', 'primary', 'secondary', 'tertiary')
 * @param dark - Whether the component is being rendered in a dark context
 * @returns Wrapped or unwrapped component
 */
export const getColorWrapper = (
	componentName: string,
	color: Color,
	children: VNode,
	variant?: string,
	dark?: boolean,
): VNode => {
	if (!blackTextColors.includes(color)) {
		return children
	}

	if (!variant) {
		return children
	}

	const nonWCAGEntry = NonWCAGCompliantEntries.find((entry) => entry.component === componentName)
	const isNonWCAGVariant =
		nonWCAGEntry &&
		nonWCAGEntry.variants.includes(variant) &&
		nonWCAGEntry.themes.includes(dark ? 'dark' : 'light')

	// Solid/Primary variants: light background (visual helper for a11y checker only)
	// These use color as background
	if (nonWCAGEntry && !isNonWCAGVariant) {
		return (
			<div
				class="color-showcase__light-bg-wrapper"
				title="Uses black text - optimized for light backgrounds"
			>
				{children}
			</div>
		)
	}

	// Outlined/Secondary variants: light background with compliance warning
	// These use color as border/text
	if (nonWCAGEntry && isNonWCAGVariant) {
		return (
			<div
				class="color-showcase__light-bg-wrapper"
				title="Uses colored text - not optimized for light backgrounds"
			>
				{dark ? children : `${color} not WCAG compliant`}
			</div>
		)
	}

	return children
}

/**
 * Determines if a color needs a light background wrapper
 * Used for conditional styling in more complex scenarios
 *
 * @param color - The color name
 * @param showAccessibilityBackgrounds - Whether accessibility backgrounds are shown
 * @param isPrimaryVariant - Whether this is a primary variant (which doesn't need wrapper)
 * @returns true if the color needs a light background
 */
export const needsLightBackground = (
	color: Color,
	showAccessibilityBackgrounds: boolean,
	isPrimaryVariant: boolean = false,
): boolean => {
	return !showAccessibilityBackgrounds && !isPrimaryVariant && blackTextColors.includes(color)
}

/**
 * Gets the appropriate background color based on color and context
 *
 * @param color - The color name
 * @param showAccessibilityBackgrounds - Whether accessibility backgrounds are shown
 * @param isPrimaryVariant - Whether this is a primary variant
 * @returns Background color value or 'transparent'
 */
export const getBackgroundColor = (
	color: Color,
	showAccessibilityBackgrounds: boolean,
	isPrimaryVariant: boolean = false,
): string => {
	if (needsLightBackground(color, showAccessibilityBackgrounds, isPrimaryVariant)) {
		return '#f5f5f5'
	}
	if (showAccessibilityBackgrounds) {
		return 'var(--neo-theme-colorText)'
	}
	return 'transparent'
}

/**
 * Configuration for a variant section in the color showcase
 */
export interface VariantConfig<TComponent, TArgs = Record<string, unknown>> {
	/** The name of the variant to display */
	name: string
	/** The variant value (e.g., 'solid', 'primary', 'outlined') */
	variant: string
	/** Function that renders a component with the given color */
	renderComponent: (color: Color, Component: TComponent, args: TArgs) => VNode
}

/**
 * Creates a complete AllColors story render function (advanced version)
 * Use this when you need full control over how each variant is rendered
 *
 * @param Component - The Vue component to showcase
 * @param variants - Array of variant configurations to display
 * @returns A defineComponent setup function ready to use in story render
 */
export const createAllColorsRender = <TComponent, TArgs = Record<string, unknown>>(
	Component: TComponent,
	variants: VariantConfig<TComponent, TArgs>[],
	dark: boolean = false,
) => {
	return (args: TArgs) => {
		return defineComponent({
			name: 'AllColorsRender',
			setup() {
				return () => (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
						{variants.map((variantConfig) => (
							<div key={variantConfig.name}>
								<h3 class="color-showcase__variant-title">{variantConfig.name}</h3>
								<div
									style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}
								>
									{colors.map((color) =>
										getColorWrapper(
											//@ts-expect-error __name is an internal property
											Component.__name,
											color,
											variantConfig.renderComponent(color, Component, args),
											variantConfig.variant,
											dark,
										),
									)}
								</div>
							</div>
						))}
					</div>
				)
			},
		})
	}
}

/**
 * Simplified configuration for a single variant
 */
export interface SimpleVariantConfig<TArgs = Record<string, unknown>> {
	/** The variant value (e.g., 'solid', 'primary', 'outlined') */
	variant: string
	/** Display name for this variant (e.g., 'Solid Variant', 'Primary') */
	label?: string
	/** Custom props to pass to the component for this variant */
	props?: Partial<TArgs>
	/** Custom render function for this specific variant */
	render?: (color: Color, variant: string, args: TArgs) => VNode
}

/**
 * Simplified version for components with variant patterns
 * Works with any component that has color and variant props
 *
 * @param Component - The Vue component to showcase
 * @param variants - Array of variant configurations (e.g., ['solid', 'outlined'] or [{variant: 'primary', label: 'Primary'}])
 * @param options - Additional configuration options
 * @returns A defineComponent setup function ready to use in story render
 *
 * @example
 * // Badge with simple variant names
 * export const AllColors: Story = {
 *   render: createSimpleColorShowcase(NeoBadge, ['solid', 'outlined', 'dot'])
 * }
 *
 * @example
 * // Badge with custom dot rendering
 * export const AllColors: Story = {
 *   render: createSimpleColorShowcase(NeoBadge, [
 *     'solid',
 *     'outlined',
 *     {
 *       variant: 'dot',
 *       label: 'Dot Variant',
 *       render: (color, variant, args) => (
 *         <div style={{ display: 'flex', gap: '4px' }}>
 *           {h(NeoBadge, { ...args, variant, color })}
 *           <span>{color}</span>
 *         </div>
 *       )
 *     }
 *   ])
 * }
 *
 * @example
 * // Button with different variants
 * export const AllColors: Story = {
 *   render: createSimpleColorShowcase(NeoButton, ['primary', 'secondary', 'tertiary'])
 * }
 *
 * @example
 * // Button with custom labels
 * export const AllColors: Story = {
 *   render: createSimpleColorShowcase(NeoButton, [
 *     { variant: 'primary', label: 'Primary Button' },
 *     { variant: 'secondary', label: 'Secondary Button' },
 *     { variant: 'tertiary', label: 'Tertiary Button' }
 *   ])
 * }
 */
export const createSimpleColorShowcase = <TComponent, TArgs = Record<string, unknown>>(
	Component: TComponent,
	variants: Array<string | SimpleVariantConfig<TArgs>>,
	options?: {
		/** Additional props to spread on all variants */
		defaultProps?: Partial<TArgs>
		dark?: boolean
	},
) => {
	const { defaultProps = {} } = options || {}

	// Normalize variants to SimpleVariantConfig
	const normalizedVariants: SimpleVariantConfig<TArgs>[] = variants.map((variant) => {
		if (typeof variant === 'string') {
			return {
				variant: variant,
				label: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Variant`,
			}
		}
		return {
			...variant,
			label:
				variant.label ||
				`${variant.variant.charAt(0).toUpperCase() + variant.variant.slice(1)} Variant`,
		}
	})

	// Convert to VariantConfig for createAllColorsRender
	const variantConfigs: VariantConfig<TComponent, TArgs>[] = normalizedVariants.map((config) => ({
		name: config.label!,
		variant: config.variant,
		renderComponent: config.render
			? (color, _, args) => config.render!(color, config.variant, args)
			: (color, Comp, args) =>
					h(Comp as VueComponent, {
						...defaultProps,
						...args,
						...config.props,
						key: color,
						variant: config.variant,
						color,
					}),
	}))

	return createAllColorsRender(Component, variantConfigs, options?.dark || false)
}
