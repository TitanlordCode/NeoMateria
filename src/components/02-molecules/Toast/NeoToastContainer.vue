<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { NeoToastContainerProps } from './NeoToastTypes'
import { containerMaxRef, toasts } from './toastStore'
import { getClassNames } from '@/utils/classNames'
import NeoToast from './NeoToast.vue'

const props = withDefaults(defineProps<NeoToastContainerProps>(), {
	position: 'top-end',
	max: 5,
	zIndex: 9999,
})

const mounted = ref(false)

const classes = computed(() =>
	getClassNames({
		component: 'NeoToastContainer',
		modifiers: [props.position],
	}),
)

const containerStyle = computed(() => ({ zIndex: props.zIndex }))

watch(
	() => props.max,
	(value) => {
		containerMaxRef.value = value
		while (toasts.value.length > value) {
			toasts.value.shift()
		}
	},
	{ immediate: true },
)

onMounted(() => {
	mounted.value = true
})

onBeforeUnmount(() => {
	containerMaxRef.value = 5
})
</script>

<template>
	<Teleport v-if="mounted" to="body">
		<div
			:class="classes"
			:style="containerStyle"
			role="region"
			aria-label="Notifications"
			aria-live="polite"
		>
			<TransitionGroup name="NeoToast" tag="div" class="NeoToastContainer-list">
				<NeoToast v-for="entry in toasts" :key="entry.id" :entry="entry" />
			</TransitionGroup>
		</div>
	</Teleport>
</template>

<style scoped>
@import url('./NeoToastContainer-layout.css');

.NeoToastContainer {
	display: flex;
	pointer-events: none;
	position: fixed;
}

.NeoToastContainer--top-start {
	inset-block-start: var(--NeoToastContainer-sizing-edgeOffset);
	inset-inline-start: var(--NeoToastContainer-sizing-edgeOffset);
}

.NeoToastContainer--top-center {
	inset-block-start: var(--NeoToastContainer-sizing-edgeOffset);
	inset-inline-end: 0;
	inset-inline-start: 0;
	justify-content: center;
}

.NeoToastContainer--top-end {
	inset-block-start: var(--NeoToastContainer-sizing-edgeOffset);
	inset-inline-end: var(--NeoToastContainer-sizing-edgeOffset);
}

.NeoToastContainer--bottom-start {
	inset-block-end: var(--NeoToastContainer-sizing-edgeOffset);
	inset-inline-start: var(--NeoToastContainer-sizing-edgeOffset);
}

.NeoToastContainer--bottom-center {
	inset-block-end: var(--NeoToastContainer-sizing-edgeOffset);
	inset-inline-end: 0;
	inset-inline-start: 0;
	justify-content: center;
}

.NeoToastContainer--bottom-end {
	inset-block-end: var(--NeoToastContainer-sizing-edgeOffset);
	inset-inline-end: var(--NeoToastContainer-sizing-edgeOffset);
}

.NeoToastContainer-list {
	display: flex;
	flex-direction: column;
	gap: var(--NeoToastContainer-sizing-gap);
	pointer-events: none;
}

/* Bottom-anchored stacks visually grow upward — render newest at the bottom. */
.NeoToastContainer--bottom-start .NeoToastContainer-list,
.NeoToastContainer--bottom-center .NeoToastContainer-list,
.NeoToastContainer--bottom-end .NeoToastContainer-list {
	flex-direction: column-reverse;
}

/* Slide direction follows the anchor edge so toasts enter from the viewport boundary. */
.NeoToast-enter-from {
	opacity: 0;
}

.NeoToastContainer--top-start .NeoToast-enter-from,
.NeoToastContainer--top-center .NeoToast-enter-from,
.NeoToastContainer--top-end .NeoToast-enter-from {
	transform: translateY(calc(var(--NeoToastContainer-sizing-slideOffset) * -1));
}

.NeoToastContainer--bottom-start .NeoToast-enter-from,
.NeoToastContainer--bottom-center .NeoToast-enter-from,
.NeoToastContainer--bottom-end .NeoToast-enter-from {
	transform: translateY(var(--NeoToastContainer-sizing-slideOffset));
}

.NeoToast-enter-active {
	transition:
		opacity 0.2s ease,
		transform 0.2s ease;
}

.NeoToast-leave-active {
	position: absolute;
	transition:
		opacity 0.15s ease,
		transform 0.15s ease;
}

.NeoToast-leave-to {
	opacity: 0;
	transform: scale(0.95);
}

.NeoToast-move {
	transition: transform 0.2s ease;
}
</style>
