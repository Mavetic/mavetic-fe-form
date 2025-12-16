import type { CheckboxComponentProps } from "@/components/Checkbox/CheckboxComponent";
import { useAppFormContext } from "@/context";
import type { UseAppForm } from "@/hooks";

export type CheckboxProps = {
  formFieldProps: Omit<
    React.ComponentProps<UseAppForm["AppField"]>,
    "children"
  >;
  checkboxProps: CheckboxComponentProps;
};

const Checkbox = ({ formFieldProps, checkboxProps }: CheckboxProps) => {
  const form = useAppFormContext();

  return (
    <form.AppField {...formFieldProps}>
      {(field) => <field.Checkbox {...checkboxProps} />}
    </form.AppField>
  );
};

export default Checkbox;
