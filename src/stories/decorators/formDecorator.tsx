import { useAppForm } from "@/hooks";
import type { Story } from "@ladle/react";
import type { StoryDecorator } from "@ladle/react/lib/shared/types";
import { formOptions } from "@tanstack/react-form";

export default (formProps): StoryDecorator =>
  (Component: Story) => {
    const preparedFormProps = formOptions(formProps);

    const form = useAppForm({ ...preparedFormProps });

    return (
      <form.AppForm>
        <form.Form>
          <Component />
        </form.Form>
      </form.AppForm>
    );
  };
