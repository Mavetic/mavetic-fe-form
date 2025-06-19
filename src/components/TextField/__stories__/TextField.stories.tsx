import TextField from "@/components/TextField";
import formDecorator from "@/stories/decorators/formDecorator";
import type { Story } from "@ladle/react";

const formProps = {
  defaultValues: { test: "" },
  onSubmit: () => {},
};

export const Simple: Story = () => {
  return <TextField name="test" label="Test" />;
};

export default { decorators: [formDecorator(formProps)] };
