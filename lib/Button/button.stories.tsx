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
