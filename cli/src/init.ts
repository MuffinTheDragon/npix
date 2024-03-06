#!/usr/bin/env node

import { Command } from "commander";
import { execa } from "execa";
import { existsSync, promises as fs } from "fs";
import ora from "ora";

const DEPS = [
	"clsx",
	"tailwind-merge",
	"react-transition-group",
	"@heroicons/react",
];

export const init = new Command()
	.name("init")
	.description("initialize project and add all components")
	.action(async () => {
		const spinner = ora("Initialzing project...").start();

		spinner.text = "Installing dependencies";
		await InstallDependencies();

		spinner.text = "Initializing files...";
		await CopyTailwindConfig();
		await CopyGlobalCSS();
		await CopyCnUtil();

		spinner.succeed();
	});

async function CopyTailwindConfig() {
	await fs.writeFile("./tailwind.config.ts", TAILWIND_CONFIG, "utf8");
}

async function CopyGlobalCSS() {
	const dir = "./src/app/";
	if (!existsSync(dir)) {
		await fs.mkdir(dir, { recursive: true });
	}
	await fs.writeFile(dir + "globals.css", CSS_CONFIG, "utf8");
}

async function CopyCnUtil() {
	const dir = "./src/lib/";
	if (!existsSync(dir)) {
		await fs.mkdir(dir, { recursive: true });
	}
	await fs.writeFile(dir + "utils.ts", CN_UTIL, "utf8");
}

async function InstallDependencies() {
	await execa("npm", ["install", ...DEPS]);
}

const TAILWIND_CONFIG = `import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
					focus: "hsl(var(--primary-focus))",
					border: "hsl(var(--primary-border))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					focus: "hsl(var(--secondary-focus))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				danger: {
					DEFAULT: "hsl(var(--danger))",
					border: "hsl(var(--danger-border))",
					focus: "hsl(var(--danger-focus))",
					foreground: "hsl(var(--danger-foreground))",
				},
				success: {
					border: "hsl(var(--success-border))",
					foreground: "hsl(var(--success-foreground))",
				},
				warning: {
					border: "hsl(var(--warning-border))",
					foreground: "hsl(var(--warning-foreground))",
				},
				info: {
					border: "hsl(var(--info-border))",
					foreground: "hsl(var(--info-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					hover: "hsl(var(--accent-hover))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foregroundasdasdasd))",
				},
			},
		},
	},
	plugins: [],
};
export default config;

`;

const CSS_CONFIG = `@tailwind base;
@tailwind components;
@tailwind utilities;

:focus{outline: none}

@layer base {
    :root {
      --background: 0 0% 100%;
      --foreground: 222.2 47.4% 11.2%;
  
      --muted: 210 40% 96.1%;
      --muted-foreground: 215.4 16.3% 46.9%;
  
      --popover: 0 0% 100%;
      --popover-foreground: 222.2 47.4% 11.2%;
  
      --border: 214.3 31.8% 91.4%;
      --input: 214.3 31.8% 91.4%;
  
      --card: 0 0% 100%;
      --card-foreground: 222.2 47.4% 11.2%;
  
      --primary: 243 75% 59%;
      --primary-border: 239 84% 67%;
      --primary-focus: 228 96% 89%;
      --primary-foreground: 210 40% 98%;
  
      --secondary: 216 12% 84%;
      --secondary-border: 216 12% 84%;
      --secondary-focus: 220 13% 91%;
      --secondary-foreground: 222.2 47.4% 11.2%;
  
      --accent: 216 24% 96%;
      --accent-hover: 216 12% 84%;
      --accent-foreground: 222.2 47.4% 11.2%;
  
      --danger: 0 84% 60%;
      --danger-border: 0 91% 71%;
      --danger-focus: 0 96% 89%;
      --danger-foreground: 0 70% 35%;
  
      --ring: 215 20.2% 65.1%;
  
      --radius: 0.5rem;

      --success-border: 142 69% 58%;
      --success-foreground: 143 64% 24%;

      --warning-border: 48 96% 53%;
      --warning-foreground: 32 81% 29%;

      --info-border: 213 94% 68%;
      --info-foreground: 226 71% 40%;
      
    }
  
    .dark {
      --background: 240 10% 3.9%;
      --foreground: 213 31% 91%;
  
      --muted: 223 47% 11%;
      --muted-foreground: 215.4 16.3% 56.9%;
  
      --accent: 215 28% 17%;
      --accent-hover: 217 19% 27%;
      --accent-foreground: 210 40% 98%;
  
      --popover: 224 71% 4%;
      --popover-foreground: 215 20.2% 65.1%;
  
      --border: 216 34% 17%;
      --input: 216 34% 17%;
  
      --card: 210 4 11%;
      --card-foreground: 213 31% 91%;
  
      --primary-focus: 243 75% 59%;

      --secondary: 217 19% 27%;
      --secondary-focus: 218 11% 65%;
      --secondary-foreground: 210 40% 98%;
  
      --danger-focus: 0 72% 51%;

      --ring: 216 34% 17%;
  
      --radius: 0.5rem;

      --success-border: 142 72% 29%;
      --success-foreground: 142 69% 58%;

      --warning-border: 35 92% 33%;
      --warning-foreground: 48 96% 53%;

      --info-border: 224 76% 48%;
      --info-foreground: 213 94% 68%;

      --danger-foreground: 0 91% 71%;
    }
  }
  
  @layer base {
    body {
      @apply bg-background text-foreground;
      font-feature-settings: "rlig" 1, "calt" 1;
    }
  }


  /* Slide in from Right */
.slide-in-right-enter {
  transform: translateX(100%);
}

.slide-in-right-enter-active {
  transform: translateX(0);
  transition: transform 300ms ease-in-out;
}

.slide-in-right-exit {
  transform: translateX(0);
}

.slide-in-right-exit-active {
  transform: translateX(100%);
  transition: transform 300ms ease-in-out;
}

/* Slide in from Top */
.slide-in-top-enter {
  transform: translateY(-100%);
}

.slide-in-top-enter-active {
  transform: translateY(0);
  transition: transform 300ms ease-in-out;
}

.slide-in-top-exit {
  transform: translateY(0);
}

.slide-in-top-exit-active {
  transform: translateY(-100%);
  transition: transform 300ms ease-in-out;
}

/* Slide in from Bottom */
.slide-in-bottom-enter {
  transform: translateY(100%);
}

.slide-in-bottom-enter-active {
  transform: translateY(0);
  transition: transform 300ms ease-in-out;
}

.slide-in-bottom-exit {
  transform: translateY(0);
}

.slide-in-bottom-exit-active {
  transform: translateY(100%);
  transition: transform 300ms ease-in-out;
}

/* Slide in from Left */
.slide-in-left-enter {
  transform: translateX(-100%);
}

.slide-in-left-enter-active {
  transform: translateX(0);
  transition: transform 300ms ease-in-out;
}

.slide-in-left-exit {
  transform: translateX(0);
}

.slide-in-left-exit-active {
  transform: translateX(-100%);
  transition: transform 300ms ease-in-out;
}

/* Fade in/out */
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-in-out;
}

.fade-exit {
  opacity: 1;
}

.fade-exit-active {
  opacity: 0;
  transition: opacity 300ms ease-in-out;
}`;

const CN_UTIL = `import type { ClassValue } from "clsx";
  import clsx from "clsx";
  import { twMerge } from "tailwind-merge";
  
  export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs));
  }
  `;
