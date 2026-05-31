<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { NeoTableProps, NeoTableColumn } from './NeoTableTypes'
import { getClassNames } from '@/utils/classNames'

const props = withDefaults(defineProps<NeoTableProps>(), {
	color: 'grey',
	size: 'default',
	striped: false,
	hoverable: true,
	stickyHeader: false,
	mobileLayout: 'scroll',
	headerAxis: 'column',
})

const emit = defineEmits<{
	/** Emitted when a sortable header is clicked. */
	'sort-change': [key: string, direction: 'asc' | 'desc']
	/** Emitted when a hoverable row is clicked. */
	'row-click': [row: Record<string, unknown>]
}>()

const wrapperClasses = computed(
	() => `NeoTable-wrapper NeoTable-wrapper--${props.mobileLayout === 'cards' ? 'cards' : 'scroll'}`,
)

const tableClasses = computed(() => {
	const base = getClassNames({
		component: 'NeoTable',
		modifiers: [props.size ?? 'default', props.stickyHeader ? 'stickyHeader' : ''],
	})
	const themed = getClassNames({
		component: 'Themed',
		modifiers: [props.color ?? 'grey'],
	})
	return `${base} ${themed}`
})

const slots = useSlots()
const hasRowAction = computed(() => !!slots['row-action'])

const totalColumns = computed(() => props.columns.length + (hasRowAction.value ? 1 : 0))

const getHeaderClasses = (column: NeoTableColumn) =>
	[
		'NeoTable-header',
		`NeoTable-header--align-${column.align ?? 'start'}`,
		column.sortable ? 'NeoTable-header--sortable' : '',
	]
		.filter(Boolean)
		.join(' ')

const isRowHeader = (colIndex: number) => props.headerAxis === 'row' && colIndex === 0

const getBodyCellClasses = (column: NeoTableColumn, colIndex: number) =>
	[
		'NeoTable-cell',
		isRowHeader(colIndex) ? 'NeoTable-row-header' : '',
		`NeoTable-cell--align-${column.align ?? 'start'}`,
		column.truncate ? 'NeoTable-cell--truncate' : '',
	]
		.filter(Boolean)
		.join(' ')

const getRowClasses = (row: Record<string, unknown>, index: number) =>
	[
		'NeoTable-row',
		props.hoverable ? 'NeoTable-row--hoverable' : '',
		props.striped && index % 2 === 1 ? 'NeoTable-row--striped' : '',
		props.highlightRow?.(row) ? 'NeoTable-row--highlighted' : '',
		isRowClickable(row) ? 'NeoTable-row--clickable' : '',
	]
		.filter(Boolean)
		.join(' ')

const getSortIconClass = (key: string) => {
	if (props.sortBy !== key) return 'NeoTable-sort-icon NeoTable-sort-icon--inactive'
	return `NeoTable-sort-icon NeoTable-sort-icon--${props.sortDirection ?? 'asc'}`
}

const isRowClickable = (row: Record<string, unknown>) =>
	!!props.rowHref && typeof row[props.rowHref] === 'string'

const handleSortClick = (key: string) => {
	const newDirection = props.sortBy === key && props.sortDirection === 'asc' ? 'desc' : 'asc'
	emit('sort-change', key, newDirection)
}

const handleRowClick = (row: Record<string, unknown>, event: MouseEvent) => {
	if (isRowClickable(row)) {
		const href = row[props.rowHref!] as string
		if (event.ctrlKey || event.metaKey) {
			window.open(href, '_blank')
		} else {
			window.location.href = href
		}
	}
	if (props.hoverable) {
		emit('row-click', row)
	}
}

const handleRowKeyDown = (event: KeyboardEvent, row: Record<string, unknown>) => {
	if (!isRowClickable(row)) return
	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault()
		window.location.href = row[props.rowHref!] as string
	}
}
</script>

