import Form from "@/components/Form";
import { fieldContext, formContext } from "@/context";
import { createFormHook } from "@tanstack/react-form";
import { lazy } from "react";

const SubmitButton = lazy(() => import("@/components/SubmitButton"));
const TextField = lazy(() => import("@/components/TextField"));

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  formComponents: {
    Form,
    SubmitButton,
  },
  fieldContext,
  formContext,
});
