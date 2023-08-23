<template>
  <div class="max-w-md mx-auto mt-8 p-4">
    <h1 class="text-2xl font-semibold mb-4">Edit Password</h1>

    <div class="mb-4">
      <label class="block font-semibold mb-2">New Password:</label>
      <input
        v-model="newPassword"
        type="password"
        class="border border-gray-300 w-full px-3 py-2 rounded"
      />
    </div>

    <button
      @click="updatePassword"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Update Password
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EditPassword",
  data() {
    return {
      newPassword: "",
      userId: this.$route.params.userId,
    };
  },
  methods: {
    ...mapActions(["updateUserPassword"]),

    async updatePassword() {
      console.log("In the update password --->", this.userId);
      await this.updateUserPassword({
        id: this.userId,
        newPassword: this.newPassword,
      });
      this.$router.push("/");

      this.newPassword = "";
    },
  },
};
</script>

<style></style>
