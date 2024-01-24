import { AxiosInstance } from "axios";
import { api } from ".";
import { CreatePersonRequestData, Person } from "@/types/Person";
import { useDebounce } from "@/utils";

class PersonServices {
  private readonly endpoint = "/persons";

  constructor(private readonly api: AxiosInstance) {
    this.api = api;
  }

  async getAll(): Promise<Omit<Person, "email" | "telefone">[]> {
    return await new Promise((resolve) => {
      useDebounce(() => resolve(this.api.get(this.endpoint)));
    });
  }

  async create(data: CreatePersonRequestData): Promise<void> {
    console.log({ ...data, pessoa: parseInt(data.pessoa) });
    return await new Promise((resolve) => {
      useDebounce(resolve);
    });
  }
}

export const personServices = new PersonServices(api);
