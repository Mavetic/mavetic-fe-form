import Autocomplete from "@/components/Autocomplete";
import formDecorator from "@/stories/decorators/formDecorator";
import type { Story } from "@ladle/react";

const formProps = {
  defaultValues: { test: "" },
  onSubmit: () => {},
};

export const Simple: Story = () => {
  return (
    <Autocomplete
      formFieldProps={{ name: "test" }}
      autocompleteProps={{ label: "Test", options: ["Test 1", "Test 2"] }}
    />
  );
};

export default { decorators: [formDecorator(formProps)] };
