<template>
  <dir>
    <!-- <Login /> -->
    <!-- <Register /> -->
    <router-view />
  </dir>
</template>

<script lang="ts">
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Home from "./components/Home.vue"
export default {
  name: "App",
  components: { Login, Register, Home },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
