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
  external: ["react", "@mui/material"],
  splitting: false,
  treeshake: false,
  dts: true,
  format: ["esm", "cjs"],
});
