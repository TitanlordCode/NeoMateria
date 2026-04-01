import type { Meta, StoryObj } from '@storybook/vue3-vite'
import NeoCheckbox from './NeoCheckbox.vue'
import { checkboxSizes } from './NeoCheckboxTypes'
import { ariaLabelArgType, disabledArgType } from '../../../../.storybook/utils/argTypes'
import { createSimpleColorShowcase } from '../../../../.storybook/utils/colorShowcase'

const meta = {
	title: 'Atoms/NeoCheckbox',
	component: NeoCheckbox,
	tags: ['autodocs'],
	argTypes: {
		...ariaLabelArgType,
		...disabledArgType,
		name: { control: 'text', table: { category: 'Content' } },
		label: { control: 'text', table: { category: 'Content' } },
		value: { control: 'text', table: { category: 'Content' } },
		color: { description: 'Theme color for the checkbox fill and focus ring.' },
		size: {
			control: 'select',
			options: checkboxSizes,
			table: { category: 'Appearance' },
			description: 'Controls the checkbox size and label font size.',
		},
		checked: { control: 'boolean', table: { category: 'State' } },
		required: { control: 'boolean', table: { category: 'State' } },
		indeterminate: {
			control: 'boolean',
			table: { category: 'State' },
			description:
				'Puts the checkbox into a third, partially-checked state. Commonly used for a \'select all\' control when only some children are selected. Sets `aria-checked="mixed"`.',
		},
	},
	args: {
		name: 'example-checkbox',
		label: 'Accept terms and conditions',
		size: 'medium',
		color: 'blue',
	},
} satisfies Meta<typeof NeoCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}

export const Checked: Story = {
	args: {
		checked: true,
	},
}

export const Indeterminate: Story = {
	args: {
		indeterminate: true,
	},
}

export const Required: Story = {
	args: {
		required: true,
		requiredText: 'This field is required',
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

export const WithoutLabel: Story = {
	args: {
		label: undefined,
		ariaLabel: 'Accept terms and conditions',
	},
}

export const OnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
}

export const RTL: Story = {
	globals: {
		direction: 'rtl',
	},
	args: {
		label: 'قبول الشروط والأحكام',
	},
}

export const AllColors: Story = {
	render: createSimpleColorShowcase(NeoCheckbox, [
		{
			variant: 'default',
			label: 'Checkbox',
			render: (color, _variant, args) => {
				return (
					<NeoCheckbox
						{...args}
						ariaLabel={undefined}
						color={color}
						label={color}
						name="color-checkbox"
						checked={true}
					/>
				)
			},
		},
	]),
}

export const AllColorsOnDark: Story = {
	globals: {
		backgrounds: '#000',
	},
	render: createSimpleColorShowcase(
		NeoCheckbox,
		[
			{
				variant: 'default',
				label: 'Checkbox',
				render: (color, _, args) => {
					return (
						<NeoCheckbox
							{...args}
							ariaLabel={undefined}
							color={color}
							label={color}
							name="color-checkbox"
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
