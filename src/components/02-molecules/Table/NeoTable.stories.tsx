import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, ref } from 'vue'
import { expect, userEvent, waitFor, within } from 'storybook/test'

import NeoTable from '@/components/02-molecules/Table/NeoTable.vue'
import NeoBadge from '@/components/01-atoms/Badge/NeoBadge.vue'
import NeoProgressBar from '@/components/01-atoms/ProgressBar/NeoProgressBar.vue'
import NeoIconButton from '@/components/01-atoms/Button/NeoIconButton/NeoIconButton.vue'
import { DeleteIcon } from '@/components/01-atoms/Icon/defaultIcons'
import NeoButton from '@/components/01-atoms/Button/NeoButton/NeoButton.vue'
import type { NeoTableProps, NeoTableColumn } from './NeoTableTypes'
import { tableSizes, tableHeaderAxes } from './NeoTableTypes'

const meta = {
	title: 'Molecules/NeoTable',
	component: NeoTable,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: tableSizes,
			description: 'Controls cell padding and font size.',
			table: { category: 'Appearance' },
		},
		color: {
			control: 'select',
			description: 'Accent color used for the table header and highlighted rows.',
			table: { category: 'Appearance' },
		},
		striped: {
			control: 'boolean',
			description: 'Alternating row backgrounds for easier horizontal scanning.',
			table: { category: 'Appearance' },
		},
		hoverable: {
			control: 'boolean',
			description: 'Highlight the row under the pointer and emit `row-click` on click.',
			table: { category: 'Behavior' },
		},
		stickyHeader: {
			control: 'boolean',
			description: 'Freeze the header row so it stays visible when the table scrolls vertically.',
			table: { category: 'Behavior' },
		},
		mobileLayout: {
			control: 'select',
			options: ['scroll', 'cards'],
			description:
				'`scroll`: the table scrolls horizontally on narrow viewports. `cards`: rows become labeled cards below the `bp-md` breakpoint.',
			table: { category: 'Behavior' },
		},
		rowHref: {
			control: false,
			description:
				'Key in the row data whose value is the URL. When set, matching rows become keyboard-accessible links.',
			table: { category: 'Behavior' },
		},
		sortBy: {
			control: false,
			description: 'Controlled sort column key.',
			table: { category: 'Sorting' },
		},
		sortDirection: {
			control: 'select',
			options: ['asc', 'desc'],
			description: 'Controlled sort direction.',
			table: { category: 'Sorting' },
		},
		highlightRow: {
			control: false,
			description:
				'Predicate `(row) => boolean`. Rows that return true receive an accent background.',
			table: { category: 'Appearance' },
		},
		headerAxis: {
			control: 'select',
			options: tableHeaderAxes,
			description:
				'`column` (default): first row is the column header. `row`: first column of each data row becomes `<th scope="row">` — use when rows represent named entities (countries, products, people).',
			table: { category: 'Behavior' },
		},
	},
	args: {
		color: 'blue',
		size: 'default',
		striped: false,
		hoverable: true,
		stickyHeader: false,
		mobileLayout: 'scroll',
		headerAxis: 'column',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'md', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoTable>

export default meta

type Story = StoryObj<typeof meta>

// ── Shared sample data ───────────────────────────

interface TeamMember {
	name: string
	role: string
	department: string
	status: 'Active' | 'Away' | 'Inactive'
	progress: number
	joinedYear: number
	profileUrl: string
}

const sampleColumns: NeoTableColumn[] = [
	{ key: 'name', label: 'Name', sortable: true },
	{ key: 'role', label: 'Role' },
	{ key: 'department', label: 'Department', sortable: true },
	{ key: 'status', label: 'Status' },
	{ key: 'joinedYear', label: 'Year', align: 'end', sortable: true },
]

const sampleRows: TeamMember[] = [
	{
		name: 'Alice Müller',
		role: 'Lead Designer',
		department: 'Product',
		status: 'Active',
		progress: 90,
		joinedYear: 2019,
		profileUrl: '#',
	},
	{
		name: 'Ben Nakamura',
		role: 'Frontend Dev',
		department: 'Engineering',
		status: 'Active',
		progress: 72,
		joinedYear: 2021,
		profileUrl: '#',
	},
	{
		name: 'Clara Santos',
		role: 'Data Analyst',
		department: 'Analytics',
		status: 'Away',
		progress: 55,
		joinedYear: 2022,
		profileUrl: '#',
	},
	{
		name: 'David Kim',
		role: 'Product Manager',
		department: 'Product',
		status: 'Active',
		progress: 88,
		joinedYear: 2020,
		profileUrl: '#',
	},
	{
		name: 'Eva Larsson',
		role: 'QA Engineer',
		department: 'Engineering',
		status: 'Inactive',
		progress: 30,
		joinedYear: 2023,
		profileUrl: '#',
	},
]

const statusColorMap: Record<string, 'green' | 'amber' | 'red'> = {
	Active: 'green',
	Away: 'amber',
	Inactive: 'red',
}

export const Default: Story = {
	tags: ['snapshot'],
	args: {
		columns: sampleColumns,
		rows: sampleRows as unknown as Record<string, unknown>[],
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoTable :columns="columns" :rows="rows" color="blue" />`,
			},
		},
	},
}

export const Striped: Story = {
	tags: ['snapshot'],
	args: {
		columns: sampleColumns,
		rows: sampleRows as unknown as Record<string, unknown>[],
		striped: true,
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoTable :columns="columns" :rows="rows" :striped="true" color="blue" />`,
			},
		},
	},
}

