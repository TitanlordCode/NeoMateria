<script setup lang="ts">
import { computed } from 'vue'
import { generateUniqueId } from '@/utils/id'
import type { NeoRadioProps } from './NeoRadioTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoRadioProps>()

const emit = defineEmits<{
	/** Emitted when this radio option is selected. Receives the option's `value` prop. */
	'update:checked': [value: string]
}>()

const instanceId = generateUniqueId('radio')

const handleChange = (event: Event) => {
	const target = event.target as HTMLInputElement
	if (target.checked) {
		emit('update:checked', props.value)
	}
}

const classes = computed(() => {
	const radioClasses = getClassNames({
		component: 'NeoRadio',
		modifiers: [props.size ?? 'medium'],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${radioClasses} ${themedClasses}`
})
</script>

<template>
	<div :class="classes">
		<input
			:id="`${instanceId}-${props.name}-${props.value}`"
			class="NeoRadio-input"
			type="radio"
			:name="props.name"
			:value="props.value"
			:checked="props.checked"
			:disabled="props.disabled"
			:required="props.required"
			:aria-label="props.ariaLabel"
			@change="handleChange"
		/>
		<label
			v-if="props.label"
			class="NeoRadio-label"
			:for="`${instanceId}-${props.name}-${props.value}`"
		>
			{{ props.label }}
			<span v-if="props.required" class="NeoRadio-required" aria-hidden="true">*</span>
			<span v-if="props.required" class="NeoRadio-requiredText sr-only">
				({{ props.requiredText }})
			</span>
		</label>
	</div>
</template>

<style scoped>
@import url('./NeoRadio-layout.css');
@import url('./NeoRadio-themed.css');

.NeoRadio {
	align-items: center;
	display: flex;
	font-family: inherit;
	gap: var(--neo-gap-sm);
}

.NeoRadio-input {
	accent-color: var(--NeoRadio-color-accent);
	block-size: var(--NeoRadio-sizing-size);
	cursor: pointer;
	flex-shrink: 0;
	inline-size: var(--NeoRadio-sizing-size);

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	&:focus-visible {
		outline: 2px solid var(--NeoRadio-color-focus);
		outline-offset: 2px;
	}
}

.NeoRadio-label {
	color: var(--NeoRadio-color-label);
	cursor: pointer;
	font-size: var(--NeoRadio-sizing-labelFontSize);
	user-select: none;
}

.NeoRadio-required {
	color: var(--NeoRadio-color-required);
	margin-inline-start: var(--neo-spacing-core-xs);
}

.NeoRadio-input:disabled + .NeoRadio-label {
	cursor: not-allowed;
	opacity: 0.6;
}
</style>
