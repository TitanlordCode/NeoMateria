import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { defineComponent } from 'vue'

import NeoLinkButton from '@/components/01-atoms/Button/NeoLinkButton/NeoLinkButton.vue'
import { buttonSizes, buttonVariants } from '../NeoButton/NeoButtonTypes'
import { ariaLabelArgType } from '../../../../../.storybook/utils/argTypes'
import { AddIcon, DeleteIcon } from '../../Icon/defaultIcons'
import { createSimpleColorShowcase } from '../../../../../.storybook/utils/colorShowcase'
import { createA11yPlay } from '../../../../../.storybook/utils/createA11yPlay'

const meta = {
	title: 'Atoms/Button/NeoLinkButton',
	component: NeoLinkButton,
	tags: ['autodocs'],
	argTypes: {
		...ariaLabelArgType,
		text: { control: 'text', table: { category: 'Content' } },
		href: { control: 'text', table: { category: 'Content' } },
		external: { control: 'boolean', table: { category: 'Behavior' } },
		disabled: {
			control: 'boolean',
			description:
				'Visually and functionally disables the link. Sets `aria-disabled="true"` and removes the `href` to prevent navigation.',
			table: { category: 'Behavior' },
		},
		color: {
			description:
				'Theme color. Determines the button\'s background, text, and border colors. `white` is excluded from `SurfaceColor` — use `color="black"` with `u-onDark` for dark-surface white buttons.',
			table: { category: 'Appearance' },
		},
		size: {
			control: 'select',
			options: buttonSizes,
			description: 'Controls padding and font size.',
			table: { category: 'Appearance' },
		},
		variant: {
			control: 'select',
			options: buttonVariants,
			description:
				'Visual style. `primary`: filled background (establishes its own dark context via `setOnDark`). `secondary`: outline with themed border. `tertiary`: text-only with subtle hover. `ghost`: no border or background, minimal footprint.',
			table: { category: 'Appearance' },
		},
		rounded: {
			control: 'boolean',
			description: 'Applies fully rounded corners for a pill shape.',
			table: { category: 'Appearance' },
		},
		fullWidth: {
			control: 'boolean',
			description: "Stretches the link button to fill its container's full inline size.",
			table: { category: 'Appearance' },
		},
		default: {
			control: false,
			description:
				'Default slot content rendered inside the link. Falls back to the `text` prop if empty.',
			table: { category: 'Slots' },
		},
		prefix: {
			control: false,
			description: 'Content rendered before the label and start icon (e.g. a decorative icon).',
			table: { category: 'Slots' },
		},
		iconStart: {
			control: false,
			description:
				'Icon rendered at the leading edge of the link. Pass a raw SVG element or a Vue component.',
			table: { category: 'Slots' },
		},
		iconEnd: {
			control: false,
			description:
				'Icon rendered at the trailing edge of the link. Pass a raw SVG element or a Vue component.',
			table: { category: 'Slots' },
		},
	},
	args: {
		text: 'Go to page',
		href: '#',
		size: 'medium',
		color: 'blue',
		variant: 'primary',
		rounded: false,
		fullWidth: false,
		external: false,
	},
	render: (args) =>
		defineComponent({
			name: 'NeoLinkButtonRender',
			render: () => (
				<NeoLinkButton
					{...args}
					v-slots={{
						...(args.iconStart ? { iconStart: () => args.iconStart } : {}),
						...(args.iconEnd ? { iconEnd: () => args.iconEnd } : {}),
					}}
				/>
			),
		}),
	parameters: {
		snapshot: { viewports: ['sm', 'lg', 'xl'] },
	},
} satisfies Meta<typeof NeoLinkButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	tags: ['snapshot'],
}

export const Small: Story = {
	tags: ['snapshot'],
	args: { size: 'small' },
}

export const Large: Story = {
	tags: ['snapshot'],
	args: { size: 'large' },
}

export const Rounded: Story = {
	tags: ['snapshot'],
	args: { rounded: true },
}

export const Secondary: Story = {
	tags: ['snapshot'],
	args: { variant: 'secondary' },
}

export const Tertiary: Story = {
	tags: ['snapshot'],
	args: { variant: 'tertiary' },
}

export const Ghost: Story = {
	tags: ['snapshot'],
	args: { variant: 'ghost', text: 'Ghost Link' },
}

export const External: Story = {
	tags: ['snapshot'],
	args: {
		text: 'Open in new tab',
		href: 'https://example.com',
		external: true,
	},
}

export const WithIconStart: Story = {
	tags: ['snapshot'],
	args: {
		text: 'With Icon Start',
		iconStart: AddIcon,
	},
}

export const WithIconEnd: Story = {
	tags: ['snapshot'],
	args: {
		text: 'With Icon End',
		iconEnd: DeleteIcon,
	},
}

export const FullWidth: Story = {
	tags: ['snapshot'],
	args: {
		variant: 'ghost',
		text: 'Full Width Link',
		fullWidth: true,
		iconEnd: AddIcon,
	},
}

export const Disabled: Story = {
	tags: ['snapshot'],
	args: {
		disabled: true,
		text: 'Disabled Link',
	},
	parameters: {
		docs: {
			source: {
				code: `<NeoLinkButton href="/page" color="blue" :disabled="true" text="Disabled Link" />`,
			},
		},
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
		text: 'انتقل إلى الصفحة',
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
	render: createSimpleColorShowcase(NeoLinkButton, ['primary', 'secondary', 'tertiary', 'ghost']),
}

export const AllColorsOnDark: Story = {
	tags: ['snapshot'],
	globals: {
		backgrounds: '#000',
	},
	parameters: {
		snapshot: { viewports: ['sm', 'xl'] },
	},
	render: createSimpleColorShowcase(NeoLinkButton, ['primary', 'secondary', 'tertiary', 'ghost'], {
		dark: true,
	}),
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
