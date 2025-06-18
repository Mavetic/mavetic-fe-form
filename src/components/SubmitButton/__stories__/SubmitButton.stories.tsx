import { useFormContext } from "@/context";
import formDecorator from "@/stories/decorators/formDecorator";
import type { Story } from "@ladle/react";

const formProps = {
  defaultValues: { test: "" },
  onSubmit: () => {
    console.log("submit");
  },
};

export const Simple: Story = () => {
  const form = useFormContext();

  return <form.SubmitButton label="Test" />;
};

export default { decorators: [formDecorator(formProps)] };
