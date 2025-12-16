import MuiCheckbox, { type CheckboxProps } from "@mui/material/Checkbox";
import FormControl, { type FormControlProps } from "@mui/material/FormControl";
import FormControlLabel, {
  type FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { useStore } from "@tanstack/react-form";
import { useFieldContext } from "@/context";
import { getErrorMessage } from "@/utils";

export type CheckboxComponentProps = {
  label: string;
  onChange?: (value: boolean) => void;
  formControlProps?: FormControlProps;
  formControlLabelProps?: Partial<Omit<FormControlLabelProps, "label">>;
  props?: CheckboxProps;
} & Partial<Omit<CheckboxProps, "label" | "onChange">>;

const CheckboxComponent = ({
  label,
  onChange,
  formControlProps,
  formControlLabelProps,
  ...props
}: CheckboxComponentProps) => {
  const field = useFieldContext<boolean>();

  const errors = useStore(field.store, (state) => state.meta.errors);

  return (
    <FormControl error={!!errors?.length} {...formControlProps}>
      <FormControlLabel
        label={label}
        {...formControlLabelProps}
        control={
          <MuiCheckbox
            id={field.name}
            name={field.name}
            required
            checked={field.state.value}
            onChange={(e) => {
              field.handleChange(e.target.checked);
              onChange?.(e.target.checked);
            }}
            {...props}
          />
        }
      />
      <FormHelperText id={field.name}>
        {getErrorMessage(errors?.[0])}
      </FormHelperText>
    </FormControl>
  );
};

export default CheckboxComponent;
