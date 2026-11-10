import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [
    {
      name: "github-pages-routes",
      writeBundle({ dir }) {
        const outputDir = dir ?? resolve(root, "dist");
        const indexHtml = resolve(outputDir, "index.html");

        for (const route of ["about", "projects"]) {
          const routeDir = resolve(outputDir, route);
          mkdirSync(routeDir, { recursive: true });
          copyFileSync(indexHtml, resolve(routeDir, "index.html"));
        }
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        notFound: resolve(root, "404.html"),
        privacy: resolve(root, "privacy.html"),
      },
    },
  },
});
