import React from "react";

export const preview = {
	decorators: [
		(Story: any, globalTypes: any) => {
			const theme = globalTypes.globals.scheme;
			const oldTheme = theme === "light" ? "dark" : "light";
			document
				.querySelectorAll(".docs-story")
				.forEach((e) => e.classList.remove(oldTheme));
			document
				.querySelectorAll(".docs-story")
				.forEach((e) => e.classList.add(theme));

			if (theme === "light") {
				document.body.style.background = "#F8F8F8";
				// globalTypes.globals.backgrounds.value = "#F8F8F8";
				return <div>{Story()}</div>;
			}

			// if (theme === "dark") {
			// globalTypes.globals.backgrounds.value = "#1b1c1d";
			// document.querySelector(
			// 	"#storybook-preview-wrapper"
			// ).style.background = "#1b1c1d";
			document.body.style.background = "#1b1c1d";
			return <div className="dark rounded-lg">{Story()}</div>;
			// }

			// return (
			// 	<div>
			// 		<div>{Story()}</div>
			// 		<div className="dark rounded-lg">{Story()}</div>
			// 	</div>
			// );
		},
	],
};

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const globalTypes = {
	scheme: {
		name: "Scheme",
		description: "Select light or dark theme",
		defaultValue: "dark",
		toolbar: {
			icon: "mirror",
			items: ["light", "dark"],
			dynamicTitle: true,
		},
	},
};
