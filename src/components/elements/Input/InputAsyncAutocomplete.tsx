import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { Person } from "@/types/Person";
import { personServices } from "@/services/personService";
import { InputBaseProps } from "./InputBase";
import { FormControl, FormHelperText } from "@mui/material";
import { Box } from "..";
import { useSnackbar } from "notistack";

export default function InputAsyncAutocomplete({
  name,
  label,
  error,
}: Omit<InputBaseProps, "idPrefix" | "placeholder" | "onChange" | "type">) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [persons, setPersons] = useState<Omit<Person, "email" | "telefone">[]>(
    []
  );
  const { register, clearErrors } = useFormContext();

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

  useEffect(() => {
    if (open && persons.length < 1) {
      setIsLoading(true);

      getAllperson();
    }
  }, [open]);

  return (
    <Autocomplete
      id={`input-autocomplete-${name}-error-message`}
      open={open}
      loadingText="Carregando..."
      noOptionsText="Nenhuma pessoa encontrada"
      loading={isLoading}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.nome}
      onChange={() => {
        clearErrors(name);
      }}
      options={persons}
      renderInput={(params) => (
        <FormControl error={!!error} variant="outlined" fullWidth>
          <TextField
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
