<template>
  <AdminMovieList :movie="allMovies" @delete-movie="deleteMovies" />
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import AdminMovieList from "../AdminComponents/AdminMovieList.vue";

export default {
  name: "AdminMovieListView",
  components: {
    AdminMovieList,
  },
  computed: {
    ...mapGetters({allMovies: "movies/getMovies"}), 
  },
  methods: {
    ...mapActions("movies", ["deleteMovie", "fetchMovies"]), 

    deleteMovies(index) {
      this.deleteMovie(index);
    },
  },
  created() {
    this.fetchMovies();
  },
};
</script>