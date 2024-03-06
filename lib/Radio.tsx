import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

type Ref = HTMLInputElement;

export const Radio = forwardRef<Ref, Props>((props, ref) => {
	const { className, ...rest } = props;

	const styles = cn(
		"peer mr-1 relative w-4 h-4 appearance-none rounded-full border border-border focus:ring-2 focus:ring-primary-border checked:bg-primary",
		className
	);

	return (
		<span className="inline-flex gap-2">
			<input type="radio" ref={ref} {...rest} className={styles} />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="absolute w-4 h-4 mt-1 hidden peer-checked:block pointer-events-none"
				viewBox="0 0 16 16"
				fill="white"
			>
				<circle data-name="ellipse" cx="8" cy="4" r="2"></circle>
			</svg>
		</span>
	);
});

Radio.displayName = "Radio";
