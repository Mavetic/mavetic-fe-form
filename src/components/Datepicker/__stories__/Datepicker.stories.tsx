import Datepicker from "@/components/Datepicker";
import formDecorator from "@/stories/decorators/formDecorator";
import type { Story } from "@ladle/react";

const formProps = {
  defaultValues: { test: "" },
  onSubmit: () => {},
};

export const Simple: Story = () => {
  return (
    <Datepicker
      formFieldProps={{ name: "test" }}
      datepickerProps={{
        label: "Test",
        textFieldProps: { fullWidth: false },
      }}
    />
  );
};

export default { decorators: [formDecorator(formProps)] };
