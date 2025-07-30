import type { Story } from "@ladle/react";
import Autocomplete from "@/components/Autocomplete";
import formDecorator from "@/stories/decorators/formDecorator";

const formProps = {
  defaultValues: { test: "" },
  onSubmit: () => {},
};

export const Simple: Story = () => {
  return (
    <Autocomplete
      formFieldProps={{ name: "test" }}
      autocompleteProps={{
        label: "Test",
        options: ["Test 1", "Test 2"],
      }}
    />
  );
};

export const SimpleMultiple: Story = () => {
  return (
    <Autocomplete
      formFieldProps={{ name: "test" }}
      autocompleteProps={{
        label: "Test",
        options: ["Test 1", "Test 2"],
        multiple: true,
      }}
    />
  );
};

export const WithObjectOptions: Story = () => {
  return (
    <Autocomplete
      formFieldProps={{ name: "test" }}
      autocompleteProps={{
        label: "Test",
        options: [
          { label: "Test 1", value: "1" },
          { label: "Test 2", value: "2" },
        ],
      }}
    />
  );
};

export const WithObjectOptionsMultiple: Story = () => {
  return (
    <Autocomplete
      formFieldProps={{ name: "test" }}
      autocompleteProps={{
        label: "Test",
        options: [
          { label: "Test 1", value: "1" },
          { label: "Test 2", value: "2" },
        ],
        multiple: true,
      }}
    />
  );
};

export default { decorators: [formDecorator(formProps)] };
