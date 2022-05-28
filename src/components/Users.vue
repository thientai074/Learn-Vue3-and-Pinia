<template>
  <div class="user">
    <h1>Users</h1>
    <p>Id: {{ user._id }}</p>
    <p>Full Name: {{ user.fullName }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Is Disable: {{ user.isDisabled === false ? "false" : "true" }}</p>
    <p>Role: {{ user.role }}</p>
    <div>
      <button @click="userStore.deleteUser(user._id)" class="buttonAction">
        Delete User
      </button>
      <button @click="customChange" class="buttonbuttonAction">
        Update User
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useUserStore } from "../store/user";

export default {
  name: "Users",

  props: ["user", "openModal"],

  // @ts-ignore
  setup(props, context) {
    const userStore = useUserStore();

    const customChange = (event: any) => {
      const userUpdate = props.user;
      context.emit("customChange", { handleOpenModal: true, userUpdate });
    };

    return {
      userStore,
      customChange,
      // alo,
    };
  },
};
</script>

<style>
.user {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 5px;
  height: 400px;
  width: 400px;
}

.buttonAction {
  margin: 0 2px;
}
</style>
