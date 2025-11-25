import { createFormHook } from "@tanstack/react-form";
import { lazy } from "react";
import Form from "@/components/Form/FormComponent";
import { fieldContext, formContext } from "@/context";

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

const { useAppForm: _appForm } = createFormHook({
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

// @ts-expect-error type duplicate error, because of type simplification
export const useAppForm: ReturnType<typeof createFormHook>["useAppForm"] =
  _appForm;

export type UseAppForm = ReturnType<typeof useAppForm>;
