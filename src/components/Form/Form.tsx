import type FormComponent from "@/components/Form/FormComponent";
import { useAppForm } from "@/hooks";
import { formOptions } from "@tanstack/react-form";
import type React from "react";

type FormProps = React.ComponentProps<typeof FormComponent> &
  Parameters<typeof formOptions>[0];

const Form = ({ children, sx, ...formProps }: FormProps) => {
  const preparedFormProps = formOptions(formProps);

  const form = useAppForm({ ...preparedFormProps });

  return (
    <form.AppForm>
      <form.Form sx={sx}>{children}</form.Form>
    </form.AppForm>
  );
};

export default Form;
