import { masks } from "@/utils";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
}

export const InputEmail = ({ name, label }: Props) => {
  const { register, setValue } = useFormContext();

  return (
    <TextField
      {...register(name)}
      id="outlined-basic"
      label={label}
      variant="outlined"
      placeholder="example@mail.com"
      onChange={(e) => setValue(name, masks.email(e.target.value))}
    />
  );
};
