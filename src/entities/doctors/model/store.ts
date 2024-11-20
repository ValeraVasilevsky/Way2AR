import { ref } from "vue";
import { defineStore } from "pinia";
import { type Doctor, type DoctorsState } from "./types";
import { fetchDoctors } from "./api";

export const useDoctorsStore = defineStore(
  "doctors",
  (): DoctorsState => {
    const doctors = ref<Doctor[]>([]);

    const getDoctors = async (): Promise<void> => {
      try {
        const response = await fetchDoctors();
        doctors.value = response.map((doctor, i) => ({
          ...doctor,
          isHead: i == 2 || i == 7,
          full_name: doctor.name,
          department: i % 2 === 1 ? "Кардиология" : "Хирургия",
        }));
      } catch (error) {
        doctors.value = [];
        return Promise.reject(error);
      }
    };

    return {
      doctors,
      getDoctors,
    };
  },
  {
    persist: {
      pick: ["doctors"],
    },
  }
);
