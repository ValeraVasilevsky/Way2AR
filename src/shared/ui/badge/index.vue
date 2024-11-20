<template>
  <div :class="styles.badge">
    <Typography variant="text-xs-2" weight="400">
      <slot />
    </Typography>
  </div>
</template>

<script setup lang="ts">
import { Typography } from "../typography";

import styles from "./styles.module.css";
</script>
