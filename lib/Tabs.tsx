import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";

type Tabs = {
	key: string;
	label: string;
};

type Props = React.HTMLAttributes<HTMLDivElement> & {
	children: any[];
};

type Ref = HTMLDivElement;

type TabProps = {
	activeTab: string;
	label: string;
	onClick: any;
};

const Tab = (props: TabProps) => {
	const { activeTab, label, onClick } = props;

	const styles = cn(
		"text-foreground list-none cursor-pointer py-2 px-4 rounded-lg font-medium text-sm",
		{
			"font-bold bg-secondary/40": activeTab === label,
		}
	);
	return (
		<li key={label} onClick={onClick} className={styles}>
			{label}
		</li>
	);
};

export const Tabs = forwardRef<Ref, Props>((props, ref) => {
	const { className, children, ...rest } = props;

	const styles = cn("break-words", className);
	const [activeTab, setActiveTab] = useState(children[0].props["data-label"]);

	const onClick = (tab: string) => {
		setActiveTab(tab);
	};
	return (
		<div
			ref={ref}
			{...rest}
			className={styles}
			role="tablist"
			aria-label="Tabs"
		>
			<div className="flex flex-wrap text-center items-center justify-center border-b border-border bg-muted rounded-lg p-2">
				{children.map((tab) => {
					const { "data-label": label } = tab.props;
					return (
						<Tab
							key={label}
							activeTab={activeTab}
							onClick={() => onClick(label)}
							label={label}
						/>
					);
				})}
			</div>
			<div className="mt-2">
				{children.map((tab) => {
					const { "data-label": label } = tab.props;
					if (label !== activeTab) return undefined;

					return tab.props.children;
				})}
			</div>
		</div>
	);
});

Tabs.displayName = "Tabs";
