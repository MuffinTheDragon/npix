import { Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import type { StoryObj } from "@storybook/react";

import { Button, Modal } from "../lib";
import { preview } from "../.storybook/preview";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: "Example/Modal",
	component: Modal,
	tags: ["autodocs"],
	decorators: [...preview.decorators],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Example: Story = {
	args: {
		isOpen: false,
		title: "My Modal",
		staticBackdrop: false,
		closeOnEsc: true,
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
				<Modal {...args} onCancel={onChange} onOk={onChange}>
					<p>Drawer body content</p>
					<p>Drawer body content</p>
					<p>Drawer body content</p>
					<p>Drawer body content</p>
				</Modal>
			</div>
		);
	},
};

export const CustomFooter: Story = {
	args: {
		isOpen: false,
		title: "My Modal",
		staticBackdrop: false,
		closeOnEsc: true,
		footer: <div>This is a custom footer!</div>,
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
				<Modal {...args} onCancel={onChange} onOk={onChange}>
					<p>Drawer body content</p>
					<p>Drawer body content</p>
					<p>Drawer body content</p>
					<p>Drawer body content</p>
				</Modal>
			</div>
		);
	},
};
