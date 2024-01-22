import { maskEmail } from "./maskEmail";
import { maskPhoneBR } from "./maskPhone";

export const masks = {
  phoneBR(value: string) {
    return maskPhoneBR(value);
  },
  email(value: string) {
    return maskEmail(value);
  },
};
