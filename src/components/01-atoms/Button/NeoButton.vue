<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { NeoButtonProps } from './NeoButtonTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoButtonProps>()

const emit = defineEmits<{
	/* Fires when clicking the button */
	(e: 'click', event: MouseEvent): void
}>()

const attrs = useAttrs()

const handleClick = (event: MouseEvent) => {
	if (!props.disabled) {
		emit('click', event)
	}
}

const classes = computed(() => {
	const buttonClasses = getClassNames({
		component: 'NeoButton',
		modifiers: [props.size ?? 'small', props.variant ?? 'primary', props.rounded ? 'rounded' : ''],
		additional: props.class,
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'grey500'],
	})
	return `${buttonClasses} ${themedClasses}`
})
</script>

<template>
	<button
		v-bind="attrs"
		:class="classes"
		:disabled="props.disabled ?? undefined"
		@click="handleClick"
	>
		{{ props.text }}
	</button>
</template>

<style scoped>
@import url('@/assets/styles/globals.css');
@import url('./NeoButton-themed.css');
@import url('./NeoButton-layout.css');

.NeoButton {
	background-color: var(--NeoButton-color-background);
	border-color: var(--NeoButton-color-border);
	border-radius: var(--NeoButton-sizing-borderRadius);
	border-style: solid;
	border-width: var(--NeoButton-sizing-borderWidth);
	color: var(--NeoButton-color-text);
	font-size: var(--NeoButton-sizing-fontSize);
	font-weight: 600;
	min-block-size: var(--NeoButton-sizing-inline);
	padding-block: var(--NeoButton-sizing-padding);
	padding-inline: var(--NeoButton-sizing-padding);

	&:focus-visible {
		outline-color: var(--NeoButton-color-focus);
	}

	&:hover {
		cursor: pointer;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
}
</style>
