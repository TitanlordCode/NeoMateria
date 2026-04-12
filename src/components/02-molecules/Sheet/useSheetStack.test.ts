import { describe, it, expect, afterEach } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { useSheetStack } from './useSheetStack'

const PEEK_WIDTH = 24

function withSetup<T>(composable: () => T): [T, ReturnType<typeof mount>] {
	let result!: T
	const wrapper = mount(
		defineComponent({
			setup() {
				result = composable()
				return () => h('div')
			},
		}),
	)
	return [result, wrapper]
}

describe('useSheetStack', () => {
	const wrappers: ReturnType<typeof mount>[] = []

	afterEach(() => {
		wrappers.forEach((wrapper) => wrapper.unmount())
		wrappers.length = 0
	})

	function setup<T>(composable: () => T): T {
		const [result, wrapper] = withSetup(composable)
		wrappers.push(wrapper)
		return result
	}

	it('generates unique sheetIds', () => {
		const first = setup(() => useSheetStack())
		const second = setup(() => useSheetStack())
		expect(first.sheetId).not.toBe(second.sheetId)
	})

	it('registers and returns stackIndex 0 for first sheet', async () => {
		const sheet = setup(() => useSheetStack())
		sheet.register(300, 'right')
		await nextTick()
		expect(sheet.stackIndex.value).toBe(0)
	})

	it('isTopSheet is true for single registered sheet', async () => {
		const sheet = setup(() => useSheetStack())
		sheet.register(300, 'right')
		await nextTick()
		expect(sheet.isTopSheet.value).toBe(true)
	})

	it('stacks two sheets at the same position', async () => {
		const first = setup(() => useSheetStack())
		const second = setup(() => useSheetStack())
		first.register(300, 'right')
		second.register(400, 'right')
		await nextTick()
		expect(first.stackIndex.value).toBe(0)
		expect(second.stackIndex.value).toBe(1)
		expect(first.isTopSheet.value).toBe(false)
		expect(second.isTopSheet.value).toBe(true)
	})

	it('computes stackOffset correctly for a behind sheet', async () => {
		const first = setup(() => useSheetStack())
		const second = setup(() => useSheetStack())
		first.register(300, 'right')
		second.register(400, 'right')
		await nextTick()
		// depth=1, frontSize=400, thisSize=300 → max(0, 400-300+1*PEEK_WIDTH)
		expect(first.stackOffset.value).toBe(400 - 300 + PEEK_WIDTH)
		expect(second.stackOffset.value).toBe(0)
	})

	it('computes stackOffset when both sheets are the same size', async () => {
		const first = setup(() => useSheetStack())
		const second = setup(() => useSheetStack())
		first.register(300, 'right')
		second.register(300, 'right')
		await nextTick()
		// depth=1, frontSize=300, thisSize=300 → max(0, 300-300+1*PEEK_WIDTH)
		expect(first.stackOffset.value).toBe(PEEK_WIDTH)
	})

	it('unregister removes sheet from stack', async () => {
		const sheet = setup(() => useSheetStack())
		sheet.register(300, 'right')
		await nextTick()
		expect(sheet.stackIndex.value).toBe(0)
		sheet.unregister()
		await nextTick()
		expect(sheet.stackIndex.value).toBe(-1)
	})

	it('does not register the same sheet twice', async () => {
		const sheet = setup(() => useSheetStack())
		sheet.register(300, 'right')
		sheet.register(300, 'right')
		await nextTick()
		expect(sheet.stackIndex.value).toBe(0)
	})

	it('separates sheets by position', async () => {
		const left = setup(() => useSheetStack())
		const right = setup(() => useSheetStack())
		left.register(300, 'left')
		right.register(400, 'right')
		await nextTick()
		expect(left.stackIndex.value).toBe(0)
		expect(right.stackIndex.value).toBe(0)
		expect(left.isTopSheet.value).toBe(true)
		expect(right.isTopSheet.value).toBe(true)
	})

	it('updateSize recalculates stackOffset', async () => {
		const first = setup(() => useSheetStack())
		const second = setup(() => useSheetStack())
		first.register(300, 'right')
		second.register(300, 'right')
		await nextTick()
		expect(first.stackOffset.value).toBe(PEEK_WIDTH)
		second.updateSize(400, 'right')
		await nextTick()
		// frontSize=400, thisSize=300 → max(0, 400-300+1*PEEK_WIDTH)
		expect(first.stackOffset.value).toBe(400 - 300 + PEEK_WIDTH)
	})

	it('unmounting auto-unregisters via onUnmounted', async () => {
		const [sheet, wrapper] = withSetup(() => useSheetStack())
		sheet.register(300, 'right')
		await nextTick()
		expect(sheet.stackIndex.value).toBe(0)
		wrapper.unmount()
		await nextTick()
		expect(sheet.stackIndex.value).toBe(-1)
	})
})
