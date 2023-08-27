<template>
  <div class="card px-8 py-11 max-w-full flex flex-col items-center">
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EditMovie",
  data() {
    return {
      editedMovie: {
        name: "",
        released_on: Date,
      },
      id: this.$route.params.id,
    };
  },
  props:{

  },
  methods: {
    ...mapActions(["updateMovie"]),
    updateMovieInStore() {
      console.log("route params ", this.$route.params.id);
      console.log("in the edit movie ---->", this.id, this.editedMovie);
      this.updateMovie({ indx: this.id, updateMovie: this.editedMovie });
      router.push("/home");
    },
  },
  computed: {
    ...mapGetters({ getTask: "getTasks" }),
  },
  // beforeRouteUpdate(to, from, next) {
  //   this.id = to.params.id; // Update id when route parameter changes
  //   next();
  // },
};
</script>
