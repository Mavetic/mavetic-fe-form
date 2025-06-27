import Autocomplete from "@/components/Autocomplete";
import Form from "@/components/Form";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Autocomplete", () => {
  const formProps = {
    defaultValues: { test: "" },
    onSubmit: () => {},
  };

  it("renders autocomplete component with label", async () => {
    render(
      <Form {...formProps}>
        <Autocomplete
          formFieldProps={{ name: "test" }}
          autocompleteProps={{
            label: "Test",
            options: ["Test 1", "Test 2"],
            textFieldProps: { required: false },
          }}
        />
      </Form>,
    );

    expect(await screen.findByLabelText("Test")).toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: "Test" })).toBeInTheDocument();
  });
});
