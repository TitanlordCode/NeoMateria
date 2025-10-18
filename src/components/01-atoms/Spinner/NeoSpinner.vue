<script setup lang="ts">
import { computed } from 'vue'
import type { NeoSpinnerProps } from './NeoSpinnerTypes'
import { getClassNames } from '@/utils/classNames'
import { getColorShade } from '@/utils/colorMapper'

const props = defineProps<NeoSpinnerProps>()

const classes = computed(() => {
	const spinnerClasses = getClassNames({
		component: 'NeoSpinner',
		modifiers: [props.size ?? 'medium'],
		additional: props.class,
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [getColorShade(props.color, undefined, 'grey500')],
	})
	return `${spinnerClasses} ${themedClasses}`
})
</script>

<template>
	<div :class="classes" role="status" :aria-label="props.label ?? 'Loading'">
		<div class="NeoSpinner-circle"></div>
		<span class="NeoSpinner-label">{{ props.label ?? 'Loading...' }}</span>
	</div>
</template>

<style scoped>
@import url('./NeoSpinner-layout.css');
@import url('./NeoSpinner-themed.css');

.NeoSpinner {
	align-items: center;
	display: inline-flex;
	flex-direction: column;
	gap: 8px;
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
	font-size: var(--NeoSpinner-sizing-labelFontSize);
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}
</style>
