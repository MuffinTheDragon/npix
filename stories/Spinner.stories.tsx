import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import { Spinner } from "../lib";
import { preview } from "../.storybook/preview";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: "Example/Spinner",
	component: Spinner,
	tags: ["autodocs"],
	decorators: [...preview.decorators],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
	args: {
		size: "default",
	},
};

export const Large: Story = {
	args: {
		size: "large",
	},
};
