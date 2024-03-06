import { forwardRef } from "react";
import { Spinner } from "./Spinner";
import clsx from "clsx";
import { cn } from "@/lib/utils";

export type ButtonType = "primary" | "default" | "danger" | "link" | "ghost";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	type?: ButtonType;
	size?: ButtonSize;
	disabled?: boolean;
	isLoading?: boolean;
};

type Ref = HTMLButtonElement;

function GetButtonStyles(type: ButtonType, customStyles: string) {
	return cn(
		"rounded-lg focus:ring-4 disabled:cursor-not-allowed text-sm disabled:opacity-50",
		{
			"bg-primary text-white hover:bg-primary/90 border border-primary-border":
				type === "primary",
			"bg-accent hover:bg-accent-hover border border-border":
				type === "default",
			"bg-danger text-white hover:bg-danger/90 border-danger-border":
				type === "danger",
			"underline-offset-4 hover:underline": type === "link",
			"hover:bg-accent-hover": type === "ghost",
		},
		customStyles
	);
}

export function GetSizeStyles(size: ButtonSize) {
	return clsx({
		"px-2 py-1": size === "small",
		"px-3 py-2": size === "medium",
		"px-4 py-3": size === "large",
	});
}

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
	const {
		type = "default",
		size = "medium",
		className,
		children,
		disabled,
		isLoading,
		...rest
	} = props;

	const buttonStyles = GetButtonStyles(type, className ?? "");
	const sizeStyles = GetSizeStyles(size);

	return (
		<button
			disabled={isLoading || disabled}
			type="button"
			className={buttonStyles + " " + sizeStyles}
			ref={ref}
			{...rest}
		>
			{isLoading ? (
				<span className="inline-flex items-center">
					<Spinner className="mr-2" />
					Please wait
				</span>
			) : (
				children
			)}
			{/* {children} */}
		</button>
	);
});

Button.displayName = "Button";
