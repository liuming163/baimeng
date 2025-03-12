import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '走进柏蒙',
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/about'),
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '主页',
    },
    component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
  },
  {
    path: '/product',
    name: 'product',
    meta: {
      title: '案例展示',
    },
    component: () =>
      import(/* webpackChunkName: "product" */ '@/views/product'),
  },
  {
    path: '/cooperate',
    name: 'cooperate',
    meta: {
      title: '合作伙伴',
    },
    component: () =>
      import(/* webpackChunkName: "cooperate" */ '@/views/cooperate'),
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      title: '联系我们',
    },
    component: () =>
      import(/* webpackChunkName: "contact" */ '@/views/contact'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const t = to.meta.title || 'Admin'
  document.title = '柏蒙文化 | ' + t
  next()
  // do something
})
router.afterEach((to, from) => {
  // do something
})

export default router
