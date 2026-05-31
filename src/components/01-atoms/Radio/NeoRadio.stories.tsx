import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { defineComponent, ref } from 'vue'
import NeoRadio from './NeoRadio.vue'
import type { NeoRadioProps } from './NeoRadioTypes'
import { radioSizes } from './NeoRadioTypes'
import { ariaLabelArgType, disabledArgType } from '../../../../.storybook/utils/argTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../.storybook/utils/createA11yPlay'

const meta = {
	title: 'Atoms/NeoRadio',
	component: NeoRadio,
	tags: ['autodocs'],
	argTypes: {
		...ariaLabelArgType,
		...disabledArgType,
		name: {
			control: 'text',
			table: { category: 'Content' },
			description: 'The `name` attribute that groups radios into one set.',
		},
		label: {
			control: 'text',
			table: { category: 'Content' },
			description: 'Visible label text. Mutually exclusive with `ariaLabel`.',
		},
		value: {
			control: 'text',
			table: { category: 'Content' },
			description: 'The `value` submitted when this radio is selected.',
		},
		color: { description: 'Theme color for the radio fill and focus ring.' },
		size: {
			control: 'select',
			options: radioSizes,
			table: { category: 'Appearance' },
			description: 'Controls the radio button size and label font size.',
		},
		checked: {
			control: 'boolean',
			table: { category: 'State' },
			description: 'Whether this radio is selected.',
		},
		required: {
			control: 'boolean',
			table: { category: 'State' },
			description: 'Marks the field as required. Requires `requiredText` to be set.',
		},
		requiredText: {
			control: 'text',
			table: { category: 'State' },
			description: 'Assistive text describing the requirement, surfaced when `required` is set.',
		},
	},
	args: {
		name: 'example-radio',
		label: 'Option 1',
		value: 'option1',
		size: 'medium',
		color: 'blue',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoRadio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
}

export const WithoutLabel: Story = {
	tags: ['snapshot'],
	args: {
		label: undefined,
		ariaLabel: 'Option A',
	},
}

export const Checked: Story = {
	tags: ['snapshot'],
	args: {
		checked: true,
	},
}

export const Disabled: Story = {
	tags: ['snapshot'],
	args: {
		disabled: true,
	},
}

export const DisabledChecked: Story = {
	tags: ['snapshot'],
	args: {
		disabled: true,
		checked: true,
	},
}

export const Small: Story = {
	tags: ['snapshot'],
	args: {
		size: 'small',
	},
}

export const Large: Story = {
	tags: ['snapshot'],
	args: {
		size: 'large',
	},
}

export const RadioGroup: Story = {
	tags: ['snapshot'],
	parameters: {
		docs: {
			source: {
				code: `<script setup>
const selected = ref('option1')
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <NeoRadio
      name="group"
      value="option1"
      label="Option 1"
      color="blue"
      :checked="selected === 'option1'"
      @update:checked="selected = 'option1'"
    />
    <NeoRadio
      name="group"
      value="option2"
      label="Option 2"
      color="blue"
      :checked="selected === 'option2'"
      @update:checked="selected = 'option2'"
    />
    <NeoRadio
      name="group"
      value="option3"
      label="Option 3"
      color="blue"
      :checked="selected === 'option3'"
      @update:checked="selected = 'option3'"
    />
  </div>
</template>`,
			},
		},
	},
	render: (args: NeoRadioProps) => {
		return defineComponent({
			name: 'RadioGroupRender',
			setup() {
				const selectedValue = ref('option1')
				return () => (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
						<NeoRadio
							{...args}
							name="group"
							value="option1"
							label="Option 1"
							ariaLabel={undefined}
							checked={selectedValue.value === 'option1'}
							onUpdate:checked={() => (selectedValue.value = 'option1')}
						/>
						<NeoRadio
							{...args}
							name="group"
							value="option2"
							label="Option 2"
							ariaLabel={undefined}
							checked={selectedValue.value === 'option2'}
							onUpdate:checked={() => (selectedValue.value = 'option2')}
						/>
						<NeoRadio
							{...args}
							name="group"
							value="option3"
							label="Option 3"
							ariaLabel={undefined}
							checked={selectedValue.value === 'option3'}
							onUpdate:checked={() => (selectedValue.value = 'option3')}
						/>
						<p style={{ marginTop: '16px' }}>Selected: {selectedValue.value}</p>
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
}

export const RTL: Story = {
	tags: ['snapshot'],
	globals: {
		direction: 'rtl',
	},
	args: {
		label: 'الخيار الأول',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
}

export const AllColors: Story = {
	tags: ['snapshot'],
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: createSimpleColorShowcase(NeoRadio, [
		{
			variant: 'default',
			label: 'Radio',
			render: (color, _variant, args) => {
				return (
					<NeoRadio
						{...args}
						ariaLabel={undefined}
						color={color}
						label={color}
						name="color-radio"
						value={color}
						checked={true}
					/>
				)
			},
		},
	]),
}

export const AllColorsOnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: createSimpleColorShowcase(
		NeoRadio,
		[
			{
				variant: 'default',
				label: 'Radio',
				render: (color, _, args) => {
					return (
						<NeoRadio
							{...args}
							ariaLabel={undefined}
							color={color}
							label={color}
							name="color-radio"
							value={color}
							checked={true}
						/>
					)
				},
			},
		],
		{
			dark: true,
		},
	),
}

export const AllColorsA11y: Story = {
	...AllColors,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}

export const AllColorsOnDarkA11y: Story = {
	...AllColorsOnDark,
	tags: ['!dev', 'test-only'],
	play: createA11yPlay(),
}
