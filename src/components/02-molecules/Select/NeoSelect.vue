<script setup lang="ts">
import { ref, computed, nextTick, watch } from 'vue'
import { generateUniqueId } from '@/utils/id'
import type { NeoSelectProps } from './NeoSelectTypes'
import { getClassNames } from '@/utils/classNames'
import NeoCheckbox from '@/components/01-atoms/Checkbox/NeoCheckbox.vue'
import NeoBadge from '@/components/01-atoms/Badge/NeoBadge.vue'

const props = defineProps<NeoSelectProps>()

const emit = defineEmits<{
	/** Emitted when the selected value changes. Receives a `string` in single mode or `string[]` in multi mode. */
	'update:value': [value: string | string[]]
}>()

const instanceId = generateUniqueId('select')
const isOpen = ref(false)
const focusedIndex = ref(-1)
const inputRef = ref<HTMLInputElement | null>(null)
const listRef = ref<HTMLUListElement | null>(null)
const searchQuery = ref('')
const selectedValues = ref<string[]>(
	Array.isArray(props.selectValue)
		? props.selectValue
		: props.selectValue
			? [props.selectValue]
			: [],
)

const mode = computed(() => props.mode ?? 'single')

const focusedOptionId = computed(() =>
	focusedIndex.value >= 0 ? `option-${instanceId}-${focusedIndex.value}` : undefined,
)

const displayValue = computed(() => {
	if (mode.value === 'single') {
		const selected = props.options.find((option) => option.value === selectedValues.value[0])
		return selected?.label || ''
	} else {
		return selectedValues.value
			.map((value) => props.options.find((option) => option.value === value)?.label)
			.filter(Boolean)
			.join(', ')
	}
})

watch(
	() => props.selectValue,
	(newSelectValue) => {
		if (newSelectValue !== undefined) {
			selectedValues.value = Array.isArray(newSelectValue)
				? newSelectValue
				: newSelectValue
					? [newSelectValue]
					: []
		}
	},
)

const openOptions = () => {
	isOpen.value = true
	searchQuery.value = ''
	nextTick(() => {
		const selectedIndex = props.options.findIndex(
			(option) => option.value === selectedValues.value[0],
		)
		focusedIndex.value = selectedIndex >= 0 ? selectedIndex : 0
	})
}

const closeOptions = () => {
	isOpen.value = false
	focusedIndex.value = -1
	searchQuery.value = ''
}

const toggleOptions = () => (isOpen.value ? closeOptions() : openOptions())

const onBlur = (event: FocusEvent) => {
	const target = event.relatedTarget as HTMLElement | null
	if (!listRef.value?.contains(target) && target !== inputRef.value) closeOptions()
}

const onInputKeydown = (event: KeyboardEvent) => {
	if (event.key === 'Escape') {
		closeOptions()
		inputRef.value?.blur()
	} else if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault()
		if (isOpen.value) {
			if (focusedIndex.value >= 0 && filteredOptions.value[focusedIndex.value]) {
				selectOption(filteredOptions.value[focusedIndex.value])
			}
		} else {
			openOptions()
		}
	} else if (event.key === 'ArrowDown') {
		event.preventDefault()
		if (!isOpen.value) {
			openOptions()
		} else {
			focusedIndex.value = (focusedIndex.value + 1) % filteredOptions.value.length
		}
	} else if (event.key === 'ArrowUp') {
		event.preventDefault()
		if (!isOpen.value) {
			openOptions()
		} else {
			focusedIndex.value =
				(focusedIndex.value - 1 + filteredOptions.value.length) % filteredOptions.value.length
		}
	} else if (event.key === 'Backspace' && mode.value === 'multi' && searchQuery.value === '') {
		// Remove last selected value on backspace when search is empty
		event.preventDefault()
		if (selectedValues.value.length > 0) {
			const newValues = selectedValues.value.slice(0, -1)
			selectedValues.value = newValues
			emit('update:value', newValues)
		}
	}
}

const filteredOptions = computed(() =>
	props.options.filter((option) =>
		option.label.toLowerCase().includes(searchQuery.value.toLowerCase()),
	),
)

const onInput = (event: Event) => {
	const target = event.target as HTMLInputElement
	searchQuery.value = target.value
	if (!isOpen.value) {
		isOpen.value = true
	}
	focusedIndex.value = 0
}

const isSelected = (value: string) => selectedValues.value.includes(value)

const selectOption = (option: { value: string; label: string }) => {
	if (mode.value === 'single') {
		selectedValues.value = [option.value]
		emit('update:value', option.value)
		closeOptions()
	} else {
		if (isSelected(option.value)) {
			const newValues = selectedValues.value.filter((value) => value !== option.value)
			selectedValues.value = newValues
			emit('update:value', newValues)
		} else {
			const newValues = [...selectedValues.value, option.value]
			selectedValues.value = newValues
			emit('update:value', newValues)
		}
		searchQuery.value = ''
	}
	inputRef.value?.focus()
}

watch(
	() => filteredOptions.value.length,
	() => {
		if (focusedIndex.value >= filteredOptions.value.length)
			focusedIndex.value = Math.max(0, filteredOptions.value.length - 1)
	},
)

