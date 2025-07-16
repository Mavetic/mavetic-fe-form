import MuiAutocomplete, {
  type AutocompleteProps,
} from "@mui/material/Autocomplete";
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField";
import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "@/context";
import { getErrorMessage } from "@/utils";

export type CustomAutocompleteProps = AutocompleteProps<
  string,
  boolean | undefined,
  boolean | undefined,
  boolean | undefined
>;

export type AutocompleteComponentProps = {
  label: string;
  options: CustomAutocompleteProps["options"];
  onClose?: () => void;
  onChange?: (value: string | string[] | null) => void;
  textFieldProps?: TextFieldProps;
  props?: CustomAutocompleteProps;
} & Partial<
  Omit<CustomAutocompleteProps, "label" | "options" | "onClose" | "onChange">
>;

const AutocompleteComponent = ({
  label,
  options,
  onClose,
  onChange,
  textFieldProps,
  ...props
}: AutocompleteComponentProps) => {
  const field = useFieldContext<string | string[] | null>();

  const errors = useStore(field.store, (state) => state.meta.errors);

  return (
    <MuiAutocomplete
      id={field.name}
      options={options}
      value={field.state.value}
      renderInput={(params) => (
        <MuiTextField
          {...params}
          label={label}
          name={field.name}
          error={!!errors?.length}
          helperText={getErrorMessage(errors?.[0])}
          required
          {...textFieldProps}
        />
      )}
      onChange={(_e, value) => {
        field.handleChange(value);
        onChange?.(value);
      }}
      onClose={() => {
        field.handleBlur();
        onClose?.();
      }}
      fullWidth
      disablePortal
      {...props}
    />
  );
};

export default AutocompleteComponent;
