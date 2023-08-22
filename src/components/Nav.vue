<template>
  <div>
    <nav class="bg-black py-5 shadow-md fixed top-0 left-0 right-0 font-serif">
      <div class="flex justify-between items-center px-10">
        <div class="flex col-span-7">
          <router-link to="/">
            <p class="font-semibold text-xl text-seaGreen">MovieMesh</p>
          </router-link>
        </div>
        <div class="flex">
          <router-link
            to="/"
            class="text-seaGreen shadow-sm hover:bg-dstoneBlack hover:text-white rounded p-3 ml-4 mt-1"
          >
            Login
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",

  computed: {},
};
</script>
