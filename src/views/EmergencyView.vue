<script setup lang="ts">
import AIChat from "@/components/AIChat.vue";

</script>

<template>
  <div class="container">
    <div class="emergency">
      <h1>Chat here if you need an emergency help!</h1>
      <AIChat :emergency="true" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  flex-grow: 1;
  margin-top: 2rem;
  margin-bottom: 2rem;

  .emergency {
    padding: 2rem;
    border-radius: 20px;
    background: rgb(27, 67, 101);
    color: $white;

    h1 {
      font-size: 40px;
      color: $primary;
    }
  }
}
</style>