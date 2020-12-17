<template>
  <div id="app">
    <Header/>
    <ToDoList/>
  </div>
</template>

<script>
import Header from './components/Header'
import ToDoList from './components/ToDoList'

export default {
  name: 'App',
  components: {
    ToDoList,
    Header
  }
}
</script>

<style>
</style>
