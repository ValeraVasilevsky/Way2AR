import { Ref } from "vue";
import { type User } from "shared/types";

export interface Nurse extends Omit<User, "name"> {
  full_name: string;
  department: string;
}

export interface NurseState {
  nurses: Ref<Nurse[]>;
  getNurses: () => Promise<void>;
}
