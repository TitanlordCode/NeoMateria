<script setup lang="ts">
import { computed } from 'vue'
import type { NeoSpinnerProps } from './NeoSpinnerTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoSpinnerProps>()

const classes = computed(() => {
	const spinnerClasses = getClassNames({
		component: 'NeoSpinner',
		modifiers: [props.size ?? 'medium', props.dir ?? 'column'],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${spinnerClasses} ${themedClasses}`
})
</script>

<template>
	<div
		:class="classes"
		:role="props.ariaHidden ? undefined : 'status'"
		:aria-label="props.label ? undefined : props.ariaLabel"
		:aria-hidden="props.ariaHidden ? 'true' : undefined"
	>
		<div class="NeoSpinner-circle"></div>
		<span v-if="props.label" class="NeoSpinner-label">{{ props.label }}</span>
	</div>
</template>

<style scoped>
@import url('./NeoSpinner-layout.css');
@import url('./NeoSpinner-themed.css');

.NeoSpinner {
	align-items: center;
	display: inline-flex;
	flex-direction: column;
	font-family: inherit;
	gap: var(--NeoSpinner-sizing-gap);
}

.NeoSpinner--row {
	flex-direction: row;
}

.NeoSpinner-circle {
	animation: spin 1s linear infinite;
	block-size: var(--NeoSpinner-sizing-size);
	border: var(--NeoSpinner-sizing-borderWidth) solid var(--NeoSpinner-color-border);
	border-radius: 50%;
	border-top-color: var(--NeoSpinner-color-active);
	inline-size: var(--NeoSpinner-sizing-size);
}

.NeoSpinner-label {
	color: var(--NeoSpinner-color-label);
	font-size: var(--NeoSpinner-fontSize-label);
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}
</style>
