import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
	size?: "default" | "large";
};

type Ref = HTMLSpanElement;

export const Spinner = forwardRef<Ref, Props>((props, ref) => {
	const { size = "default", className } = props;

	const spinnerStyles = cn(
		"animate-spin",
		{
			"w-3 h-3": size === "default",
			"w-8 h-8": size === "large",
		},
		className
	);

	return (
		<span className="flex justify-center items-center" ref={ref}>
			<svg
				className={spinnerStyles}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle
					className="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				></circle>
				<path
					className="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
		</span>
	);
});

Spinner.displayName = "Spinner";
