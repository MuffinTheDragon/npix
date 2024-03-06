import React, { forwardRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import {
	CheckCircleIcon,
	ExclamationTriangleIcon,
	InformationCircleIcon,
	XCircleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { cn } from "@/lib/utils";

export type AlertType = "success" | "warning" | "info" | "danger";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	type: AlertType;
	title: string;
};

type Ref = HTMLDivElement;

function GetIcon(type: AlertType) {
	if (type === "success") return <CheckCircleIcon fill="#76c12b" />;

	if (type === "warning") return <ExclamationTriangleIcon fill="#e9b20c" />;

	if (type === "info") return <InformationCircleIcon fill="#4d73fe" />;

	if (type === "danger") return <XCircleIcon fill="#e45f47" />;
}

function GetAlertStyles(type: AlertType, customStyles: string) {
	return cn(
		"border rounded-lg py-1 px-4 break-all dark:bg-gray-800",
		customStyles,
		{
			"border-success-border bg-green-50 text-success-foreground":
				type === "success",
			"border-warning-border bg-yellow-50 text-warning-foreground":
				type === "warning",
			"border-info-border bg-blue-50 text-info-foreground":
				type === "info",
			"border-danger-border bg-red-50 text-danger-foreground":
				type === "danger",
		}
	);
}

function GetXButtonStyles(type: AlertType) {
	return clsx("hover:cursor-pointer rounded-md w-5 h-5", {
		"hover:bg-success-border/50 focus:ring-2 focus:ring-success-border":
			type === "success",
		"hover:bg-warning-border/50 focus:ring-2 focus:ring-warning-border":
			type === "warning",
		"hover:bg-info-border/50 focus:ring-2 focus:ring-info-border":
			type === "info",
		"hover:bg-danger-border/50 focus:ring-2 focus:ring-danger-border":
			type === "danger",
	});
}

export const Alert = forwardRef<Ref, Props>((props, ref) => {
	const { type, title, className, children, ...rest } = props;

	const [showAlert, setShowAlert] = useState(true);

	const icon = GetIcon(type);
	const alertStyles = GetAlertStyles(type, className ?? "");
	const xButtonStyles = GetXButtonStyles(type);
	return (
		<CSSTransition
			in={showAlert}
			classNames="fade"
			appear
			unmountOnExit
			timeout={300}
		>
			<div role="alert" className={alertStyles} ref={ref} {...rest}>
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<div className="w-6 h-6">{icon}</div>
						<div className="pl-[8px] font-semibold text-medium">
							{title}
						</div>
					</div>
					<button
						className={xButtonStyles}
						onClick={() => setShowAlert(false)}
					>
						<XMarkIcon />
					</button>
				</div>

				{children && <div className="ml-8 text-sm">{children}</div>}
			</div>
		</CSSTransition>
	);
});

Alert.displayName = "Alert";
