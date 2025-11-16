import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  target: "ES2020",
  skipNodeModulesBundle: true,
  unbundle: true,
  outputOptions: {
    banner: '"use client";',
  },
  // esbuildOptions(options) {
  //   options.jsx = "automatic";
  //   options.jsxImportSource = "react";
  // },
});
