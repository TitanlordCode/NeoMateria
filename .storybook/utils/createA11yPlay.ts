import axe from 'axe-core'
import { expect } from 'storybook/test'

/**
 * Returns a Storybook play function that runs axe-core against the story canvas.
 *
 * Intended for hidden per-variant a11y stories tagged `['!dev', 'test-only']`.
 *
 * @example
 * export const AllColorsA11y: Story = {
 *   ...AllColors,
 *   tags: ['!dev', 'test-only'],
 *   play: createA11yPlay(),
 * }
 */
export const createA11yPlay = () => {
	return async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const results = await axe.run(canvasElement, {
			runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] },
		})
		const messages = results.violations.map(
			(violation) =>
				`${violation.description}: ${violation.nodes.map((node) => node.html).join(', ')}`,
		)
		expect(results.violations, messages.join('\n')).toHaveLength(0)
	}
}
