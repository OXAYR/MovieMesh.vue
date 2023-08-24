<template>
  <div
    class="border border-borderBlue bg-darkBlue shadow-md bg-stoneBlack h-screen w-56 p-4 flex flex-col items-center justify-center"
  >
    <div id="sideBar" class="mt-24">
      <router-link
        to="/home/createMovie"
        class="mb-7 text-white block rounded-xl py-3 font-bold"
        >Create Movie</router-link
      >
      <router-link
        to="/movieList"
        class="mb-2 text-white rounded-xl py-3 px-12 block font-bold"
        >Movies</router-link
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
