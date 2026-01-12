import type { PascalCase } from './stringManipulation'

/**
 * Configuration object for generating BEM-style class names
 */
export interface className {
	/** Base component name in PascalCase (e.g., 'NeoButton') */
	component: PascalCase
	/** BEM modifiers to append (e.g., ['primary', 'large'] → 'NeoButton--primary NeoButton--large') */
	modifiers?: string[]
	/** State classes to add (e.g., ['active', 'disabled'] → '.is-active .is-disabled') */
	states?: string[]
	/** Additional custom class names to append */
	additional?: string
}

/**
 * Generates BEM-style class names for components
 * Follows the Block__Element--Modifier pattern with additional state classes
 * @param data - Configuration object for class name generation
 * @returns Space-separated string of class names
 * @example
 * getClassNames({
 *   component: 'NeoButton',
 *   modifiers: ['primary', 'large'],
 *   states: ['active'],
 *   additional: 'custom-class'
 * })
 * // Returns: 'NeoButton NeoButton--primary NeoButton--large .is-active custom-class'
 */
export const getClassNames = (data: className) => {
	const updatedClasses: string[] = [data.component]

	data.modifiers?.forEach((modifier) => {
		if (modifier) {
			updatedClasses.push(`${data.component}--${modifier}`)
		}
	})

	data.states?.forEach((state) => {
		if (state) {
			updatedClasses.push(`.is-${state}`)
		}
	})

	if (data.additional) {
		updatedClasses.push(data.additional)
	}

	return updatedClasses.join(' ')
}
