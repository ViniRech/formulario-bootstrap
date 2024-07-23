<script setup>
   
  /*const validacao = ref(false);
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
  } */

</script>

<template>
  <div class="titulo">
    <h1>Formulário de Cadastro de Produtos</h1>
  </div>

  <BoxFormulario />

  <BoxResultado />
</template>

<style scoped>
.titulo {
  text-align: center;
  padding: 3rem 0;
}

</style>
