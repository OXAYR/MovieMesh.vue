<template>
  <MovieList :movie="Movies" @delete-movie="deleteMovies" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MovieList from "../components/MovieList.vue";

export default {
  name: "MovieListView",
  components: {
    MovieList,
  },
  computed: {
    ...mapGetters({ Movies: "getMovies" }),
  },
  methods: {
    ...mapActions(["deleteMovie"]),
    ...mapActions({ fetch: "fetchMovies" }),
    deleteMovies(index) {
      this.deleteMovie(index);
    },
  },
  created() {
    this.fetch();
  },
};
</script>
