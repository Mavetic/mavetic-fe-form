import { createFormHookContexts } from "@tanstack/react-form";
import type { UseAppForm } from "@/hooks";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

// @ts-expect-error missing cast
export const useAppFormContext: () => UseAppForm = useFormContext;
