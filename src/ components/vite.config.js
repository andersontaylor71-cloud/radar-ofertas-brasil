import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/radar-de-ofertas-brasil/", // importante para GitHub Pages
});
