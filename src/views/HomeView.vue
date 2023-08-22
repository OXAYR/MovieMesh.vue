<template>
  <div>
    <Nav />
    <router-view class="mt-32" />
  </div>
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/Nav.vue";
export default {
  name: "HomeView",
  components: {
    Nav,
  },
};
</script>
