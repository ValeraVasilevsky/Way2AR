<template>
  <div :class="styles.container">
    <MainHeader />

    <div :class="styles.wrapper">
      <RouterView v-slot="{ Component }">
        <Suspense>
          <template #default>
            <component :is="Component" />
          </template>
        </Suspense>
      </RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MainHeader } from "widgets/main-header";

import styles from "./styles.module.css";
</script>
