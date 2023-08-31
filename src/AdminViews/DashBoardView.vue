<template>
  <div class="bg-navblue p-4 text-left my-4 rounded">
    <h1 class="text-3xl font-bold text-silver">
      Welcome Back, Admin
    </h1>
    <p class="text-sm font-medium text-silver">
      Here you can create, edit and delete movies
    </p>
  </div>

  <div class="flex justify-between">
    <CreateMovie />
    <UserView />
  </div>
  
  <div>
    <AdminMovieListView />
  </div>
</template>




<script>
import CreateMovie from "@/AdminComponents/CreateMovie.vue";
import AdminMovieListView from "./AdminMovieListView.vue";
import UserView from './UserView.vue';
export default {
  name: "DashBoardView",
  components: {
    CreateMovie,
    AdminMovieListView,
    UserView
  },
};
</script>
