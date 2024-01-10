import { createRouter, createWebHistory } from 'vue-router'
import  EventView from '../views/EventView.vue'
import AboutView from "@/views/AboutView.vue"
import EventDetails from "@/views/EventDetails.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-view',
      component: EventView
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props:true,
      component: EventDetails
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    }
  ]
})

export default router
