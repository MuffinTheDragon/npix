import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import { CSSTransition } from "react-transition-group";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";

export type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
	title: React.ReactNode;
	icon?: React.ReactNode;
	placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

const Toast = (props: ToastProps) => {
	const {
		title,
		icon,
		placement = "top-right",
		className,
		children,
		...rest
	} = props;

	const [open, setOpen] = useState(false);

	/**
	 * add a small timeout to allow the css transition to play on appear
	 */
	useEffect(() => {
		setTimeout(() => setOpen(true), 10);
	}, []);

	const position = clsx("fixed", {
		"top-0 left-0": placement === "top-left",
		"top-0 right-0": placement === "top-right",
		"bottom-0 left-0": placement === "bottom-left",
		"bottom-0 right-0": placement === "bottom-right",
	});

	const styles = cn(
		"md:w-96 shadow-2xl m-4 rounded-lg border p-4 bg-accent border border-border z-10",
		className
	);

	const transition = () => {
		switch (placement) {
			case "bottom-left":
			case "top-left":
				return "slide-in-left";

			case "bottom-right":
			case "top-right":
				return "slide-in-right";
		}
	};

	return createPortal(
		<CSSTransition
			in={open}
			timeout={300}
			classNames={transition()}
			appear
			unmountOnExit
		>
			<div className={position} id="toast">
				<div className={styles} {...rest}>
					<div className="flex items-center justify-between">
						<div className="inline-flex">
							<div>{icon}</div>
							<div className="pl-[8px]">{title}</div>
						</div>
						<button
							className="h-5 w-5 rounded-md focus:ring-4 hover:bg-accent-hover"
							onClick={() => setOpen(false)}
						>
							<XMarkIcon />
						</button>
					</div>
					<div className="ml-8">{children}</div>
				</div>
			</div>
		</CSSTransition>,
		document.body
	);
};

function createToast(props: ToastProps) {
	document.getElementById("toast")?.remove();

	const div = document.createElement("div");
	document.body.appendChild(div);

	const root = createRoot(div);
	root.render(<Toast {...props} />);

	div.remove();
}

export function toast(props: ToastProps) {
	createToast(props);
}
