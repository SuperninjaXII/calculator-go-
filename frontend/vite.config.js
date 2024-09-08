import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
	resolve: {
		alias: {
			iink: path.resolve(__dirname, "./node_modules/iink-ts/dist/iink.min.js"), // Adjust the path as needed
		},
		build: {
    target: 'es2021', // Ensures support for BigInt and other modern features
  },
	},
});