<template>
	<div :class="wrapperClasses">
		<table :class="tableClasses" :role="props.mobileLayout === 'cards' ? 'table' : undefined">
			<caption v-if="props.caption || $slots.caption" class="NeoTable-caption">
				<slot name="caption">{{ props.caption }}</slot>
			</caption>

			<thead class="NeoTable-head" :role="props.mobileLayout === 'cards' ? 'rowgroup' : undefined">
				<tr :role="props.mobileLayout === 'cards' ? 'row' : undefined">
					<th
						v-for="column in props.columns"
						:key="column.key"
						scope="col"
						:class="getHeaderClasses(column)"
						:style="column.width ? { width: column.width } : undefined"
						:role="props.mobileLayout === 'cards' ? 'columnheader' : undefined"
						@click="column.sortable && handleSortClick(column.key)"
						@keydown.enter="column.sortable && handleSortClick(column.key)"
					>
						<slot :name="`header:${column.key}`" :column="column">
							<span class="NeoTable-header-content">
								<span>{{ column.label }}</span>
								<span
									v-if="column.sortable"
									:class="getSortIconClass(column.key)"
									aria-hidden="true"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<polyline points="6 9 12 15 18 9" />
									</svg>
								</span>
							</span>
						</slot>
					</th>
					<th
						v-if="$slots['row-action']"
						scope="col"
						class="NeoTable-header NeoTable-header--action"
						:role="props.mobileLayout === 'cards' ? 'columnheader' : undefined"
					>
						<span class="sr-only">Actions</span>
					</th>
				</tr>
			</thead>

			<tbody :role="props.mobileLayout === 'cards' ? 'rowgroup' : undefined">
				<tr
					v-for="(row, rowIndex) in props.rows"
					:key="rowIndex"
					:class="getRowClasses(row, rowIndex)"
					:tabindex="isRowClickable(row) ? 0 : undefined"
					:role="props.mobileLayout === 'cards' ? 'row' : undefined"
					@click="handleRowClick(row, $event)"
					@keydown="handleRowKeyDown($event, row)"
				>
					<component
						v-for="(column, colIndex) in props.columns"
						:key="column.key"
						:is="isRowHeader(colIndex) ? 'th' : 'td'"
						:scope="isRowHeader(colIndex) ? 'row' : undefined"
						:class="getBodyCellClasses(column, colIndex)"
						:data-label="column.label"
						:role="
							props.mobileLayout === 'cards'
								? isRowHeader(colIndex)
									? 'rowheader'
									: 'cell'
								: undefined
						"
					>
						<slot
							:name="`cell:${column.key}`"
							:row="row"
							:value="row[column.key]"
							:column="column"
							:index="rowIndex"
						>
							{{ row[column.key] }}
						</slot>
					</component>
					<td
						v-if="$slots['row-action']"
						class="NeoTable-cell NeoTable-cell--action"
						:role="props.mobileLayout === 'cards' ? 'cell' : undefined"
					>
						<slot name="row-action" :row="row" />
					</td>
				</tr>

				<tr v-if="props.rows.length === 0">
					<td :colspan="totalColumns" class="NeoTable-empty-cell">
						<slot name="empty">
							<span class="NeoTable-empty-message">No data available</span>
						</slot>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped>
@import url('./NeoTable-themed.css');
@import url('./NeoTable-layout.css');

.NeoTable-wrapper {
	inline-size: 100%;
}

.NeoTable-wrapper--scroll {
	@mixin addScrollbar;

	overflow-x: auto;
}

.NeoTable {
	border-collapse: collapse;
	font-family: inherit;
	inline-size: 100%;
}

.NeoTable-caption {
	caption-side: top;
	color: var(--NeoTable-color-captionText);
	font-size: var(--NeoTable-fontSize-caption);
	font-weight: 600;
	padding-block-end: var(--NeoTable-sizing-captionPaddingBlockEnd);
	text-align: start;
}

.NeoTable-head {
	border-block-end: 2px solid var(--NeoTable-color-headerBorder);
}

.NeoTable-header {
	background-color: var(--NeoTable-color-headerBackground);
	color: var(--NeoTable-color-headerText);
	font-size: var(--NeoTable-fontSize-value);
	font-weight: 600;
	padding-block: var(--NeoTable-sizing-cellPaddingBlock);
	padding-inline: var(--NeoTable-sizing-cellPaddingInline);
	text-align: start;
	white-space: nowrap;
}

.NeoTable-header--sortable {
	cursor: pointer;
	user-select: none;
}

.NeoTable-header--sortable:hover {
	background-color: var(--NeoTable-color-headerHover);
}

.NeoTable-header-content {
	align-items: center;
	display: inline-flex;
	gap: var(--NeoTable-sizing-headerContentGap);
}

.NeoTable-header--align-center {
	text-align: center;
}

.NeoTable-header--align-end {
	text-align: end;
}

.NeoTable-sort-icon {
	block-size: 14px;
	color: var(--NeoTable-color-sortIcon);
	display: inline-flex;
	flex-shrink: 0;
	inline-size: 14px;
	transition: transform 0.15s ease;
}

.NeoTable-sort-icon--inactive {
	opacity: 0.3;
}

.NeoTable-sort-icon--asc {
	transform: rotate(0deg);
}

.NeoTable-sort-icon--desc {
	transform: rotate(180deg);
}

.NeoTable--stickyHeader .NeoTable-head {
	inset-block-start: 0;
	position: sticky;
	z-index: 1;
}

