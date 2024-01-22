import { Button } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

export const ButtonPrimary = ({ type = "button", children }: Props) => (
  <Button type={type} color="primary" variant="contained">
    {children}
  </Button>
);
