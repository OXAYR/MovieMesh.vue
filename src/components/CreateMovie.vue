<template>
  <div>
    <h1 class="text-left text-xl font-bold font-san py-2">Create A Product</h1>
    <div class="shadow-sm max-w-full bg-white rounded p-4">
      <div class="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="Enter title"
          id="todo"
          v-model="movie.name"
          class="mt-4 p-2 flex border border-grey rounded-md w-full"
        />
      </div>
      <p v-if="error.length" class="text-red text-sm text-left">
        {{ error }}
      </p>
      <!-- <input
        type="url"
        v-model="prod.file"
        class="mt-4 p-2 flex border border-gray-300 rounded-md w-full"
      /> -->
      <textarea
        type="text"
        placeholder="Enter Description"
        v-model="movie.released_on"
        class="mt-4 h-32 border border-grey rounded-md w-full"
      />
      <button
        class="mt-4 px-12 py-2 bg-stoneBlack rounded-full"
        @click="validate(movie)"
      >
        <p
          class="text-white font-serif bg-black text-center hover:text-seaGreen"
        >
          Create
        </p>
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
        released_on: " ",
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
