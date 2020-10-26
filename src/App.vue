<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    <router-link to="/todos">Todos</router-link>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import "./assets/css/todos.css";
</style>
