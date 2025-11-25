import { render, renderHook, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Form from "@/components/Form";
import { type UseAppForm, useAppForm } from "@/hooks";

describe("Form", () => {
  const { result } = renderHook(() =>
    useAppForm({
      defaultValues: {},
      onSubmit: () => {},
    }),
  );

  const form = result.current as UseAppForm;

  it("renders form component with test content", () => {
    render(
      <Form form={form}>
        <div>TEST</div>
      </Form>,
    );

    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
