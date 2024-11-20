<template>
  <div>
    <Loader v-if="isLoading" />

    <div v-else>
      <ErrorPlaceholder v-if="hasError" :message="errorMessage" />
      <DataTable v-else :columns="columns" :data="data">
        <template v-slot:position="{ item }">
          <Badge v-if="item.isHead"> Заведующий отделения </Badge>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { storeToRefs } from "pinia";
import { useDoctorsStore } from "entities/doctors";
import {
  DataTable,
  type TableItem,
  type TableColumn,
  ErrorPlaceholder,
  Loader,
  Badge,
} from "shared/ui";
import { AxiosError } from "axios";

const columns: TableColumn[] = [
  {
    key: "full_name",
    title: "ФИО",
  },
  {
    key: "department",
    title: "Отделение",
  },
  {
    key: "position",
    title: "Должность",
  },
];

const { doctors } = storeToRefs(useDoctorsStore());
const { getDoctors } = useDoctorsStore();

const data = ref<TableItem[]>([]);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>("");
const isLoading = ref<boolean>(false);

const prepareDataItems = (): void => {
  data.value = doctors.value.map(
    (doctor) =>
      ({
        ...doctor,
      } as TableItem)
  );
};
const fetchDoctors = async (): Promise<void> => {
  isLoading.value = true;
  hasError.value = false;
  errorMessage.value = "";

  try {
    await getDoctors();
    prepareDataItems();
  } catch (error) {
    isLoading.value = false;
    data.value = [];
    hasError.value = true;
    errorMessage.value = (error as AxiosError).message;
  } finally {
    isLoading.value = false;
  }
};

onBeforeMount(async () => {
  await fetchDoctors();
});
</script>
