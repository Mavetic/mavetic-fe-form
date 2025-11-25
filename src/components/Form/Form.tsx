import type React from "react";
import type FormComponent from "@/components/Form/FormComponent";
import type { UseAppForm } from "@/hooks";

type FormProps = React.ComponentProps<typeof FormComponent> & {
  form: UseAppForm;
};

const Form = ({ children, sx, form }: FormProps) => {
  return (
    <form.AppForm>
      <form.Form sx={sx}>{children}</form.Form>
    </form.AppForm>
  );
};

export default Form;
