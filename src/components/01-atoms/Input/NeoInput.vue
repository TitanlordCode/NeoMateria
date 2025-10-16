<script setup lang="ts">
import { computed, ref } from 'vue'
import { generateUniqueId } from '@/utils/id'
import type { NeoInputProps } from './NeoInputTypes'
import { getClassNames } from '@/utils/classNames'
import { getColorShade } from '@/utils/colorMapper'

const props = defineProps<NeoInputProps>()

const emit = defineEmits<{
	(e: 'update:value', value: string | number): void
	(e: 'blur', event: FocusEvent): void
	(e: 'focus', event: FocusEvent): void
}>()

const instanceId = generateUniqueId('input')
const internalValue = ref(props.value ?? '')

const handleInput = (event: Event) => {
	const target = event.target as HTMLInputElement
	const value = props.type === 'number' ? Number(target.value) : target.value
	internalValue.value = value
	emit('update:value', value)
}

const handleBlur = (event: FocusEvent) => {
	emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
	emit('focus', event)
}

const classes = computed(() => {
	const inputClasses = getClassNames({
		component: 'NeoInput',
		modifiers: [
			props.size ?? 'medium',
			props.variant ?? 'primary',
			props.rounded ? 'rounded' : '',
			props.errorMessage ? 'error' : '',
		],
		additional: props.class,
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [getColorShade(props.color, props.variant, 'grey500')],
	})
	return `${inputClasses} ${themedClasses}`
})
</script>

<template>
	<div :class="classes">
		<label v-if="props.label" class="NeoInput-label" :for="`${instanceId}-${props.name}`">
			{{ props.label }}
			<span v-if="props.required" class="NeoInput-required" aria-label="required">*</span>
		</label>

		<input
			:id="`${instanceId}-${props.name}`"
			class="NeoInput-field"
			:name="props.name"
			:type="props.type ?? 'text'"
			:value="internalValue"
			:placeholder="props.placeholder"
			:disabled="props.disabled"
			:readonly="props.readonly"
			:required="props.required"
			:autocomplete="props.autocomplete"
			:maxlength="props.maxlength"
			:minlength="props.minlength"
			:min="props.min"
			:max="props.max"
			:step="props.step"
			:pattern="props.pattern"
			:aria-describedby="
				props.helpText || props.errorMessage ? `${instanceId}-${props.name}-description` : undefined
			"
			:aria-invalid="props.errorMessage ? 'true' : undefined"
			@input="handleInput"
			@blur="handleBlur"
			@focus="handleFocus"
		/>

		<div v-if="props.helpText || props.errorMessage" class="NeoInput-messageWrapper">
			<p
				v-if="props.helpText && !props.errorMessage"
				class="NeoInput-helpText"
				:id="`${instanceId}-${props.name}-description`"
			>
				{{ props.helpText }}
			</p>
			<p
				v-if="props.errorMessage"
				class="NeoInput-errorMessage"
				:id="`${instanceId}-${props.name}-description`"
				role="alert"
			>
				{{ props.errorMessage }}
			</p>
		</div>
	</div>
</template>

<style scoped>
@import url('./NeoInput-layout.css');
@import url('./NeoInput-themed.css');

.NeoInput {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.NeoInput-label {
	color: var(--NeoInput-color-label);
	font-size: var(--NeoInput-sizing-labelFontSize);
	font-weight: 600;
}

.NeoInput-required {
	color: var(--neo-color-red500);
	margin-left: 4px;
}

.NeoInput-field {
	background: var(--NeoInput-color-background);
	border-color: var(--NeoInput-color-border);
	border-radius: var(--NeoInput-sizing-borderRadius);
	border-style: solid;
	border-width: var(--NeoInput-sizing-borderWidth);
	color: var(--NeoInput-color-text);
	font-size: var(--NeoInput-sizing-fontSize);
	min-block-size: var(--NeoInput-sizing-minHeight);
	padding: var(--NeoInput-sizing-padding);
	transition: border-color 0.2s;
	width: 100%;

	&::placeholder {
		color: var(--NeoInput-color-placeholder);
		opacity: 0.6;
	}

	&:focus-visible {
		outline: 2px solid var(--NeoInput-color-focus);
		outline-offset: 2px;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	&:read-only {
		background: var(--NeoInput-color-readonlyBackground);
		cursor: default;
	}
}

.NeoInput--error {
	& .NeoInput-field {
		border-color: var(--neo-color-red500);

		&:focus-visible {
			outline-color: var(--neo-color-red500);
		}
	}
}

.NeoInput-helpText {
	color: var(--NeoInput-color-helpText);
	font-size: 0.875rem;
	margin: 0;
}

.NeoInput-errorMessage {
	color: var(--neo-color-red500);
	font-size: 0.875rem;
	font-weight: 500;
	margin: 0;
}
</style>
