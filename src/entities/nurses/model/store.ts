import { ref } from "vue";
import { defineStore } from "pinia";
import { type Nurse, type NurseState } from "./types";
import { fetchNurses } from "./api";

export const useNursesStore = defineStore(
  "nurses",
  (): NurseState => {
    const nurses = ref<Nurse[]>([]);

    const getNurses = async (): Promise<void> => {
      try {
        const response = await fetchNurses();
        nurses.value = response.map((nurse, i) => ({
          ...nurse,
          full_name: nurse.name,
          department: i % 2 === 1 ? "Кардиология" : "Хирургия",
        }));
      } catch (error) {
        nurses.value = [];
        return Promise.reject(error);
      }
    };

    return {
      nurses,
      getNurses,
    };
  },
  {
    persist: {
      pick: ["nurses"],
    },
  }
);
