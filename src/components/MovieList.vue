<template>
  <div class="mx-16 my-32 text-silver">
    <h1 class="font-bold text-3xl text-left">Movies</h1>
    <ul class="grid grid-cols-4 gap-4 mt-4">
      <li
        v-for="item in movie"
        :key="item.id"
        class="p-4 bg-blue shadow-md rounded-lg flex flex-col justify-between"
      >
        <div class="p-2">
          <div class="text-lg font-semibold">{{ item.name }}</div>
          <p class="text-gray-500 text-sm line-clamp-2">{{ item.released_on }}</p>
        </div>
        <div><img src="../assets/Netflix.svg" alt="movieimage"  class="ml-54"/></div> 
        <div class="mt-4 flex justify-between items-center">
          <button
            @click="addTicket(item)"
            class="border border-silver text-white hover:bg-silver hover:text-blue font-medium rounded p-1 m-3"
          >
            Buy Ticket
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
// import EditProduct from "./EditProduct.vue";
export default {
  name: "MovieList",
  data() {
    return {};
  },
  props: {
    movie: {},
  },
  methods: {
    addTicket(index) {
      this.$emit("add-ticket", index);
    },
    
  },
};
</script>
