import type { TextFieldProps } from "@mui/material/TextField";
import {
  type DatePickerProps,
  DatePicker as MuiDatePicker,
} from "@mui/x-date-pickers/DatePicker";
import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "@/context";
import { getErrorMessage } from "@/utils";

export type DatepickerComponentProps = {
  label: string;
  onClose?: () => void;
  onChange?: (value: Date | null) => void;
  textFieldProps?: TextFieldProps;
  props?: DatePickerProps;
} & Partial<Omit<DatePickerProps, "label" | "onClose" | "onChange">>;

const DatepickerComponent = ({
  label,
  onClose,
  onChange,
  textFieldProps,
  ...props
}: DatepickerComponentProps) => {
  const field = useFieldContext<Date | null>();

  const errors = useStore(field.store, (state) => state.meta.errors);

  return (
    <MuiDatePicker
      label={label}
      value={field.state.value}
      onChange={(value) => {
        field.handleChange(value);
        onChange?.(value);
      }}
      onClose={() => {
        field.handleBlur();
        onClose?.();
      }}
      slotProps={{
        textField: {
          id: field.name,
          name: field.name,
          error: !!errors?.length,
          helperText: getErrorMessage(errors?.[0]),
          required: true,
          fullWidth: true,
          ...textFieldProps,
        },
      }}
      {...props}
    />
  );
};

export default DatepickerComponent;
