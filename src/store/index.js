import Vuex from 'vuex';
import axios from 'axios';

export default new Vuex.Store({
  state: {
    movies: {
    },
    users: {
      token:null,
    },
    validationErrors: {},
  },
  getters: {
    getMovies(state) {
      console.log(state.movies)
      return state.movies;
    },
    getSelectedMovie(state) {
      return state.movies.selectedMovie;
    },
  },
  mutations: {
    SET_VALIDATION_ERRORS(state, payload) {
      state.validationErrors = payload;
    },
    SET_MOVIE_LIST(state, payload) {
      console.log('in the movie setter--->',payload.data.movies)
      state.movies = payload.data.movies;
      console.log('in the movie setter--->',state.movies)

    },
    SET_SELECTED_MOVIE(state, payload) {
      state.movies.selectedMovie = payload;
    },
    SET_TOKEN(state, payload){
      state.users.token = payload
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
    
    async fetchMovies({ commit }) {
      try {
        const token = this.state.users.token;
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
        commit('SET_TOKEN', token);
        console.log(data);
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
  
    
  },
  modules: {},
});
