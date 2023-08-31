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
import Users from '../AdminComponents/Users.vue'
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
      },
      {
        path:'users',
        component:Users
      }
      
    ],
    meta: {
      adminAuth: true,
      requiresAuth: true,
      userAuth: false,  
    }
    
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
      
    ],
    meta: {
      adminAuth: false,
      requiresAuth: true,
      userAuth: true,  
    }
    
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
 

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = store.getters['user/getUser']; 
    console.log("in the navigation guards------>",authUser.user.userRole)

    if (!authUser.user || !authUser.token) {
      next({ name: 'login' });
    } else if (to.meta.adminAuth) {
      if (authUser.user.userRole.toLowerCase() === 'admin') {
        next();
      } else {
        next('/home');
      }
    } else if (to.meta.userAuth) {
      if (authUser.user.userRole.toLowerCase() === 'user') {
        next();
      } else {
        console.log("I am in admin");
        next('/admin');
      }
    }
  } else {
    next(); // Proceed to the route if no authentication is required
  }
});


  // if (to.matched.some(record => record.meta.requiresAdmin)) {
  //   if (isAdmin) {
  //     next();
  //   } else {
  //     next({ name: 'home' });
  //   }
  // } else if (to.matched.some(record => record.meta.requiresUser)) {
  //   if (isUser) {
  //     next();
  //   } else {
  //     next({ name: 'admin' });
  //   }
  // } else {
  //   next();
  // }
// });




export default router
