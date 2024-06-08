import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button"

const meta: Meta<typeof Button> = {
	component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
	args: {
		children: "Click Me",
	}
}

export const CustomStyles: Story = {
	args: {
		children: "Click Me",
		className: "bg-pink-500 hover:bg-pink-400"
	}
}

export const DisabledButton: Story = {
	args: {
		children: "Disabled Button",
		isDisabled: true
	}
}

export const SmallButton: Story = {
	args: {
		children: "Button",
		size: 'sm'
	}
}

export const MediumButton: Story = {
	args: {
		children: "Button",
		size: 'md'
	}
}

export const LargeButton: Story = {
	args: {
		children: "Button",
		size: 'lg'
	}
}

export const XLargeButton: Story = {
	args: {
		children: "Button",
		size: 'xl'
	}
}

export const NoBorderRadius: Story = {
	args: {
		children: "Button",
		borderRadius: 'none'
	}
}

export const FullBorderRadius: Story = {
	args: {
		children: "Button",
		borderRadius: 'full'
	}
}