import { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
	title: React.ReactNode;
	placement?: "left" | "top" | "right" | "bottom";
	className?: string;
	children: React.ReactNode;
};

type Ref = HTMLDivElement;

export const Tooltip = forwardRef<Ref, Props>((props, ref) => {
	const { title, placement = "top", className, children, ...rest } = props;

	const [visible, setVisible] = useState(false);

	const styles = cn("relative inline-flex align-top w-fit", className);

	const tooltipStyles = clsx(
		"absolute break-words w-[120px] p-2 after:absolute after:border-[5px] after:border-solid text-center text-sm font-semibold bg-accent rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]",
		{
			"-top-[5px] left-[100%] mt-0.5 ml-3 after:top-[50%] after:right-[100%] after:-mt-[5px] after:border-t-transparent after:border-b-transparent after:border-s-transparent after:border-e-accent":
				placement === "right",
			"bottom-[100%] left-[50%] -ml-[60px] after:top-[100%] after:left-[50%] after:-ml-[5px] after:border-b-transparent after:border-s-transparent after:border-e-transparent after:border-t-accent":
				placement === "top",
			"top-[150%] left-[50%] -ml-[60px] after:bottom-[100%] after:left-[50%] after:-ml-[5px] after:border-t-transparent after:border-s-transparent after:border-e-transparent after:border-b-accent":
				placement === "bottom",
			"-top-[5px] right-[100%]  mt-0.5 mr-3  after:top-[50%] after:left-[100%] after:-mt-[5px] after:border-t-transparent after:border-b-transparent after:border-e-transparent after:border-s-accent":
				placement === "left",
		}
	);

	return (
		<div ref={ref} className={styles} {...rest}>
			<span
				className="underline decoration-dashed underline-offset-4 hover:cursor-help"
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
			>
				{children}
			</span>
			<CSSTransition
				in={visible}
				timeout={200}
				classNames="fade"
				appear
				unmountOnExit
			>
				<div className={tooltipStyles} role="tooltip">
					{title}
				</div>
			</CSSTransition>
		</div>
	);
});

Tooltip.displayName = "Tooltip";
