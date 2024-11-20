import { Ref } from "vue";
import { type User } from "shared/types";

export interface Doctor extends Omit<User, "name"> {
  full_name: string;
  department: string;
  isHead: boolean;
}

export interface DoctorsState {
  doctors: Ref<Doctor[]>;
  getDoctors: () => Promise<void>;
}
