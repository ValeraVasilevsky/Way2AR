<template>
  <div>
    <Loader v-if="isLoading" />

    <div v-else>
      <ErrorPlaceholder v-if="hasError" :message="errorMessage" />
      <DataTable v-else :columns="columns" :data="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { storeToRefs } from "pinia";
import { useNursesStore } from "entities/nurses";
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
];

const { nurses } = storeToRefs(useNursesStore());
const { getNurses } = useNursesStore();

const data = ref<TableItem[]>([]);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>("");
const isLoading = ref<boolean>(false);

const prepareDataItems = (): void => {
  data.value = nurses.value.map(
    (nurse) =>
      ({
        ...nurse,
      } as TableItem)
  );
};
const fetchNurses = async (): Promise<void> => {
  isLoading.value = true;
  hasError.value = false;
  errorMessage.value = "";

  try {
    await getNurses();
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
  await fetchNurses();
});
</script>
