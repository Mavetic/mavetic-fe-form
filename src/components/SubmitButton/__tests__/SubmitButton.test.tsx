import { useAppForm } from "@/hooks";
import { formOptions } from "@tanstack/react-form";
import { render, renderHook, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

describe("SubmitButton", () => {
  const submitMock = vi.fn();
  const formProps = formOptions({
    defaultValues: {},
    onSubmit: submitMock,
  });
  const { result } = renderHook(() => useAppForm({ ...formProps }));

  it("renders button component with label", async () => {
    submitMock.mockReset();

    const form = result.current;

    render(
      <form.AppForm>
        <form.Form>
          <form.SubmitButton label={"Test"} />
        </form.Form>
      </form.AppForm>,
    );

    expect(
      await screen.findByRole("button", { name: "Test" }),
    ).toBeInTheDocument();

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "Test" }));

    expect(submitMock).toHaveBeenCalled();
  });
});
