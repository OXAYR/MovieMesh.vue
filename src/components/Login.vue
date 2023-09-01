<template>
  <div class="card mt-32 Login px-8 py-11 max-w-xs mx-auto">
    <h1 class="text-center text-3xl font-medium font-serif">Sign In</h1>
    <input
      type="email"
      placeholder="Email"
      v-model="formLogin.email"
      class="mt-4 p-2 border border-gray-300 rounded-md w-full"
    />

    <input
      type="password"
      placeholder="Password"
      v-model="formLogin.password"
      class="mt-4 p-2 border border-gray-300 rounded-md w-full"
    />
    <p v-if="error.length" class="text-red text-sm">
      {{ validationErrors}}
    </p>
    <button
      class="mt-4 px-28 py-2 bg-blue text-white hover:bg-lightBlue rounded-full"
      @click="toValidate(formLogin)"
    >
      <p class="text-white font-serif text-center">Login</p>
    </button>

    <router-link to="/signup" class="block mt-2">
      <button
        class="Register pl-24 pr-28 py-2  bg-white hover:bg-silver rounded-full"
      >
        <p class="text-black font-serif ml-2">SignUp</p>
      </button>
    </router-link>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Login",
  props: {
    msg: String,
  },
  data() {
    return {
      validCredential: false,
      formLogin: {
        email: "",
        password: "",
      },
      error: [],
    };
  },
  methods: {
    ...mapActions("user", ["authenticateUser"]), 
    async toValidate(obj) {
      if (obj.email !== "" && obj.password !== "") {
        await this.authenticateUser(obj);

        this.$router.push("/admin");
      }
    },
  },
  computed: {
    ...mapState("user", ["validationErrors"]), 
  },
};
</script>

<style scoped></style>
