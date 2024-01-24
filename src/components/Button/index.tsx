import { ButtonBase, ButtonProps } from "./ButonPrimary";

type Props = Omit<ButtonProps, "variant">;

export const Button = {
  Primary: (props: Props) => (
    <ButtonBase {...props} variant="contained">
      {props.children}
    </ButtonBase>
  ),
  Secondary: (props: Props) => (
    <ButtonBase {...props} variant="outlined">
      {props.children}
    </ButtonBase>
  ),
};
