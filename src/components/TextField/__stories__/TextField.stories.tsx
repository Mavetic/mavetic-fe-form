import TextField from "@/components/TextField";
import formDecorator from "@/stories/decorators/formDecorator";
import type { Story } from "@ladle/react";

const formProps = {
  defaultValues: { test: "" },
  onSubmit: () => {},
};

export const Simple: Story = () => {
  return (
    <TextField
      formFieldProps={{ name: "test" }}
      textFieldProps={{ label: "Test" }}
    />
  );
};

export default { decorators: [formDecorator(formProps)] };
