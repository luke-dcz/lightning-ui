import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./chip"

const meta: Meta<typeof Chip> = {
	component: Chip
}

export default meta

type Story = StoryObj<typeof Chip>

export const Default: Story = {
	args: {
		children: "Chip"
	}
}