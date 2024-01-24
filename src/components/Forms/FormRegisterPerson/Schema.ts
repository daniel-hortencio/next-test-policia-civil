import { z } from "zod";

export const PersonSchema = z.object({
  pessoa: z.number().gte(1, "Selecione uma pessoa"),
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

export type RegisterPersonData = z.infer<typeof PersonSchema>;
