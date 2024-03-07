"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { cn } from "@/lib/utils";

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & {
	isOpen: boolean;
	staticBackdrop?: boolean;
	onCancel: () => void;
	children?: React.ReactNode;
};

type Ref = HTMLDivElement;

export const ModalTitle = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	const { className, ...rest } = props;

	const styles = cn("font-semibold leading-none", className);

	return <div ref={ref} className={styles} {...rest} />;
});

ModalTitle.displayName = "ModalTitle";

export const ModalDescription = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
	const { className, ...rest } = props;

	const styles = cn("text-sm text-muted-foreground", className);

	return <div ref={ref} className={styles} {...rest} />;
});

ModalDescription.displayName = "ModalDescription";

export const Modal = forwardRef<Ref, Props>((props, ref) => {
	const {
		staticBackdrop = false,
		isOpen,
		onCancel,
		children,
		className,
	} = props;

	const handleBackdropClick = useCallback(() => {
		if (staticBackdrop) {
			setPlayAnimation(true);
			setTimeout(() => setPlayAnimation(false), 200);
			return;
		}

		onCancel();
	}, [onCancel, staticBackdrop]);

	useEffect(() => {
		function closeOnEscape(e: KeyboardEvent) {
			if (e.key === "Escape") handleBackdropClick();
		}

		document.addEventListener("keydown", closeOnEscape);

		return () => document.removeEventListener("keydown", closeOnEscape);
	}, [handleBackdropClick]);

	const [playAnimation, setPlayAnimation] = useState(false);

	const styles = cn(
		"p-6 transition-all duration-200 bg-background border border-border shadow-sm rounded-lg w-[75dvw] sm:w-[400px]",
		{
			"scale-105": playAnimation,
			"scale-100": !playAnimation,
		},
		className
	);

	return (
		<div>
			{isOpen && (
				<div
					className="fixed inset-0 backdrop-blur bg-black/80 z-50"
					onClick={handleBackdropClick}
				></div>
			)}
			<CSSTransition
				in={isOpen}
				timeout={300}
				classNames="fade"
				appear
				unmountOnExit
			>
				<div
					className="fixed left-[50%] top-[50%] flex items-center justify-center z-50 -translate-y-[50%] -translate-x-[50%]"
					role="dialog"
				>
					<div className={styles} ref={ref}>
						<div className="absolute top-4 right-4">
							<button
								className="h-5 w-5 rounded-md focus:ring-4 hover:bg-accent-hover cursor-pointer"
								onClick={onCancel}
							>
								<XMarkIcon />
							</button>
							<span className="sr-only">Close</span>
						</div>
						<main>{children}</main>
					</div>
				</div>
			</CSSTransition>
		</div>
	);
});

Modal.displayName = "Modal";
