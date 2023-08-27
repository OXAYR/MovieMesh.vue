<template>
  <div class="flex">
    <div class="w-48">
      <SideBar />
    </div>
    <div class="flex-grow p-4 ml-56">
      <router-view />
    </div>
  </div>
</template>
<script>
import SideBar from "../AdminComponents/SideBar.vue";
export default {
  name: "AdminView",
  components: {
    SideBar,
  },
};
</script>
