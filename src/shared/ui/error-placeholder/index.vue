<template>
  <div :class="styles.placeholder">
    {{ props.message }}
  </div>
</template>

<script setup lang="ts">
import styles from "./styles.module.css";

interface ErrorPlaceholderProps {
  message: string;
}

const props = defineProps<ErrorPlaceholderProps>();
</script>
