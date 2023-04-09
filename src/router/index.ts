import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmergencyView from "@/views/EmergencyView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/emergency",
      name: "emergency",
      component: EmergencyView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ]
})

export default router
