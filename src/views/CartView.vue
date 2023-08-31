<template>
  <div class="mx-32 my-32  text-silver ">
    <h1 class="font-bold text-3xl text-left">MY CART ({{ crt.length }})</h1>
    <ul
      v-if="crt.length"
      class="p-4 mt-4 card divide-y divide-slate-300 text-left shadow-md bg-blue"
    >
      <li
        v-for="item in crt"
        :key="item.id"
        class="px-2 grid grid-cols-12 gap-4"
      >
        <div class="col-span-9">
          <p class="font-bold mt-4">{{ item.name }}</p>
          <p>Tickets: {{ item.ticketCount }}</p>
        </div>
        <div class="col-span-3 flex flex-col items-end py-2 mt-4">
          <button
            @click="removeItem(item.movieId)"
            class="text-darkBlue bg-silver font-medium text-md text-center rounded-full px-2 m-3"
          >
            x
          </button>
        </div>
      </li>
    </ul>
    <div
      v-if="crt.length"
      class="p-4 mt-4 card divide-y divide-slate-300 text-left shadow-md"
    >
      <!-- <p><strong>Total Bill:</strong> {{ calculateTotalBill }}</p> -->
    </div>

    <!-- <div v-else class="flex flex-col items-center justify-center text-center">
      <div>
       <img
          src="../assets/undraw_empty_cart_co35.svg"
          alt="empty cart"
          class="max-w-full h-auto max-h-48 mx-auto drop-shadow-lg"
        /> -->
      <!-- </div>
      <p class="font-semibold mt-2">Your Cart is Empty</p>
    </div> --> 
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartView",
  computed: {
    ...mapGetters({crt: "cart/getCart"}), 
  },
  methods: {
    ...mapActions("cart", ["getTheCart", "deleteCartEl"]), 
    removeItem(index) {
      console.log(index);
      this.deleteCartEl(index); 
    },
  },
  created() {
    this.getTheCart(); 
  },
};
</script>


<style scoped>
/* Add your Tailwind CSS classes here or in a separate stylesheet */
</style>
