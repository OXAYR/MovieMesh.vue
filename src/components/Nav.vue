<template>
  <div>
    <nav
      class="bg-navblue py-5 shadow-md fixed top-0 left-0 right-0 font-serif"
    >
      <div class="flex justify-between items-center px-10">
        <div class="flex col-span-7">
          <router-link to="/home">
            <p class="font-semibold text-xl text-silver">MovieMesh</p>
          </router-link>
        </div>
        <div class="flex">
          <router-link
            to="home/userAccount"
            class="text-silver shadow-sm hover:bg-blue hover:text-white rounded p-3 ml-4 mt-1"
          >
            Account
          </router-link>
          <router-link
            to="home/cart"
            class="text-silver shadow-sm hover:bg-blue hover:text-white rounded p-3 ml-4 mt-1"
          >
            cart
          </router-link>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  computed: {},
};
</script>
