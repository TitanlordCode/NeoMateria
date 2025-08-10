export function toCamelCase(str: string) {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase()
		})
		.replace(/\s+/g, '')
}

export type PascalCase = `${Uppercase<string>}${string}`

export function toPascalCase(str: string) {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toUpperCase() : word.toUpperCase()
		})
		.replace(/\s+/g, '')
}
