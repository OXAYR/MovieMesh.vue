<template>
  <AdminMovieList :movie="Movies" @delete-movie="deleteMovies" />
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

