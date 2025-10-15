import type { Meta, StoryObj } from '@storybook/vue3'
import NeoImage from './NeoImage.vue'

const meta = {
	title: 'Atoms/NeoImage',
	component: NeoImage,
	tags: ['autodocs'],
	argTypes: {
		objectFit: {
			control: 'select',
			options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
		},
		loading: {
			control: 'select',
			options: ['eager', 'lazy'],
		},
	},
	args: {
		src: 'https://picsum.photos/400/300',
		alt: 'Example image',
		width: 400,
		height: 300,
		loading: 'lazy',
	},
} satisfies Meta<typeof NeoImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}

export const Contain: Story = {
	args: {
		objectFit: 'contain',
		width: 400,
		height: 400,
	},
}

export const Cover: Story = {
	args: {
		objectFit: 'cover',
		width: 400,
		height: 400,
	},
}

export const Rounded: Story = {
	args: {
		rounded: true,
	},
}

export const Circle: Story = {
	args: {
		circle: true,
		src: 'https://picsum.photos/300/300',
		width: 300,
		height: 300,
		objectFit: 'cover',
	},
}

export const Avatar: Story = {
	args: {
		circle: true,
		src: 'https://picsum.photos/200/200',
		width: 100,
		height: 100,
		objectFit: 'cover',
		alt: 'User avatar',
	},
}

export const ErrorState: Story = {
	args: {
		src: 'https://invalid-url-that-will-fail.jpg',
		alt: 'This image will fail to load',
		width: 400,
		height: 300,
	},
}

export const ResponsiveWidth: Story = {
	args: {
		src: 'https://picsum.photos/800/400',
		alt: 'Responsive image',
		width: '100%',
		height: 300,
		objectFit: 'cover',
	},
}
