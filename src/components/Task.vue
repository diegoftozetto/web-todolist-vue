<template>
    <div class="container mt-4">
      <div class="card">
        <div class="card-header">
          Adicionar Tarefa
        </div>
        <div class="card-body">
          <h6>Nome da Tarefa</h6>
          <form @submit.prevent="formSubmitHandler">
            <input
              autoFocus
              type="text"
              class="form-control"
              id="text"
              name="text"
              placeholder="Informe o nome da tarefa..."
              :value="text"
              @input="text = $event.target.value"
            />
            <router-link class="btn btn-secondary btn-sm mt-2 mr-2" to="/home" role="button">Cancelar</router-link>
            <button
              type="submit"
              class="btn btn-primary btn-sm mt-2"
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
      }
    },
    methods: {
      async formSubmitHandler() {
        const json = {text: this.text}

        const response = await fetch(
          'https://web-api-todolist.herokuapp.com/tasks/',
          {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
          }
        );
        const data = await response.json();
        alert(data.message);

        if (response.status == 201)
          this.$router.push('/home');
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
