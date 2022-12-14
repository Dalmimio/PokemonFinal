import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/valoraciones',
      name: 'valoraciones',
      
      component: () => import('../views/FeedbackView.vue')
    },
    {
      path: '/myposts',
      name: 'myposts',
      
      component: () => import('../views/MyPostsView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/terms',
      name: 'terms', 
      component: () => import('../views/TermsView.vue')
    },
    {
      path: '/workwithus',
      name: 'workwithus',
      component: () => import('../views/WorkUsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/save',
      name: 'save',
      component: () => import('../views/SaveView.vue')
    },
    {
      path: '/formWork',
      name: 'formWork',
      component: () => import('../views/FormWorkView.vue')
    }
  ]
})

export default router
