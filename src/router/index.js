import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import MovieListView from '../views/MovieListView.vue'
import CreateMovie from '../components/CreateMovie.vue'
import EditMovie from '../components/EditMovie.vue'
import UserAccount from '../components/UserAccount.vue'
import EditPassword from '../components/EditPassword.vue'
import store from '@/store'

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
    path:'/userAccount',
    component: UserAccount
  },
  {
    path:'/:userId/updatePassword',
    component: EditPassword
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.name === 'home')) {
    console.log('home route authentication');
    console.log('token------->',store.state.user.token)
    
    if (store.state.user.token) {
      console.log('User is authenticated');
      next(); 
    } else {
      console.log('User is not authenticated');
      next({ name: 'login' });
    }
  } 
  else{
    next()
  }
})





export default router
