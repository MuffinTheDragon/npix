import { forwardRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import clsx from "clsx";
import { cn } from "@/lib/utils";

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
	isOpen: boolean;
	handleClose: () => any;
	backdrop?: boolean;
	placement: "left" | "top" | "right" | "bottom";
};

type Ref = HTMLDivElement;

export const DrawerTitle = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	const { className, ...rest } = props;

	const styles = cn("font-semibold leading-none", className);

	return <div ref={ref} className={styles} {...rest} />;
});

DrawerTitle.displayName = "DrawerTitle";

export const DrawerDescription = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	const { className, ...rest } = props;

	const styles = cn("text-sm text-muted-foreground", className);

	return <div ref={ref} className={styles} {...rest} />;
});

DrawerDescription.displayName = "DrawerDescription";

export const Drawer = forwardRef<Ref, DrawerProps>(
	(props: DrawerProps, ref) => {
		const {
			isOpen,
			placement,
			backdrop = true,
			handleClose,
			className,
			children,
			...rest
		} = props;

		useEffect(() => {
			function closeOnEscape(e: KeyboardEvent) {
				if (e.key === "Escape") handleClose();
			}

			document.addEventListener("keydown", closeOnEscape);

			return () => document.removeEventListener("keydown", closeOnEscape);
		}, [handleClose]);

		useEffect(() => {
			if (isOpen && backdrop) document.body.style.overflow = "hidden";
			else document.body.style.overflow = "unset";
		}, [backdrop, isOpen]);

		const placementStyles = clsx("fixed z-50", {
			"top-0 bottom-0 right-0": placement === "right",
			"top-0 bottom-0 left-0": placement === "left",
			"top-0 left-0 right-0": placement === "top",
			"bottom-0 left-0 right-0": placement === "bottom",
		});

		const drawerStyles = cn(
			"break-all overflow-auto flex flex-col shadow-sm p-6 bg-background border border-border border-0",
			className,
			{
				"h-screen w-[400px]":
					placement === "right" || placement === "left",
				"border-s": placement === "right",
				"border-e": placement === "left",
				"border-t": placement === "bottom",
				"border-b": placement === "top",
			}
		);

		const transition = () => {
			switch (placement) {
				case "bottom":
					return "slide-in-bottom";

				case "top":
					return "slide-in-top";

				case "left":
					return "slide-in-left";

				case "right":
					return "slide-in-right";
			}
		};

		return (
			<div>
				{isOpen && backdrop && (
					<div
						className="absolute top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black opacity-50 z-50"
						onClick={handleClose}
					/>
				)}
				<CSSTransition
					in={isOpen}
					timeout={300}
					classNames={transition()}
					appear
					unmountOnExit
				>
					<div className={placementStyles} ref={ref} {...rest}>
						<div className={drawerStyles}>
							<div className="absolute top-4 right-4">
								<button
									className="h-5 w-5 rounded-md focus:ring-4 hover:bg-accent-hover"
									onClick={handleClose}
								>
									<XMarkIcon />
								</button>
								<span className="sr-only">Close</span>
							</div>
							{children}
						</div>
					</div>
				</CSSTransition>
			</div>
		);
	}
);

Drawer.displayName = "Drawer";
