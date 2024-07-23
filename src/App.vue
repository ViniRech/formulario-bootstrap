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
</template>

<style scoped>
.titulo {
  text-align: center;
  padding: 3rem 0;
}

</style>
