<template>
  <div class="card mt-32 p-9 font-serif max-w-md mx-auto">
    <h2 class="text-3xl font-medium text-center">Sign Up</h2>
    <form enctype="multipart/form-data">
      <input
        type="text"
        v-model="form.name"
        placeholder="Username"
        class="mt-4 p-2 border border-gray-300 rounded-md w-full"
      />
      <input
        type="email"
        v-model="form.email"
        placeholder="Email"
        class="mt-4 p-2 border border-gray-300 rounded-md w-full"
      />
      <input
        type="password"
        v-model="form.password"
        placeholder="Password"
        class="mt-4 p-2 border border-gray-300 rounded-md w-full"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        v-model="form.confirmPassword"
        class="mt-4 p-2 border border-gray-300 rounded-md w-full"
      />
      <!-- <input
        type="file"
        name="profileImage"
        @change="onFileChange"
        accept="image/*"
      /> -->
    </form>
    <p v-if="validationErrors" class="text-red text-sm">
      {{ validationErrors }}
    </p>
    <button
      class="mt-4 px-40 py-2 text-white bg-blue hover:bg-lightBlue rounded-full"
      @click="toStore(form)"
    >
      Register
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import router from "@/router";

export default {
  name: "SignUp",
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      error: [],
    };
  },
  computed: {
    ...mapState("user", ["validationErrors"]), 
  },
  methods: {
    ...mapActions("user", ["registerUser"]), 

    async toStore(obj) {
      if (
        obj.email !== "" &&
        obj.password !== "" &&
        obj.name !== "" &&
        obj.confirmPassword !== ""
      ) {
        console.log("In the component to store--->", obj.profileImage);
        await this.registerUser(obj);
        if (!this.validationErrors) router.push("/");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
