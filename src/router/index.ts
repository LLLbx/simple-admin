import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./roleHandler";

export default createRouter({
  history: createWebHashHistory(),
  routes,
});