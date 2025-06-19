import { useFieldContext } from "@/context";
import { getErrorMessage } from "@/utils";
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField";
import { useStore } from "@tanstack/react-form";

export type TextFieldComponentProps = {
  label: string;
  onBlur?: (value: string) => void;
  onChange?: (value: string) => void;
  props?: TextFieldProps;
} & Partial<Omit<TextFieldProps, "label" | "onBlur" | "onChange">>;

const TextFieldComponent = ({
  label,
  onBlur,
  onChange,
  ...props
}: TextFieldComponentProps) => {
  const field = useFieldContext<string>();

  const errors = useStore(field.store, (state) => state.meta.errors);

  return (
    <MuiTextField
      label={label}
      id={field.name}
      name={field.name}
      value={field.state.value}
      onChange={(e) => {
        field.handleChange(e.target.value);
        onChange?.(e.target.value);
      }}
      onBlur={(e) => {
        field.handleBlur();
        onBlur?.(e.target.value);
      }}
      error={!!errors?.length}
      helperText={getErrorMessage(errors?.[0])}
      fullWidth
      required
      {...props}
    />
  );
};

export default TextFieldComponent;
