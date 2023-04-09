<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="about">
      <h1>About what is SuperAid?</h1>
      <h2>Often, first aid is crucial to a human's life.</h2>
      <p class="about-app">
        It is an AI chat app about first aid or help for humans in emergency situations.
        <br />
        It is helpful when you're waiting for an ambulance or an emergency operator.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  flex-grow: 1;
  margin-top: 2rem;
  margin-bottom: 2rem;

  .about {
    padding: 2rem;
    border-radius: 20px;
    background: rgb(27, 67, 101);
    color: $white;

    h1 {
      font-size: 40px;
      color: $primary;
    }
    .about-app {
      font-size: 20px;
    }
  }
}
@media screen and (max-width: 1024px) {
  .container {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    .about {
      padding: 1.5rem;
      border-radius: 20px;

      h1 {
        font-size: 32px;
      }
      h2 {
        font-size: 24px;
      }
      .about-app {
        font-size: 16px;
      }
    }
  }
}
@media screen and (max-width: 620px) {
  .container {
    margin-top: 1rem;
    margin-bottom: 1rem;

    .about {
      padding: 1rem;
      border-radius: 20px;

      h1 {
        font-size: 24px;
      }
      h2 {
        font-size: 18px;
      }
      .about-app {
        font-size: 12px;
      }
    }
  }
}
</style>