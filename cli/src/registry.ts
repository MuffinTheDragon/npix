export type RegistryTypes =
	| "Alert"
	| "Button"
	| "ButtonGroup"
	| "Card"
	| "Checkbox"
	| "Drawer"
	| "Input"
	| "Modal"
	| "Popconfirm"
	| "Radio"
	| "Select"
	| "Spinner"
	| "Switch"
	| "Tabs"
	| "Toast"
	| "Tooltip";

export const Registry: { [name in RegistryTypes]: { files: string[] } } = {
	Alert: { files: ["Alert"] },
	Button: { files: ["Button", "Spinner"] },
	ButtonGroup: { files: ["ButtonGroup", "Button"] },
	Card: { files: ["Card"] },
	Checkbox: { files: ["Checkbox"] },
	Drawer: { files: ["Drawer"] },
	Input: { files: ["Input"] },
	Modal: { files: ["Modal"] },
	Popconfirm: { files: ["Popconfirm", "Button"] },
	Radio: { files: ["Radio"] },
	Select: { files: ["Select"] },
	Spinner: { files: ["Spinner"] },
	Switch: { files: ["Switch"] },
	Tabs: { files: ["Tabs"] },
	Toast: { files: ["Toast"] },
	Tooltip: { files: ["Tooltip"] },
};
