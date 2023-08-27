<template>
  <div class="ml-4 my-5">
    <h1 class="font-bold text-silver text-3xl text-left">Movies</h1>
    <ul class="grid grid-cols-4 gap-4 mt-4">
      <li
        v-for="item in movie"
        :key="item.id"
        class="p-4 bg-blue shadow-md rounded-lg flex flex-col justify-between"
      >
        
        <div><img src="../assets/Netflix.svg" alt="movieimage"  class="ml-54"/></div> 
        <div class="mt-4 flex justify-between items-center">
          <div class="ml-16">
          <div class="text-lg text-silver font-semibold ">{{ item.name }}</div>
          <p class="text-silver">
            {{ item.released_on }}
          </p>
          <button
          @click="deleteItem(item.id)"
          class="border border-red text-red hover:bg-red hover:text-white font-medium rounded p-1 m-3"
          >
          Delete
        </button>
        
        <button
        @click="editMovie(item)"
        class="border border-white text-white hover:bg-white hover:text-blue font-medium rounded p-1 m-3"
        >
        Edit
      </button>
    </div>
  </div>  
  </li>
</ul>
    <!-- <div v-else class="flex flex-col items-center justify-center text-center">
      <div>
         <img
          src="../assets/undraw_no_data_re_kwbl.svg"
          alt="no products"
          class="max-w-full h-auto max-h-48 mx-auto drop-shadow-lg"
        /> -->
    <!-- </div>
      <p class="font-semibold mt-2">No Products Available</p>
    </div> -->
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
    deleteItem(index) {
      console.log(this.movie);
      console.log("in the delete component", index);
      this.$emit("delete-movie", index);
    },
    editMovie(index) {
      console.log(" in the parent edit movie ", index);
      this.$router.push({ path: `/edit/${index}` });
    },
  },
};
</script>