<template>
  <div>
    <div class="flex flex-row font-bold divide-x divide-lightestBlue">
      <div class="w-1/3 p-2">Name</div>
      <div class="w-1/3 p-2">Email</div>
      <div class="w-1/3 p-2">User Role</div>
    </div>
    <div v-for="users in user" :key="users._id" class="my-2">
      <div class="flex flex-row border-b border-b-black cursor-pointer">
        <div class="w-1/3 p-2">{{ users.name }}</div>
        <div class="w-1/3 p-2">{{ users.email }}</div>
        <div class="w-1/3 p-2">
          <div class="flex items-center">
            <div v-if="userBeingEdited === users">
              <select
                v-model="editedUserRole"
                class="border border-gray-300 rounded-md p-1 mr-2"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <button
                @click="saveEditedRole(users)"
                class="bg-lightBlue text-white px-2 py-1 rounded-md"
              >
                Save
              </button>
            </div>
            <div v-else @click="toggleRoleEdit(users)">
              {{ users.userRole }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: "Users",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userBeingEdited: null,
      editedUserRole: null,
    };
  },
  methods: {
    ...mapActions("user", ["updateUserRole"]),
    toggleRoleEdit(user) {
      this.userBeingEdited = this.userBeingEdited === user ? null : user;
      this.editedUserRole = user.userRole; 
    },
    async saveEditedRole(user) {
      try {
        await this.updateUserRole({
          id: user._id,
          role: this.editedUserRole,
        });
        this.userBeingEdited = null;
      } catch (error) {
        console.error('Error updating user role:', error);
      }
    },
  },
};
</script>