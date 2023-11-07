import { RouteRecordRaw } from "vue-router";

const routeMap: RouteRecordRaw[] = [];
export const PATHS_MAP = {
  LOGIN_PAGE: "/login",
};

export const COMPONENTS_MAP = {
  LOGIN_PAGE: () => import("@/views/login/index.vue"),
};
