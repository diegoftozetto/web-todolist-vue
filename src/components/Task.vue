<template>
    <div class="container mt-4">
      <div class="card">
        <div class="card-header">
          Adicionar Tarefa
        </div>
        <div class="card-body">
          <h6>Nome da Tarefa</h6>
            <form @submit.prevent="formSubmitHandler">
              <validation-provider
                rules="required|max:100"
                v-slot="{errors}"
              >
                <input
                  autoFocus
                  type="text"
                  class="form-control"
                  id="text"
                  name="text"
                  placeholder="Informe o nome da tarefa..."
                  :value="text"
                  @input="text = $event.target.value"
                  :class="errors[0] ? 'invalid' : null"
                />
                <div class="error">{{errors[0]}}</div>
              </validation-provider>
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
  import { ValidationProvider } from 'vee-validate'

  export default {
    components: {
      ValidationProvider
    },
    data() {
      return {
        text: '',
      }
    },
    methods: {
      async formSubmitHandler() {
        var currentText = this.text.trim();

        if(currentText.length == 0 || currentText.length > 100)
          alert("Preencha o formulário corretamente.");
        else {
          const json = {text: currentText}

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
  }
</script>

<style scoped>
  .error {
    color: red;
    font-size: 0.8em;
    margin-left: 0.4em;
  }

  input.invalid {
    border: 1px solid red
  }
</style>
