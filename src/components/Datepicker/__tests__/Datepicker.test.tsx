import Datepicker from "@/components/Datepicker";
import Form from "@/components/Form";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Datepicker", () => {
  const formProps = {
    defaultValues: { test: "" },
    onSubmit: () => {},
  };

  it("renders datepicker component with label", async () => {
    render(
      <Form {...formProps}>
        <Datepicker
          formFieldProps={{ name: "test" }}
          datepickerProps={{
            label: "Test",
            textFieldProps: { required: false },
          }}
        />
      </Form>,
    );

    expect(
      await screen.findByLabelText("Test", { selector: "input" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "Test" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Choose date" }),
    ).toBeInTheDocument();
  });
});
