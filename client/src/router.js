import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'
import { AppState } from './AppState'
import { profileService } from './services/ProfileService'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/space',
    component: loadPage('AuthGuard'),
    beforeEnter(to, from, next) {
      authGuard(to, from, async() => {
        if (!AppState.profile.id) { await profileService.getProfile() }
        next()
      })
    },
    children: [{
      path: 'profile',
      name: 'Profile',
      component: loadPage('ProfilePage'),
      beforeEnter: authGuard
    }]
  },
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
