/* eslint-disable no-console */
import { Command } from "commander";
import { existsSync, promises as fs } from "fs";
import chalk from "chalk";
import path from "path";
import type { RegistryTypes } from "./registry";
import { Registry } from "./registry";
import prompts from "prompts";
import ora from "ora";

export const add = new Command()
	.name("add")
	.description("add a component to your project")
	.argument("[components...]", "components to add")
	.option("-a, --all", "add all components", false)
	.option("-o --overwrite", "overwrite existing components", false)
	.option(
		"-p --path <path>",
		"path where components should be created",
		path.join(process.cwd(), "./src/components")
	)
	.action(async (components, opts) => {
		const baseUrl = `https://raw.githubusercontent.com/MuffinTheDragon/npix/main/lib/{0}?token=GHSAT0AAAAAACPFFYRZLVZ7BMTCI3OMIGSEZPHXF2A`;

		const dir = opts.path;

		if (!existsSync(dir)) {
			await fs.mkdir(dir, { recursive: true });
		}

		const selectedComponents: RegistryTypes[] = opts.all
			? Object.keys(Registry)
			: components;

		const spinner = ora("Installing components...").start();

		for (const component of selectedComponents) {
			spinner.text = `Installing ${component}`;
			if (!(component in Registry)) {
				spinner.fail();
				console.log(
					chalk.red(
						`\nUnable to find component ${component}. Exiting.`
					)
				);
				process.exit(0);
			}

			const componentFilePath = path.join(dir, `./${component}` + ".tsx");

			spinner.stop();
			if (existsSync(componentFilePath) && !opts.overwrite) {
				const { overwrite } = await prompts({
					type: "confirm",
					name: "overwrite",
					message: `Component ${component} already exists. Would you like to overwrite?`,
					initial: false,
				});

				if (!overwrite) {
					console.log(
						chalk.blue(
							`\n Skipping ${component}. Pass the ${chalk.green(
								"--overwrite"
							)} or ${chalk.green("-o")} flag to overwrite.`
						)
					);
					continue;
				}
			}

			spinner.start();

			for (const file of Registry[component].files) {
				const url = baseUrl.replace("{0}", file + ".tsx");
				const response = await fetch(url);
				// if (!response.ok) {
				// 	spinner.fail();
				// 	console.log(
				// 		chalk.red(
				// 			`\nError installing component ${file}. Please try again.`
				// 		)
				// 	);
				// 	process.exit(0);
				// }

				const filePath = path.join(dir, `./${file}` + ".tsx");
				const data = await response.text();
				await fs.writeFile(filePath, data, "utf8");
			}
		}

		spinner.text = "Done";
		spinner.succeed();
	});
