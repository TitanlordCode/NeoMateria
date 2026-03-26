import { ref, computed, onUnmounted } from 'vue'

const PEEK_WIDTH = 24

interface SheetEntry {
	id: string
	size: number
	position: string
}

// Global state — shared across all NeoSheet instances
const openSheets = ref<SheetEntry[]>([])
let sheetIdCounter = 0

export const useSheetStack = () => {
	const sheetId = `neo-sheet-${++sheetIdCounter}`

	const register = (size = 0, position = 'right') => {
		if (!openSheets.value.some((sheet) => sheet.id === sheetId)) {
			openSheets.value.push({ id: sheetId, size, position })
		}
	}

	const unregister = () => {
		const index = openSheets.value.findIndex((sheet) => sheet.id === sheetId)
		if (index > -1) {
			openSheets.value.splice(index, 1)
		}
	}

	const updateSize = (size: number, position: string) => {
		const entry = openSheets.value.find((sheet) => sheet.id === sheetId)
		if (entry) {
			entry.size = size
			entry.position = position
		}
	}

	const samePositionSheets = computed(() => {
		const myEntry = openSheets.value.find((sheet) => sheet.id === sheetId)
		if (!myEntry) return []
		return openSheets.value.filter((sheet) => sheet.position === myEntry.position)
	})

	const stackIndex = computed(() => {
		return samePositionSheets.value.findIndex((sheet) => sheet.id === sheetId)
	})

	const stackOffset = computed(() => {
		const index = stackIndex.value
		if (index < 0) return 0
		const depth = samePositionSheets.value.length - 1 - index
		if (depth === 0) return 0
		const thisSize = samePositionSheets.value[index]?.size ?? 0
		const frontSize = samePositionSheets.value[samePositionSheets.value.length - 1]?.size ?? 0
		return Math.max(0, frontSize - thisSize + depth * PEEK_WIDTH)
	})

	const isTopSheet = computed(() => {
		return stackIndex.value === samePositionSheets.value.length - 1
	})

	onUnmounted(() => {
		unregister()
	})

	return {
		sheetId,
		register,
		unregister,
		updateSize,
		stackIndex,
		stackOffset,
		isTopSheet,
	}
}
