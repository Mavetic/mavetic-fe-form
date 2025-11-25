import type { Story, StoryDecorator } from "@ladle/react";
import type { formOptions } from "@tanstack/react-form";
import Form from "@/components/Form";
import { type UseAppForm, useAppForm } from "@/hooks";

export default (formProps: Parameters<typeof formOptions>[0]): StoryDecorator =>
  (Component: Story) => {
    const form = useAppForm({
      defaultValues: { test: "" },
      onSubmit: () => {},
    }) as UseAppForm;

    return (
      <Form form={form}>
        <Component />
      </Form>
    );
  };