const classes = computed(() => {
	const selectClasses = getClassNames({
		component: 'NeoSelect',
		modifiers: [props.size ?? 'medium', props.variant ?? 'primary', props.rounded ? 'rounded' : ''],
	})
	const themedClasses = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'blue'],
	})
	return `${selectClasses} ${themedClasses}`
})
</script>

<template>
	<div v-bind="$attrs" :class="classes">
		<div class="NeoSelect-labelWrapper">
			<label v-if="props.label" class="NeoSelect-label" :for="`${instanceId}-${props.name}`">
				{{ props.label }}
				<span v-if="props.required" class="NeoSelect-required" aria-hidden="true">*</span>
				<span v-if="props.required" class="NeoSelect-requiredText sr-only">
					({{ props.requiredText }})
				</span>
			</label>
		</div>

		<div class="NeoSelect-inputWrapper">
			<div v-if="mode === 'multi' && selectedValues.length > 0" class="NeoSelect-selectedTags">
				<NeoBadge
					v-for="value in selectedValues"
					:key="value"
					:text="props.options.find((option) => option.value === value)?.label"
					:color="props.color"
					size="small"
					variant="solid"
					dismissible
					rounded
					@dismiss="selectOption(props.options.find((option) => option.value === value)!)"
				/>
			</div>
			<input
				ref="inputRef"
				class="NeoSelect-input"
				:name="props.name"
				:id="`${instanceId}-${props.name}`"
				type="text"
				role="combobox"
				:placeholder="
					mode === 'single' && displayValue
						? displayValue
						: mode === 'multi' && selectedValues.length > 0
							? ''
							: props.selectProps?.placeholder
				"
				:value="isOpen ? searchQuery : mode === 'single' ? displayValue : ''"
				:aria-label="props.ariaLabel"
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
				:aria-multiselectable="mode === 'multi'"
			>
				<li
					v-for="(option, index) in filteredOptions"
					:key="option.value"
					role="option"
					:id="`option-${instanceId}-${index}`"
					:aria-selected="isSelected(option.value)"
					:tabindex="focusedIndex === index ? 0 : -1"
					:class="[
						'NeoSelect-option',
						{ selected: isSelected(option.value), focused: focusedIndex === index },
					]"
					@click="selectOption(option)"
					@mousedown.prevent
					@mouseenter="focusedIndex = index"
				>
					<NeoCheckbox
						v-if="mode === 'multi'"
						:name="`${instanceId}-option-${option.value}`"
						:value="option.value"
						:checked="isSelected(option.value)"
						:color="props.color"
						:ariaLabel="option.label"
						size="small"
						class="NeoSelect-checkbox"
						@click.stop
					/>
					<span aria-hidden="true">{{ option.label }}</span>
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
	font-family: inherit;
	position: relative;

	& .NeoSelect-input {
		background: var(--NeoSelect-color-input);
		border-color: var(--NeoSelect-color-border);
		border-radius: var(--NeoSelect-sizing-borderRadius);
		border-style: solid;
		border-width: var(--NeoSelect-sizing-borderWidth);
		color: var(--NeoSelect-color-inputText);
		font-size: var(--NeoSelect-sizing-fontSize);
		inline-size: calc(100% - (var(--NeoSelect-sizing-padding) * 2));
		min-block-size: var(--NeoSelect-sizing-inline);
		padding: var(--NeoSelect-sizing-padding);

		&:focus-visible {
			outline-color: var(--NeoSelect-color-focus);
		}
	}

	& .NeoSelect-inputWrapper {
		position: relative;
	}

	& .NeoSelect-options {
		background: var(--NeoSelect-color-input);
		border: 1px solid var(--NeoSelect-color-border);
		border-radius: var(--NeoSelect-sizing-borderRadius, var(--neo-radius-md));
		box-shadow: 0 var(--neo-spacing-core-xs) var(--neo-spacing-core-md) rgb(0 0 0 / 15%);
		inset-block-start: 100%;
		inset-inline: 0;
		list-style: none;
		margin: var(--neo-spacing-core-xs) 0 0;
		max-block-size: 240px;
		overflow-y: auto;
		padding: var(--neo-spacing-core-xs) 0;
		position: absolute;
		z-index: 1000;
	}

	& .NeoSelect-option {
		align-items: center;
		color: var(--NeoSelect-color-inputText);
		cursor: pointer;
		display: flex;
		font-size: var(--NeoSelect-sizing-fontSize);
		gap: var(--neo-gap-sm);
		padding: var(--neo-spacing-core-sm) var(--neo-spacing-core-md);

		&:hover,
		&.focused {
			background-color: var(--NeoSelect-color-backgroundSelected);
			color: var(--NeoSelect-color-textSelected);
		}

		&.selected {
			font-weight: 600;
		}
	}

	& .NeoSelect-label {
		color: var(--NeoSelect-color-label);
	}

	& .NeoSelect-checkbox {
		flex-shrink: 0;
		pointer-events: none;
	}

	& .NeoSelect-selectedTags {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: var(--neo-gap-sm);
		padding: var(--neo-spacing-core-xs) var(--neo-spacing-core-sm);
	}
}
</style>
