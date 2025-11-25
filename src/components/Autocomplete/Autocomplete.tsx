import type { AutocompleteComponentProps } from "@/components/Autocomplete/AutocompleteComponent";
import { useAppFormContext } from "@/context";
import type { UseAppForm } from "@/hooks";

export type AutocompleteProps<
  T = unknown,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
> = {
  formFieldProps: Omit<
    React.ComponentProps<UseAppForm["AppField"]>,
    "children"
  >;
  autocompleteProps: AutocompleteComponentProps<
    T,
    Multiple,
    DisableClearable,
    FreeSolo
  >;
};

const Autocomplete = <
  T = unknown,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>({
  formFieldProps,
  autocompleteProps,
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
  const form = useAppFormContext();

  return (
    <form.AppField {...formFieldProps}>
      {(field) => <field.Autocomplete {...autocompleteProps} />}
    </form.AppField>
  );
};

export default Autocomplete;
