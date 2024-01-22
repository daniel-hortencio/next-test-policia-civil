/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { User } from "@/types/User";
import { userServices } from "@/services/UserService";
import { useDebounce } from "@/utils";
import { Box } from "../Box";
import { LinearProgress, Skeleton } from "@mui/material";

interface Props {
  name: string;
}

export default function InputAsyncAutocomplete({ name }: Props) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<Omit<User, "email" | "telefone">[]>([]);
  const { register } = useFormContext();

  const loading = open && users.length === 0;

  async function getAllUsers() {
    const all_users = await userServices.getAll();

    if (users) {
      setUsers(all_users);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    if (open) {
      setIsLoading(true);

      useDebounce(getAllUsers);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      loadingText="Carregando..."
      loading={isLoading}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.nome}
      options={users}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Asynchronous"
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
