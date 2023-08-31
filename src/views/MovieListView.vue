<template>
  <MovieList :movie="allMovies" @add-ticket="addToCart" />
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
    ...mapGetters({allMovies: "movies/getMovies"}), 
  },
  methods: {
    ...mapActions("movies", ["deleteMovie" , "fetchMovies"]), 
    ...mapActions('cart', ['createCart']),

    addToCart(index) {
      this.createCart(index);
    },
  },
  created() {
    this.fetchMovies();
  },
};
</script>