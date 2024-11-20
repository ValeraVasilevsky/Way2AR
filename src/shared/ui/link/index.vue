<template>
  <RouterLink :to="props.to">
    <Typography variant="text-xl-0" weight="400" :class="styles.link">
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
