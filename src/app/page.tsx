"use client";

import { Box, Button, Form, Input } from "@/components/elements";

export default function Home() {
  return (
    <Form onSubmit={(data) => console.log({ data })}>
      <h1>Home</h1>
      <Box component="header">
        <Input.AsyncAutocomplete name="pessoa" />
      </Box>
      <Box>
        <Input.Phone name="telefone" label="Telefone" />
      </Box>
      <Box>
        <Input.Email name="email" label="Email" />
      </Box>
      <Box>
        <Button.Primary type="submit">Enviar</Button.Primary>
      </Box>
    </Form>
  );
}
