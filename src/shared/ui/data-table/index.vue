<template>
  <div :class="styles.table">
    <div :class="styles.wrapper">
      <div :class="styles.header" :style="gridColumns">
        <div
          v-for="column of props.columns"
          :key="column.key"
          :class="styles.column"
        >
          <Typography as="span" variant="text-l-1">
            {{ column.title }}
          </Typography>
        </div>
      </div>

      <div :class="styles.content">
        <div
          v-for="(item, rowIndex) of props.data"
          :key="rowIndex"
          :class="styles.row"
          :style="gridColumns"
        >
          <div
            v-for="(cell, cellIndex) of props.columns"
            :key="cellIndex"
            :class="styles.cell"
          >
            <slot :name="cell.key" :item="item">
              <Typography
                v-if="typeof item[cell.key] === 'string'"
                variant="text-l-2"
                as="p"
              >
                {{ item[cell.key] }}
              </Typography>
            </slot>
          </div>
        </div>
      </div>
    </div>

    <slot name="pagination" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Typography } from "../typography";
import { type TableColumn, type TableItem } from "./types";

import styles from "./styles.module.css";

interface TableProps {
  columns: TableColumn[];
  data: TableItem[];
}

const props = defineProps<TableProps>();

const gridColumns = computed(() => ({
  gridTemplateColumns: `repeat(${props.columns.length}, 1fr)`,
}));
</script>
