import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { render, renderHook, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Datepicker from "@/components/Datepicker";
import Form from "@/components/Form";
import { type UseAppForm, useAppForm } from "@/hooks";

describe("Datepicker", () => {
  const { result } = renderHook(() =>
    useAppForm({
      defaultValues: { test: "" },
      onSubmit: () => {},
    }),
  );

  const form = result.current as UseAppForm;

  it("renders datepicker component with label", async () => {
    render(
      <Form form={form}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Datepicker
            formFieldProps={{ name: "test" }}
            datepickerProps={{
              label: "Test",
              textFieldProps: { required: false },
            }}
          />
        </LocalizationProvider>
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
