import { useRef, useState } from "react";
import "./App.css";
import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";
import {
	toast,
	Button,
	ButtonGroup,
	ButtonGroupButton,
	Alert,
	Card,
	Spinner,
	Tooltip,
	Drawer,
	Modal,
	Popconfirm,
	Radio,
	Select,
	Checkbox,
	Input,
} from "@/lib";

function App() {
	const ref = useRef(null);

	const [isDrawerOpen, setDrawerOpen] = useState(false);
	const handleDrawerClose = () => setDrawerOpen(false);

	const [isModalOpen, setModalOpen] = useState(false);
	const handleModalClose = () => setModalOpen(false);

	const openToast = () => {
		toast({
			title: "Test notification",
			placement: "top-right",
			icon: <CheckCircleIcon fill="#76c12b" className="w-6 h-6" />,
		});
	};

	return (
		<div className="p-12" id="parent">
			<Button className="float-right my-2" type="ghost">
				Test Button
			</Button>
			<ButtonGroup className="my-2">
				<ButtonGroupButton type="primary">Test</ButtonGroupButton>
				<ButtonGroupButton type="danger">Show</ButtonGroupButton>
				<ButtonGroupButton type="danger">Hide</ButtonGroupButton>
			</ButtonGroup>
			<hr />
			<Alert className="my-2" type="success" title="Success" ref={ref} />
			<Alert className="my-2" type="warning" title="Warning" />
			<Alert
				className="my-2"
				aria-placeholder="asdjkasd"
				type="info"
				title="Info"
			/>
			<Alert className="my-2" type="danger" title="Error">
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</Alert>
			<Card className="my-2" interactive>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
			</Card>
			<Spinner className="my-2" />
			<span className="my-2">
				Show a tooltip
				<span className="mt-3">
					<Tooltip title="Tooltip content" placement="bottom">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
							/>
						</svg>
					</Tooltip>
				</span>
			</span>
			<div className="my-2">
				<Button onClick={openToast}>Open toast</Button>
				{/* <Toast
					title="Test notification"
					placement="top-right"
					icon={
						<CheckCircleIcon fill="#76c12b" className="w-6 h-6" />
					}
				>
					I will never close automatically. This is a purposely very
					very long description that has many many characters and
					words.
				</Toast> */}
			</div>
			<div className="my-2">
				<Button onClick={() => setDrawerOpen(!isDrawerOpen)}>
					{isDrawerOpen ? "Close" : "Open"} drawer
				</Button>
			</div>
			<Drawer
				isOpen={isDrawerOpen}
				handleClose={handleDrawerClose}
				placement="left"
				title="Drawer title"
			>
				<div>asdalkasdlkmasdsd</div>
				<div>asdalkasdlkmasdsd</div>
				<div>
					asdalkasdlkmasdsdasda;ls,d;als,d;las,d;las,d;l,as,;las,;dlas;l,da;l,sd;,lasd,asd,;as,d;las,d;al,d;las,d;a,sd
				</div>
			</Drawer>
			<Button className="mb-2" onClick={() => setModalOpen(true)}>
				Open Modal
			</Button>
			<Modal
				title="My Modal"
				isOpen={isModalOpen}
				onCancel={handleModalClose}
			>
				<p>Modal body content</p>
				<p>Modal body content</p>
				<p>Modal body content</p>
			</Modal>
			<div className="mb-2">
				<Popconfirm
					title="Confirm Delete"
					content={<p>Are you sure you want to delete this?</p>}
					onOk={() => {}}
					onCancel={() => {}}
				>
					<Button>Popover here</Button>
				</Popconfirm>
			</div>
			<Button type="link">Link</Button>
			<div>
				<form>
					<label htmlFor="test">Test label:</label>
					<br />
					<Input id="test" placeholder="text here" type="email" />
					<br />
					<br />
					<Checkbox id="checkbox" />
					<label htmlFor="checkbox">label goes here</label>
					<br />
					<br />
					<Radio id="radio" />
					<label htmlFor="radio">radio label</label>
					<br />
					<Select
						options={[
							{ label: "Choose an option", value: undefined },
							{ label: "Label 1", value: "1" },
							{ label: "Label 2", value: "2" },
						]}
					/>
				</form>
			</div>
			<p className="read-the-docs">Click on the logos to learn more</p>
		</div>
	);
}

export default App;
