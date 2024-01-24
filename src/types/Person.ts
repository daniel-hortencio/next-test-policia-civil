export type Person = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
};

export type CreatePersonRequestData = Omit<Person, "id" | "nome"> & {
  pessoa: number;
};
