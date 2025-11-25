import { render, renderHook, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Form from "@/components/Form";
import TextField from "@/components/TextField";
import { type UseAppForm, useAppForm } from "@/hooks";

describe("TextField", () => {
  const { result } = renderHook(() =>
    useAppForm({
      defaultValues: { test: "" },
      onSubmit: () => {},
    }),
  );

  const form = result.current as UseAppForm;

  it("renders textbox component with label", async () => {
    render(
      <Form form={form}>
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
