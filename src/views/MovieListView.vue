<template>
  <MovieList :movie="Movies" />
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
    ...mapActions({ fetch: "fetchMovies" }),
  },
  created() {
    this.fetch();
  },
};
</script>
