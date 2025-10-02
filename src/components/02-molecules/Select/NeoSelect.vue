<script setup lang="ts">
import { ref, computed, nextTick, watch } from 'vue'
import { generateUniqueId } from '@/utils/id'
import type { NeoSelectProps } from './NeoSelectTypes'
import { getClassNames } from '@/utils/classNames'

const props = defineProps<NeoSelectProps>()

const emit = defineEmits<{
	(e: 'update:value', value: string): void
}>()

const instanceId = generateUniqueId('select')
const isOpen = ref(false)
const focusedIndex = ref(-1)
const inputRef = ref<HTMLInputElement | null>(null)
const listRef = ref<HTMLUListElement | null>(null)
const internalValue = ref(props.selectValue || '')

const focusedOptionId = computed(() =>
	focusedIndex.value >= 0 ? `option-${instanceId}-${focusedIndex.value}` : undefined,
)

watch(
	() => props.selectValue,
	(val) => {
		if (val !== undefined) internalValue.value = val
	},
)

const openOptions = () => {
	isOpen.value = true
	nextTick(() => {
		const selectedIndex = props.options.findIndex((o) => o.value === internalValue.value)
		focusedIndex.value = selectedIndex >= 0 ? selectedIndex : 0
	})
}

const closeOptions = () => {
	isOpen.value = false
	focusedIndex.value = -1
}

const toggleOptions = () => (isOpen.value ? closeOptions() : openOptions())

const onBlur = (e: FocusEvent) => {
	const target = e.relatedTarget as HTMLElement | null
	if (!listRef.value?.contains(target) && target !== inputRef.value) closeOptions()
}

const onInputKeydown = (e: KeyboardEvent) => {
	if (e.key === 'Escape') {
		closeOptions()
		inputRef.value?.blur()
	} else if (e.key === 'Enter' || e.key === ' ') {
		e.preventDefault()
		if (isOpen.value) {
			if (focusedIndex.value >= 0) selectOption(props.options[focusedIndex.value])
		} else {
			openOptions()
		}
	} else if (e.key === 'ArrowDown') {
		e.preventDefault()
		if (!isOpen.value) {
			openOptions()
		} else {
			focusedIndex.value = (focusedIndex.value + 1) % props.options.length
		}
	} else if (e.key === 'ArrowUp') {
		e.preventDefault()
		if (!isOpen.value) {
			openOptions()
		} else {
			focusedIndex.value = (focusedIndex.value - 1 + props.options.length) % props.options.length
		}
	}
}

const filteredOptions = computed(() =>
	props.options.filter((o) => o.label.toLowerCase().includes(internalValue.value.toLowerCase())),
)

const onInput = (e: Event) => {
	const target = e.target as HTMLInputElement
	internalValue.value = target.value
	isOpen.value = true
}

const selectOption = (option: { value: string; label: string }) => {
	internalValue.value = option.value
	emit('update:value', option.value)
	closeOptions()
	inputRef.value?.focus()
}

watch(
	() => props.options.length,
	() => {
		if (focusedIndex.value >= props.options.length) focusedIndex.value = props.options.length - 1
	},
)
const classes = computed(() => {
	const selectClasses = getClassNames({
		component: 'NeoSelect',
		modifiers: [props.size ?? 'medium', props.variant ?? 'primary', props.rounded ? 'rounded' : ''],
		additional: props.class,
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'grey500'],
	})
	return `${selectClasses} ${themedClasses}`
})
</script>

<template>
	<div v-bind="$attrs" :class="classes">
		<div class="NeoSelect-labelWrapper">
			<label class="NeoSelect-label" :for="`${instanceId}-${props.name}`">{{ props.label }}</label>
		</div>

		<div class="NeoSelect-inputWrapper">
			<input
				ref="inputRef"
				class="NeoSelect-input"
				:name="props.name"
				:id="props.name"
				type="text"
				role="combobox"
				:placeholder="props.selectProps?.placeholder"
				:value="internalValue"
				aria-autocomplete="list"
				aria-haspopup="listbox"
				:aria-expanded="isOpen"
				:aria-controls="`${instanceId}-popup_listbox`"
				:aria-activedescendant="focusedOptionId"
				:aria-describedby="props.helpText ? `${instanceId}-helptext` : undefined"
				@input="onInput"
				@keydown="onInputKeydown"
				@blur="onBlur"
				@click.prevent.stop="toggleOptions"
			/>

			<ul
				v-show="isOpen"
				ref="listRef"
				class="NeoSelect-options"
				role="listbox"
				:id="`${instanceId}-popup_listbox`"
				:aria-labelledby="`${instanceId}-${props.name}`"
			>
				<li
					v-for="(option, index) in filteredOptions"
					:key="option.value"
					role="option"
					:id="`option-${instanceId}-${index}`"
					:aria-selected="option.value === internalValue"
					:tabindex="focusedIndex === index ? 0 : -1"
					:class="[
						'NeoSelect-option',
						{ selected: option.value === internalValue, focused: focusedIndex === index },
					]"
					@click="selectOption(option)"
					@mousedown.prevent
					@mouseenter="focusedIndex = index"
				>
					{{ option.label }}
				</li>
			</ul>
		</div>

		<div v-if="props.helpText || props.errorMessage" class="NeoSelect-messageWrapper">
			<p
				v-if="props.helpText && !props.errorMessage"
				class="NeoSelect-helpText"
				:id="`${instanceId}-helptext`"
			>
				{{ props.helpText }}
			</p>
			<p v-if="props.errorMessage" class="NeoSelect-errorMessage">{{ props.errorMessage }}</p>
		</div>
	</div>
</template>

<style scoped>
@import url('./NeoSelect-layout.css');
@import url('./NeoSelect-themed.css');

.NeoSelect {
	& .NeoSelect-input {
		background: var(--NeoSelect-color-input);
		color: var(--NeoSelect-color-inputText);
		padding: var(--NeoSelect-sizing-padding);
	}
}

.NeoSelect-option {
	&.focused {
		background-color: var(--NeoSelect-color-backgroundSelected);
		color: var(--NeoSelect-color-textSelected);
	}
}
</style>
