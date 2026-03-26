<script setup lang="ts">
import { computed, ref } from 'vue'
import { generateUniqueId } from '@/utils/id'
import type { NeoTextAreaProps } from './NeoTextAreaTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoTextAreaProps>()

const emit = defineEmits<{
	/** Emitted on every input change. Receives the current textarea value. */
	'update:value': [value: string]
	/** Emitted when the textarea loses focus. */
	blur: [event: FocusEvent]
	/** Emitted when the textarea gains focus. */
	focus: [event: FocusEvent]
}>()

const instanceId = generateUniqueId('textarea')
const internalValue = ref(props.value ?? '')

const handleInput = (event: Event) => {
	const target = event.target as HTMLTextAreaElement
	internalValue.value = target.value
	emit('update:value', target.value)
}

const handleBlur = (event: FocusEvent) => {
	emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
	emit('focus', event)
}

const classes = computed(() => {
	const textareaClasses = getClassNames({
		component: 'NeoTextArea',
		modifiers: [
			props.size ?? 'medium',
			props.variant ?? 'primary',
			props.rounded ? 'rounded' : '',
			props.errorMessage ? 'error' : '',
			props.resize ? `resize-${props.resize}` : 'resize-vertical',
		],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${textareaClasses} ${themedClasses}`
})
</script>

<template>
	<div :class="classes">
		<label v-if="props.label" class="NeoTextArea-label" :for="`${instanceId}-${props.name}`">
			{{ props.label }}
			<span v-if="props.required" class="NeoTextArea-required" aria-hidden="true">*</span>
			<span v-if="props.required" class="NeoTextArea-requiredText sr-only">
				({{ props.requiredText }})
			</span>
		</label>

		<textarea
			:id="`${instanceId}-${props.name}`"
			class="NeoTextArea-field"
			:name="props.name"
			:value="internalValue"
			:placeholder="props.placeholder"
			:disabled="props.disabled"
			:readonly="props.readonly"
			:required="props.required"
			:rows="props.rows ?? 4"
			:maxlength="props.maxLength"
			:minlength="props.minLength"
			:aria-label="props.ariaLabel"
			:aria-describedby="
				props.helpText || props.errorMessage ? `${instanceId}-${props.name}-description` : undefined
			"
			:aria-invalid="props.errorMessage ? 'true' : undefined"
			@input="handleInput"
			@blur="handleBlur"
			@focus="handleFocus"
		></textarea>

		<div v-if="props.helpText || props.errorMessage" class="NeoTextArea-messageWrapper">
			<p
				v-if="props.helpText && !props.errorMessage"
				class="NeoTextArea-helpText"
				:id="`${instanceId}-${props.name}-description`"
			>
				{{ props.helpText }}
			</p>
			<p
				v-if="props.errorMessage"
				class="NeoTextArea-errorMessage"
				:id="`${instanceId}-${props.name}-description`"
				role="alert"
			>
				{{ props.errorMessage }}
			</p>
		</div>
	</div>
</template>

<style scoped>
@import url('./NeoTextArea-layout.css');
@import url('./NeoTextArea-themed.css');

.NeoTextArea {
	display: flex;
	flex-direction: column;
	font-family: inherit;
	gap: var(--neo-gap-xs);
	inline-size: 100%;
}

.NeoTextArea-label {
	color: var(--NeoTextArea-color-label);
	font-size: var(--NeoTextArea-sizing-labelFontSize);
	font-weight: 600;
}

.NeoTextArea-required {
	color: var(--NeoTextArea-color-required);
	margin-inline-start: var(--neo-spacing-core-xs);
}

.NeoTextArea-field {
	background: var(--NeoTextArea-color-background);
	border-color: var(--NeoTextArea-color-border);
	border-radius: var(--NeoTextArea-sizing-borderRadius);
	border-style: solid;
	border-width: var(--NeoTextArea-sizing-borderWidth);
	color: var(--NeoTextArea-color-text);
	font-family: inherit;
	font-size: var(--NeoTextArea-sizing-fontSize);
	line-height: 1.5;
	min-block-size: var(--NeoTextArea-sizing-minHeight);
	padding: var(--NeoTextArea-sizing-padding);
	resize: var(--NeoTextArea-sizing-resize);
	transition: border-color 0.2s;

	&::placeholder {
		color: var(--NeoTextArea-color-placeholder);
		opacity: 0.6;
	}

	&:focus-visible {
		outline: 2px solid var(--NeoTextArea-color-focus);
		outline-offset: 2px;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	&:read-only {
		background: var(--NeoTextArea-color-readonlyBackground);
		cursor: default;
	}
}

.NeoTextArea--error {
	& .NeoTextArea-field {
		border-color: var(--NeoTextArea-color-error);

		&:focus-visible {
			outline-color: var(--NeoTextArea-color-error);
		}
	}
}

.NeoTextArea-helpText {
	color: var(--NeoTextArea-color-helpText);
	font-size: 0.875rem;
	margin: 0;
}

.NeoTextArea-errorMessage {
	color: var(--NeoTextArea-color-error);
	font-size: 0.875rem;
	font-weight: 500;
	margin: 0;
}
</style>
