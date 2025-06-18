import { useFormContext } from "@/context";
import formDecorator from "@/stories/decorators/formDecorator";
import type { Story } from "@ladle/react";

const formProps = {
  defaultValues: { test: "" },
  onSubmit: () => {},
};

export const Simple: Story = () => {
  const form = useFormContext();

  return (
    <form.AppField name="test">
      {(field) => <field.TextField label="Test" />}
    </form.AppField>
  );
};

export default { decorators: [formDecorator(formProps)] };
