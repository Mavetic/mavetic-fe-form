import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Autocomplete from "@/components/Autocomplete";
import Form from "@/components/Form";

describe("Autocomplete", () => {
  const formProps = {
    defaultValues: { test: "" },
    onSubmit: () => {},
  };

  afterEach(() => {
    cleanup();
  });

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

  it("renders autocomplete component with object options", async () => {
    render(
      <Form {...formProps}>
        <Autocomplete
          formFieldProps={{ name: "test" }}
          autocompleteProps={{
            label: "Test",
            options: [
              { label: "Test 1", value: "1" },
              { label: "Test 2", value: "2" },
            ],
            textFieldProps: { required: false },
          }}
        />
      </Form>,
    );

    expect(await screen.findByLabelText("Test")).toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: "Test" })).toBeInTheDocument();
  });
});
