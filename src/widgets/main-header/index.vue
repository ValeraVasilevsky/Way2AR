<template>
  <header :class="styles.header">
    <div :class="styles.links">
      <Link to="/"> Врачи </Link>
      <Link to="/nurses"> Медсестры </Link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Link } from "shared/ui";

import styles from "./styles.module.css";
</script>
