import { useFormContext } from "@/context";
import Button from "@mui/material/Button";

const SubmitButton = ({ label }: { label: string }) => {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={isSubmitting}
        >
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
};

export default SubmitButton;
