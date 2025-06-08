import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/components/SubmitButton/index.ts",
    "src/components/TextField/index.ts",
    "src/context/index.ts",
    "src/hooks/index.ts",
    "src/utils/index.ts",
  ],

  target: "ES2020",
  external: ["react", "react-dom", "@mui/material"],
  splitting: false,
  treeshake: false,
  dts: true,
  format: ["esm", "cjs"],
  esbuildOptions(options) {
    options.jsx = "automatic";
    options.jsxImportSource = "react";
  },
});
