import type { PascalCase } from './stringManipulation'

export interface className {
	component: PascalCase
	modifiers?: string[]
	states?: string[]
	additional?: string
}

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
