import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
  ],
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
        // Node.js built-in modules
        'fs', 'path', 'os', 'http', 'https', 'url', 'stream', 'util', 'child_process',
        // Server dependencies that might get imported accidentally
        'express', 'ws', 'passport', 'express-session', 'connect-pg-simple',
        'memorystore', 'drizzle-orm', '@neondatabase/serverless',
        'gray-matter' // This was causing your require error
      ],
    },
  },
  define: {
    global: 'globalThis', // Fix global object for browser
  },
  optimizeDeps: {
    // Exclude problematic dependencies from pre-bundling
    exclude: ['gray-matter', 'front-matter']
  },
});