import { AxiosInstance } from "axios";
import { api } from ".";
import { Person } from "@/types/Person";

class PersonServices {
  private readonly endpoint = "/persons";

  constructor(private readonly api: AxiosInstance) {
    this.api = api;
  }

  getAll(): Promise<Omit<Person, "email" | "telefone">[]> {
    return this.api.get(this.endpoint);
  }
}

export const personServices = new PersonServices(api);
