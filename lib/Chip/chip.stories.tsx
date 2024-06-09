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

export const SmallChip: Story = {
	args: {
		children: "Chip",
		size: 'sm'
	}
}

export const LargeChip: Story = {
	args: {
		children: "Chip",
		size: 'lg'
	}
}

export const NoRadius: Story = {
	args: {
		children: "Chip",
		radius: "none"
	}
}

export const MediumRadius: Story = {
	args: {
		children: "Chip",
		radius: "md"
	}
}

export const BorderedVariantChip: Story = {
	args: {
		children: "Chip",
		variant: "bordered"
	}
}