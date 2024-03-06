import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import { toast } from "../lib";
import { ToastProps } from "../lib";
import { Button } from "../lib";
import { preview } from "../.storybook/preview";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: "Example/Toast",
	tags: ["autodocs"],
	decorators: [...preview.decorators],
} satisfies Meta<ToastProps>;

export default meta;
type Story = StoryObj<ToastProps>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const TopRight: Story = {
	args: {
		placement: "top-right",
	},
	render: (args) => (
		<Button
			type="ghost"
			onClick={() => {
				toast({
					title: "Test notification",
					placement: args.placement,
					icon: (
						<CheckCircleIcon fill="#76c12b" className="w-6 h-6" />
					),
				});
			}}
		>
			Try me!
		</Button>
	),
};
