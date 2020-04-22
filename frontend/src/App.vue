<template>
  <div id="app">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "@/components/SharedComponents/NavigationBar.vue";
export default {
  components: {
    NavigationBar
  }
};
</script>

<style>
@import "./assets/globalStyles.css";
#app {
  width: 100vw;
  height: 100vh;
}
</style>
