<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { generateUniqueId } from '@/utils/id'
import type { NeoCheckboxProps } from './NeoCheckboxTypes'
import { getClassNames } from '@/utils/classNames'
import { getColorShade } from '@/utils/colorMapper'

const props = defineProps<NeoCheckboxProps>()

const emit = defineEmits<{
	(e: 'update:checked', value: boolean): void
}>()

const instanceId = generateUniqueId('checkbox')
const inputRef = ref<HTMLInputElement | null>(null)

watch(
	() => props.indeterminate,
	(val) => {
		if (inputRef.value) {
			inputRef.value.indeterminate = val ?? false
		}
	},
	{ immediate: true },
)

const handleChange = (event: Event) => {
	const target = event.target as HTMLInputElement
	emit('update:checked', target.checked)
}

const classes = computed(() => {
	const checkboxClasses = getClassNames({
		component: 'NeoCheckbox',
		modifiers: [props.size ?? 'medium'],
		additional: props.class,
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [getColorShade(props.color, undefined, 'grey500')],
	})
	return `${checkboxClasses} ${themedClasses}`
})
</script>

<template>
	<div :class="classes">
		<input
			:id="`${instanceId}-${props.name}`"
			ref="inputRef"
			class="NeoCheckbox-input"
			type="checkbox"
			:name="props.name"
			:value="props.value"
			:checked="props.checked"
			:disabled="props.disabled"
			:required="props.required"
			:aria-checked="props.indeterminate ? 'mixed' : props.checked"
			@change="handleChange"
		/>
		<label v-if="props.label" class="NeoCheckbox-label" :for="`${instanceId}-${props.name}`">
			{{ props.label }}
			<span v-if="props.required" class="NeoCheckbox-required" aria-label="required">*</span>
		</label>
	</div>
</template>

<style scoped>
@import url('./NeoCheckbox-layout.css');
@import url('./NeoCheckbox-themed.css');

.NeoCheckbox {
	align-items: center;
	display: flex;
	gap: 8px;
}

.NeoCheckbox-input {
	accent-color: var(--NeoCheckbox-color-accent);
	block-size: var(--NeoCheckbox-sizing-size);
	cursor: pointer;
	flex-shrink: 0;
	inline-size: var(--NeoCheckbox-sizing-size);

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	&:focus-visible {
		outline: 2px solid var(--NeoCheckbox-color-focus);
		outline-offset: 2px;
	}
}

.NeoCheckbox-label {
	color: var(--NeoCheckbox-color-label);
	cursor: pointer;
	font-size: var(--NeoCheckbox-sizing-labelFontSize);
	user-select: none;
}

.NeoCheckbox-required {
	color: var(--neo-color-red500);
	margin-left: 4px;
}

.NeoCheckbox-input:disabled + .NeoCheckbox-label {
	cursor: not-allowed;
	opacity: 0.6;
}
</style>
