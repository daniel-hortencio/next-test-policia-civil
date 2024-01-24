import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Box } from "..";
import { HTMLInputTypeAttribute } from "react";

export interface InputBaseProps {
  name: string;
  label: string;
  error?: string;
  idPrefix: string;
  placeholder: string;
  onChange: (value: string) => void;
  type?: HTMLInputTypeAttribute;
}

export const InputBase = ({
  name,
  label,
  error = "",
  idPrefix,
  placeholder,
  onChange,
  type = "text",
}: InputBaseProps) => {
  const { register } = useFormContext();

  return (
    <FormControl error={!!error} variant="outlined" fullWidth>
      <InputLabel htmlFor={`${idPrefix}-${name}`}>{label}</InputLabel>
      <OutlinedInput
        {...register(name)}
        id={`${idPrefix}-${name}`}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        type={type}
      />
      <Box
        sx={{
          maxHeight: !!error ? "2rem" : 0,
          transition: "max-height .3s",
        }}
      >
        <FormHelperText id={`${idPrefix}-${name}-error-message`}>
          {error || " "}
        </FormHelperText>
      </Box>
    </FormControl>
  );
};
