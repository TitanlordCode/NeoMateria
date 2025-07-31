<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
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
</script>

<template>
  <button :disabled="props.disabled ? 'true' : undefined">{{ props.label }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
