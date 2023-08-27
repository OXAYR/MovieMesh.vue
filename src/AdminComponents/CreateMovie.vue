<template>
  <h1 class="font-bold text-3xl text-left my-5 text-silver ml-4">Create A Movie</h1>
  <div class="my-5 flex flex-col items-center bg-gray-100">
    <div class="max-w-md flex flex-wrap justify-between  w-full bg-blue rounded-lg shadow-md p-6">
      <div class="mb-4">
        <label for="title" class="block text-sm font-bold text-silver "
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
        <label for="released_on" class="block text-sm font-bold text-silver"
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
        class="mt-4 w-full py-2 bg-lightBlue font-bold rounded-full text-white font-serif hover:bg-lightestBlue"
       @click="validate(movie)">
        Create
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CreateMovie",
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
