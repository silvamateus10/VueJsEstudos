<template>
  <div id="app">
    <h1>Componente App :)</h1>
    <!--<Usuario :nome="nome"/>-->
    <Usuario>
      <template v-slot:titulo>
        <strong>Bem-vindo</strong>
      </template>
      <template v-slot:user>
        <p>Meu nome é {{nome}}</p>
      </template>
      
    </Usuario>
  </div>
</template>

<script>
import Usuario from './components/Usuario';
export default {
  name: 'App',
  components:{
    Usuario,
    Usuario
},
  data(){
    return{
      nome: 'Sujeito Programador'
    }
  }
}
</script>

<style scoped>
</style>