export const Compact: Story = {
	tags: ['snapshot'],
	args: {
		columns: sampleColumns,
		rows: sampleRows as unknown as Record<string, unknown>[],
		size: 'compact',
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoTable :columns="columns" :rows="rows" size="compact" color="blue" />`,
			},
		},
	},
}

export const Spacious: Story = {
	tags: ['snapshot'],
	args: {
		columns: sampleColumns,
		rows: sampleRows as unknown as Record<string, unknown>[],
		size: 'spacious',
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoTable :columns="columns" :rows="rows" size="spacious" color="blue" />`,
			},
		},
	},
}

export const WithSorting: Story = {
	tags: ['snapshot'],
	args: {
		columns: sampleColumns,
		rows: sampleRows as unknown as Record<string, unknown>[],
	},
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const sortBy = ref('name')
const sortDirection = ref('asc')

const sortedRows = computed(() => [...rows].sort((a, b) => {
  const dir = sortDirection.value === 'asc' ? 1 : -1
  return String(a[sortBy.value]).localeCompare(String(b[sortBy.value])) * dir
}))

const handleSort = (key, direction) => {
  sortBy.value = key
  sortDirection.value = direction
}
</script>

<template>
  <NeoTable
    :columns="columns"
    :rows="sortedRows"
    :sort-by="sortBy"
    :sort-direction="sortDirection"
    color="blue"
    @sort-change="handleSort"
  />
</template>`,
			},
		},
	},
	render: (args: NeoTableProps) =>
		defineComponent({
			name: 'WithSortingRender',
			setup() {
				const sortBy = ref('')
				const sortDirection = ref<'asc' | 'desc'>('asc')

				const sortedRows = ref([...sampleRows])

				const applySort = (key: string, direction: 'asc' | 'desc') => {
					sortedRows.value = [...sampleRows].sort((rowA, rowB) => {
						const valueA = String(rowA[key as keyof TeamMember])
						const valueB = String(rowB[key as keyof TeamMember])
						return valueA.localeCompare(valueB) * (direction === 'asc' ? 1 : -1)
					})
				}

				const handleSort = (key: string, direction: 'asc' | 'desc') => {
					sortBy.value = key
					sortDirection.value = direction
					applySort(key, direction)
				}

				return () => (
					<NeoTable
						{...args}
						columns={sampleColumns}
						rows={sortedRows.value as unknown as Record<string, unknown>[]}
						sortBy={sortBy.value}
						sortDirection={sortDirection.value}
						onSort-change={handleSort}
					/>
				)
			},
		}),
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('Click Name header to sort ascending', async () => {
			await userEvent.click(canvas.getByText('Name'))
			await waitFor(() => {
				const header = canvas.getByText('Name').closest('th')
				expect(header?.querySelector('.NeoTable-sort-icon--asc')).not.toBeNull()
			})
		})

		await step('Click Name header again to sort descending', async () => {
			await userEvent.click(canvas.getByText('Name'))
			await waitFor(() => {
				const header = canvas.getByText('Name').closest('th')
				expect(header?.querySelector('.NeoTable-sort-icon--desc')).not.toBeNull()
			})
		})
	},
}

export const WithHighlighting: Story = {
	tags: ['snapshot'],
	args: {
		columns: sampleColumns,
		rows: sampleRows as unknown as Record<string, unknown>[],
		highlightRow: (row) => (row as unknown as TeamMember).status === 'Active',
		color: 'green',
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoTable
  :columns="columns"
  :rows="rows"
  :highlight-row="(row) => row.status === 'Active'"
  color="green"
/>`,
			},
		},
	},
}

