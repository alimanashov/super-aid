<script lang="ts" setup>
import { RouterLink } from "vue-router";
import router from "@/router";
import {computed} from "vue";

const activeNav = computed(() => {
  if (router.currentRoute.value.name === "home")
    return "home";
  if (router.currentRoute.value.name === "emergency")
    return "emergency";
  if (router.currentRoute.value.name === "about")
    return "about";
  return "";
});
</script>

<template>
  <div class="container">
    <nav class="nav-items">
      <RouterLink to="/emergency" class="nav-item" :class="{'active-nav': activeNav === 'emergency'}">
        <span class="material-icons">favorite</span>
        <span class="text">Emergency</span>
      </RouterLink>
      <RouterLink to="/" class="nav-item" :class="{'active-nav': activeNav === 'home'}">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </RouterLink>
      <RouterLink to="/about" class="nav-item" :class="{'active-nav': activeNav === 'about'}">
        <span class="material-icons">question_mark</span>
        <span class="text">About</span>
      </RouterLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.nav-items {
  display: flex;
  justify-content: center;
  background: $primary;
  padding: 1rem 1.5rem;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 3px 3px -2px rgb(39 44 51 / 10%), 0 3px 4px 0 rgb(39 44 51 / 4%),
    0 1px 8px 0 rgb(39 44 51 / 2%);

  .nav-item {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-left: 1rem;
    color: white;
    border-radius: 50%;
    transition: background-color 300ms ease-in-out;

    &:not(.active-nav):hover {
      background-color: $light-blue;
    }
    span.text {
      font-size: 13px;
    }
  }
  .active-nav {
    background: $bold-blue;
  }
}
@media screen and (max-width: 1024px) {
  .nav-items {
    padding: 0.75rem 1.315rem;
    .nav-item {
      span.text {
        font-size: 10px;
      }
    }
  }
}
@media screen and (max-width: 620px) {
  .nav-items {
    padding: 0.5rem 0.75rem;

    .nav-item {
      width: 70px;
      height: 70px;
      span {
        font-size: 20px;
      }

      span.text {
        font-size: 8px;
      }
    }
  }
}
</style>