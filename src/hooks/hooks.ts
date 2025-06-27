import Form from "@/components/Form/FormComponent";
import { fieldContext, formContext } from "@/context";
import { createFormHook } from "@tanstack/react-form";
import { lazy } from "react";

const Autocomplete = lazy(
  () => import("@/components/Autocomplete/AutocompleteComponent"),
);
const Datepicker = lazy(
  () => import("@/components/Datepicker/DatepickerComponent"),
);
const SubmitButton = lazy(
  () => import("@/components/SubmitButton/SubmitButtonComponent"),
);
const TextField = lazy(
  () => import("@/components/TextField/TextFieldComponent"),
);

export const { useAppForm } = createFormHook({
  fieldComponents: {
    Autocomplete,
    Datepicker,
    TextField,
  },
  formComponents: {
    Form,
    SubmitButton,
  },
  fieldContext,
  formContext,
});

export type UseAppForm = ReturnType<typeof useAppForm>;
