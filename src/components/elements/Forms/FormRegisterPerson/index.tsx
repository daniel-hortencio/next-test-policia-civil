import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Box, Button, Input } from "@/components/elements";
import { Grid } from "../../Grid";
import { personServices } from "@/services/personService";
import { FormBase } from "../FormBase";
import { useSnackbar } from "notistack";

const PersonSchema = z.object({
  pessoa: z.string().min(3, "Selecione uma pessoa"),
  telefone: z
    .string()
    .regex(
      /^\(\d{2}\) \d{5}-\d{4}$/,
      "Insira um telefone com ddd válido, Ex: (99) 98877-6655"
    ),
  email: z
    .string()
    .regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Insira um e-mail válido, Ex: example@mail.com "
    ),
});

type RegisterPersonData = z.infer<typeof PersonSchema>;

export const FormRegisterPerson = () => {
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<RegisterPersonData>({
    resolver: zodResolver(PersonSchema),
  });
  const {
    formState: { errors },
    clearErrors,
    reset,
  } = methods;
  const { enqueueSnackbar } = useSnackbar();

  function handleClearForm() {
    clearErrors();

    const button_clear_input_autocomplete: any =
      document.getElementsByClassName(
        "MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-clearIndicator"
      )[0];

    if (button_clear_input_autocomplete) {
      button_clear_input_autocomplete.click();
    }

    reset();
  }

  async function handleSubmitRegisterPerson(data: RegisterPersonData) {
    setIsLoading(true);

    personServices
      .create(data)
      .then(() => {
        enqueueSnackbar({
          message: `Pessoa "${data.pessoa}" cadastrada com sucesso!`,
          variant: "success",
        });
        handleClearForm();
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <FormBase methods={methods} onSubmit={handleSubmitRegisterPerson}>
      <Box sx={{ marginBottom: "2rem" }}>
        <Input.AsyncAutocomplete
          name="pessoa"
          label="Buscar Pessoa"
          error={errors?.pessoa?.message}
        />
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>
        <Input.Phone
          name="telefone"
          label="Telefone"
          error={errors?.telefone?.message}
        />
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>
        <Input.Email
          name="email"
          label="Email"
          error={errors?.email?.message}
        />
      </Box>

      <Grid.Container spacing={4}>
        <Grid.Item xs={6}>
          <Button.Secondary
            type="reset"
            sx={{ width: "100%" }}
            onClick={handleClearForm}
          >
            Limpar
          </Button.Secondary>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Button.Primary
            type="submit"
            sx={{ width: "100%" }}
            disabled={isLoading}
            isLoading={isLoading}
          >
            Enviar
          </Button.Primary>
        </Grid.Item>
      </Grid.Container>
    </FormBase>
  );
};
