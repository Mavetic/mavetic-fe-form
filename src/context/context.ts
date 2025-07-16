import { createFormHookContexts } from "@tanstack/react-form";
import type { UseAppForm } from "@/hooks";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

// @ts-ignore missing cast
export const useAppFormContext: () => UseAppForm = useFormContext;
