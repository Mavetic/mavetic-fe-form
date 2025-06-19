import Form from "@/components/Form";
import SubmitButton from "@/components/SubmitButton";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

describe("SubmitButton", () => {
  const submitMock = vi.fn();

  const formProps = {
    defaultValues: {},
    onSubmit: submitMock,
  };

  it("renders button component with label", async () => {
    submitMock.mockReset();

    render(
      <Form {...formProps}>
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
