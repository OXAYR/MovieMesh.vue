<template>
  <div>
    <Nav />
    <div class="flex">
      <SideBar />
      <div class="mt-20 flex-grow">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/Nav.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  name: "HomeView",
  components: {
    Nav,
    SideBar,
  },
};
</script>
