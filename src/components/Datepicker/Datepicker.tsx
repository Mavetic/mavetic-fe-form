import type { DatepickerComponentProps } from "@/components/Datepicker/DatepickerComponent";
import { useAppFormContext } from "@/context";
import type { UseAppForm } from "@/hooks";

export type DatepickerProps = {
  formFieldProps: Omit<
    React.ComponentProps<UseAppForm["AppField"]>,
    "children"
  >;
  datepickerProps: DatepickerComponentProps;
};

const Datepicker = ({ formFieldProps, datepickerProps }: DatepickerProps) => {
  const form = useAppFormContext();

  return (
    <form.AppField {...formFieldProps}>
      {(field) => <field.Datepicker {...datepickerProps} />}
    </form.AppField>
  );
};

export default Datepicker;
