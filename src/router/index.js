import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import MovieListView from '../views/MovieListView.vue'
import CreateMovie from '../components/CreateMovie.vue'
import EditMovie from '../components/EditMovie.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '',
        name: MovieListView,
        component: MovieListView
      },
      {
        path:'createMovie',
        component: CreateMovie
      },
      {
        path:'/edit/:id',
        component: EditMovie
      }
      
    ]
  },
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView
  },
 
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})




export default router
