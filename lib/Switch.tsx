import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

type Ref = HTMLInputElement;

export const Switch = forwardRef<Ref, Props>((props, ref) => {
	const { checked, className, ...rest } = props;

	const styles = cn(
		"w-11 h-0 cursor-pointer inline-block focus:outline-0 border-0 focus:ring-offset-transparent focus:ring-transparent focus-within:ring-0 focus:shadow-none after:absolute before:absolute after:top-0 before:top-0 after:block before:inline-block before:rounded-full after:rounded-full after:content-[''] after:w-5 after:h-5 after:mt-0.5 after:ml-0.5 after:shadow-md after:duration-100 before:content-[''] before:w-10 before:h-full before:shadow-[inset_0_0_#000] after:bg-white before:bg-secondary disabled:after:bg-opacity-75 disabled:cursor-not-allowed",
		{
			"before:bg-primary after:duration-300 after:translate-x-4 disabled:before:bg-opacity-40":
				checked,
		},
		className
	);
	return (
		<span className="relative inline-block cursor-pointer">
			<input type="checkbox" ref={ref} {...rest} className={styles} />
		</span>
	);
});

Switch.displayName = "Switch";
