import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/components/Autocomplete/index.ts",
    "src/components/Datepicker/index.ts",
    "src/components/SubmitButton/index.ts",
    "src/components/TextField/index.ts",
    "src/context/index.ts",
    "src/hooks/index.ts",
    "src/utils/index.ts",
  ],

  target: "ES2020",
  external: [
    "react",
    "react-dom",
    "@mui/material",
    "@mui/x-date-pickers",
    "date-fns",
    "@tanstack/react-form",
  ],
  splitting: true,
  treeshake: true,
  dts: {
    resolve: true,
    compilerOptions: {
      skipLibCheck: true,
    },
  },
  format: ["esm", "cjs"],
  esbuildOptions(options) {
    options.jsx = "automatic";
    options.jsxImportSource = "react";
  },
});
