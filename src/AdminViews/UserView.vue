<template>
  <div class="card bg-blue text-silver w-1/3 h-80 mr-44 mt-10">
    <router-link to>
      <div class="flex flex-col h-full">
        <div class="flex justify-between items-center mb-4 px-4 py-2">
          <h1 class="font-bold text-3xl">Users</h1>
          <button class="bg-lightBlue rounded-xl px-3 py-2 text-white">See All</button>
        </div>
        <div class="overflow-y-auto p-4" >
          <Users :user="users" />
        </div>
      </div>
    </router-link>
  </div>
</template>


  
  <script>
  import Users from "../AdminComponents/Users.vue";
  import { mapActions, mapGetters } from "vuex";
  export default {
    name: "UserView",
    components: {
      Users,
    },
    computed:{
        ...mapGetters({users: "user/getAllUsers"})
    },
    methods: {
    ...mapActions("user", ["fetchUsers"]), 
  },
    created(){
        this.fetchUsers()
    }

}
</script>