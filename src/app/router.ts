import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import type { Component } from "vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: (): Component => import("pages/layout.vue"),
      children: [
        {
          path: "",
          name: "doctors",
          component: (): Component => import("pages/doctors/index.vue"),
        },
        {
          path: "nurses",
          name: "nurses",
          component: (): Component => import("pages/nurses/index.vue"),
        },
      ],
    },
    {
      path: "/",
      component: (): Component => import("pages/default.vue"),
      children: [
        {
          path: "/:catchAll(.*)",
          name: "404",
          component: (): Component => import("pages/NotFound.vue"),
        },
      ],
    },
  ] as RouteRecordRaw[],
});
