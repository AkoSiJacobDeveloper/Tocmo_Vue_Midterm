import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../components/views/MainLayout.vue'
import HomePage from '../components/Pages/HomePage.vue'
import AboutPage from '../components/Pages/AboutPage.vue'
import ContactPage from '../components/Pages/ContactPage.vue'
// import ActivityPage from '../components/Pages/ActivityPage.vue'
import ProductForm from '../components/ProductForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomePage,
      },

      {
        path: 'about',
        name: 'About',
        component: AboutPage,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: ContactPage,
      },
      {
        path: 'product',
        name: 'Activity',
        component: ProductForm,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
