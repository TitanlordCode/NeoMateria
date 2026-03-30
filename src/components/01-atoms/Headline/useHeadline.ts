import { computed } from 'vue'
import { getClassNames } from '@/utils/classNames'
import type { PascalCase } from '@/utils/stringManipulation'
import type { NeoHeadlineProps } from './NeoHeadlineTypes'

export function useHeadline(componentName: PascalCase, props: NeoHeadlineProps) {
	const classes = computed(() => {
		const headlineClasses = getClassNames({
			component: componentName,
			additional: props.class,
		})
		const sharedModifierClasses = [
			props.align ? `NeoHeadline--align-${props.align}` : '',
			props.truncate ? 'NeoHeadline--truncate' : '',
			props.clamp ? 'NeoHeadline--clamped' : '',
		]
			.filter(Boolean)
			.join(' ')
		const themedClasses = props.color
			? getClassNames({ component: 'Themed', modifiers: [props.color] })
			: ''
		return [headlineClasses, sharedModifierClasses, themedClasses].filter(Boolean).join(' ')
	})

	const style = computed(() => {
		const result: Record<string, string> = {}
		if (props.color) result[`--${componentName}-color-text`] = 'var(--neo-theme-colorAccessible)'
		if (props.clamp) result['--NeoHeadline-sizing-clamp'] = String(props.clamp)
		return Object.keys(result).length ? result : undefined
	})

	return { classes, style }
}
