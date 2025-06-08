import { useAppForm } from "@/hooks";
import { formOptions } from "@tanstack/react-form";
import { render, renderHook, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Form", () => {
  const formProps = formOptions({ defaultValues: {}, onSubmit: () => {} });
  const { result } = renderHook(() => useAppForm({ ...formProps }));

  it("renders form component with test content", () => {
    const form = result.current;

    render(
      <form.AppForm>
        <form.Form>
          <div>TEST</div>
        </form.Form>
      </form.AppForm>,
    );

    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
