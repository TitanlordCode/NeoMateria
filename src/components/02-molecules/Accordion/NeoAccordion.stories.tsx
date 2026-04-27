import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, h } from 'vue'
import { fn } from 'storybook/test'

import NeoAccordion from '@/components/02-molecules/Accordion/NeoAccordion.vue'
import type { NeoAccordionProps } from './NeoAccordionTypes'
import { accordionSizes, accordionVariants } from './NeoAccordionTypes'
import { ariaLabelArgType, disabledArgType } from '../../../../.storybook/utils/argTypes'
// import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'

const meta = {
	title: 'Molecules/NeoAccordion',
	component: NeoAccordion,
	tags: ['autodocs'],
	parameters: {
		controls: { exclude: ['color'] },
		snapshot: { viewports: ['sm', 'md', 'lg', 'xl'] },
	},
	argTypes: {
		...ariaLabelArgType,
		...disabledArgType,
		title: { control: 'text', table: { category: 'Content' } },
		size: {
			control: 'select',
			options: accordionSizes,
			description: 'Controls header padding and font size.',
			table: { category: 'Appearance' },
		},
		variant: {
			control: 'select',
			options: accordionVariants,
			description:
				'`default`: no border, transparent background — suitable for use inside other containers. `bordered`: shows a border around the accordion. `filled`: applies a background color to the header.',
			table: { category: 'Appearance' },
		},
		defaultExpanded: {
			control: 'boolean',
			description:
				'Whether the accordion starts in the open state on mount. Only applied once; not reactive after mount.',
			table: { category: 'State' },
		},
	},
	args: {
		title: 'Click to expand',
		// color: 'grey',
		size: 'medium',
		variant: 'default',
		defaultExpanded: false,
		disabled: false,
		onToggle: fn(),
	},
} satisfies Meta<typeof NeoAccordion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<NeoAccordion title="Click to expand">
  <p>This is the accordion content. It can contain any content you want,
     including text, images, or other components.</p>
</NeoAccordion>`,
			},
		},
	},
	render: (args: NeoAccordionProps) => {
		return defineComponent({
			name: 'DefaultRender',
			setup() {
				return () => (
					<NeoAccordion {...args}>
						<p>
							This is the accordion content. It can contain any content you want, including text,
							images, or other components.
						</p>
					</NeoAccordion>
				)
			},
		})
	},
}

export const Expanded: Story = {
	tags: ['snapshot'],
	args: {
		defaultExpanded: true,
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoAccordion title="Click to expand" default-expanded>
  <p>This accordion starts in the expanded state.</p>
</NeoAccordion>`,
			},
		},
	},
	render: (args: NeoAccordionProps) => {
		return defineComponent({
			name: 'ExpandedRender',
			setup() {
				return () => (
					<NeoAccordion {...args}>
						<p>This accordion starts in the expanded state.</p>
					</NeoAccordion>
				)
			},
		})
	},
}

export const Small: Story = {
	tags: ['snapshot'],
	args: {
		size: 'small',
	},
	render: Default.render,
}

export const Large: Story = {
	tags: ['snapshot'],
	args: {
		size: 'large',
	},
	render: Default.render,
}

export const Bordered: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'bordered',
		defaultExpanded: true,
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoAccordion title="Click to expand" variant="bordered" default-expanded>
  <p>This is the bordered variant with a visible border around the accordion.</p>
</NeoAccordion>`,
			},
		},
	},
	render: (args: NeoAccordionProps) => {
		return defineComponent({
			name: 'BorderedRender',
			setup() {
				return () => (
					<NeoAccordion {...args}>
						<p>This is the bordered variant with a visible border around the accordion.</p>
					</NeoAccordion>
				)
			},
		})
	},
}

export const Filled: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'filled',
		defaultExpanded: true,
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoAccordion title="Click to expand" variant="filled" default-expanded>
  <p>This is the filled variant with a background color.</p>
</NeoAccordion>`,
			},
		},
	},
	render: (args: NeoAccordionProps) => {
		return defineComponent({
			name: 'FilledRender',
			setup() {
				return () => (
					<NeoAccordion {...args}>
						<p>This is the filled variant with a background color.</p>
					</NeoAccordion>
				)
			},
		})
	},
}

