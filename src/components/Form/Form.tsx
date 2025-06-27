import type FormComponent from "@/components/Form/FormComponent";
import { useAppForm } from "@/hooks";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { formOptions } from "@tanstack/react-form";
import { cs } from "date-fns/locale/cs";
import type React from "react";

type FormProps = React.ComponentProps<typeof FormComponent> &
  Parameters<typeof formOptions>[0];

const Form = ({ children, sx, ...formProps }: FormProps) => {
  const preparedFormProps = formOptions(formProps);

  const form = useAppForm({ ...preparedFormProps });

  return (
    <form.AppForm>
      <form.Form sx={sx}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={cs}>
          {children}
        </LocalizationProvider>
      </form.Form>
    </form.AppForm>
  );
};

export default Form;
