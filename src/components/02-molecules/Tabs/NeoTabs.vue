<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, provide, ref, useId, watch } from 'vue'
import type { NeoTabPanelProps, NeoTabsProps } from './NeoTabsTypes'
import { neoTabsContextKey } from './NeoTabsTypes'
import { getClassNames } from '@/utils/classNames'
import NeoDropdown from '@/components/02-molecules/Dropdown/NeoDropdown.vue'

const props = withDefaults(defineProps<NeoTabsProps>(), {
	variant: 'underline',
	size: 'medium',
	color: 'blue',
	orientation: 'horizontal',
	fullWidth: false,
})

const emit = defineEmits<{
	/** Emitted when the active tab changes. Receives the new tab id. */
	'tab-change': [id: string]
}>()

const instanceId = useId()
const registeredTabs = ref<NeoTabPanelProps[]>([])
const tablistRef = ref<HTMLElement | null>(null)
const tabButtonRefs = ref<(HTMLElement | null)[]>([])
const naturalWidths = ref<number[]>([])
const overflowIndex = ref<number>(Infinity)
const isMoreOpen = ref(false)
let resizeObserver: ResizeObserver | null = null

const MORE_BTN_WIDTH = 92

// Internal state drives uncontrolled mode; synced with prop in controlled mode.
const internalActiveTab = ref<string>('')

const effectiveActiveTab = computed(() => props.activeTab ?? internalActiveTab.value)

// Sync controlled prop into internal state so the context always reflects the right tab.
watch(
	() => props.activeTab,
	(id) => {
		if (id !== undefined) internalActiveTab.value = id
	},
	{ immediate: true },
)

// Set initial uncontrolled tab from defaultActiveTab before panels register.
watch(
	() => props.defaultActiveTab,
	(id) => {
		if (id && !props.activeTab) internalActiveTab.value = id
	},
	{ immediate: true },
)

const setActiveTab = (id: string) => {
	internalActiveTab.value = id
	emit('tab-change', id)
	isMoreOpen.value = false
}

const registerTab = (tab: NeoTabPanelProps) => {
	if (registeredTabs.value.find((registeredTab) => registeredTab.id === tab.id)) return
	registeredTabs.value.push(tab)
	// Auto-select first non-disabled tab when nothing is active yet.
	if (!effectiveActiveTab.value && !tab.disabled) {
		internalActiveTab.value = tab.id
	}
}

const unregisterTab = (id: string) => {
	const index = registeredTabs.value.findIndex((tab) => tab.id === id)
	if (index !== -1) registeredTabs.value.splice(index, 1)
}

provide(neoTabsContextKey, {
	instanceId,
	activeTab: effectiveActiveTab,
	registerTab,
	unregisterTab,
})

// -- Overflow calculation

const recalcOverflow = () => {
	if (!tablistRef.value || naturalWidths.value.length === 0) return
	const containerWidth = tablistRef.value.clientWidth
	let total = 0
	let newIndex = naturalWidths.value.length

	for (let i = 0; i < naturalWidths.value.length; i++) {
		const width = naturalWidths.value[i] ?? 0
		const isLast = i === naturalWidths.value.length - 1
		const reserve = isLast ? 0 : MORE_BTN_WIDTH

		if (total + width + reserve > containerWidth) {
			newIndex = i
			break
		}
		total += width
	}

	overflowIndex.value = newIndex
}

const measureAndRecalc = () => {
	nextTick(() => {
		naturalWidths.value = tabButtonRefs.value.map((el) => el?.offsetWidth ?? 0)
		recalcOverflow()
	})
}

onMounted(() => {
	measureAndRecalc()
	if (tablistRef.value) {
		resizeObserver = new ResizeObserver(recalcOverflow)
		resizeObserver.observe(tablistRef.value)
	}
})

onUnmounted(() => {
	resizeObserver?.disconnect()
})

// Re-measure when tabs are added or removed dynamically.
watch(() => registeredTabs.value.length, measureAndRecalc)

const overflowTabs = computed(() =>
	registeredTabs.value.filter((_, index) => index >= overflowIndex.value),
)

const overflowContainsActive = computed(() =>
	overflowTabs.value.some((tab) => tab.id === effectiveActiveTab.value),
)

