import Form from "@/components/Form";
import TextField from "@/components/TextField";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("TextField", () => {
  const formProps = {
    defaultValues: { test: "" },
    onSubmit: () => {},
  };

  it("renders textbox component with label", async () => {
    render(
      <Form {...formProps}>
        <TextField name={"test"} label="Test" required={false} />
      </Form>,
    );

    expect(await screen.findByLabelText("Test")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Test" })).toBeInTheDocument();
  });
});
