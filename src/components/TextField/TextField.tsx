import type { TextFieldComponentProps } from "@/components/TextField/TextFieldComponent";
import { useAppFormContext } from "@/context";

export type TextFieldProps = {
  name: string;
} & Omit<TextFieldComponentProps, "name">;

const TextField = ({ name, ...props }: TextFieldProps) => {
  const form = useAppFormContext();

  return (
    <form.AppField name={name}>
      {(field) => <field.TextField {...props} />}
    </form.AppField>
  );
};

export default TextField;
