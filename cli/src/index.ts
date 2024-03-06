#!/usr/bin/env node
import { Command } from "commander";
import { init } from "./init";
import { add } from "./add";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
	const program = new Command()
		.name("npix")
		.description("add custom components to your project");

	program.addCommand(init).addCommand(add);

	program.parse();
}

main();
