import Box from "@mui/material/Box";
import type { SxProps } from "@mui/system";
import type React from "react";
import { useFormContext } from "@/context";

const FormComponent = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps | undefined;
}) => {
  const form = useFormContext();
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      noValidate
      sx={sx}
    >
      {children}
    </Box>
  );
};

export default FormComponent;
