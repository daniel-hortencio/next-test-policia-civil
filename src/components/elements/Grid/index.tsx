import { GridProps } from "@mui/material";
import MuiGrid from "@mui/material/Unstable_Grid2";

export const Grid = {
  Container: ({ spacing, children, sx }: GridProps) => (
    <MuiGrid container {...{ spacing, sx }}>
      {children}
    </MuiGrid>
  ),
  Item: ({ xs, md, lg, xl, sx, children }: GridProps) => (
    <MuiGrid {...{ xs, md, lg, xl, sx }}>{children}</MuiGrid>
  ),
};
