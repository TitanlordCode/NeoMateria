<script setup lang="ts">
import { computed } from 'vue'
import type { NeoProgressBarProps } from './NeoProgressBarTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoProgressBarProps>()

const clampedValue = computed(() => Math.min(100, Math.max(0, props.value)))

const classes = computed(() => {
	const barClasses = getClassNames({
		component: 'NeoProgressBar',
		modifiers: [props.size ?? 'small', props.rounded ? 'rounded' : ''],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${barClasses} ${themedClasses}`
})
</script>

<template>
	<div
		:class="classes"
		role="progressbar"
		:aria-valuenow="clampedValue"
		aria-valuemin="0"
		aria-valuemax="100"
		:aria-label="props.ariaLabel"
	>
		<div class="NeoProgressBar-fill" :style="{ inlineSize: `${clampedValue}%` }" />
	</div>
</template>

<style scoped>
@import url('./NeoProgressBar-themed.css');
@import url('./NeoProgressBar-layout.css');

.NeoProgressBar {
	background-color: var(--NeoProgressBar-color-track);
	block-size: var(--NeoProgressBar-sizing-height);
	border-radius: var(--NeoProgressBar-sizing-borderRadius);
	inline-size: 100%;
	overflow: hidden;
	position: relative;
}

.NeoProgressBar-fill {
	background-color: var(--NeoProgressBar-color-fill);
	block-size: 100%;
	transition: inline-size 0.3s ease;
}
</style>
