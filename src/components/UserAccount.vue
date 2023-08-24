<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h1 class="text-2xl font-semibold mb-4">Account Settings</h1>

      <div class="mb-4">
        <label class="block font-semibold mb-2">Name:</label>
        <p class="bg-gray-100 p-2 rounded">{{ user.user.name }}</p>
      </div>

      <div class="mb-4">
        <label class="block font-semibold mb-2">Email:</label>
        <p class="bg-gray-100 p-2 rounded">{{ user.user.email }}</p>
      </div>

      <button
        @click="update(user.user._id)"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
      >
        Edit
      </button>

      <button
        @click="deleteAccount(user.user._id)"
        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Delete Account
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserAccount",
  computed: {
    ...mapGetters({ user: "getUser" }),
  },
  methods: {
    update(index) {
      console.log("sending in params----->", index);
      this.$router.push({ path: `/${index}/updateUser` });
    },
    ...mapActions(["deleteUserAccount"]),
    deleteAccount(index) {
      this.deleteUserAccount(index);
      this.$route.push("/");
    },
  },
};
</script>

<style>
/* You can add custom styles here if needed */
</style>
