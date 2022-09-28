<template>
  <div id="home">
    <h1>Tela Home</h1>

    <button @click="irProduto()">Ir para produto</button>

  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    irProduto(){
      this.$router.push('/produto');
    }
  }
}
</script>

<style>

</style>