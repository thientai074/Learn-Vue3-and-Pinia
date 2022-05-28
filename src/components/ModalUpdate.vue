<template>
  <div v-if="openModal" class="modalxxx">
    <h1>Hello From Update</h1>
    <form action="">
      <input type="text" placeholder="Change" />
      <button type="submit" @click="handleCloseUpdateModal">Close</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "ModalUpdate",
  props: ["openModal"],
  setup(props: any, context: any) {
    const handleCloseUpdateModal = (event: any) => {
      event.preventDefault();
      context.emit("closeModal", false);
    };
    return { handleCloseUpdateModal };
  },
};
</script>

<style>
.modalxxx {
  height: 200px;
  width: 200px;
  border: 1px solid black;
}
</style>
