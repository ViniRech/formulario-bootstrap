<script setup>
  defineProps([
    'nome',
    'email',
    'senha',
    'confirmarSenha',
    'endereco',
    'cidade',
    'estado',
    'hobbie',
    'linguagemProgramacao',
    'biografia',
  ]);

    const mostrarResultado = ref(false);

</script>

<template>
    <div class="formulario">
      <h2>Cadastro</h2>

      <div class="form-group">
        <label for="">Nome:</label>
        <input class="form-control" type="text" v-bind="nome" />
      </div>

      <div class="form-group">
        <label for="">Email:</label>
        <input class="form-control" type="text" v-bind="email" />
      </div>

      <div class="form-group">
        <label for="">Senha:</label>
        <input class="form-control" type="password" v-bind="senha" />
      </div>

      <div class="form-group">
        <label for="">Confirmação de senha:</label>
        <input class="form-control" type="password" v-bind="confirmarSenha" />
      </div>

      <div class="form-group">
        <label for="">Endereço:</label>
        <input class="form-control" type="text" v-bind="endereco" />
      </div>

      <div class="form-group">
        <label for="">Cidade:</label>
        <input class="form-control" type="text" v-bind="cidade" />
      </div>

      <div class="form-group">
        <label for="estado">Estado:</label>
        <select class="form-control" name="estado" id="estado" v-bind="estado">
          <option v-for="estado in estados" :key="estado.sigla" :value="estado.sigla"> {{ estado.nome }} </option>
        </select>
      </div>

      <div class="form-group">
        <label for="">Hobbie:</label>
        <input class="form-control" type="text" v-bind="hobbie" />
      </div>

      <div>
        <label for="linguagemProgramacao">Linguagem de programação:</label>
        <input class="form-control" type="text" id="linguagemProgramacao" v-bind="linguagemProgramacao" />
      </div>

      <div>
        <label for="biografia">Biografia:</label>
        <textarea
          class="form-control"
          name="biografia"
          id="biografia"
          cols="30"
          rows="10"
          v-bind="biografia"
        ></textarea>
      </div>

      <div>
        <button type="button" class="btn btn-primary" @click="mostrarResultado = !mostrarResultado"> Mostrar </button>
      </div>
    </div>

    <BoxResultado />

</template>

<style scoped>
    .formulario {
        width: 48%;
        border-radius: 10px;
        padding: 20px;
        margin: 0 0 5rem;
        background-color: rgb(179, 214, 243);
    }

    button {
        margin: 1rem 0;
    }
</style>