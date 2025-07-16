import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Form from "@/components/Form";
import TextField from "@/components/TextField";

describe("TextField", () => {
  const formProps = {
    defaultValues: { test: "" },
    onSubmit: () => {},
  };

  it("renders textbox component with label", async () => {
    render(
      <Form {...formProps}>
        <TextField
          formFieldProps={{ name: "test" }}
          textFieldProps={{ label: "Test", required: false }}
        />
      </Form>,
    );

    expect(await screen.findByLabelText("Test")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Test" })).toBeInTheDocument();
  });
});
