<template>
<!-- generate the code that can jump to index or register ... etc page-->
  <div>
    <h1>Home</h1>
    <p>Home page</p>
    <router-link to="/index">Index</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/mall">Mall</router-link>
    <router-link to="/manage">Manage</router-link>
    <router-link to="/public">Public</router-link>
  </div>
</template>

<script>
export default {
  name: "Main.vue"
}
</script>

<style scoped>

</style>