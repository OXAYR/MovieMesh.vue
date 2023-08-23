import Vuex from 'vuex';
import axios from 'axios';

export default new Vuex.Store({
  state: {
    movie: {
      movies:[]
    },
    user: {
      token:null,
    },
    validationErrors: {},
  },
  getters: {
    getMovies(state) {
      console.log(state.movie)
      return state.movie.movies;
    },
    getSelectedMovie(state) {
      return state.movie.selectedMovie;
    },
    getUser(state){
      console.log(state.user)
      return state.user
    }
  },
  mutations: {
    SET_VALIDATION_ERRORS(state, payload) {
      state.validationErrors = payload;
    },
    SET_MOVIE_LIST(state, payload) {
      console.log('in the movie setter--->',payload.data.movies)
      state.movie.movies = payload.data.movies;
      console.log('in the movie setter--->',state.movie.movies)

    },
    SET_SELECTED_MOVIE(state, payload) {
      state.movie.selectedMovie = payload;
    },
    SET_USER(state, payload){
      state.user = payload
    },
    REMOVE_MOVIE(state,id){
      console.log("in the mutatuion", id)
      state.movie.movies = state.movie.movies.filter(movie => movie.id !== id);
    },
    UPDATE_MOVIE(state,id,data){
      state.movie.movies.splice(id,1,data)
    },
    DELETE_USER(state){
      state.user = null
    }
  },
  actions: {
    
    async createMovies(_, payload) {
      try {
        const token = this.state.users.token;
        console.log('token---->', token)
        const config = {
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
          }
        };
        const { data } = await axios.post('/movies', payload, config);
        console.log('Movie created:', data);
      } catch (error) {
        console.error('Error creating movie:', error);
      }
    },
    
    async fetchMoviesById({ commit }) {
      try {
        const token = this.state.users.token;
        console.log('token in the fetch----> ', token)
        const config = {
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
          }
        };
        const { data } = await axios.get('/movies/',config);
        console.log(data)
        commit('SET_MOVIE_LIST', data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },

    async deleteMovie({ commit }, id ) {
      try {
        console.log(id)
        commit('REMOVE_MOVIE', id) 
        const token = this.state.user.token;
        console.log('token in the fetch----> ', token)
        const config = {
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
          }
        };
        await axios.delete(`/movies/${id}`,config)
      } catch (error) {
        console.error('Error deleting todo:', error)
      }
    },

    async updateMovie({ commit }, { indx, updateMovie }) {
      try {
        console.log("in the update movie----> ",indx)
        commit('Set_MOVIE', {id: indx , data: updateMovie}) 
        const token = this.state.user.token;
        console.log('token in the update----> ', token)
        const config = {
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
          }
        };
        await axios.put(`/movies/${indx}`,updateMovie,config)
      } catch (error) {
        console.error('Error deleting todo:', error)
      }
    },
    
    async fetchMovies({ commit }) {
      try {
        const token = this.state.user.token;
        console.log('token in the fetch----> ', token)
        const config = {
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json'
          }
        };
        const { data } = await axios.get('/movies',config);
        console.log(data)
        commit('SET_MOVIE_LIST', data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },

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
        const { data } = await axios.post('/users/register', payload);
        console.log(data);
      } catch (error) {
        if (error.response && error.response.data.errors) {
          commit('SET_VALIDATION_ERRORS', error.response.data.errors);
        }
        console.error('Error registering user:', error);
      }
    },
  
    async updateUserPassword({ commit }, {id, newPassword}) {
      try {
        await axios.put(`/users/${id}/updatePassword`, { newPassword });
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
  
    
  },
  modules: {},
});
