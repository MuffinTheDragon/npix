import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { preview } from "../.storybook/preview";

import { Alert } from "../lib";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: "Example/Alert",
	component: Alert,
	tags: ["autodocs"],
	decorators: [...preview.decorators],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Success: Story = {
	render: (args) => {
		return (
			<Alert type={args.type} title={args.title}>
				{args.children}
			</Alert>
		);
	},
	args: {
		type: "success",
		title: "Success",
		children: "Action completed successfully.",
	},
};

export const Warning: Story = {
	args: {
		type: "warning",
		title: "Warning",
	},
};

export const Informational: Story = {
	args: {
		type: "info",
		title: "Informational",
	},
};

export const Danger: Story = {
	args: {
		type: "danger",
		title: "Error",
		children: (
			<p>
				Try again{" "}
				<a href="#" className="underline">
					here
				</a>
			</p>
		),
	},
};

// https://www.youtube.com/watch?v=Fh-xdSf9uH0&ab_channel=TheOpinionatedDev
