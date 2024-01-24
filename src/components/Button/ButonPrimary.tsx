import {
  Button,
  CircularProgress,
  Theme,
  SxProps,
  ButtonPropsVariantOverrides,
} from "@mui/material";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
  variant: "text" | "outlined" | "contained";
  onClick?: () => void;
}

export const ButtonBase = ({
  type = "button",
  children,
  isLoading,
  disabled,
  sx,
  variant,
  onClick,
}: ButtonProps) => (
  <Button size="large" {...{ type, disabled, sx, variant, onClick }}>
    {isLoading ? <CircularProgress color="inherit" size="1.6rem" /> : children}
  </Button>
);
