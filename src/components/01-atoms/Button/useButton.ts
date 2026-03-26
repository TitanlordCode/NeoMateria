import { computed } from 'vue'
import { getClassNames } from '@/utils/classNames'
import type { SurfaceColor } from '@/assets/typescript/colorTypes'
import type { NeoButtonSize, NeoButtonVariant } from './NeoButton/NeoButtonTypes'

export interface UseButtonOptions {
	color?: SurfaceColor
	size?: NeoButtonSize
	variant?: NeoButtonVariant
	rounded?: boolean
	fullWidth?: boolean
	pressed?: boolean
}

export function useButton(props: UseButtonOptions) {
	const classes = computed(() => {
		const buttonClasses = getClassNames({
			component: 'NeoButton',
			modifiers: [
				props.size ?? 'medium',
				props.variant ?? 'primary',
				props.rounded ? 'rounded' : '',
				props.fullWidth ? 'fullWidth' : '',
				props.pressed ? 'pressed' : '',
			],
		})
		const themedClasses = getClassNames({
			component: 'Themed',
			modifiers: [props.color ?? 'blue'],
		})
		return `${buttonClasses} ${themedClasses}`
	})

	return { classes }
}
