import { createRouter, createWebHashHistory } from 'vue-router'
import AdminView from '../AdminViews/AdminView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import DashBoardView from '../AdminViews/DashBoardView.vue'
import AdminMovieListView from '../AdminViews/AdminMovieListView.vue'
import HomeView from '../views/HomeView.vue'
import MovieListView from '../views/MovieListView.vue'
import EditMovie from '../AdminComponents/EditMovie.vue'
import UserAccount from '../components/UserAccount.vue'
import EditUser from '../components/EditUser.vue'
import CartView from '../views/CartView.vue'
import store from '@/store'

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children: [
      {
        path: '',
        name: DashBoardView,
        component: DashBoardView
      },
      {
        path:'AdminMovieListView',
        component: AdminMovieListView
      },
      {
        path:'/edit/:id',
        component: EditMovie
      }
      
    ]
    
  },
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
        path:'cart',
        component: CartView
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
    path:'/:userId/updateUser',
    component: EditUser
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

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.name === 'home')) {
//     console.log('home route authentication');
//     console.log('token------->',store.state.user.token)
    
//     if (store.state.user.token) {
//       console.log('User is authenticated');
//       next(); 
//     } else {
//       console.log('User is not authenticated');
//       next({ name: 'login' });
//     }
//   } 
//   else{
//     next()
//   }
// })





export default router
