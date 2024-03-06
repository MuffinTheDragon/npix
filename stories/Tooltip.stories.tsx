import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import { Tooltip } from "../lib";
import { preview } from "../.storybook/preview";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: "Example/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
	decorators: [...preview.decorators],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Text: Story = {
	render: (args) => (
		<p>
			Show tooltip hover{" "}
			<Tooltip placement={args.placement} title={args.title}>
				here
			</Tooltip>
		</p>
	),
	args: {
		placement: "right",
		title: "Tooltip content",
	},
};

export const Icon: Story = {
	render: (args) => (
		<p>
			<Tooltip placement={args.placement} title={args.title}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
					/>
				</svg>
			</Tooltip>
		</p>
	),
	args: {
		placement: "right",
		title: "Tooltip content",
	},
};