export const WithSlots: Story = {
	tags: ['snapshot'],
	args: {
		columns: sampleColumns,
		rows: sampleRows as unknown as Record<string, unknown>[],
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoTable
  :columns="[
    { key: 'name',     label: 'Name',     sortable: true },
    { key: 'role',     label: 'Role' },
    { key: 'status',   label: 'Status' },
    { key: 'progress', label: 'Progress', align: 'start' },
  ]"
  :rows="rows"
  color="blue"
>
  <!-- Status column: render a coloured badge -->
  <template #cell:status="{ value }">
    <NeoBadge
      :color="value === 'Active' ? 'green' : value === 'Away' ? 'amber' : 'red'"
      :text="String(value)"
      variant="solid"
      size="small"
    />
  </template>

  <!-- Progress column: render a progress bar -->
  <template #cell:progress="{ value }">
    <div style="align-items: center; display: flex; gap: 8px; min-inline-size: 120px;">
      <NeoProgressBar
        :value="Number(value)"
        :aria-label="Number(value) + '% complete'"
        color="blue"
        size="small"
      />
      <span style="color: var(--neo-color-grey600); flex-shrink: 0; font-size: 13px;">{{ value }}%</span>
    </div>
  </template>
</NeoTable>`,
			},
		},
	},
	render: (args: NeoTableProps) =>
		defineComponent({
			name: 'WithSlotsRender',
			setup() {
				const richColumns: NeoTableColumn[] = [
					{ key: 'name', label: 'Name', sortable: true },
					{ key: 'role', label: 'Role' },
					{ key: 'status', label: 'Status' },
					{ key: 'progress', label: 'Progress', align: 'start' },
				]

				return () => (
					<NeoTable
						{...args}
						columns={richColumns}
						rows={sampleRows as unknown as Record<string, unknown>[]}
						v-slots={{
							'cell:status': ({ value }: { value: unknown }) => (
								<NeoBadge
									color={statusColorMap[String(value)] ?? 'grey'}
									text={String(value)}
									variant="solid"
									size="small"
								/>
							),
							'cell:progress': ({ value }: { value: unknown }) => (
								<div
									style={{
										alignItems: 'center',
										display: 'flex',
										gap: '8px',
										minInlineSize: '120px',
									}}
								>
									<NeoProgressBar
										value={Number(value)}
										ariaLabel={`${Number(value)}% complete`}
										color="blue"
										size="small"
									/>
									<span
										style={{ color: 'var(--neo-color-grey600)', fontSize: '13px', flexShrink: 0 }}
									>
										{Number(value)}%
									</span>
								</div>
							),
						}}
					/>
				)
			},
		}),
}

export const WithRowLinks: Story = {
	tags: ['snapshot'],
	args: {
		columns: sampleColumns,
		rows: sampleRows as unknown as Record<string, unknown>[],
		rowHref: 'profileUrl',
		color: 'blue',
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- rowHref points to the key in row data that holds the destination URL.
     Rows that have that key become keyboard-accessible and show a pointer cursor. -->
<NeoTable
  :columns="columns"
  :rows="rows"
  row-href="profileUrl"
  color="blue"
/>`,
			},
		},
	},
}

