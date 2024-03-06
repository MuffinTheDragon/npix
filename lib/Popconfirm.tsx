import { forwardRef, useState } from "react";
import clsx from "clsx";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import type { ButtonProps } from "./Button";
import { Button } from "./Button";
import { CSSTransition } from "react-transition-group";

type Props = React.HTMLAttributes<HTMLDivElement> & {
	title: React.ReactNode;
	content: React.ReactNode;
	icon?: React.ReactNode;
	placement?: "left" | "top" | "right" | "bottom";
	onOk: (e: any) => any;
	okButtonProps?: ButtonProps;
	onCancel: (e: any) => any;
	cancelButtonProps?: ButtonProps;
	okText?: string;
	cancelText?: string;
	className?: string;
};

type Ref = HTMLDivElement;

export const Popconfirm = forwardRef<Ref, Props>((props, ref) => {
	const {
		title,
		content,
		icon = <ExclamationCircleIcon className="text-yellow-500 w-5 h-5" />,
		placement = "top",
		onOk,
		okButtonProps,
		onCancel,
		cancelButtonProps,
		okText = "Confirm",
		cancelText = "Cancel",
		children,
		className,
	} = props;

	const [showConfirm, setShowConfirm] = useState(false);

	const popConfirmStyles = clsx(
		"absolute break-words w-[300px] p-4 bg-accent text-sm after:absolute after:border-[5px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-lg",
		{
			"bottom-[120%] left-[50%] -ml-[150px] after:top-[100%] after:left-[50%] after:-ml-[5px] after:border-b-transparent after:border-s-transparent after:border-e-transparent after:border-t-accent":
				placement === "top",
			"-top-[40px] left-[100%] mt-0.5 ml-3 after:top-[50%] after:right-[100%] after:-mt-[5px] after:border-t-transparent after:border-b-transparent after:border-s-transparent after:border-e-accent":
				placement === "right",
			"top-[150%] left-[50%] -ml-[150px] after:bottom-[100%] after:left-[50%] after:-ml-[5px] after:border-t-transparent after:border-s-transparent after:border-e-transparent after:border-b-accent":
				placement === "bottom",
			"-top-[40px] right-[100%]  mt-0.5 mr-3  after:top-[50%] after:left-[100%] after:-mt-[5px] after:border-t-transparent after:border-b-transparent after:border-e-transparent after:border-s-accent":
				placement === "left",
		},
		className
	);

	const onCancelClick = (e: any) => {
		setShowConfirm(false);
		onCancel(e);
	};

	const onOkClick = (e: any) => {
		setShowConfirm(false);
		onOk(e);
	};
	return (
		<div className="text-sm relative inline-flex">
			<div onClick={() => setShowConfirm(!showConfirm)}>{children}</div>
			<CSSTransition
				in={showConfirm}
				timeout={200}
				classNames="fade"
				appear
				unmountOnExit
			>
				<div className={popConfirmStyles} ref={ref}>
					<div className="flex">
						<div className="flex-shrink-0">
							<div>{icon}</div>
						</div>
						<div className="ml-3">
							<p className="font-semibold">{title}</p>
							<div className="ml-auto mt-1">{content}</div>
						</div>
					</div>
					<div className="mt-2 float-right space-x-2">
						<Button
							onClick={onCancelClick}
							size="small"
							{...cancelButtonProps}
						>
							{cancelText}
						</Button>
						<Button
							size="small"
							type="primary"
							onClick={onOkClick}
							{...okButtonProps}
						>
							{okText}
						</Button>
					</div>
				</div>
			</CSSTransition>
		</div>
	);
});

Popconfirm.displayName = "Popconfirm";
