<template>
  <div class="mx-16 my-32">
    <h1 class="font-bold text-3xl text-left">Movies</h1>
    <ul class="grid grid-cols-4 gap-4 mt-4">
      <li
        v-for="item in movie"
        :key="item.id"
        class="p-4 bg-white shadow-md rounded-lg flex flex-col justify-between"
      >
        <div class="p-2">
          <div class="text-lg font-semibold">{{ item.name }}</div>
          <p class="text-gray-500 text-sm line-clamp-2">
            {{ item.released_on }}
          </p>
        </div>
        <!-- <div><img :src="item.image" alt="productimage" /></div> -->
        <div class="mt-4 flex justify-between items-center">
          <!-- <p class="text-lg font-semibold">Rs{{ moive.price }}</p> -->
          <!-- <button class="bg-stoneBlack text-white font-medium rounded p-2">
            Add to Cart
          </button> -->
          <button
            @click="deleteItem(item.id)"
            class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium rounded p-1 m-3"
          >
            Delete
          </button>

          <button
            @click="editMovie(item.id)"
            class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium rounded p-1 m-3"
          >
            Edit
          </button>
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
