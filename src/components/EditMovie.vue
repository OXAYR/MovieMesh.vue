<template>
  <div class="card px-8 py-11 max-w-full flex flex-col items-center">
    <h2 class="font-bold text-center mb-4 text-xl">Edit Task</h2>
    <div class="w-full max-w-md">
      <label class="block font-semibold mb-2">Title:</label>
      <input
        v-model="editedMovie.name"
        class="border border-gray-300 w-full px-3 py-2 mb-4"
      />

      <label class="block font-semibold mb-2">Description:</label>
      <textarea
        v-model="editedMovie.released_on"
        class="border border-gray-300 w-full px-3 py-2 mb-4"
      ></textarea>

      <button
        type="submit"
        @click="updateTaskInStore"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Update Task
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
        released_on: "",
      },
      id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions(["updateMovie"]),
    updateMovieInStore() {
      console.log("in thhe edit task----> ", this.id, this.editedMovie);
      this.updateMovie({ id: this.id, updateTodo: this.editedMovie });
      router.push("/home");
    },
  },
  computed: {
    ...mapGetters({ getTask: "getTasks" }),
    tasks() {
      // console.log(foundTask);
      return this.getTask.find((task) => task.id == this.$route.params.id);
    },
  },
};
</script>