// -- Keyboard navigation

const isRTL = computed(() => {
	if (typeof document === 'undefined') return false
	return document.dir === 'rtl' || document.documentElement.dir === 'rtl'
})

const handleKeyDown = (event: KeyboardEvent) => {
	const isHorizontal = (props.orientation ?? 'horizontal') === 'horizontal'
	const visibleEnabled = registeredTabs.value
		.slice(0, overflowIndex.value === Infinity ? undefined : overflowIndex.value)
		.filter((tab) => !tab.disabled)

	const currentIndex = visibleEnabled.findIndex((tab) => tab.id === effectiveActiveTab.value)

	const prevKey = isHorizontal ? (isRTL.value ? 'ArrowRight' : 'ArrowLeft') : 'ArrowUp'
	const nextKey = isHorizontal ? (isRTL.value ? 'ArrowLeft' : 'ArrowRight') : 'ArrowDown'

	let newIndex = currentIndex

	switch (event.key) {
		case prevKey:
			event.preventDefault()
			newIndex = currentIndex <= 0 ? visibleEnabled.length - 1 : currentIndex - 1
			break
		case nextKey:
			event.preventDefault()
			newIndex = currentIndex >= visibleEnabled.length - 1 ? 0 : currentIndex + 1
			break
		case 'Home':
			event.preventDefault()
			newIndex = 0
			break
		case 'End':
			event.preventDefault()
			newIndex = visibleEnabled.length - 1
			break
		default:
			return
	}

	const newTab = visibleEnabled[newIndex]
	if (!newTab) return

	setActiveTab(newTab.id)
	const allIndex = registeredTabs.value.indexOf(newTab)
	tabButtonRefs.value[allIndex]?.focus()
}

const handleTabClick = (tab: NeoTabPanelProps) => {
	if (!tab.disabled) setActiveTab(tab.id)
}

// -- Classes

