import Datepicker from "@/components/Datepicker";
import formDecorator from "@/stories/decorators/formDecorator";
import type { Story } from "@ladle/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { cs } from "date-fns/locale/cs";

const formProps = {
  defaultValues: { test: "" },
  onSubmit: () => {},
};

export const Simple: Story = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={cs}>
      <Datepicker
        formFieldProps={{ name: "test" }}
        datepickerProps={{
          label: "Test",
          textFieldProps: { fullWidth: false },
        }}
      />
    </LocalizationProvider>
  );
};

export default { decorators: [formDecorator(formProps)] };
