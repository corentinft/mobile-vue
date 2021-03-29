import Vue from 'vue'
import VueRouter from 'vue-router'
import TabsAuth from '../views/Auth/TabsAuth';
import TabsHome from '../views/App/TabsHome';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/auth/login'
  },
  {
    path: '/auth/',
    component: TabsAuth,
    children: [
      {
        path: '',
        redirect: '/auth/login'
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/Auth/Connection')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../views/Auth/Register')
      }
    ]
  },
  {
    path: '/app',
    component: TabsHome,
    children: [
      {
        path: 'promotions',
        name: 'promotions',
        component: () => import('../views/App/Promotions')
      },
      {
        path: 'scan',
        name: 'scan',
        component: () => import('../views/App/Scan')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && to.name !== 'register' && !localStorage.getItem('token')) {
      next({name: 'login'});
  }
  next();
})

export default router
