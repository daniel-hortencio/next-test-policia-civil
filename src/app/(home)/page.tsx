"use client";

import { Form, Box } from "@/components";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Box marginBottom="4rem">
      <Typography variant="h4" marginBottom="2rem" component="h1">
        Buscar por Pessoa:
      </Typography>
      <Form.RegisterPerson />
    </Box>
  );
}
