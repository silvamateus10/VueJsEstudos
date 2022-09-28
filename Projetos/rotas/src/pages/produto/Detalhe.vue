<template>
    <div id="detalhe">
      <h2>Detalhe do produto</h2>
      <span>Codigo do produto: {{id}}</span>
      <!-- <router-link :to="`${id}/editar`">Editar produto</router-link> -->

      <router-link :to="{name: 'editar', params:{id}, query: {nome: 'Camiseta', qtd: 12}}">
        Editar produto {{id}}
      </router-link>
    </div>  
  </template>
  
  <script>
  
  
  export default {
    name: 'Detalhe',
    props:['id'],
    beforeRouteEnter(to,from,next){
      //beforeRouteEnter não tem acesso ao this
      alert('Detalhe');
      next();
    }
  }
  </script>
  
  <style>
  
  </style>
  