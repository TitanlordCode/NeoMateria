<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { NeoButtonProps } from './NeoButtonTypes'
import { getClassNames } from '@/utils/classNames'
import NeoIcon from '../Icon/NeoIcon.vue'

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
		modifiers: [props.size ?? 'medium', props.variant ?? 'primary', props.rounded ? 'rounded' : ''],
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
		<NeoIcon v-show="$slots.iconStart" color-variant="text" :color="props.color" size="medium">
			<slot name="iconStart" />
		</NeoIcon>
		{{ props.text }}
		<NeoIcon v-show="$slots.iconEnd" color-variant="text" :color="props.color" size="medium">
			<slot name="iconEnd" />
		</NeoIcon>
	</button>
</template>

<style scoped>
@import url('./NeoButton-themed.css');
@import url('./NeoButton-layout.css');

.NeoButton {
	align-items: center;
	background-color: var(--NeoButton-color-background);
	border-color: var(--NeoButton-color-border);
	border-radius: var(--NeoButton-sizing-borderRadius);
	border-style: solid;
	border-width: var(--NeoButton-sizing-borderWidth);
	color: var(--NeoButton-color-text);
	display: flex;
	font-size: var(--NeoButton-sizing-fontSize);
	font-weight: 600;
	gap: 4px;
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
