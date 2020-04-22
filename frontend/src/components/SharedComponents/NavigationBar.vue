<template>
  <nav id="navigation">
    <router-link :to="{name: 'Home'}">Home</router-link>|
    <router-link :to="{name: 'About'}">About</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
#navigation {
  height: 10%;
  width: 100%;
}
</style>