/**
 * Converts a string to camelCase
 * @param str - String to convert
 * @returns String in camelCase format
 * @example
 * toCamelCase('hello world') // 'helloWorld'
 * toCamelCase('Hello World') // 'helloWorld'
 * toCamelCase('hello-world') // 'helloWorld'
 */
export function toCamelCase(str: string) {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toLowerCase() : word.toUpperCase()
		})
		.replace(/\s+/g, '')
}

/**
 * TypeScript type for strings in PascalCase format
 * Ensures the first character is uppercase
 */
export type PascalCase = `${Uppercase<string>}${string}`

/**
 * Converts a string to PascalCase
 * @param str - String to convert
 * @returns String in PascalCase format
 * @example
 * toPascalCase('hello world') // 'HelloWorld'
 * toPascalCase('hello-world') // 'HelloWorld'
 */
export function toPascalCase(str: string) {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index === 0 ? word.toUpperCase() : word.toUpperCase()
		})
		.replace(/\s+/g, '')
}
