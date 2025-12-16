import type { Story } from "@ladle/react";
import Checkbox from "@/components/Checkbox";
import formDecorator from "@/stories/decorators/formDecorator";

const formProps = {
  defaultValues: { test: false },
  onSubmit: () => {},
};

export const Simple: Story = () => {
  return (
    <Checkbox
      formFieldProps={{ name: "test" }}
      checkboxProps={{
        label: "Test",
        formControlLabelProps: { required: false },
      }}
    />
  );
};

export default { decorators: [formDecorator(formProps)] };
