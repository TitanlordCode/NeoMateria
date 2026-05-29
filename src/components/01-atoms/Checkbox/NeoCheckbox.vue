<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { generateUniqueId } from '@/utils/id'
import type { NeoCheckboxProps } from './NeoCheckboxTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoCheckboxProps>()

const emit = defineEmits<{
	/** Emitted when the checkbox state changes. Receives the new checked value. */
	'update:checked': [value: boolean]
}>()

const instanceId = generateUniqueId('checkbox')
const inputRef = ref<HTMLInputElement | null>(null)

watch(
	() => props.indeterminate,
	(isIndeterminate) => {
		if (inputRef.value) {
			inputRef.value.indeterminate = isIndeterminate ?? false
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
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
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
			:aria-label="props.ariaLabel"
			@change="handleChange"
		/>
		<label v-if="props.label" class="NeoCheckbox-label" :for="`${instanceId}-${props.name}`">
			{{ props.label }}
			<span v-if="props.required" class="NeoCheckbox-required" aria-hidden="true">*</span>
			<span v-if="props.required" class="NeoCheckbox-required sr-only">{props.requiredText}</span>
		</label>
	</div>
</template>

<style scoped>
@import url('./NeoCheckbox-layout.css');
@import url('./NeoCheckbox-themed.css');

.NeoCheckbox {
	align-items: center;
	display: flex;
	font-family: inherit;
	gap: var(--NeoCheckbox-sizing-gap);
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
	font-size: var(--NeoCheckbox-fontSize-label);
	user-select: none;
}

.NeoCheckbox-required {
	color: var(--NeoCheckbox-color-required);
	margin-inline-start: var(--NeoCheckbox-sizing-requiredMarginInlineStart);
}

.NeoCheckbox-input:disabled + .NeoCheckbox-label {
	cursor: not-allowed;
	opacity: 0.6;
}
</style>
