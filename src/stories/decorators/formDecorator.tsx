import type { Story, StoryDecorator } from "@ladle/react";
import type { formOptions } from "@tanstack/react-form";
import Form from "@/components/Form";

export default (formProps: Parameters<typeof formOptions>[0]): StoryDecorator =>
  (Component: Story) => (
    <Form {...formProps}>
      <Component />
    </Form>
  );
