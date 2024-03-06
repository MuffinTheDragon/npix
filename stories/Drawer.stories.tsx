import { Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import type { StoryObj } from "@storybook/react";

import { Button, Drawer } from "../lib";
import { preview } from "../.storybook/preview";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: "Example/Drawer",
	component: Drawer,
	tags: ["autodocs"],
	decorators: [...preview.decorators],
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof Drawer>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Example: Story = {
	args: {
		isOpen: false,
		title: "My Drawer",
		placement: "right",
		closeOnEsc: true,
		backdrop: true,
	},
	/**
	 * 👇 To avoid linting issues, it is recommended to use a function with a capitalized name.
	 * If you are not concerned with linting, you may use an arrow function.
	 */
	render: function Render(args) {
		const [{ isOpen }, updateArgs] = useArgs();

		function onChange() {
			updateArgs({ isOpen: !isOpen });
		}

		return (
			<div>
				<Button onClick={onChange}>Try me!</Button>
				<Drawer {...args} handleClose={onChange}>
					<p>Drawer body content</p>
					<p>Drawer body content</p>
					<p>Drawer body content</p>
					<p>Drawer body content</p>
				</Drawer>
			</div>
		);
	},
};
