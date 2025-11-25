import { render, renderHook, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Form from "@/components/Form";
import SubmitButton from "@/components/SubmitButton";
import { type UseAppForm, useAppForm } from "@/hooks";

describe("SubmitButton", () => {
  const submitMock = vi.fn();

  const { result } = renderHook(() =>
    useAppForm({
      defaultValues: {},
      onSubmit: submitMock,
    }),
  );

  const form = result.current as UseAppForm;

  it("renders button component with label", async () => {
    submitMock.mockReset();

    render(
      <Form form={form}>
        <SubmitButton label={"Test"} />
      </Form>,
    );

    expect(
      await screen.findByRole("button", { name: "Test" }),
    ).toBeInTheDocument();

    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "Test" }));

    expect(submitMock).toHaveBeenCalled();
  });
});
