<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h1 class="text-2xl font-semibold mb-4">Account Settings</h1>

      <div class="mb-4">
        <label class="block font-semibold mb-2">Name:</label>
        <input
          class="bg-gray-100 p-2 rounded w-full text-center"
          v-model="name"
        />
      </div>

      <div class="mb-4">
        <label class="block font-semibold mb-2">Email:</label>
        <p class="bg-gray-100 p-2 rounded">{{ email }}</p>
      </div>
      <div class="mb-4">
        <label class="block font-semibold mb-2">New Password</label>
        <input
          class="bg-gray-100 p-2 rounded text-center w-full"
          v-model="newPassword"
        />
      </div>

      <button
        @click="updateUserEvent(indx)"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
      >
        Update
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import store from "@/store";

export default {
  name: "EditPassword",
  data() {
    return {
      newPassword: "",
      name: store.state.user.user.name,
      email: store.state.user.user.email,
      userId: this.$route.params.userId,
    };
  },
  methods: {
    ...mapActions(["updateUser"]),

    async updateUserEvent() {
      console.log("In the update password --->", this.userId);
      await this.updateUser({
        id: this.userId,
        name: this.name,
        password: this.newPassword,
      });
      this.$router.push("/");

      this.newPassword = "";
    },
  },
};
</script>

<style></style>
