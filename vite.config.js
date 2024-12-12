import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4161,
  },
  preview: {
    port: 7150,
  },
  
});
