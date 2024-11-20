import { api } from "shared/api";
import { type User } from "shared/types";

export const fetchDoctors = async (): Promise<User[]> => {
  const { data } = await api.get("users");
  return data;
};
