import { createRouter, createWebHistory } from 'vue-router'
import RoomDetails from '../components/Details.vue'
import ChangeRequest from '../components/ChangeRequest.vue'
import ApplyLeave from '../components/ApplyLeave.vue'
import Menu from '../components/Menu.vue'
import CancelMeal from '../components/CancelMeal.vue'
import Feedback from '../components/Feedback.vue'
import Complaints from '../components/Complaints.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'RoomDetails',
      component: RoomDetails
    },
    {
      path: '/change-request',
      name: 'ChangeRequest',
      component: ChangeRequest
    },
    {
      path: '/apply-leave',
      name: 'ApplyLeave',
      component: ApplyLeave
    },
     {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
     {
      path: '/cancel-meal',
      name: 'CancelMeal',
      component: CancelMeal
    },
     {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
     {
      path: '/complaints',
      name: 'Complaints',
      component: Complaints
    }

  ]
})

export default router