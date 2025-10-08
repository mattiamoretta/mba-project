import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const REPO_BASE = "/mba-project/";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "serve" ? "/" : REPO_BASE
}));
