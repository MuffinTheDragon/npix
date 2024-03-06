import { cn } from "@/lib/utils";
import type { ButtonProps } from "./Button";
import { Button } from "./Button";
import { forwardRef } from "react";

export const ButtonGroup = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	const { className, children, ...rest } = props;

	const styles = cn("inline-flex relative shadow-sm rounded-lg", className);

	return (
		<div
			className={styles}
			ref={ref}
			{...rest}
			role="group"
			aria-label="Button group"
		>
			{children}
		</div>
	);
});

ButtonGroup.displayName = "ButtonGroup";

export const ButtonGroupButton = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const { className, children, ...rest } = props;

		const styles = cn(
			"rounded-r-none rounded-l-none first:rounded-l-lg last:rounded-r-lg border-0 border-t border-b border-r first:border-l border-border",
			className
		);

		return (
			<Button className={styles} {...rest} ref={ref}>
				{children}
			</Button>
		);
	}
);

ButtonGroupButton.displayName = "ButtonGroupButton";
