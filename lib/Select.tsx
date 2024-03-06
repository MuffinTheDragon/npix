import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLSelectElement> & {
	options: {
		value: string | number | readonly string[] | undefined;
		label: string;
	}[];
};

type Ref = HTMLSelectElement;

export const Select = forwardRef<Ref, Props>((props, ref) => {
	const { options, className, ...rest } = props;

	const styles = cn(
		"bg-accent border border-border text-sm rounded-md focus:ring focus:border-primary-border p-1.5",
		className
	);

	return (
		<select ref={ref} {...rest} className={styles}>
			{options.map((i, index) => (
				<option
					key={index}
					value={i.value}
					className="bg-transparent rounded-md text-foreground"
				>
					{i.label}
				</option>
			))}
		</select>
	);
});

Select.displayName = "Select";
