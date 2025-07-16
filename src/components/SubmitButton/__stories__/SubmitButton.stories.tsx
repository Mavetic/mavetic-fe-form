import type { Story } from "@ladle/react";
import SubmitButton from "@/components/SubmitButton";
import formDecorator from "@/stories/decorators/formDecorator";

const formProps = {
  defaultValues: { test: "" },
  onSubmit: () => {
    console.log("submit");
  },
};

export const Simple: Story = () => {
  return <SubmitButton label="Test" />;
};

export default { decorators: [formDecorator(formProps)] };
