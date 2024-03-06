import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import { Popconfirm, Button } from "../lib";
import { preview } from "../.storybook/preview";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: "Example/Popconfirm",
	component: Popconfirm,
	tags: ["autodocs"],
	decorators: [...preview.decorators],
} satisfies Meta<typeof Popconfirm>;

export default meta;

type Story = StoryObj<typeof Popconfirm>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Example: Story = {
	args: { title: "Popconfirm", content: <p>Test content</p> },
	/**
	 * 👇 To avoid linting issues, it is recommended to use a function with a capitalized name.
	 * If you are not concerned with linting, you may use an arrow function.
	 */
	render: function Render(args) {
		return (
			<div>
				<Popconfirm {...args}>
					<Button>Popconfirm here</Button>
				</Popconfirm>{" "}
			</div>
		);
	},
};
