import MuiAutocomplete, {
  type AutocompleteProps,
  type AutocompleteValue,
} from "@mui/material/Autocomplete";
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField";
import { useStore } from "@tanstack/react-form";
import { useMemo } from "react";
import { useFieldContext } from "@/context";
import { getErrorMessage } from "@/utils";

export type AutocompleteComponentProps<
  T = unknown,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
> = Omit<
  AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
  "renderInput" | "onChange" | "onClose"
> & {
  label: string;
  textFieldProps?: TextFieldProps;
  onChange?: (value: string | string[] | null) => void;
  onClose?: () => void;
};

const AutocompleteComponent = <
  T = unknown,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>({
  label,
  onClose,
  onChange,
  textFieldProps,
  ...props
}: AutocompleteComponentProps<T, Multiple, DisableClearable, FreeSolo>) => {
  const field = useFieldContext<string | string[] | null>();

  const errors = useStore(field.store, (state) => state.meta.errors);

  const selectedValue: AutocompleteValue<
    T,
    Multiple,
    DisableClearable,
    FreeSolo
  > = useMemo(() => {
    if (!props.multiple && !field.state.value) return null;

    const findMatchingOption = (value: string) =>
      Array.isArray(props.options)
        ? props.options.find((option) =>
            typeof option === "string"
              ? option === value
              : option.value === value,
          )
        : null;

    if (props.multiple) {
      return Array.isArray(field.state.value)
        ? field.state.value
            .map(findMatchingOption)
            .filter(
              (option): option is NonNullable<typeof option> => option !== null,
            )
        : [];
    }

    if (typeof field.state.value === "string") {
      return findMatchingOption(field.state.value) ?? null;
    }

    return null;
  }, [field.state.value, props.options, props.multiple]);

  return (
    <MuiAutocomplete
      id={field.name}
      value={selectedValue}
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
        const extractValue = <T,>(val: T): string | null => {
          if (val === null) return null;
          if (typeof val === "string") return val;
          if (typeof val === "object") {
            return "value" in val ? (val.value as string) : null;
          }
          return null;
        };

        if (value === null) {
          field.handleChange(null);
          onChange?.(null);
        } else if (Array.isArray(value)) {
          const extractedValues = value
            .map(extractValue)
            .filter((v): v is string => v !== null);
          field.handleChange(extractedValues);
          onChange?.(extractedValues);
        } else {
          const extractedValue = extractValue(value);
          field.handleChange(extractedValue);
          onChange?.(extractedValue);
        }
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