export const WithRowAction: Story = {
	tags: ['snapshot'],
	args: {
		columns: sampleColumns,
		rows: sampleRows as unknown as Record<string, unknown>[],
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- import { DeleteIcon } from '@neomateria/vue' -->
<!-- The #row-action slot renders in a pinned trailing column for every row. -->
<NeoTable :columns="columns" :rows="rows" color="blue">
  <template #row-action="{ row }">
    <NeoIconButton
      color="red"
      variant="ghost"
      aria-label="Delete row"
      @click.stop="rows = rows.filter(r => r !== row)"
    >
      <component :is="DeleteIcon" />
    </NeoIconButton>
  </template>
</NeoTable>`,
			},
		},
	},
	render: (args: NeoTableProps) =>
		defineComponent({
			name: 'WithRowActionRender',
			setup() {
				const rows = ref([...sampleRows] as unknown as Record<string, unknown>[])

				return () => (
					<NeoTable
						{...args}
						columns={sampleColumns}
						rows={rows.value}
						v-slots={{
							'row-action': ({ row }: { row: Record<string, unknown> }) => (
								<NeoIconButton
									color="red"
									variant="ghost"
									ariaLabel="Delete row"
									onClick={(event: MouseEvent) => {
										event.stopPropagation()
										rows.value = rows.value.filter((tableRow) => tableRow !== row)
									}}
								>
									{DeleteIcon}
								</NeoIconButton>
							),
						}}
					/>
				)
			},
		}),
}

export const WithEmptyState: Story = {
	tags: ['snapshot'],
	args: {
		columns: sampleColumns,
		rows: [],
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- When rows is empty the #empty slot (or default message) is shown -->
<NeoTable :columns="columns" :rows="[]" color="blue">
  <template #empty>
    <div style="align-items: center; display: flex; flex-direction: column; gap: 8px; padding: 24px 0;">
      <p>No team members found.</p>
      <NeoButton color="blue" variant="secondary" text="Add member" />
    </div>
  </template>
</NeoTable>`,
			},
		},
	},
	render: (args: NeoTableProps) =>
		defineComponent({
			name: 'WithEmptyStateRender',
			setup() {
				return () => (
					<NeoTable
						{...args}
						columns={sampleColumns}
						rows={[]}
						v-slots={{
							empty: () => (
								<div
									style={{
										alignItems: 'center',
										display: 'flex',
										flexDirection: 'column',
										gap: '8px',
										padding: '24px 0',
									}}
								>
									<p>No team members found.</p>
									<NeoButton color="blue" variant="secondary" text="Add member" />
								</div>
							),
						}}
					/>
				)
			},
		}),
}

export const WithStickyHeader: Story = {
	tags: ['no-test'],
	args: {
		columns: sampleColumns,
		rows: [
			...sampleRows,
			...sampleRows.map((row) => ({ ...row, name: row.name + ' II' })),
			...sampleRows.map((row) => ({ ...row, name: row.name + ' III' })),
		] as unknown as Record<string, unknown>[],
		stickyHeader: true,
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- Wrap in a height-constrained container to see the sticky header in action -->
<div style="max-block-size: 280px; overflow-y: auto;">
  <NeoTable :columns="columns" :rows="rows" :sticky-header="true" color="blue" />
</div>`,
			},
		},
	},
	render: (args: NeoTableProps) =>
		defineComponent({
			name: 'WithStickyHeaderRender',
			setup() {
				const manyRows = [
					...sampleRows,
					...sampleRows.map((row) => ({ ...row, name: row.name + ' II' })),
					...sampleRows.map((row) => ({ ...row, name: row.name + ' III' })),
				]
				return () => (
					<div style={{ blockSize: '280px', overflowY: 'auto' }}>
						<NeoTable
							{...args}
							columns={sampleColumns}
							rows={manyRows as unknown as Record<string, unknown>[]}
							stickyHeader
						/>
					</div>
				)
			},
		}),
}

export const MobileCards: Story = {
	tags: ['snapshot'],
	args: {
		columns: sampleColumns,
		rows: sampleRows as unknown as Record<string, unknown>[],
		mobileLayout: 'cards',
	},
	parameters: {
		snapshot: { viewports: ['sm'] },
		docs: {
			source: {
				code: `<!-- mobileLayout="cards" transforms rows into labelled cards below bp-md.
     Full table semantics are preserved so screen readers work correctly. -->
<NeoTable
  :columns="columns"
  :rows="rows"
  mobile-layout="cards"
  color="blue"
/>`,
			},
		},
	},
}

export const WithCaption: Story = {
	tags: ['snapshot'],
	args: {
		columns: sampleColumns,
		rows: sampleRows as unknown as Record<string, unknown>[],
		caption: 'Team members by department',
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoTable
  :columns="columns"
  :rows="rows"
  caption="Team members by department"
  color="blue"
/>`,
			},
		},
	},
}

