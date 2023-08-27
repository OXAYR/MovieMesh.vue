<template>
  <div class="mx-32 my-32">
    {{ cart }}
    <h1 class="font-bold text-3xl text-left">MY CART ({{ cart.length }})</h1>
    <ul
      v-if="cart.length"
      class="p-4 mt-4 card divide-y divide-slate-300 text-left shadow-md"
    >
      <li
        v-for="item in cart"
        :key="item.id"
        class="px-2 grid grid-cols-12 gap-4"
      >
        <div class="col-span-9">
          <p class="font-bold mt-4">{{ item.movieId }}</p>
          <p>price: {{ item.ticketCount }}</p>
        </div>
        <div class="col-span-3 flex flex-col items-end py-2 mt-4">
          <button
            @click="removeItem(item.movieId)"
            class="text-white bg-blue font-medium text-md text-center rounded-full px-2 m-3"
          >
            x
          </button>
        </div>
      </li>
    </ul>
    <div
      v-if="cart.length"
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
        />
      </div>
      <p class="font-semibold mt-2">Your Cart is Empty</p>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartView",
  computed: {
    ...mapGetters({ cart: "getCart" }),
    // calculateTotalBill() {
    //   return this.cart.reduce((sum, item) => sum + item.product.price, 0);
    // },
  },
  methods: {
    ...mapActions(["getCart"]),
    ...mapActions(["deleteCartEl"]),
    removeItem(index) {
      return this.deleteCartEl(index);
    },
  },
  created(){
    this.getCart()
  }
};
</script>

<style scoped>
/* Add your Tailwind CSS classes here or in a separate stylesheet */
</style>
