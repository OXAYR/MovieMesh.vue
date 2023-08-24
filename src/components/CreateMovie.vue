<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white rounded-lg shadow-md p-6">
      <h1 class="text-center text-xl font-bold font-sans mb-4">
        Create A Movie
      </h1>
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700"
          >Title</label
        >
        <input
          type="text"
          id="title"
          v-model="movie.name"
          class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          placeholder="Enter title"
        />
      </div>
      <div class="mb-4">
        <label for="released_on" class="block text-sm font-medium text-gray-700"
          >Released On</label
        >
        <input
          type="date"
          id="released_on"
          v-model="movie.released_on"
          class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <p v-if="error.length" class="text-red-600 text-sm">{{ error }}</p>
      <button
        class="mt-4 w-full py-2 bg-blue rounded-full text-white font-serif hover:bg-black"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CreateProduct",
  data() {
    return {
      movie: {
        name: "",
        released_on: Date,
      },
      error: "",
    };
  },

  methods: {
    ...mapActions({ createMovie: "createMovies" }),
    validate(obj) {
      if (obj.name != "") {
        console.log("from the create movie-------> ", obj);
        this.createMovie(obj);
      } else {
        this.error = "Enter title or Valid Price";
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