export const OnDark: Story = {
	tags: ['snapshot'],
	args: {
		columns: sampleColumns,
		rows: sampleRows as unknown as Record<string, unknown>[],
		striped: true,
	},
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
		docs: {
			source: {
				code: `<div class="u-onDark" style="background: #000; padding: 24px;">
  <NeoTable :columns="columns" :rows="rows" :striped="true" color="blue" />
</div>`,
			},
		},
	},
}

// ── Row-header axis data ─────────────────────────

const countryColumns: NeoTableColumn[] = [
	{ key: 'country', label: 'Country', width: '160px' },
	{ key: 'population', label: 'Population', align: 'end' },
	{ key: 'gdp', label: 'GDP (USD)', align: 'end' },
	{ key: 'growth', label: 'Growth', align: 'end' },
]

const countryRows: Record<string, unknown>[] = [
	{ country: 'Germany', population: '84.4 M', gdp: '$4.1 T', growth: '+1.2%' },
	{ country: 'France', population: '68.4 M', gdp: '$2.8 T', growth: '+0.9%' },
	{ country: 'Italy', population: '59.0 M', gdp: '$2.1 T', growth: '+0.7%' },
	{ country: 'Spain', population: '47.4 M', gdp: '$1.5 T', growth: '+2.4%' },
	{ country: 'Netherlands', population: '17.9 M', gdp: '$1.1 T', growth: '+1.8%' },
]

export const WithRowHeaders: Story = {
	tags: ['snapshot'],
	args: {
		columns: countryColumns,
		rows: countryRows,
		headerAxis: 'row',
		color: 'blue',
	},
	parameters: {
		docs: {
			source: {
				code: `<!-- header-axis="row": the first column cell of every data row becomes
     <th scope="row">, identifying the record. -->
<NeoTable
  :columns="columns"
  :rows="rows"
  header-axis="row"
  color="blue"
/>`,
			},
		},
	},
	play: async ({ canvasElement, step }) => {
		await step('First body column cells are <th scope="row">', async () => {
			const rowHeaders = canvasElement.querySelectorAll('tbody th[scope="row"]')
			expect(rowHeaders).toHaveLength(countryRows.length)
		})

		await step('Remaining body cells are <td>', async () => {
			const dataCells = canvasElement.querySelectorAll('tbody td')
			expect(dataCells).toHaveLength(countryRows.length * (countryColumns.length - 1))
		})

		await step('Column headers remain in thead with scope="col"', async () => {
			const colHeaders = canvasElement.querySelectorAll('thead th[scope="col"]')
			expect(colHeaders).toHaveLength(countryColumns.length)
		})

		await step('Row header cells have NeoTable-row-header class', async () => {
			const rowHeaders = canvasElement.querySelectorAll('tbody .NeoTable-row-header')
			expect(rowHeaders).toHaveLength(countryRows.length)
		})
	},
}

