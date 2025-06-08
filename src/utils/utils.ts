import type { StandardSchemaV1Issue } from "@tanstack/react-form";

export const getErrorMessage = (
  error: StandardSchemaV1Issue | undefined,
): string | undefined => {
  if (error === undefined) return undefined;
  return error.message;
};
