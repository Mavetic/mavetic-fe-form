import type { TextFieldComponentProps } from "@/components/TextField/TextFieldComponent";
import { useAppFormContext } from "@/context";
import type { UseAppForm } from "@/hooks";

export type TextFieldProps = {
  formFieldProps: Omit<
    React.ComponentProps<UseAppForm["AppField"]>,
    "children"
  >;
  textFieldProps: TextFieldComponentProps;
};

const TextField = ({ formFieldProps, textFieldProps }: TextFieldProps) => {
  const form = useAppFormContext();

  return (
    <form.AppField {...formFieldProps}>
      {(field) => <field.TextField {...textFieldProps} />}
    </form.AppField>
  );
};

export default TextField;
