import type { UseAppForm } from "@/hooks";
import { createFormHookContexts } from "@tanstack/react-form";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

// @ts-ignore missing cast
export const useAppFormContext: () => UseAppForm = useFormContext;
