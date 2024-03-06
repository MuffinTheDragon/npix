import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import { Button } from "../lib";
import { preview } from "../.storybook/preview";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: "Example/Button",
	component: Button,
	tags: ["autodocs"],
	decorators: [...preview.decorators],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
	args: {
		type: "primary",
		size: "medium",
		disabled: false,
		isLoading: false,
		children: (
			<span className="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-5 h-5 mr-2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>
				Add
			</span>
		),
	},
};

export const Default: Story = {
	args: {
		type: "default",
		size: "medium",
		disabled: false,
		isLoading: false,
		children: (
			<span className="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-5 h-5 mr-2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>
				Add
			</span>
		),
	},
};

export const Danger: Story = {
	args: {
		type: "danger",
		size: "medium",
		disabled: false,
		isLoading: false,
		children: (
			<span className="flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-5 h-5 mr-2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>
				Add
			</span>
		),
	},
};
