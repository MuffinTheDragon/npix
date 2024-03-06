import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	plugins: [],
	resolve: {
		alias: [{ find: "@", replacement: resolve(__dirname, "./") }],
	},
});
