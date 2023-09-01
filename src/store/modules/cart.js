import axios from 'axios';

export default {
    namespaced: true,
  state: {
    cart:{
        bookings:[]
      },
  },
  getters: {
    getCart(state){
        console.log("IN the getter of cart-----> ", state)
        return state.cart.bookings
      },
  },
  mutations: {
     
    SET_CART(state, cart){
        console.log("Cart in the setter ", cart)
       state.cart.bookings = cart  ;
      },
      DELETE_CART_EL(state, cart) {
        state.cart = cart
      }
  },
  actions: {
    
    async createCart({_,rootState}, payload) {
        try {
          const userId = rootState.user.user.user._id;
          const token = rootState.user.user.token;
          console.log("root state user in the cart------>", rootState.user.user.user._id)
          console.log('token---->', token, userId)
          console.log('payload---->', payload , payload.released_on)
          const {id, released_on} = payload
          const newPayload = {movieId: id, userId: userId, date:released_on}
          console.log("In the cart new payload------> ",newPayload)
          const config = {
            headers: {
              'x-access-token': token,
              'Content-Type': 'application/json'
            }
          };
          const { data } = await axios.post('/cart', newPayload, config);
          console.log('Cart created:', data);
        } catch (error) {
          console.error('Error creating movie:', error);
        }
      },
      
      async getTheCart({ commit,rootState }) {
        try {
          const token = rootState.user.user.token;
          console.log('token in the fetch of getCart----> ', token )
          const config = {
            headers: {
              'x-access-token': token,
              'Content-Type': 'application/json'
            }
          };
          const { data } = await axios.get(`/cart/${rootState.user.user.user._id}`,config);
          console.log("in the get cart----> ",data.data.cart.items)
          commit('SET_CART', data.data.cart.items);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      },
  
  
      async deleteCartEl({ commit,rootState }, id ) {
        console.log("payload in action removeToCart", id)
        const userId = rootState.user.user.user._id
        const token = rootState.user.user.token;
        const config = {
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
          }
        };
        // console.log('config ',config)
        const { data } = await axios.delete(`/cart/${id}`,config,userId)
        console.log("RESPONSE RECIEVED From remove cart", data.data.cart.items)
         commit ('SET_CART', data.data.cart.items )
      },
  },
};
