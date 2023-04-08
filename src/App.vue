<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="app">
    <NavBar />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.app {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