export const Disabled: Story = {
	tags: ['snapshot'],
	args: {
		disabled: true,
	},
	render: Default.render,
}

export const CustomIcon: Story = {
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<!-- The icon slot receives { isExpanded } so you can swap icons on state -->
<NeoAccordion title="Click to expand">
  <template #icon="{ isExpanded }">
    <svg v-if="isExpanded" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
    <svg v-else viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  </template>
  <p>This accordion uses custom plus/minus icons instead of the default chevron.</p>
</NeoAccordion>`,
			},
		},
	},
	render: (args: NeoAccordionProps) => {
		return defineComponent({
			name: 'CustomIconRender',
			setup() {
				const plusIcon = h(
					'svg',
					{
						xmlns: 'http://www.w3.org/2000/svg',
						width: '16',
						height: '16',
						viewBox: '0 0 24 24',
						fill: 'none',
						stroke: 'currentColor',
						'stroke-width': '2',
						'stroke-linecap': 'round',
						'stroke-linejoin': 'round',
						'aria-hidden': 'true',
					},
					[
						h('line', { x1: '12', y1: '5', x2: '12', y2: '19' }),
						h('line', { x1: '5', y1: '12', x2: '19', y2: '12' }),
					],
				)

				const minusIcon = h(
					'svg',
					{
						xmlns: 'http://www.w3.org/2000/svg',
						width: '16',
						height: '16',
						viewBox: '0 0 24 24',
						fill: 'none',
						stroke: 'currentColor',
						'stroke-width': '2',
						'stroke-linecap': 'round',
						'stroke-linejoin': 'round',
						'aria-hidden': 'true',
					},
					[h('line', { x1: '5', y1: '12', x2: '19', y2: '12' })],
				)

				return () => (
					<NeoAccordion
						{...args}
						v-slots={{
							icon: ({ isExpanded }: { isExpanded: boolean }) =>
								isExpanded ? minusIcon : plusIcon,
							default: () => (
								<p>This accordion uses custom plus/minus icons instead of the default chevron.</p>
							),
						}}
					/>
				)
			},
		})
	},
}

export const AccordionGroup: Story = {
	tags: ['no-test'],
	parameters: {
		docs: {
			source: {
				code: `<div style="display: flex; flex-direction: column; gap: 8px; max-width: 500px;">
  <NeoAccordion title="Section 1" variant="bordered">
    <p>Content for section 1.</p>
  </NeoAccordion>
  <NeoAccordion title="Section 2" variant="bordered">
    <p>Content for section 2. Each section is independent.</p>
  </NeoAccordion>
  <NeoAccordion title="Section 3" variant="bordered">
    <p>Content for section 3. Click to expand or collapse.</p>
  </NeoAccordion>
</div>`,
			},
		},
	},
	render: (args: NeoAccordionProps) => {
		return defineComponent({
			name: 'AccordionGroupRender',
			setup() {
				const items = [
					{ title: 'Section 1', content: 'Content for section 1. This can be any content.' },
					{ title: 'Section 2', content: 'Content for section 2. Each section is independent.' },
					{ title: 'Section 3', content: 'Content for section 3. Click to expand or collapse.' },
				]

				return () => (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '8px',
							width: '100%',
							maxWidth: '500px',
						}}
					>
						{items.map((item, index) => (
							<NeoAccordion key={index} {...args} title={item.title} variant="bordered">
								<p>{item.content}</p>
							</NeoAccordion>
						))}
					</div>
				)
			},
		})
	},
}

export const OnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: Default.render,
}

/*
export const AllColors: Story = {
	args: {
		default: () => (
			<p>
				This is the accordion content. It can contain any content you want, including text, images,
				or other components.
			</p>
		),
	},
	render: createSimpleColorShowcase(NeoAccordion, ['default', 'bordered', 'filled']),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	render: createSimpleColorShowcase(NeoAccordion, ['default', 'bordered', 'filled'], {
		dark: true,
	}),
}
*/
