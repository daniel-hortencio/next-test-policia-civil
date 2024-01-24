import { masks } from "@/utils";
import { useFormContext } from "react-hook-form";
import { InputBase, InputBaseProps } from "./InputBase";

export const InputEmail = ({
  name,
  label,
  error,
}: Omit<InputBaseProps, "idPrefix" | "placeholder" | "onChange" | "type">) => {
  const { setValue, clearErrors } = useFormContext();

  return (
    <InputBase
      idPrefix="input-email"
      name={name}
      label={label}
      error={error}
      placeholder="example@mail.com"
      onChange={(value) => {
        clearErrors(name);
        setValue(name, masks.email(value));
      }}
    />
  );
};
