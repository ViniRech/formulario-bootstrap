<script setup>
    
</script>

<template>

    <div v-if="mostrarResultado" class="resultado">
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

</template>

<style scoped>
    .resultado {
        width: 48%;
        border-radius: 10px;
        padding: 20px;
        margin: 0 0 5rem;
        background-color: #dac2eb;
    }
</style>