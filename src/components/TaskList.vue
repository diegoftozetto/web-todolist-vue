<template>
  <div v-if="!tasks">
    <p id="tasklist-loading">Carregando...</p>
  </div>
  <div v-else-if="tasks.length === 0">
    <p id="tasklist-no-task">Nenhuma tarefa encontrada...</p>
  </div>
  <div v-else>
      <li v-for="task in tasks" class="list-group-item" :key="task._id">
        <div class="form-check">
          <input
            :id="task._id"
            type="checkbox"
            class="form-check-input mr-2"
            :value="task.marked"
            :Checked="task.marked"
            @change="checkMarkedHandler"
          />
          <label class="form-check-label tasklist-text-task" :htmlFor="task._id">
            {{task.text}}
          </label>
        </div>
        <small>
          Última Atualização: {{new Date(task.updatedAt).toLocaleString('pt-br')}}
          <div class="tasklist-icons" v-if="task.marked">
            <i title="Excluir" class="fas fa-trash tasklist-icon-remove"></i>
          </div>
        </small>
      </li>
  </div>
</template>

<script>
  export default {
    async created() {
      const response = await fetch('https://web-api-todolist.herokuapp.com/tasks');
      const data = await response.json();
      this.tasks = data;
    },
    mounted() {
      //console.log("Mounted.")
    },
    data() {
      return {
        tasks: undefined
      }
    },
    methods: {
      async checkMarkedHandler(event) {
        const id = event.target.id;
        const json = {marked: event.target.checked}

        const response = await fetch(
          'https://web-api-todolist.herokuapp.com/tasks/' + id,
          {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
          }
        );
        const data = await response.json();

        if (response.status == 200) {
          var filterTasks = this.tasks.filter(items => items._id !== data._id);
          filterTasks.unshift(data);
          this.tasks = filterTasks;
        }
        else {
          //console.log(data.message)
        }
      }
    }
  }
</script>

<style scoped>
  #tasklist-loading {
    font-size: 1.25em;
    color: rgb(65, 65, 65);
    border-bottom: 1px solid black;
  }

  #tasklist-no-task {
    font-size: 1.25em;
    color: rgb(157, 177, 194);
  }

  .tasklist-icons {
    float: right;
    cursor: pointer;
  }

  .tasklist-icon-remove {
    color: rgb(187, 8, 8);
  }

  .tasklist-text-task {
    display: inline-block;
    word-break: break-word;
  }

</style>