/* Explicit background prevents scrolling content from showing through */
.NeoTable--stickyHeader .NeoTable-header {
	background-color: var(--NeoTable-color-headerBackground);
}

.NeoTable-row {
	border-block-end: 1px solid var(--NeoTable-color-rowBorder);
}

.NeoTable-row--striped {
	background-color: var(--NeoTable-color-stripeBackground);
}

.NeoTable-row--hoverable:hover {
	background-color: var(--NeoTable-color-rowHover);
}

.NeoTable-row--highlighted {
	background-color: var(--NeoTable-color-highlightBackground);
}

.NeoTable-row--clickable {
	cursor: pointer;
}

.NeoTable-row--clickable:focus-visible {
	outline: 2px solid var(--NeoTable-color-focus);
	outline-offset: -2px;
}

.NeoTable-cell {
	color: var(--NeoTable-color-cellText);
	font-size: var(--NeoTable-fontSize-value);
	padding-block: var(--NeoTable-sizing-cellPaddingBlock);
	padding-inline: var(--NeoTable-sizing-cellPaddingInline);
	vertical-align: middle;
}

.NeoTable-cell--align-start {
	text-align: start;
}

.NeoTable-cell--align-center {
	text-align: center;
}

.NeoTable-cell--align-end {
	text-align: end;
}

.NeoTable-cell--truncate {
	@mixin line-clamp 2;

	max-inline-size: 280px;
}

.NeoTable-header--action,
.NeoTable-cell--action {
	inline-size: 1px;
	white-space: nowrap;
}

.NeoTable-row-header {
	font-weight: 700;
}

.NeoTable-wrapper--cards .NeoTable-cell.NeoTable-row-header {
	display: block;
	margin-block-end: var(--NeoTable-sizing-cardRowHeaderMarginBlockEnd);
	padding-block: 0;
}

.NeoTable-wrapper--cards .NeoTable-cell.NeoTable-row-header::before {
	content: none;
}

@mixin bp-md {
	.NeoTable-wrapper--cards .NeoTable-cell.NeoTable-row-header {
		display: table-cell;
		margin-block-end: 0;
		padding-block: var(--NeoTable-sizing-cellPaddingBlock);
	}
}

.NeoTable-empty-cell {
	padding-block: var(--NeoTable-sizing-emptyPaddingBlock);
	text-align: center;
}

.NeoTable-empty-message {
	color: var(--NeoTable-color-emptyText);
	font-size: var(--NeoTable-fontSize-empty);
}

.NeoTable-wrapper--cards .NeoTable-head {
	block-size: 1px;
	border: 0;
	clip-path: inset(50%);
	inline-size: 1px;
	margin: -1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
}

.NeoTable-wrapper--cards .NeoTable-row {
	border: 1px solid var(--NeoTable-color-rowBorder);
	border-radius: var(--NeoTable-sizing-cardRowBorderRadius);
	display: block;
	margin-block-end: var(--NeoTable-sizing-cardRowMarginBlockEnd);
	padding: var(--NeoTable-sizing-cardRowPadding);
}

.NeoTable-wrapper--cards .NeoTable-cell {
	display: flex;
	gap: var(--NeoTable-sizing-cardCellGap);
	padding-block: var(--NeoTable-sizing-cardCellPaddingBlock);
	padding-inline: 0;
}

.NeoTable-wrapper--cards .NeoTable-cell::before {
	color: var(--NeoTable-color-cardLabel);
	content: attr(data-label);
	flex-shrink: 0;
	font-size: var(--NeoTable-fontSize-value);
	font-weight: 600;
	inline-size: 40%;
	max-inline-size: 140px;
	text-align: start;
}

.NeoTable-wrapper--cards .NeoTable-cell--action {
	justify-content: flex-end;
}

@mixin bp-md {
	.NeoTable-wrapper--cards .NeoTable-head {
		block-size: auto;
		clip-path: none;
		inline-size: auto;
		margin: 0;
		overflow: visible;
		position: static;
		white-space: normal;
	}

	.NeoTable-wrapper--cards .NeoTable-row {
		border: none;
		border-block-end: 1px solid var(--NeoTable-color-rowBorder);
		border-radius: 0;
		display: table-row;
		margin-block-end: 0;
		padding: 0;
	}

	.NeoTable-wrapper--cards .NeoTable-cell {
		display: table-cell;
		padding-block: var(--NeoTable-sizing-cellPaddingBlock);
		padding-inline: var(--NeoTable-sizing-cellPaddingInline);
	}

	.NeoTable-wrapper--cards .NeoTable-cell::before {
		content: none;
	}
}
</style>
