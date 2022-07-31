import { defineConfig } from "vite";
import prismjs from "vite-plugin-prismjs";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  base: "",
  server: {
    hmr: {
      protocol: "wss",
      host: "finove-hopeadmin-v6g9pqvv2xq7j-5174.githubpreview.dev/"
    }
  },
  plugins: [
    solidPlugin(),
    prismjs({
      languages: ["bash", "js", "tsx", "html", "css"],
      plugins: ["copy-to-clipboard", "line-highlight"],
      css: false,
    }),
  ],
  resolve: {
  },
  build: {
    target: "esnext",
    polyfillModulePreload: false,
  },
});