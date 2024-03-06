import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	interactive?: boolean;
};
type Ref = HTMLDivElement;

export const CardTitle = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	const { className, ...rest } = props;

	const styles = cn("font-semibold leading-none", className);

	return <div ref={ref} className={styles} {...rest} />;
});

CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	const { className, ...rest } = props;

	const styles = cn("text-sm text-muted-foreground", className);

	return <div ref={ref} className={styles} {...rest} />;
});

CardDescription.displayName = "CardDescription";

export const Card = forwardRef<Ref, Props>((props, ref) => {
	const { interactive = false, className, children, ...rest } = props;

	const styles = cn(
		"border border-border shadow rounded-lg p-6 bg-background",
		{
			"cursor-pointer hover:shadow hover:shadow-accent-hover":
				interactive,
		},
		className
	);

	return (
		<div ref={ref} className={styles} {...rest}>
			{children}
		</div>
	);
});

Card.displayName = "Card";
