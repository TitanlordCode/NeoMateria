import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, ref } from 'vue'
import { expect, userEvent, waitFor, within } from 'storybook/test'

import NeoTabs from '@/components/02-molecules/Tabs/NeoTabs.vue'
import NeoTabPanel from '@/components/02-molecules/Tabs/NeoTabPanel.vue'
import NeoHeadlineTertiary from '@/components/01-atoms/Headline/NeoHeadlineTertiary/NeoHeadlineTertiary.vue'
import NeoText from '@/components/01-atoms/Text/NeoText/NeoText.vue'
import NeoCard from '@/components/02-molecules/Card/NeoCard.vue'
import type { NeoTabsProps } from './NeoTabsTypes'
import { tabOrientations, tabSizes, tabVariants } from './NeoTabsTypes'

const meta = {
	title: 'Molecules/NeoTabs',
	component: NeoTabs,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: tabVariants,
			description:
				'`underline`: thin active indicator below the tab. `pills`: each tab is a rounded pill. `filled`: all tabs share a background; active tab gets an elevated card.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			options: tabSizes,
			description: 'Controls font size and padding of the tab triggers.',
			table: { category: 'Appearance' },
		},
		color: {
			control: 'select',
			description: 'Accent color used for the active tab indicator and active text.',
			table: { category: 'Appearance' },
		},
		orientation: {
			control: 'select',
			options: tabOrientations,
			description:
				'`horizontal`: tabs run along the top (or bottom) edge. `vertical`: tabs run along the inline-start edge.',
			table: { category: 'Appearance' },
		},
		fullWidth: {
			control: 'boolean',
			description: 'When true, tab triggers stretch to fill the full container width equally.',
			table: { category: 'Appearance' },
		},
		activeTab: {
			control: false,
			description:
				'Controlled mode: the id of the currently active tab. Must be updated via `@tab-change` to keep the component in sync.',
			table: { category: 'State' },
		},
		defaultActiveTab: {
			control: false,
			description:
				'Uncontrolled mode: the id of the tab to activate on first render. Has no effect once mounted. Omit to default to the first non-disabled tab.',
			table: { category: 'State' },
		},
	},
	args: {
		variant: 'underline',
		size: 'medium',
		color: 'blue',
		orientation: 'horizontal',
		fullWidth: false,
	},
	parameters: {
		snapshot: { viewports: ['sm', 'md', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoTabs>

export default meta

type Story = StoryObj<typeof meta>

const samplePanelContent = (title: string, body: string) =>
	defineComponent({
		name: 'SampleContent',
		setup() {
			return () => (
				<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '4px 0' }}>
					<NeoHeadlineTertiary tag="h3">{title}</NeoHeadlineTertiary>
					<NeoText tag="p" size="small">
						{body}
					</NeoText>
				</div>
			)
		},
	})

// ── Source snippet helpers ────────────────────────────────────────────────────
const srcPanel = (id: string, label: string, body: string, disabled = false) =>
	[
		`  <NeoTabPanel id="${id}" label="${label}"${disabled ? ' :disabled="true"' : ''}>`,
		`    <div style="display: flex; flex-direction: column; gap: 8px; padding: 4px 0;">`,
		`      <NeoHeadlineTertiary tag="h3">${label}</NeoHeadlineTertiary>`,
		`      <NeoText tag="p" size="small">${body}</NeoText>`,
		`    </div>`,
		`  </NeoTabPanel>`,
	].join('\n')

const indentSrc = (src: string, spaces: number) =>
	src
		.split('\n')
		.map((line) => ' '.repeat(spaces) + line)
		.join('\n')

const srcVariantSection = (variant: string) =>
	[
		`  <div>`,
		`    <p style="color: var(--neo-color-grey500); font-size: 12px; font-weight: 600; letter-spacing: 0.08em; margin-block-end: 8px; text-transform: uppercase;">${variant}</p>`,
		`    <NeoTabs variant="${variant}" color="blue">`,
		indentSrc(
			[
				srcPanel(`${variant}-a`, 'Overview', 'Content for the overview tab.'),
				srcPanel(`${variant}-b`, 'Details', 'Content for the details tab.'),
				srcPanel(`${variant}-c`, 'History', 'Content for the history tab.'),
			].join('\n'),
			4,
		),
		`    </NeoTabs>`,
		`  </div>`,
	].join('\n')

const defaultPanelsSrc = [
	srcPanel(
		'overview',
		'Overview',
		'High-level summary of the subject. Use this panel to provide a concise introduction.',
	),
	srcPanel(
		'details',
		'Details',
		'In-depth information and technical specifics. Perfect for configuration options and advanced settings.',
	),
	srcPanel(
		'history',
		'History',
		'Chronological record of changes and events. Track what happened and when.',
	),
].join('\n')

const verticalPanelsSrc = [
	srcPanel(
		'overview',
		'Overview',
		'Vertical orientation places the tab list on the inline-start side.',
	),
	srcPanel('details', 'Details', 'Each panel fills the remaining space to the inline-end.'),
	srcPanel(
		'settings',
		'Settings',
		'Useful for admin panels, settings pages, and document editors.',
	),
].join('\n')

const disabledTabPanelsSrc = [
	srcPanel('overview', 'Overview', 'This tab is active. The "Details" tab is disabled.'),
	srcPanel('details', 'Details', 'This content cannot be reached — the tab is disabled.', true),
	srcPanel('history', 'History', 'Keyboard navigation skips the disabled tab.'),
].join('\n')

const controlledPanelsSrc = [
	srcPanel('overview', 'Overview', 'Controlled mode — the parent owns the active tab state.'),
	srcPanel('details', 'Details', 'Update activeTab in @tab-change to keep the component in sync.'),
	srcPanel('history', 'History', 'Useful when you need to conditionally prevent tab switches.'),
].join('\n')

const manyPanelsSrc = [
	{ id: 'tab1', label: 'Overview' },
	{ id: 'tab2', label: 'Analytics' },
	{ id: 'tab3', label: 'Reports' },
	{ id: 'tab4', label: 'Settings' },
	{ id: 'tab5', label: 'Integrations' },
	{ id: 'tab6', label: 'Permissions' },
	{ id: 'tab7', label: 'Billing' },
	{ id: 'tab8', label: 'Audit Log' },
]
	.map(({ id, label }) => srcPanel(id, label, `Content for the ${label} section.`))
	.join('\n')

export const Default: Story = {
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<NeoTabs color="blue">
${defaultPanelsSrc}
</NeoTabs>`,
			},
		},
	},
	render: (args: NeoTabsProps) =>
		defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => (
					<NeoTabs {...args}>
						<NeoTabPanel id="overview" label="Overview">
							{samplePanelContent(
								'Overview',
								'High-level summary of the subject. Use this panel to provide a concise introduction.',
							)}
						</NeoTabPanel>
						<NeoTabPanel id="details" label="Details">
							{samplePanelContent(
								'Details',
								'In-depth information and technical specifics. Perfect for configuration options and advanced settings.',
							)}
						</NeoTabPanel>
						<NeoTabPanel id="history" label="History">
							{samplePanelContent(
								'History',
								'Chronological record of changes and events. Track what happened and when.',
							)}
						</NeoTabPanel>
					</NeoTabs>
				)
			},
		}),
}

export const Pills: Story = {
	tags: ['snapshot'],
	args: { variant: 'pills' },
	parameters: {
		docs: {
			source: {
				code: `<NeoTabs variant="pills" color="blue">
${defaultPanelsSrc}
</NeoTabs>`,
			},
		},
	},
	render: Default.render,
}

export const Filled: Story = {
	tags: ['snapshot'],
	args: { variant: 'filled' },
	parameters: {
		docs: {
			source: {
				code: `<NeoTabs variant="filled" color="blue">
${defaultPanelsSrc}
</NeoTabs>`,
			},
		},
	},
	render: Default.render,
}

export const Vertical: Story = {
	tags: ['snapshot'],
	args: { orientation: 'vertical' },
	parameters: {
		docs: {
			source: {
				code: `<NeoTabs orientation="vertical" color="blue">
${verticalPanelsSrc}
</NeoTabs>`,
			},
		},
	},
	render: (args: NeoTabsProps) =>
		defineComponent({
			name: 'VerticalRender',
			setup() {
				return () => (
					<NeoTabs {...args}>
						<NeoTabPanel id="overview" label="Overview">
							{samplePanelContent(
								'Overview',
								'Vertical orientation places the tab list on the inline-start side.',
							)}
						</NeoTabPanel>
						<NeoTabPanel id="details" label="Details">
							{samplePanelContent(
								'Details',
								'Each panel fills the remaining space to the inline-end.',
							)}
						</NeoTabPanel>
						<NeoTabPanel id="settings" label="Settings">
							{samplePanelContent(
								'Settings',
								'Useful for admin panels, settings pages, and document editors.',
							)}
						</NeoTabPanel>
					</NeoTabs>
				)
			},
		}),
}

export const Small: Story = {
	tags: ['snapshot'],
	args: { size: 'small' },
	parameters: {
		docs: {
			source: {
				code: `<NeoTabs size="small" color="blue">
${defaultPanelsSrc}
</NeoTabs>`,
			},
		},
	},
	render: Default.render,
}

export const Large: Story = {
	tags: ['snapshot'],
	args: { size: 'large' },
	parameters: {
		docs: {
			source: {
				code: `<NeoTabs size="large" color="blue">
${defaultPanelsSrc}
</NeoTabs>`,
			},
		},
	},
	render: Default.render,
}

export const FullWidth: Story = {
	tags: ['snapshot'],
	args: { fullWidth: true },
	parameters: {
		docs: {
			source: {
				code: `<NeoTabs :full-width="true" color="blue">
${defaultPanelsSrc}
</NeoTabs>`,
			},
		},
	},
	render: Default.render,
}

export const WithDisabledTab: Story = {
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<NeoTabs color="blue">
${disabledTabPanelsSrc}
</NeoTabs>`,
			},
		},
	},
	render: (args: NeoTabsProps) =>
		defineComponent({
			name: 'WithDisabledTabRender',
			setup() {
				return () => (
					<NeoTabs {...args}>
						<NeoTabPanel id="overview" label="Overview">
							{samplePanelContent('Overview', 'This tab is active. The "Details" tab is disabled.')}
						</NeoTabPanel>
						<NeoTabPanel id="details" label="Details" disabled>
							{samplePanelContent(
								'Details',
								'This content cannot be reached — the tab is disabled.',
							)}
						</NeoTabPanel>
						<NeoTabPanel id="history" label="History">
							{samplePanelContent('History', 'Keyboard navigation skips the disabled tab.')}
						</NeoTabPanel>
					</NeoTabs>
				)
			},
		}),
}

