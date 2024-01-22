import { masks } from "@/utils";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
}

export const InputPhone = ({ name, label }: Props) => {
  const { register, setValue } = useFormContext();

  return (
    <TextField
      {...register(name)}
      id={name}
      label={label}
      type="tel"
      variant="outlined"
      placeholder="(99) 98877-6655"
      onChange={(e) => setValue(name, masks.phoneBR(e.target.value))}
    />
  );
};
