import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./client", // 👈 adjust this if your main app folder has another name
  build: {
    outDir: "../docs", // 👈 where GitHub Pages reads from
    emptyOutDir: true,
  },
  base: "./", // 👈 important for relative asset paths on GitHub Pages
});
