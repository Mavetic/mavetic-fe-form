import type { AutocompleteComponentProps } from "@/components/Autocomplete/AutocompleteComponent";
import { useAppFormContext } from "@/context";
import type { UseAppForm } from "@/hooks";

export type AutocompleteProps = {
  formFieldProps: Omit<
    React.ComponentProps<UseAppForm["AppField"]>,
    "children"
  >;
  autocompleteProps: AutocompleteComponentProps;
};

const Autocomplete = ({
  formFieldProps,
  autocompleteProps,
}: AutocompleteProps) => {
  const form = useAppFormContext();

  return (
    <form.AppField {...formFieldProps}>
      {(field) => <field.Autocomplete {...autocompleteProps} />}
    </form.AppField>
  );
};

export default Autocomplete;
