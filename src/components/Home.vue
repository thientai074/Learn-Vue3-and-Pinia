<template>
  <div>
    <ModalUpdate :openModal="openModal" @closeModal="handleCloseModal" />
    <h1>Admin Dashboard</h1>
    <div class="showUser">
      <Users
        @customChange="logChange"
        v-for="user in users"
        :key="user._id"
        :user="user"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { useUserStore } from "../store/user";
import { computed, ref, watch } from "vue";
import MyInput from "./MyInput.vue";
import { onMounted, watchEffect } from "vue";
import Users from "./Users.vue";
import ModalUpdate from "./ModalUpdate.vue";

export default {
  name: "Home",
  components: { Users, MyInput, ModalUpdate },
  setup() {
    const userToUpdate = ref({});
    const openModal = ref(false);
    const userStore = useUserStore();

    onMounted(() => {
      userStore.getAllUsers();
    });

    const users = computed(() => {
      return userStore.users;
    });

    const handleCloseModal = (value: any) => {
      openModal.value = value;
    };

    const logChange = (value: any) => {
      openModal.value = value.handleOpenModal;
      userToUpdate.value = value.userUpdate;
    };

    watchEffect(() => {
      return userToUpdate.value;
    });

    console.log("userToUpdate", userToUpdate.value);

    return {
      users,
      openModal,
      userToUpdate,
      logChange,
      handleCloseModal,
    };
  },
};
</script>

<style>
.showUser {
  display: flex;
  flex-wrap: wrap;
}
</style>
