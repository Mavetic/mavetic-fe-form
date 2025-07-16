import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Form from "@/components/Form";

describe("Form", () => {
  const formProps = { defaultValues: {}, onSubmit: () => {} };

  it("renders form component with test content", () => {
    render(
      <Form {...formProps}>
        <div>TEST</div>
      </Form>,
    );

    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
