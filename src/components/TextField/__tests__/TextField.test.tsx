import { useAppForm } from "@/hooks";
import { formOptions } from "@tanstack/react-form";
import { render, renderHook, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("TextField", () => {
  const formProps = formOptions({
    defaultValues: { test: "" },
    onSubmit: () => {},
  });
  const { result } = renderHook(() => useAppForm({ ...formProps }));

  it("renders textbox component with label", async () => {
    const form = result.current;

    render(
      <form.AppForm>
        <form.Form>
          <form.AppField name={"test"}>
            {(field) => <field.TextField label="Test" required={false} />}
          </form.AppField>
        </form.Form>
      </form.AppForm>,
    );

    expect(await screen.findByLabelText("Test")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Test" })).toBeInTheDocument();
  });
});
