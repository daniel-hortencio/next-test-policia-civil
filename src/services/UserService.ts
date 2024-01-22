import { AxiosInstance } from "axios";
import { api } from ".";
import { User } from "@/types/User";

class UserServices {
  private readonly endpoint = "/users";

  constructor(private readonly api: AxiosInstance) {
    this.api = api;
  }

  getAll(): Promise<Omit<User, "email" | "telefone">[]> {
    return this.api.get(this.endpoint);
  }
}

export const userServices = new UserServices(api);
