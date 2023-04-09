<script setup lang="ts">
import AIChat from "@/components/AIChat.vue";

</script>

<template>
  <div class="container">
    <div class="home">
      <h1 class="heading">
        Meet the SuperAid app!
      </h1>
      <div class="about-app">
        <h3>Ask the AI about the first aid or emergency situations!</h3>
        <div class="examples">
          <h3>Here are some examples</h3>
          <ul>
            <li>A person is unconscious, what to do?</li>
            <li>How to call an emergency in Kazakhstan?</li>
            <li>How to make a CPR?</li>
          </ul>
        </div>
      </div>
      <h2>Try it now!</h2>
      <div class="">
        <AIChat />
      </div>
      <div class="usage">
        <h2>Usage guide</h2>
        <ul>
          <li>Try to be closer in description to first aid or emergency situation (random text will be ignored)</li>
          <li>Just give a short summary about situation or a short question</li>
          <li>Send it and wait for AI response</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  flex-grow: 1;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .home {
    padding: 2rem;
    border-radius: 20px;
    background: rgb(27, 67, 101);
    color: $white;

    .heading {
      font-size: 40px;
      color: $primary;
    }
    .about-app {
      margin-top: 2rem;
      margin-bottom: 2rem;

      .examples {
        margin-top: 1rem;

        ul {
          margin-left: 1rem;
        }
      }
    }
    .usage {
      margin-top: 1rem;
      h2 {
        color: $primary;
      }
      ul {
        margin-left: 1rem;
      }
    }
  }
}
</style>
