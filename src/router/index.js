import Vue from 'vue'
import VueRouter from 'vue-router'
import layout_default from '../../layouts/default.vue'
import default_admin from '../../layouts/default_admin.vue'
const lazyload = (path) => {
  return () => import(`@/views/${path}`)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: lazyload('login')
  },
  {
    path: '/dashboard',
    component: default_admin,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: lazyload('dashboard')
      }
    ]
  },
  {
    path: '/',
    component: layout_default,
    children: [
      {
        path: '/main',
        name: 'Main',
        component: lazyload('main')
      },
      {
        path: '/file',
        name: 'File',
        component: lazyload('file')
      }
    ]
  },

  {
    path: '/editor',
    name: 'Editor',
    component: lazyload('editor')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
router.beforeEach((to, from, next) => {
  const session = localStorage.getItem('access_token')
  const publicPages = '/login'
  const notPublicPages = !publicPages.includes(to.path)
  let logged = false
  if (session) {
    logged = true
  }
  if (logged && !notPublicPages) {
    next('/ ')
  } else if (!logged && notPublicPages) {
    next('/login')
  } else {
    next()
  }
})
