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
    let all_persons: Omit<Person, "email" | "telefone">[] = [];

    return await new Promise((resolve) => {
      useDebounce(() => resolve(this.api.get(this.endpoint)));
    });

    /*     useDebounce(
      async () =>
        await this.api.get(this.endpoint).then(({ data }) => {
          console.log({ data });
          all_persons = data.persons;
        })
    );

    return all_persons; */
  }

  async create(data: CreatePersonRequestData): Promise<void> {
    console.log({ data });
    return await new Promise((resolve) => {
      useDebounce(resolve);
    });
  }
}

export const personServices = new PersonServices(api);
