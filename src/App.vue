<template>
  <MenuDepartamentos />
  <br />
  <router-view></router-view>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import MenuDepartamentos from "./components/MenuDepartamentos.vue";

export default {
  name: "App",
  components: {
    MenuDepartamentos,
  },
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
