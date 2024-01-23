import { GridProps } from "@mui/material";
import MuiGrid from "@mui/material/Unstable_Grid2";

export const Grid = {
  Container: ({ spacing, children }: GridProps) => (
    <MuiGrid container {...{ spacing }}>
      {children}
    </MuiGrid>
  ),
  Item: ({ xs, md, lg, xl, children }: GridProps) => (
    <MuiGrid {...{ xs, md, lg, xl }}>{children}</MuiGrid>
  ),
};
