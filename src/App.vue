<script setup>
  import { ref } from 'vue';

  const nome = ref('');
  const email = ref('');
  const senha = ref('');
  const confirmarSenha = ref('');
  const endereco = ref('');
  const cidade = ref('');
  const estado = ref('');
  const hobbie = ref('');
  const linguagemProgramacao = ref('');
  const biografia = ref('');

  const estados = ref([
  { sigla: 'AC', nome: 'Acre' },
  { sigla: 'AL', nome: 'Alagoas' },
  { sigla: 'AP', nome: 'Amapá' },
  { sigla: 'AM', nome: 'Amazonas' },
  { sigla: 'BA', nome: 'Bahia' },
  { sigla: 'CE', nome: 'Ceará' },
  { sigla: 'DF', nome: 'Distrito Federal' },
  { sigla: 'ES', nome: 'Espírito Santo' },
  { sigla: 'GO', nome: 'Goiás' },
  { sigla: 'MA', nome: 'Maranhão' },
  { sigla: 'MT', nome: 'Mato Grosso' },
  { sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { sigla: 'MG', nome: 'Minas Gerais' },
  { sigla: 'PA', nome: 'Pará' },
  { sigla: 'PB', nome: 'Paraíba' },
  { sigla: 'PR', nome: 'Paraná' },
  { sigla: 'PE', nome: 'Pernambuco' },
  { sigla: 'PI', nome: 'Piauí' },
  { sigla: 'RJ', nome: 'Rio de Janeiro' },
  { sigla: 'RN', nome: 'Rio Grande do Norte' },
  { sigla: 'RS', nome: 'Rio Grande do Sul' },
  { sigla: 'RO', nome: 'Rondônia' },
  { sigla: 'RR', nome: 'Roraima' },
  { sigla: 'SC', nome: 'Santa Catarina' },
  { sigla: 'SP', nome: 'São Paulo' },
  { sigla: 'SE', nome: 'Sergipe' },
  { sigla: 'TO', nome: 'Tocantins' }
]);

  const validacao = ref(false);
  const contador = ref(0)

  function mostrarResultado() {
    if (nome.value == '' || email.value == '' || senha.value == '' || confirmarSenha.value == '' || 
    endereco.value == '' || cidade.value == '' || estado.value == '' || hobbie.value == '' || 
    linguagemProgramacao.value == '' || biografia.value == '') {
      alert('Preencha todos os campos');
    }
    else {
      
      if (nome.value.length < 5) alert('Preencha seu nome corretamente');
      else contado.value++;
      
      if (!email.value.includes('@')) alert('Preencha seu email corretamente');
      else contador.value++;
      
      if (senha.value.length < 4) alert('Senha fraca');
      else contador.value++

      if (confirmarSenha.value != senha.value) alert('Campo "Confirmar senha" preenchido incorretamente');
      else contador.value++;

      if (contador.value == 4) validacao.value = true;
      else {
        validacao.value = false;
        contador.value = 0;
      }

    }
  }

</script>

<template>
  <div class="titulo">
    <h1>Formulário de Cadastro de Produtos</h1>
  </div>

  <div class="container d-flex flex-row gap-3">
    <div class="formulario">
      <h2>Cadastro</h2>

      <div class="form-group">
        <label for="">Nome:</label>
        <input class="form-control" type="text" v-model="nome" />
      </div>

      <div class="form-group">
        <label for="">Email:</label>
        <input class="form-control" type="text" v-model="email" />
      </div>

      <div class="form-group">
        <label for="">Senha:</label>
        <input class="form-control" type="password" v-model="senha" />
      </div>

      <div class="form-group">
        <label for="">Confirmação de senha:</label>
        <input class="form-control" type="password" v-model="confirmarSenha" />
      </div>

      <div class="form-group">
        <label for="">Endereço:</label>
        <input class="form-control" type="text" v-model="endereco" />
      </div>

      <div class="form-group">
        <label for="">Cidade:</label>
        <input class="form-control" type="text" v-model="cidade" />
      </div>

      <div class="form-group">
        <label for="estado">Estado:</label>
        <select class="form-control" name="estado" id="estado" v-model="estado">
          <option v-for="estado in estados" :key="estado.sigla" :value="estado.sigla"> {{ estado.nome }} </option>
        </select>
      </div>

      <div class="form-group">
        <label for="">Hobbie:</label>
        <input class="form-control" type="text" v-model="hobbie" />
      </div>

      <div>
        <label for="linguagemProgramacao">Linguagem de programação:</label>
        <input class="form-control" type="text" id="linguagemProgramacao" v-model="linguagemProgramacao" />
      </div>

      <div>
        <label for="biografia">Biografia:</label>
        <textarea
          class="form-control"
          name="biografia"
          id="biografia"
          cols="30"
          rows="10"
          v-model="biografia"
        ></textarea>
      </div>

      <div>
        <button type="button" class="btn btn-primary" @click="mostrarResultado()"> Mostrar </button>
      </div>
    </div>

    <div v-if="validacao == true" class="resultado">
      <h2>Resultado</h2>
      <p>Nome: {{ nome }}</p>
      <p>Email: {{ email }}</p>
      <p>Senha: {{ senha }}</p>
      <p>Estado: {{ estado }}</p>
      <p>Cidade: {{ cidade }}</p>
      <p>Endereço: {{ endereco }}</p>
      <p>Hobbies: {{ hobbie }}</p>
      <p>Linguagem de programação: {{ linguagemProgramacao }}</p>
      <p>Biografia: {{ biografia }}</p>
    </div>
  </div>
</template>

<style scoped>
.titulo {
  text-align: center;
  padding: 3rem 0;
}

.formulario,
.resultado {
  width: 48%;
  border-radius: 10px;
  padding: 20px;
  margin: 0 0 5rem;
}

.formulario {
  background-color: rgb(179, 214, 243);
}

.resultado {
  background-color: #dac2eb;
}

button {
  margin: 1rem 0;
}
</style>
