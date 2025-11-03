import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);

      // SPA fallback middleware - serve index.html for non-API routes
      return () => {
        server.middlewares.use((req, res, next) => {
          // Skip API routes and static files
          if (req.url.startsWith("/api/") ||
              /\.\w+$/.test(req.url) ||
              req.url === "/index.html") {
            return next();
          }
          // Serve index.html for all other routes (SPA routing)
          req.url = "/index.html";
          next();
        });
      };
    },
  };
}
