import { RouteRecordRaw } from "vue-router";
import { PATHS_MAP, COMPONENTS_MAP } from "./routeMap";

const BASIC_PAGE: RouteRecordRaw[] = [
  { path: "/", redirect: PATHS_MAP.LOGIN_PAGE },
  {
    path: PATHS_MAP.LOGIN_PAGE,
    component: COMPONENTS_MAP.LOGIN_PAGE,
  },
];

export const routes = BASIC_PAGE;