export const WithRowHeadersCards: Story = {
	tags: ['snapshot'],
	args: {
		columns: countryColumns,
		rows: countryRows,
		headerAxis: 'row',
		mobileLayout: 'cards',
		color: 'blue',
	},
	parameters: {
		snapshot: { viewports: ['sm'] },
		docs: {
			source: {
				code: `<!-- In cards layout, the row-header cell renders as the card title
     (bold, no label prefix) above the other label-value pairs. -->
<NeoTable
  :columns="columns"
  :rows="rows"
  header-axis="row"
  mobile-layout="cards"
  color="blue"
/>`,
			},
		},
	},
}

// ── RTL sample data ──────────────────────────────

const rtlTeamColumns: NeoTableColumn[] = [
	{ key: 'name', label: 'الاسم', sortable: true },
	{ key: 'role', label: 'الدور' },
	{ key: 'department', label: 'القسم' },
	{ key: 'status', label: 'الحالة' },
]

const rtlTeamRows: Record<string, unknown>[] = [
	{ name: 'فاطمة العلي', role: 'مصممة رئيسية', department: 'المنتج', status: 'نشطة' },
	{ name: 'عمر الشريف', role: 'مطور واجهات', department: 'الهندسة', status: 'نشط' },
	{ name: 'ليلى حسن', role: 'محللة بيانات', department: 'التحليلات', status: 'غائبة' },
	{ name: 'كريم منصور', role: 'مدير منتج', department: 'المنتج', status: 'نشط' },
	{ name: 'نور إبراهيم', role: 'مهندسة جودة', department: 'الهندسة', status: 'غير نشطة' },
]

const rtlCountryColumns: NeoTableColumn[] = [
	{ key: 'country', label: 'الدولة', width: '200px' },
	{ key: 'population', label: 'السكان', align: 'end' },
	{ key: 'gdp', label: 'الناتج المحلي', align: 'end' },
	{ key: 'growth', label: 'النمو', align: 'end' },
]

const rtlCountryRows: Record<string, unknown>[] = [
	{
		country: 'المملكة العربية السعودية',
		population: '٣٦.٤ م',
		gdp: '١.١ تريليون $',
		growth: '+٣.٠٪',
	},
	{ country: 'الإمارات العربية المتحدة', population: '٩.٩ م', gdp: '٥٠٧ مليار $', growth: '+٣.٤٪' },
	{ country: 'مصر', population: '١٠٤.٢ م', gdp: '٣٨٧ مليار $', growth: '+٣.٨٪' },
	{ country: 'العراق', population: '٤٢.٦ م', gdp: '٢٦٨ مليار $', growth: '+٤.٥٪' },
	{ country: 'الأردن', population: '١٠.٢ م', gdp: '٥٠ مليار $', growth: '+٢.٦٪' },
]

export const RTL: Story = {
	tags: ['snapshot'],
	args: {
		columns: rtlTeamColumns,
		rows: rtlTeamRows,
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
		docs: {
			source: {
				code: `<div dir="rtl">
  <NeoTable :columns="columns" :rows="rows" color="blue" />
</div>`,
			},
		},
	},
	render: (args: NeoTableProps) =>
		defineComponent({
			name: 'RTLRender',
			setup() {
				return () => (
					<div dir="rtl">
						<NeoTable {...args} columns={rtlTeamColumns} rows={rtlTeamRows} color="blue" />
					</div>
				)
			},
		}),
}

export const RTLWithRowHeaders: Story = {
	tags: ['snapshot'],
	args: {
		columns: rtlCountryColumns,
		rows: rtlCountryRows,
		headerAxis: 'row',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
		docs: {
			source: {
				code: `<div dir="rtl">
  <NeoTable :columns="columns" :rows="rows" header-axis="row" color="blue" />
</div>`,
			},
		},
	},
	render: (args: NeoTableProps) =>
		defineComponent({
			name: 'RTLWithRowHeadersRender',
			setup() {
				return () => (
					<div dir="rtl">
						<NeoTable
							{...args}
							columns={rtlCountryColumns}
							rows={rtlCountryRows}
							headerAxis="row"
							color="blue"
						/>
					</div>
				)
			},
		}),
}