export const Controlled: Story = {
	tags: ['no-test'],
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const activeTab = ref('details')
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <p style="color: var(--neo-color-grey600); font-size: 14px; margin: 0;">
      Active tab: <strong>{{ activeTab }}</strong>
    </p>
    <NeoTabs :active-tab="activeTab" color="blue" @tab-change="activeTab = $event">
${indentSrc(controlledPanelsSrc, 4)}
    </NeoTabs>
  </div>
</template>`,
			},
		},
	},
	render: (args: NeoTabsProps) =>
		defineComponent({
			name: 'ControlledRender',
			setup() {
				const activeTab = ref('details')
				return () => (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
						<p style={{ color: 'var(--neo-color-grey600)', fontSize: '14px', margin: 0 }}>
							Active tab: <strong>{activeTab.value}</strong>
						</p>
						<NeoTabs
							{...args}
							activeTab={activeTab.value}
							onTab-change={(id: string) => {
								activeTab.value = id
							}}
						>
							<NeoTabPanel id="overview" label="Overview">
								{samplePanelContent(
									'Overview',
									'Controlled mode — the parent owns the active tab state.',
								)}
							</NeoTabPanel>
							<NeoTabPanel id="details" label="Details">
								{samplePanelContent(
									'Details',
									'Update activeTab in @tab-change to keep the component in sync.',
								)}
							</NeoTabPanel>
							<NeoTabPanel id="history" label="History">
								{samplePanelContent(
									'History',
									'Useful when you need to conditionally prevent tab switches.',
								)}
							</NeoTabPanel>
						</NeoTabs>
					</div>
				)
			},
		}),
}

export const WithRichContent: Story = {
	tags: ['snapshot'],
	parameters: {
		snapshot: { viewports: ['md', 'xl'] },
		docs: {
			source: {
				code: `<NeoTabs color="blue">
  <NeoTabPanel id="articles" label="Articles">
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; padding-block-start: 8px;">
      <NeoCard color="grey" title="Getting Started" description="Everything you need to know to get up and running quickly." image-src="https://placehold.co/400x200/e2e8f0/94a3b8?text=Cover" image-alt="Getting Started cover" size="small" />
      <NeoCard color="grey" title="Advanced Patterns" description="Deep dives into architecture, performance, and best practices." image-src="https://placehold.co/400x200/e2e8f0/94a3b8?text=Cover" image-alt="Advanced Patterns cover" size="small" />
      <NeoCard color="grey" title="API Reference" description="Complete documentation of every prop, slot, and emitted event." image-src="https://placehold.co/400x200/e2e8f0/94a3b8?text=Cover" image-alt="API Reference cover" size="small" />
    </div>
  </NeoTabPanel>
  <NeoTabPanel id="videos" label="Videos">
    <!-- video tutorials content -->
  </NeoTabPanel>
  <NeoTabPanel id="examples" label="Examples">
    <!-- live code examples and interactive sandboxes -->
  </NeoTabPanel>
</NeoTabs>`,
			},
		},
	},
	render: (args: NeoTabsProps) =>
		defineComponent({
			name: 'WithRichContentRender',
			setup() {
				const cards = [
					{
						title: 'Getting Started',
						description: 'Everything you need to know to get up and running quickly.',
					},
					{
						title: 'Advanced Patterns',
						description: 'Deep dives into architecture, performance, and best practices.',
					},
					{
						title: 'API Reference',
						description: 'Complete documentation of every prop, slot, and emitted event.',
					},
				]
				return () => (
					<NeoTabs {...args}>
						<NeoTabPanel id="articles" label="Articles">
							<div
								style={{
									display: 'grid',
									gap: '16px',
									gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
									paddingBlockStart: '8px',
								}}
							>
								{cards.map((card) => (
									<NeoCard
										key={card.title}
										color="grey"
										title={card.title}
										description={card.description}
										imageSrc="https://placehold.co/400x200/e2e8f0/94a3b8?text=Cover"
										imageAlt={`${card.title} cover`}
										size="small"
									/>
								))}
							</div>
						</NeoTabPanel>
						<NeoTabPanel id="videos" label="Videos">
							{samplePanelContent('Videos', 'Video tutorials and walkthroughs will appear here.')}
						</NeoTabPanel>
						<NeoTabPanel id="examples" label="Examples">
							{samplePanelContent('Examples', 'Live code examples and interactive sandboxes.')}
						</NeoTabPanel>
					</NeoTabs>
				)
			},
		}),
}

export const ManyTabs: Story = {
	tags: ['snapshot'],
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
		docs: {
			source: {
				code: `<!-- Constrain the container width to trigger the overflow "More" dropdown -->
<div style="max-inline-size: 480px;">
  <NeoTabs color="blue">
${indentSrc(manyPanelsSrc, 2)}
  </NeoTabs>
</div>`,
			},
		},
	},
	render: (args: NeoTabsProps) =>
		defineComponent({
			name: 'ManyTabsRender',
			setup() {
				const tabs = [
					{ id: 'tab1', label: 'Overview' },
					{ id: 'tab2', label: 'Analytics' },
					{ id: 'tab3', label: 'Reports' },
					{ id: 'tab4', label: 'Settings' },
					{ id: 'tab5', label: 'Integrations' },
					{ id: 'tab6', label: 'Permissions' },
					{ id: 'tab7', label: 'Billing' },
					{ id: 'tab8', label: 'Audit Log' },
				]
				return () => (
					<div style={{ maxInlineSize: '480px' }}>
						<NeoTabs {...args}>
							{tabs.map((tab) => (
								<NeoTabPanel key={tab.id} id={tab.id} label={tab.label}>
									{samplePanelContent(tab.label, `Content for the ${tab.label} section.`)}
								</NeoTabPanel>
							))}
						</NeoTabs>
					</div>
				)
			},
		}),
}

export const AllVariants: Story = {
	tags: ['no-test'],
	parameters: {
		docs: {
			source: {
				code: `<div style="display: flex; flex-direction: column; gap: 32px;">
${srcVariantSection('underline')}

${srcVariantSection('pills')}

${srcVariantSection('filled')}
</div>`,
			},
		},
	},
	render: (args: NeoTabsProps) =>
		defineComponent({
			name: 'AllVariantsRender',
			setup() {
				const variants = ['underline', 'pills', 'filled'] as const
				return () => (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
						{variants.map((variant) => (
							<div key={variant}>
								<p
									style={{
										color: 'var(--neo-color-grey500)',
										fontSize: '12px',
										fontWeight: 600,
										letterSpacing: '0.08em',
										marginBlockEnd: '8px',
										textTransform: 'uppercase',
									}}
								>
									{variant}
								</p>
								<NeoTabs {...args} variant={variant}>
									<NeoTabPanel id={`${variant}-a`} label="Overview">
										{samplePanelContent('Overview', 'Content for the overview tab.')}
									</NeoTabPanel>
									<NeoTabPanel id={`${variant}-b`} label="Details">
										{samplePanelContent('Details', 'Content for the details tab.')}
									</NeoTabPanel>
									<NeoTabPanel id={`${variant}-c`} label="History">
										{samplePanelContent('History', 'Content for the history tab.')}
									</NeoTabPanel>
								</NeoTabs>
							</div>
						))}
					</div>
				)
			},
		}),
}

export const OnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
		docs: {
			source: {
				code: `<div class="u-onDark" style="background: #000; padding: 24px;">
  <NeoTabs color="blue">
${indentSrc(defaultPanelsSrc, 2)}
  </NeoTabs>
</div>`,
			},
		},
	},
	render: Default.render,
}

export const Interaction: Story = {
	tags: ['!dev'],
	render: (args: NeoTabsProps) =>
		defineComponent({
			name: 'InteractionRender',
			setup() {
				return () => (
					<NeoTabs {...args}>
						<NeoTabPanel id="overview" label="Overview">
							<p data-testid="panel-overview">Overview panel content</p>
						</NeoTabPanel>
						<NeoTabPanel id="details" label="Details">
							<p data-testid="panel-details">Details panel content</p>
						</NeoTabPanel>
						<NeoTabPanel id="history" label="History">
							<p data-testid="panel-history">History panel content</p>
						</NeoTabPanel>
					</NeoTabs>
				)
			},
		}),
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement)

		await step('First tab is active by default', async () => {
			await waitFor(() => {
				expect(canvas.getByRole('tab', { name: 'Overview' })).toHaveAttribute(
					'aria-selected',
					'true',
				)
			})
		})

		await step('Click Details tab to activate it', async () => {
			await userEvent.click(canvas.getByRole('tab', { name: 'Details' }))
			await waitFor(() => {
				expect(canvas.getByRole('tab', { name: 'Details' })).toHaveAttribute(
					'aria-selected',
					'true',
				)
				expect(canvas.getByRole('tab', { name: 'Overview' })).toHaveAttribute(
					'aria-selected',
					'false',
				)
			})
		})

		await step('Arrow key moves to next tab', async () => {
			canvas.getByRole('tab', { name: 'Details' }).focus()
			await userEvent.keyboard('{ArrowRight}')
			await waitFor(() => {
				expect(canvas.getByRole('tab', { name: 'History' })).toHaveAttribute(
					'aria-selected',
					'true',
				)
			})
		})

		await step('Home key jumps to first tab', async () => {
			await userEvent.keyboard('{Home}')
			await waitFor(() => {
				expect(canvas.getByRole('tab', { name: 'Overview' })).toHaveAttribute(
					'aria-selected',
					'true',
				)
			})
		})

		await step('End key jumps to last tab', async () => {
			await userEvent.keyboard('{End}')
			await waitFor(() => {
				expect(canvas.getByRole('tab', { name: 'History' })).toHaveAttribute(
					'aria-selected',
					'true',
				)
			})
		})
	},
}
