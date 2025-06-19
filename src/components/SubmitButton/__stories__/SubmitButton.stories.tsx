import SubmitButton from "@/components/SubmitButton";
import { useAppFormContext } from "@/context";
import formDecorator from "@/stories/decorators/formDecorator";
import type { Story } from "@ladle/react";

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
