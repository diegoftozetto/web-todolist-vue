<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/home">To-Do List</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/home">Home</router-link>
        <router-link class="nav-link" to="/task">Nova Tarefa</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .nav-link.router-link-active {
    color: white;
  }
</style>
