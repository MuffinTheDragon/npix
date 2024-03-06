import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import { ButtonGroup, ButtonGroupButton } from "../lib";
import { preview } from "../.storybook/preview";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: "Example/Button Group",
	component: ButtonGroup,
	tags: ["autodocs"],
	decorators: [...preview.decorators],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
	render: () => (
		<ButtonGroup>
			<ButtonGroupButton>Add</ButtonGroupButton>
			<ButtonGroupButton>Edit</ButtonGroupButton>
			<ButtonGroupButton>Delete</ButtonGroupButton>
		</ButtonGroup>
	),
};

export const Mixed: Story = {
	render: () => (
		<ButtonGroup>
			<ButtonGroupButton type="primary">Add</ButtonGroupButton>
			<ButtonGroupButton>Edit</ButtonGroupButton>
			<ButtonGroupButton type="danger">Delete</ButtonGroupButton>
		</ButtonGroup>
	),
};
