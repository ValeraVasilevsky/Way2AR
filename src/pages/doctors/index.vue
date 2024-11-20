<template>
  <div>
    <DataTable :columns="columns" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { DataTable, type TableItem, type TableColumn } from "shared/ui";

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
const data: TableItem[] = [
  {
    full_name: "Петрова В. В.",
    department: "Хирургическое",
    position: false,
  },
  {
    full_name: "Иванов Г. Г.",
    department: "Хирургическое",
    position: true,
  },

  {
    full_name: "Медведев Д. А.",
    department: "Кардиологическое",
    position: true,
  },
  {
    full_name: "Зайцев И. С.",
    department: "Кардиологическое",
    position: false,
  },
];
</script>
