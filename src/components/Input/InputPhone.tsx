import { masks } from "@/utils";
import { useFormContext } from "react-hook-form";
import { InputBase, InputBaseProps } from "./InputBase";

export const InputPhone = ({
  name,
  label,
  error,
}: Omit<InputBaseProps, "idPrefix" | "placeholder" | "onChange" | "type">) => {
  const { setValue, clearErrors } = useFormContext();

  return (
    <InputBase
      idPrefix="input-phone"
      type="tel"
      name={name}
      label={label}
      error={error}
      placeholder="(99) 98877-6655"
      onChange={(value) => {
        if (masks.phoneBR(value).length > 0) {
          clearErrors(name);
        }

        setValue(name, masks.phoneBR(value));
      }}
    />
  );
};
