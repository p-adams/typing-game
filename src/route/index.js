import { createWebHashHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import SettingsView from "./views/SettingsView.vue";
import ScoresView from "./views/ScoresView.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/settings", component: SettingsView },
    { path: "/scores", component: ScoresView },
  ],
});
