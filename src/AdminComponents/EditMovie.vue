<template>
  <div class="card px-8 py-11 max-w-full flex flex-col items-center bg-blue text-silver">
    <h2 class="font-bold text-center mb-4 text-xl">Edit movie</h2>
    <div class="w-full max-w-md">
      <label class="block font-semibold mb-2">Title:</label>
      <input
        type="text"
        v-model="editedMovie.name"
        class="border border-gray-300 w-full px-3 py-2 mb-4"
      />
      <label class="block font-semibold mb-2">Released on:</label>
      <input
    type="date"
    id="released_on"
    v-model="editedMovie.released_on"
    class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
  />
      <button
        type="submit"
        @click="updateMovieInStore"
        class="bg-blue text-white px-4 py-2 rounded hover:bg-lightBlue"
      >
        Update Movie
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions} from "vuex";

export default {
  name: "EditMovie",
  data() {
    return {
      editedMovie: {
        name: "",
        released_on: new Date(), 
      },
      id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions("movies", ["updateMovie"]), 
    updateMovieInStore() {
      console.log("Route params: ", this.$route.params.id);
      console.log("Edited movie: ", this.editedMovie);
      this.updateMovie({ id: this.id, data: this.editedMovie }); 
      router.push("/home");
    },
  },
};
</script>
