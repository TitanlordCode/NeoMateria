import { colors } from '@/assets/typescript/colors'
import type { Meta, StoryObj } from '@storybook/vue3'
import { defineComponent, ref } from 'vue'
import NeoRadio from './NeoRadio.vue'
import type { NeoRadioProps } from './NeoRadioTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'

const meta = {
	title: 'Atoms/NeoRadio',
	component: NeoRadio,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		color: {
			control: 'select',
			options: colors,
		},
	},
	args: {
		name: 'example-radio',
		label: 'Option 1',
		value: 'option1',
		size: 'medium',
		color: 'blue',
	},
} satisfies Meta<typeof NeoRadio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
	args: {
		checked: true,
	},
}

export const Disabled: Story = {
	args: {
		disabled: true,
	},
}

export const DisabledChecked: Story = {
	args: {
		disabled: true,
		checked: true,
	},
}

export const Small: Story = {
	args: {
		size: 'small',
	},
}

export const Large: Story = {
	args: {
		size: 'large',
	},
}

export const RadioGroup: Story = {
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
							checked={selectedValue.value === 'option1'}
							onUpdate:checked={() => (selectedValue.value = 'option1')}
						/>
						<NeoRadio
							{...args}
							name="group"
							value="option2"
							label="Option 2"
							checked={selectedValue.value === 'option2'}
							onUpdate:checked={() => (selectedValue.value = 'option2')}
						/>
						<NeoRadio
							{...args}
							name="group"
							value="option3"
							label="Option 3"
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
	globals: {
		backgrounds: { value: '#000' },
	},
}

export const RTL: Story = {
	globals: {
		direction: 'rtl',
	},
	args: {
		label: 'الخيار الأول',
	},
}

export const AllColors: Story = {
	render: createSimpleColorShowcase(NeoRadio, [
		{
			variant: 'default',
			label: 'Radio',
			render: (color, _, args) => (
				<NeoRadio
					{...args}
					color={color}
					label={color}
					name="color-radio"
					value={color}
					checked={true}
				/>
			),
		},
	]),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: { value: '#000' },
	},
	render: createSimpleColorShowcase(
		NeoRadio,
		[
			{
				variant: 'default',
				label: 'Radio',
				render: (color, _, args) => (
					<NeoRadio
						{...args}
						color={color}
						label={color}
						name="color-radio"
						value={color}
						checked={true}
					/>
				),
			},
		],
		{
			dark: true,
		},
	),
}
