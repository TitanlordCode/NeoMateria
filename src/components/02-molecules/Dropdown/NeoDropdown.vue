<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, useId } from 'vue'
import type { NeoDropdownProps, NeoDropdownSlots } from './NeoDropdownTypes'

const props = withDefaults(defineProps<NeoDropdownProps>(), {
	placement: 'bottom-start',
	closeOnEscape: true,
	closeOnClickOutside: true,
})

defineSlots<NeoDropdownSlots>()

const emit = defineEmits<{
	/** Emitted whenever the open state changes. Receives the new boolean value. */
	'update:open': [isOpen: boolean]
}>()

const internalOpen = ref(props.defaultOpen ?? false)
const panelId = useId()

const isOpen = computed(() => props.open ?? internalOpen.value)

const toggle = () => {
	const nextValue = !isOpen.value
	internalOpen.value = nextValue
	emit('update:open', nextValue)
}

const close = () => {
	if (!isOpen.value) return
	internalOpen.value = false
	emit('update:open', false)
}

const handleKeydown = (event: KeyboardEvent) => {
	if (props.closeOnEscape && event.key === 'Escape' && isOpen.value) {
		event.stopPropagation()
		close()
	}
}

onMounted(() => {
	document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
	document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
	<div class="NeoDropdown">
		<slot name="trigger" :is-open="isOpen" :toggle="toggle" />
		<div v-if="isOpen && props.closeOnClickOutside" class="NeoDropdown-backdrop" @click="close" />
		<Transition name="NeoDropdown-panel">
			<div
				v-if="isOpen"
				:id="panelId"
				class="NeoDropdown-panel"
				:class="`NeoDropdown-panel--${props.placement}`"
			>
				<slot />
			</div>
		</Transition>
	</div>
</template>

<style scoped>
@import url('./NeoDropdown-themed.css');
@import url('./NeoDropdown-layout.css');

.NeoDropdown {
	display: inline-flex;
	position: relative;
}

.NeoDropdown-backdrop {
	inset: 0;
	position: fixed;
	z-index: 199;
}

.NeoDropdown-panel {
	align-items: center;
	background-color: var(--NeoDropdown-color-panelBackground);
	border: 1px solid var(--NeoDropdown-color-panelBorder);
	border-radius: var(--NeoDropdown-sizing-borderRadius);
	box-shadow: 0 4px 16px var(--NeoDropdown-color-panelShadow);
	color: var(--NeoDropdown-color-panelText);
	display: flex;
	flex-direction: column;
	gap: var(--NeoDropdown-sizing-panelGap);
	inline-size: max-content;
	max-inline-size: var(--NeoDropdown-sizing-panelMaxInlineSize);
	padding: var(--NeoDropdown-sizing-panelPadding);
	position: absolute;
	z-index: 200;
}

.NeoDropdown-panel--bottom-start {
	inset-block-start: calc(100% + var(--NeoDropdown-sizing-panelOffset));
	inset-inline-start: 0;
}

.NeoDropdown-panel--bottom-end {
	inset-block-start: calc(100% + var(--NeoDropdown-sizing-panelOffset));
	inset-inline-end: 0;
}

.NeoDropdown-panel--top-start {
	inset-block-end: calc(100% + var(--NeoDropdown-sizing-panelOffset));
	inset-inline-start: 0;
}

.NeoDropdown-panel--top-end {
	inset-block-end: calc(100% + var(--NeoDropdown-sizing-panelOffset));
	inset-inline-end: 0;
}

.NeoDropdown-panel-enter-active,
.NeoDropdown-panel-leave-active {
	transition:
		opacity 0.15s ease,
		transform 0.15s ease;
}

.NeoDropdown-panel-enter-from,
.NeoDropdown-panel-leave-to {
	opacity: 0;
	transform: translateY(calc(var(--NeoDropdown-sizing-panelSlideOffset) * -1));
}

.NeoDropdown-panel--top-start.NeoDropdown-panel-enter-from,
.NeoDropdown-panel--top-start.NeoDropdown-panel-leave-to,
.NeoDropdown-panel--top-end.NeoDropdown-panel-enter-from,
.NeoDropdown-panel--top-end.NeoDropdown-panel-leave-to {
	transform: translateY(var(--NeoDropdown-sizing-panelSlideOffset));
}
</style>
