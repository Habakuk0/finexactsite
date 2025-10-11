import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "client"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      external: [
        'fs', 'path', 'os', 'http', 'https', 'url', 'stream', 'util',
        'express', 'ws', 'passport', 'express-session', 'connect-pg-simple',
        'memorystore', 'drizzle-orm', '@neondatabase/serverless'
      ],
    },
  },
  define: {
    global: 'globalThis',
    // Proper Buffer polyfill without require
    'window.Buffer': 'Buffer',
  },
  optimizeDeps: {
    include: ['buffer'], // Let Vite handle Buffer properly
  },
});