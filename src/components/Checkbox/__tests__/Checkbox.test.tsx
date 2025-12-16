import { render, renderHook, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Checkbox from "@/components/Checkbox";
import Form from "@/components/Form";
import { type UseAppForm, useAppForm } from "@/hooks";

describe("Checkbox", () => {
  const { result } = renderHook(() =>
    useAppForm({
      defaultValues: { test: false },
      onSubmit: () => {},
    }),
  );

  const form = result.current as UseAppForm;

  it("renders checkbox component with label", async () => {
    render(
      <Form form={form}>
        <Checkbox
          formFieldProps={{ name: "test" }}
          checkboxProps={{ label: "Test", required: false }}
        />
      </Form>,
    );

    expect(await screen.findByLabelText("Test")).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: "Test" })).toBeInTheDocument();
  });
});
