import axios from 'axios';

export default {
    namespaced: true,
  state: {
    movie: {
        movies:[]
      },
  },
  getters: {
    getMovies(state) {
        console.log("in the movie getter list----> ",state.movie)
        return state.movie.movies;
      },
      getSelectedMovie(state) {
        return state.movie.selectedMovie;
      },
  },
  mutations: {
    SET_MOVIE_LIST(state, payload) {
        console.log('in the movie setter--->',payload.data.movies)
        state.movie.movies = payload.data.movies;
        console.log('in the movie setter--->',state.movie.movies)
  
      },
      SET_SELECTED_MOVIE(state, payload) {
        state.movie.selectedMovie = payload;
      },
     
      REMOVE_MOVIE(state,id){
        console.log("in the mutatuion", id)
        state.movie.movies = state.movie.movies.filter(movie => movie.id !== id);
      },
      UPDATE_MOVIE(state,id,data){
        state.movie.movies.splice(id,1,data)
      },
  },
  actions: {
    async createMovies({_,rootState}, payload) {
        try {
          const token = rootState.user.user.token;
          console.log('token---->', rootState.user.user.token)
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
      
      async fetchMoviesById({ commit,rootState }) {
        try {
          const token = rootState.user.user.token;
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
  
      async deleteMovie({ commit,rootState }, id ) {
        try {
          console.log(id)
          commit('REMOVE_MOVIE', id) 
          const token = rootState.user.user.token;
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
  
      async updateMovie({ commit,rootState }, { indx, updateMovie }) {
        try {
          console.log("in the update movie----> ",indx)
          commit('Set_MOVIE', {id: indx , data: updateMovie}) 
          const token =rootState.user.user.token;
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
      
      async fetchMovies({ commit,rootState }) {
        try {
          const token = rootState.user.user.token;
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
  },
};
