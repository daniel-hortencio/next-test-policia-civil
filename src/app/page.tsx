"use client";

import { Box, Button, Form, Input } from "@/components/elements";
import { useDebounce } from "@/utils";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(data) {
    setIsLoading(true);
    useDebounce(() => {
      console.log({ data });
      setIsLoading(false);
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Home</h1>
      <Box component="header">
        <Input.AsyncAutocomplete name="pessoa" label="Buscar Pessoa" />
      </Box>
      <Box>
        <Input.Phone name="telefone" label="Telefone" />
      </Box>
      <Box>
        <Input.Email name="email" label="Email" />
      </Box>
      <Box>
        <Button.Primary
          type="submit"
          sx={{ width: "100%" }}
          disabled={isLoading}
          isLoading={isLoading}
        >
          Enviar
        </Button.Primary>
      </Box>
    </Form>
  );
}
