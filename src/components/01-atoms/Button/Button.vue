<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { ButtonSize } from './ButtonTypes'
import type { Color } from '@/assets/typescript/colors'

export interface ButtonProps {
	label: string
	size: ButtonSize
	color: Color
	disabled?: boolean
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

const classes = computed(() => {
	const updatedClasses = ['Button']
	const color: Color = props.color ?? 'grey'
	const size: ButtonProps['size'] = props.size ?? 'small'

	updatedClasses.push(`Button--${color}`)
	updatedClasses.push(`Button--${size}`)

	return updatedClasses.join(' ')
})
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

.Button {
	background-color: var(--Button-color-background);
	border: none;
	color: var(--Button-color-text);
	font-weight: 600;
}
</style>
