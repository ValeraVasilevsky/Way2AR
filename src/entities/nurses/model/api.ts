import { api } from "shared/api";
import { type User } from "shared/types";

export const fetchNurses = async (): Promise<User[]> => {
  const { data } = await api.get("users");
  return data;
};