const classes = computed(() => {
	const tabsClasses = getClassNames({
		component: 'NeoTabs',
		modifiers: [
			props.variant ?? 'underline',
			props.size ?? 'medium',
			props.orientation ?? 'horizontal',
			props.fullWidth ? 'fullWidth' : '',
		],
		additional: props.class,
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${tabsClasses} ${themedClasses}`
})
</script>

<template>
	<div :class="classes">
		<div
			ref="tablistRef"
			class="NeoTabs-tablist"
			role="tablist"
			:aria-orientation="props.orientation ?? 'horizontal'"
		>
			<button
				v-for="(tab, index) in registeredTabs"
				:key="tab.id"
				:ref="
					(el) => {
						tabButtonRefs[index] = el as HTMLElement | null
					}
				"
				class="NeoTabs-tab"
				:class="{
					'NeoTabs-tab--active': effectiveActiveTab === tab.id,
					'NeoTabs-tab--disabled': tab.disabled,
					'NeoTabs-tab--hidden': index >= overflowIndex,
				}"
				role="tab"
				:aria-selected="effectiveActiveTab === tab.id"
				:aria-controls="`${instanceId}-panel-${tab.id}`"
				:id="`${instanceId}-tab-${tab.id}`"
				:disabled="tab.disabled || undefined"
				:tabindex="effectiveActiveTab === tab.id ? 0 : -1"
				:aria-hidden="index >= overflowIndex ? true : undefined"
				@click="handleTabClick(tab)"
				@keydown="handleKeyDown"
			>
				{{ tab.label }}
			</button>

			<div v-if="overflowTabs.length > 0" class="NeoTabs-overflow">
				<NeoDropdown :open="isMoreOpen" placement="bottom-end" @update:open="isMoreOpen = $event">
					<template #trigger="{ isOpen, toggle }">
						<button
							class="NeoTabs-overflow-trigger"
							:class="{ 'NeoTabs-overflow-trigger--active': overflowContainsActive }"
							:aria-expanded="isOpen"
							aria-haspopup="true"
							tabindex="0"
							@click="toggle"
						>
							More ({{ overflowTabs.length }})
						</button>
					</template>
					<button
						v-for="tab in overflowTabs"
						:key="tab.id"
						class="NeoTabs-overflow-item"
						:class="{
							'NeoTabs-overflow-item--active': effectiveActiveTab === tab.id,
							'NeoTabs-overflow-item--disabled': tab.disabled,
						}"
						:disabled="tab.disabled || undefined"
						@click="handleTabClick(tab)"
					>
						{{ tab.label }}
					</button>
				</NeoDropdown>
			</div>
		</div>

		<div class="NeoTabs-panels">
			<slot />
		</div>
	</div>
</template>

<style scoped>
@import url('./NeoTabs-themed.css');
@import url('./NeoTabs-layout.css');

.NeoTabs {
	display: flex;
	flex-direction: column;
	inline-size: 100%;
}

.NeoTabs--vertical {
	flex-direction: row;
}

/* Tab list — lower-specificity rules before higher-specificity */

.NeoTabs-tablist {
	align-items: stretch;
	display: flex;
	flex-direction: row;
	flex-shrink: 0;
	overflow: hidden;
	position: relative;
}

.NeoTabs--underline .NeoTabs-tablist {
	border-block-end: 1px solid var(--NeoTabs-color-border);
}

.NeoTabs--pills .NeoTabs-tablist {
	gap: var(--NeoTabs-sizing-gap);
	padding: var(--NeoTabs-sizing-pillsListPadding);
}

.NeoTabs--filled .NeoTabs-tablist {
	background-color: var(--NeoTabs-color-filledBackground);
	border-radius: var(--NeoTabs-sizing-filledListBorderRadius);
	gap: var(--NeoTabs-sizing-filledListGap);
	padding: var(--NeoTabs-sizing-filledListPadding);
}

.NeoTabs--vertical .NeoTabs-tablist {
	align-items: flex-start;
	flex-direction: column;
	inline-size: fit-content;
	overflow: visible;
}

/* Higher specificity (3 classes) — must come after all 2-class tablist rules */
.NeoTabs--vertical.NeoTabs--underline .NeoTabs-tablist {
	border-block-end: none;
	border-inline-end: 1px solid var(--NeoTabs-color-border);
}

/* Tab triggers — lower-specificity rules before higher-specificity */

.NeoTabs-tab {
	align-items: center;
	background: none;
	border: none;
	color: var(--NeoTabs-color-tabText);
	cursor: pointer;
	display: inline-flex;
	flex-shrink: 0;
	font-family: inherit;
	font-size: var(--NeoTabs-sizing-fontSize);
	font-weight: 500;
	gap: var(--NeoTabs-sizing-gap);
	padding-block: var(--NeoTabs-sizing-paddingBlock);
	padding-inline: var(--NeoTabs-sizing-paddingInline);
	position: relative;
	transition: color 0.15s ease;
	white-space: nowrap;
}

.NeoTabs--fullWidth .NeoTabs-tab {
	flex: 1;
	justify-content: center;
}

.NeoTabs-tab--hidden {
	display: none;
}

.NeoTabs-tab--active {
	color: var(--NeoTabs-color-accent);
}

.NeoTabs-tab:disabled {
	cursor: not-allowed;
	opacity: 0.45;
	pointer-events: none;
}

.NeoTabs-tab:focus-visible {
	border-radius: var(--NeoTabs-sizing-focusBorderRadius);
	outline: 2px solid var(--NeoTabs-color-focus);
	outline-offset: 2px;
}

.NeoTabs--pills .NeoTabs-tab {
	border-radius: var(--NeoTabs-sizing-pillsTabBorderRadius);
	transition:
		background-color 0.15s ease,
		color 0.15s ease;
}

.NeoTabs--filled .NeoTabs-tab {
	border-radius: var(--NeoTabs-sizing-filledTabBorderRadius);
	transition:
		background-color 0.15s ease,
		color 0.15s ease;
}

/* Hover excludes active tabs so color stays correct on active+hover */
.NeoTabs-tab:hover:not(:disabled, .NeoTabs-tab--active) {
	color: var(--NeoTabs-color-tabTextHover);
}

/* Underline indicator */

.NeoTabs--underline .NeoTabs-tab--active::after {
	background-color: var(--NeoTabs-color-accent);
	block-size: 2px;
	content: '';
	inset-block-end: -1px;
	inset-inline: 0;
	position: absolute;
}

.NeoTabs--vertical.NeoTabs--underline .NeoTabs-tab--active::after {
	block-size: 100%;
	inline-size: 2px;
	inset-block: 0;
	inset-inline-end: -1px;
	inset-inline-start: auto;
}

/* Pills active + hover */

.NeoTabs--pills .NeoTabs-tab:hover:not(:disabled, .NeoTabs-tab--active) {
	background-color: var(--NeoTabs-color-surfaceHover);
}

.NeoTabs--pills .NeoTabs-tab--active {
	background-color: var(--NeoTabs-color-pillsActiveBackground);
	color: var(--NeoTabs-color-pillsActiveText);
}

.NeoTabs--pills:not(.Themed--yellow, .Themed--amber, .Themed--orange, .Themed--white)
	.NeoTabs-tab--active {
	@mixin setOnDark;
}

.NeoTabs--pills.Themed--black .NeoTabs-tab--active {
	@mixin onDark {
		@mixin unsetOnDark;
	}
}

/* Filled active + hover */

.NeoTabs--filled .NeoTabs-tab:hover:not(:disabled, .NeoTabs-tab--active) {
	background-color: var(--NeoTabs-color-surfaceHover);
}

.NeoTabs--filled .NeoTabs-tab--active {
	background-color: var(--NeoTabs-color-filledActiveBackground);
	box-shadow: 0 1px 3px rgb(0 0 0 / 12%);
	color: var(--NeoTabs-color-filledActiveText);

	@mixin onDark {
		box-shadow: 0 1px 3px rgb(0 0 0 / 40%);
	}
}

/* Overflow "More" */

.NeoTabs-overflow {
	flex-shrink: 0;
	margin-inline-start: auto;
}

.NeoTabs-overflow-trigger {
	align-items: center;
	background: none;
	border: none;
	border-radius: var(--NeoTabs-sizing-focusBorderRadius);
	color: var(--NeoTabs-color-tabText);
	cursor: pointer;
	display: inline-flex;
	font-family: inherit;
	font-size: var(--NeoTabs-sizing-fontSize);
	font-weight: 500;
	gap: var(--NeoTabs-sizing-gap);
	padding-block: var(--NeoTabs-sizing-paddingBlock);
	padding-inline: var(--NeoTabs-sizing-paddingInline);
	white-space: nowrap;
}

.NeoTabs-overflow-trigger--active {
	color: var(--NeoTabs-color-accent);
	font-weight: 600;
}

.NeoTabs-overflow-trigger:focus-visible {
	outline: 2px solid var(--NeoTabs-color-focus);
	outline-offset: 2px;
}

.NeoTabs-overflow-trigger:hover {
	color: var(--NeoTabs-color-tabTextHover);
}

.NeoTabs-overflow-item {
	align-items: center;
	background: none;
	border: none;
	color: var(--NeoTabs-color-overflowItemText);
	cursor: pointer;
	display: flex;
	font-family: inherit;
	font-size: var(--NeoTabs-sizing-fontSize);
	inline-size: 100%;
	padding-block: var(--NeoTabs-sizing-overflowItemPaddingBlock);
	padding-inline: var(--NeoTabs-sizing-overflowItemPaddingInline);
	text-align: start;
	white-space: nowrap;
}

.NeoTabs-overflow-item--active {
	color: var(--NeoTabs-color-overflowItemActiveText);
	font-weight: 600;
}

.NeoTabs-overflow-item:disabled {
	cursor: not-allowed;
	opacity: 0.45;
	pointer-events: none;
}

.NeoTabs-overflow-item:focus-visible {
	outline: 2px solid var(--NeoTabs-color-focus);
	outline-offset: -2px;
}

.NeoTabs-overflow-item:hover:not(:disabled) {
	background-color: var(--NeoTabs-color-overflowItemBackgroundHover);
	color: var(--NeoTabs-color-overflowItemTextHover);
}

/* Panels */

.NeoTabs-panels {
	flex: 1;
	min-block-size: 0;
	padding-block-start: var(--NeoTabs-sizing-panelPadding);
}

.NeoTabs--vertical .NeoTabs-panels {
	flex: 1;
	min-inline-size: 0;
	padding-block-start: 0;
	padding-inline-start: var(--NeoTabs-sizing-panelPadding);
}

.NeoTabPanel {
	outline: none;
}
</style>
