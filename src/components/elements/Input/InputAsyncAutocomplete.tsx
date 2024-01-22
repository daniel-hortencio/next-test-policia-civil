/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { Person } from "@/types/Person";
import { personServices } from "@/services/PersonService";
import { useDebounce } from "@/utils";

interface Props {
  name: string;
  label: string;
}

export default function InputAsyncAutocomplete({ name, label }: Props) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [person, setPersons] = useState<Omit<Person, "email" | "telefone">[]>(
    []
  );
  const { register } = useFormContext();

  const loading = open && person.length === 0;

  async function getAllperson() {
    const all_person = await personServices.getAll();

    if (person) {
      setPersons(all_person);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    if (open) {
      setIsLoading(true);

      useDebounce(getAllperson);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      loadingText="Carregando..."
      noOptionsText="Nenhuma pessoa encontrada"
      loading={isLoading}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.nome}
      options={person}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
          {...register(name)}
        />
      )}
    />
  );
}
