"use client";

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormContext } from "react-hook-form";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Person } from "@/types/Person";
import { personServices } from "@/services/PersonService";
import { InputBaseProps } from "./InputBase";
import { FormControl, FormHelperText } from "@mui/material";
import { Box } from "..";
import { useSnackbar } from "notistack";
import { useDebounce } from "@/utils";

export default function InputAsyncAutocomplete({
  name,
  label,
  error,
}: Omit<InputBaseProps, "idPrefix" | "placeholder" | "onChange" | "type">) {
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(new Date().getTime());
  const [isLoading, setIsLoading] = useState(false);
  const [persons, setPersons] = useState<Omit<Person, "email" | "telefone">[]>(
    []
  );
  const { register, setValue, clearErrors } = useFormContext();

  const { enqueueSnackbar } = useSnackbar();

  async function getAllperson() {
    try {
      const all_person = await personServices.getAll();

      if (persons) {
        setPersons(all_person);
      }
    } catch (e) {
      enqueueSnackbar({
        message: `API fora do ar! Abra um novo terminal e execute "yarn server"`,
        variant: "error",
      });
    }

    setIsLoading(false);
  }

  const updateInputValue = (value: string) => {
    setValue(name, value);
  };

  return (
    <Autocomplete
      id={`input-autocomplete-${name}-error-message`}
      open={open}
      loadingText="Carregando..."
      noOptionsText="Nenhuma pessoa encontrada"
      loading={isLoading}
      freeSolo
      onBlur={() => {
        setOpen(false);
        setIsLoading(false);
      }}
      onClose={() => {
        setPersons(() => []);
      }}
      onChange={(_, value_on_select) => {
        setKey(new Date().getTime());

        updateInputValue(
          value_on_select && typeof value_on_select !== "string"
            ? value_on_select?.id
            : ""
        );
      }}
      getOptionLabel={(option) => {
        if (typeof option === "string") {
          return option;
        }

        return option.nome;
      }}
      options={persons}
      renderInput={(params) => (
        <FormControl error={!!error} variant="outlined" fullWidth>
          <TextField
            key={key}
            {...params}
            label={label}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
            {...register(name)}
            onChange={(e) => {
              clearErrors(name);
              const { value } = e.target;

              updateInputValue(value);

              if (value === "") {
                useDebounce(() => setPersons(() => []));
                setOpen(false);
                setIsLoading(false);
              } else {
                setOpen(true);
                setIsLoading(true);
                useDebounce(getAllperson);
              }
            }}
          />
          <Box
            sx={{
              maxHeight: !!error ? "2rem" : 0,
              transition: "max-height .3s",
            }}
          >
            <FormHelperText id={`input-autocomplete-${name}-error-message`}>
              {error || " "}
            </FormHelperText>
          </Box>
        </FormControl>
      )}
    />
  );
}
