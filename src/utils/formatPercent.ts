/**
 * Resolves the locale used for formatting:
 *   1. Explicit `locale` argument when provided
 *   2. `document.documentElement.lang` when non-empty
 *   3. `undefined` — `Intl.NumberFormat` then uses the runtime default
 */
const resolveLocale = (locale?: string): string | undefined => {
	if (locale) return locale
	if (typeof document !== 'undefined') {
		const documentLang = document.documentElement.lang?.trim()
		if (documentLang) return documentLang
	}
	return undefined
}

export interface FormatPercentOptions {
	/** Maximum number of fraction digits to display. Trailing zeros are stripped. Defaults to 2. */
	decimals?: number
	/** BCP 47 language tag (e.g. `de-DE`). Falls back to `<html lang>` then runtime default. */
	locale?: string
}

/**
 * Formats a numeric percent value using the resolved locale. Returns the number
 * portion only (no `%` suffix) so callers control surrounding text.
 *
 * @example formatPercent(75.123, { decimals: 2, locale: 'de-DE' }) // '75,12'
 * @example formatPercent(75, { decimals: 2 }) // '75'
 */
export const formatPercent = (value: number, options: FormatPercentOptions = {}): string => {
	const { decimals = 2, locale } = options
	const formatter = new Intl.NumberFormat(resolveLocale(locale), {
		maximumFractionDigits: Math.max(0, decimals),
		minimumFractionDigits: 0,
	})
	return formatter.format(value)
}
