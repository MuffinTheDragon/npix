import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

type Ref = HTMLInputElement;

export const Checkbox = forwardRef<Ref, Props>((props, ref) => {
	const { className, ...rest } = props;

	const styles = cn(
		"peer mr-1 rounded-md appearance-none w-4 h-4 border border-border rounded focus:ring-2 focus:ring-primary-border checked:bg-primary",
		className
	);

	return (
		<span className="inline-flex gap-2">
			<input type="checkbox" ref={ref} {...rest} className={styles} />
			<svg
				className="absolute mt-1 hidden peer-checked:block pointer-events-none"
				xmlns="http://www.w3.org/2000/svg"
				width={16}
				height={16}
				viewBox="0 0 12 20"
				fill="none"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<polyline points="1 5 4 8 11 1"></polyline>
			</svg>
		</span>
	);
});

Checkbox.displayName = "Checkbox";
