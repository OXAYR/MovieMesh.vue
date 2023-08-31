import axios from 'axios';

export default {
  namespaced: true,
  state: {
    user: {
        token:null,
      },
      users:{
  
      },
      validationErrors: {},
  },
  getters: {
    getUser(state){
        console.log("in the get user---->",state.user)
        return state.user
      },
      getAllUsers(state){
      console.log("In the getter ", state.users)
      return state.users
    }
    
  },
  mutations: {
    SET_USERS(state,payload){
        console.log("IN the set of all users ", payload)
        state.users = payload
      },
      SET_USER(state, payload){
        console.log("in the set user" 
        ,payload)
        state.user = payload
      },
      DELETE_USER(state){
        state.user = null
      },
      SET_VALIDATION_ERRORS(state, payload) {
        console.log("in the errors, ", payload)
        state.validationErrors = payload;
      },
  },
  actions: {
    async authenticateUser({ commit }, payload) {
        try {
          const { data } = await axios.post('/users/authenticate', payload);
          const token = data.data.token;
          console.log("in tge authentication---->",token);
          commit('SET_USER', data.data);
        } catch (error) {
          if (error.response && error.response.data.errors) {
            commit('SET_VALIDATION_ERRORS', error.response.data.errors);
          }
          console.error('Error authenticating user:', error);
        }
      },
  
      async registerUser({ commit }, payload) {
        try {
          console.log("Image of the user ", payload.profileImage)
          const { data } = await axios.post('/users/register', payload);
          console.log("in the register---> ",data.status);
          if(data.status == 200){
            commit('SET_VALIDATION_ERRORS', null)
          }
        } catch (error) {
          if (error.response.data.errors) {
            commit('SET_VALIDATION_ERRORS', error.response.data.errors);
          }
          console.error('Error registering user:', error.response.data.errors);
          console.error('Error registering user:', error);
        }
      },
    
      async updateUser({ commit }, {id, name, password }) {
        try {
          await axios.put(`/users/${id}/updateUser`, { name, password });
          commit('SET_USER', null); 
        } catch (error) {
          console.error('Error updating password:', error);
        }
      },
      async deleteUserAccount({ commit },id) {
        try {
          await axios.delete(`/users/${id}`);
          commit('DELETE_USER', null); 
        } catch (error) {
          console.error('Error deleting account:', error);
        }
      },
    
      async fetchUsers({commit}){
        try{
          const {data} = await axios.get("/users/all");
          console.log("In the fetch users ", data.data.users)
          commit("SET_USERS", data.data.users)
        }catch(error){
          console.log("Error fetching User", error);
        }
      },
  
      async updateUserRole({ commit }, {id, role }) {
        try {
          await axios.put(`/users/${id}/updateRole`, { role });
          commit('SET_USER', null); 
        } catch (error) {
          console.error('Error updating password:', error);
        }
      },
      
  },
};