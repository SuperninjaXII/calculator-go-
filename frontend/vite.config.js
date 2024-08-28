import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
	resolve: {
		alias: {
			iink: path.resolve(__dirname, "./node_modules/iink-ts/dist/iink.min.js"), // Adjust the path as needed
		},
	},
});
