<script setup lang="ts">
import {classifyQuestion} from "@/api/question";

async function classifyTest() {
  const res = await classifyQuestion("A person is unconscious, first aid instructions?");
  alert(res);
}
</script>

<template>
  <div class="container">
    <div class="home">
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquid architecto dicta dignissimos ducimus
        earum eligendi harum ipsa maiores mollitia nemo odit perferendis porro recusandae suscipit unde voluptatum.
        Doloribus, totam.
      </h1>
      <button @click="classifyTest">CLASSIFY TEST</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  flex-grow: 1;
  margin-top: 2rem;
  .home {
    padding: 1rem;
    border-radius: 20px;
    background: $white;
  }
}
</style>
