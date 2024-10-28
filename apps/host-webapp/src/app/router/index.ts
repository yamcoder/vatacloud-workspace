import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/tokyo',
    component: () => import('../pages/TokyoPage.vue')
  },
  {
    path: '/moscow',
    component: () => import('../pages/MoscowPage.vue')
  },
  {
    path: '/',
    redirect: '/tokyo'
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
