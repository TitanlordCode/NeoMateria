<script setup lang="ts">
import { ref, computed, nextTick, watch, onUnmounted, type CSSProperties } from 'vue'
import { generateUniqueId } from '@/utils/id'
import type { NeoSelectProps } from './NeoSelectTypes'
import { getClassNames } from '@/utils/classNames'
import NeoCheckbox from '@/components/01-atoms/Checkbox/NeoCheckbox.vue'
import NeoBadge from '@/components/01-atoms/Badge/NeoBadge.vue'
import { chevronDownIconSvg } from '@/components/01-atoms/Icon/iconStrings'

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
const wrapperRef = ref<HTMLDivElement | null>(null)
const dropdownStyle = ref<CSSProperties>({})
const searchQuery = ref('')
const selectedValues = ref<string[]>(
	Array.isArray(props.selectValue)
		? props.selectValue
		: props.selectValue
			? [props.selectValue]
			: [],
)

const updateDropdownPosition = () => {
	if (!wrapperRef.value) return
	const rect = wrapperRef.value.getBoundingClientRect()
	dropdownStyle.value = {
		insetBlockStart: `${rect.bottom}px`,
		insetInlineStart: `${rect.left}px`,
		inlineSize: `${rect.width}px`,
	}
}

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

const handleViewportChange = () => updateDropdownPosition()

const openOptions = async () => {
	searchQuery.value = ''
	updateDropdownPosition()
	isOpen.value = true
	window.addEventListener('scroll', handleViewportChange, true)
	window.addEventListener('resize', handleViewportChange)
	await nextTick()
	await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
	updateDropdownPosition()
	const selectedIndex = props.options.findIndex(
		(option) => option.value === selectedValues.value[0],
	)
	focusedIndex.value = selectedIndex >= 0 ? selectedIndex : 0
}

const closeOptions = () => {
	isOpen.value = false
	focusedIndex.value = -1
	searchQuery.value = ''
	window.removeEventListener('scroll', handleViewportChange, true)
	window.removeEventListener('resize', handleViewportChange)
}

onUnmounted(() => {
	window.removeEventListener('scroll', handleViewportChange, true)
	window.removeEventListener('resize', handleViewportChange)
})

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

		<div ref="wrapperRef" class="NeoSelect-inputWrapper">
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
			<span
				class="NeoSelect-chevron"
				:class="{ 'is-open': isOpen }"
				aria-hidden="true"
				v-html="chevronDownIconSvg"
			></span>

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

			<Teleport to="body">
				<ul
					v-show="isOpen"
					ref="listRef"
					class="NeoSelect-options"
					:class="classes"
					role="listbox"
					:id="`${instanceId}-popup_listbox`"
					:aria-labelledby="`${instanceId}-${props.name}`"
					:aria-multiselectable="mode === 'multi'"
					:style="dropdownStyle"
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
			</Teleport>
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
	display: flex;
	flex-direction: column;
	font-family: inherit;
	gap: var(--NeoSelect-sizing-gap);
	position: relative;

	& .NeoSelect-input {
		background: var(--NeoSelect-color-input);
		border-color: var(--NeoSelect-color-border);
		border-radius: var(--NeoSelect-sizing-borderRadius);
		border-style: solid;
		border-width: var(--NeoSelect-sizing-borderWidth);
		box-sizing: border-box;
		color: var(--NeoSelect-color-inputText);
		font-size: var(--NeoSelect-fontSize-value);
		inline-size: 100%;
		min-block-size: var(--NeoSelect-sizing-inline);
		padding: var(--NeoSelect-sizing-padding);
		padding-inline-end: calc(var(--NeoSelect-sizing-paddingInline) + 1.5rem);

		&:focus-visible {
			outline-color: var(--NeoSelect-color-focus);
		}
	}

	& .NeoSelect-chevron {
		block-size: 1.25rem;
		color: var(--NeoSelect-color-label);
		display: flex;
		inline-size: 1.25rem;
		inset-block-end: calc((var(--NeoSelect-sizing-inline) - 1.25rem) / 2);
		inset-inline-end: var(--NeoSelect-sizing-paddingInline);
		pointer-events: none;
		position: absolute;
		transition: transform 0.2s ease;

		:deep(svg) {
			block-size: 100%;
			inline-size: 100%;
		}

		&.is-open {
			transform: rotate(180deg);
		}
	}

	& .NeoSelect-inputWrapper {
		position: relative;
	}

	& .NeoSelect-label {
		color: var(--NeoSelect-color-label);
		font-size: var(--NeoSelect-fontSize-label);
		font-weight: 600;
	}

	& .NeoSelect-selectedTags {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		gap: var(--NeoSelect-sizing-tagGap);
		padding: var(--NeoSelect-sizing-tagPaddingBlock) var(--NeoSelect-sizing-tagPaddingInline);
	}
}

/* Teleported to body — not nested under .NeoSelect */
.NeoSelect-options {
	background: var(--NeoSelect-color-input);
	border: 1px solid var(--NeoSelect-color-border);
	border-radius: var(--NeoSelect-sizing-optionsBorderRadius);
	box-shadow: 0 var(--NeoSelect-sizing-optionsShadowOffsetBlock)
		var(--NeoSelect-sizing-optionsShadowBlur) rgb(0 0 0 / 15%);
	list-style: none;
	margin: var(--NeoSelect-sizing-optionsMarginBlockStart) 0 0;
	max-block-size: 240px;
	overflow-y: auto;
	padding: var(--NeoSelect-sizing-optionsPaddingBlock) 0;
	position: fixed;
	z-index: 1000;
}

.NeoSelect-option {
	align-items: center;
	color: var(--NeoSelect-color-inputText);
	cursor: pointer;
	display: flex;
	font-size: var(--NeoSelect-fontSize-value);
	gap: var(--NeoSelect-sizing-optionItemGap);
	padding: var(--NeoSelect-sizing-optionItemPaddingBlock)
		var(--NeoSelect-sizing-optionItemPaddingInline);

	&:hover,
	&.focused {
		background-color: var(--NeoSelect-color-backgroundSelected);
		color: var(--NeoSelect-color-textSelected);
	}

	&.selected {
		font-weight: 600;
	}
}

.NeoSelect-checkbox {
	flex-shrink: 0;
	pointer-events: none;
}
</style>
