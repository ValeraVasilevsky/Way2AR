<template>
  <RouterLink :to="props.to" :class="styles.link">
    <Typography variant="text-xl-0" weight="400">
      <slot />
    </Typography>
  </RouterLink>
</template>

<script setup lang="ts">
import { Typography } from "../typography";

import styles from "./styles.module.css";

interface LinkProps {
  to: string;
}

const props = defineProps<LinkProps>();
</script>
