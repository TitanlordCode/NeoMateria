<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useAttrs } from 'vue'
const props = defineProps({
  label: {
    required: true,
    type: String,
  },
  size: {
    type: String,
    default: 'medium',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
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
</script>

<template>
  <button v-bind="attrs" :disabled="props.disabled ?? undefined" @click="handleClick">
    {{ props.label }}
  </button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
