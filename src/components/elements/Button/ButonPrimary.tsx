import { Button, CircularProgress, Theme, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

export const ButtonPrimary = ({
  type = "button",
  children,
  isLoading,
  disabled,
  sx,
}: Props) => (
  <Button
    type={type}
    color="primary"
    variant="contained"
    disabled={disabled}
    size="large"
    sx={sx}
  >
    {isLoading ? <CircularProgress color="inherit" size="1.6rem" /> : children}
  </Button>
);
