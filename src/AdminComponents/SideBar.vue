<template>
  <div class="fixed bg-bluenew h-screen w-72 p-4 flex flex-col items-center">
    <div class="mt-10">
      <router-link to="/" class="mb-4">
        <p class="font-semibold text-3xl text-silver">MovieMesh</p>
      </router-link>
    </div>
    <div id="sideBar" class="mt-24">
      <router-link
        to="/admin"
        class="mb-7 text-silver block rounded-xl py-3 px-12 font-bold text-xl"
        >Dashboard</router-link
      >
      <router-link
        to="/admin/AdminMovieListView"
        class="mb-7 text-silver rounded-xl py-3 px-12 block font-bold text-xl"
        >Movies</router-link
      >
      <router-link
        to="/admin/users"
        class="mb-2 text-silver rounded-xl py-3 px-12 block font-bold text-xl"
        >Users</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.style {
  list-style-type: none;
}
</style>
