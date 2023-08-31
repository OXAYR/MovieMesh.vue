import { createStore } from 'vuex';
import user from './modules/user';
import cart from './modules/cart';
import movies from './modules/movies';

export default createStore({
  modules: {
    user,
    cart,
    movies,
  },
});
