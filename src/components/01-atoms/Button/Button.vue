<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { ButtonSize } from './ButtonTypes'
import type { Color } from '@/assets/typescript/colors'
import { getClassNames } from '@/utils/classNames'

export interface ButtonProps {
	class: string
	label: string
	size: ButtonSize
	color: Color
	disabled?: boolean
	rounded?: boolean
}

const props = defineProps<ButtonProps>()

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

const classes = computed(() =>
	getClassNames({
		component: 'Button',
		modifiers: [props.color ?? 'grey', props.size ?? 'small', props.rounded ? 'rounded' : ''],
		additional: props.class,
	}),
)
</script>

<template>
	<button
		v-bind="attrs"
		:class="classes"
		:disabled="props.disabled ?? undefined"
		@click="handleClick"
	>
		{{ props.label }}
	</button>
</template>

<style scoped>
@import url('./Button-themed.css');
@import url('./Button-layout.css');

.Button {
	background-color: var(--Button-color-background);
	border: none;
	border-radius: var(--Input-border-radius);
	color: var(--Button-color-text);
	font-size: var(--neo-fontSize-base);
	font-weight: 600;
	min-block-size: var(--Button-sizing-inline);
	padding-block: var(--Button-sizing-padding);
	padding-inline: var(--Button-sizing-padding);

	&:hover {
		cursor: pointer;
	}

	&:disabled {
		opacity: 0.6;
	}
}
</style>
