import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { createSvgIconsPlugin } from "vite-plugin-react-svgs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      defaultImport: "component",
    }),
  ],
});
