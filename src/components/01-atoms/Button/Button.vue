<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useAttrs } from 'vue'
import type { Color } from '@/assets/typescript/colors'

export interface ButtonProps {
  label: string
  size: 'medium' | 'small'
  color: Color
  disabled?: boolean
}

const props = defineProps<ButtonProps>()

const color = props.color ?? 'grey'

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

const classes = ['Button', `Button--${color}`].join(' ')
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
@import './Button-themed.css';

.Button {
  --Button-color-background: var(--neo-color-grey-500) font-weight: bold;
  background-color: var(--Button-color-background);
}
</style>
