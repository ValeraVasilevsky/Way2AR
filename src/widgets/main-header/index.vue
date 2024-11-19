<template>
  <header :class="styles.header">
    <div :class="styles.links">
      <RouterLink to="/">
        <Typography variant="text-xl-0" weight="400"> Врачи </Typography>
      </RouterLink>

      <RouterLink to="/">
        <Typography variant="text-xl-0" weight="400"> Медсестры </Typography>
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Typography } from "shared/ui";

import styles from "./styles.module.css";
</script>
