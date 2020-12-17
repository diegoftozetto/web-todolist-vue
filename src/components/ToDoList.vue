<template>
  <div class="container mt-4">
    <div class="jumbotron">
      <h1 class="display-4">To-Do List</h1>
      <p class="lead">Libere espaço na sua mente. Recupere a clareza e a tranquilidade, tirando todas essas tarefas da sua cabeça e colocando na sua lista de tarefas.</p>
      <hr/>
      <router-link class="btn btn-secondary btn-sm mb-4" to="/task" role="button">+ Nova Tarefa</router-link>
      <TaskList/>
    </div>

  </div>
</template>

<script>
  import TaskList from './TaskList';
  export default {
    components: {
      TaskList
    }
  }
</script>

<style lang="stylus" scoped>

</style>
