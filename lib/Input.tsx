import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, Props>((props, ref) => {
	const { className, ...rest } = props;

	const styles = cn(
		"flex w-full border border-border rounded-md px-2 py-1 bg-background file:text-foreground file:bg-transparent file:border-0 disabled:cursor-not-allowed disabled:bg-muted-foreground/10 dark:[color-scheme:dark]",
		className
	);

	return <input ref={ref} {...rest} className={styles} />;
});

Input.displayName = "Input";
