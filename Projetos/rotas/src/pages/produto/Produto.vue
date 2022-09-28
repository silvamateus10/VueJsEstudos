<template>
  <div id="produto">
    <h1>Tela Produto</h1>
    <router-view/>
    <br/>
    <button @click="irHome()">Ir para home</button>
  </div>  
</template>

<script>


export default {
  name: 'Produto',  
  methods:{
    irHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>
