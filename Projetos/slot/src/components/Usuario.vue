<template>
    <div id="usuario">
      <h1>Este é o componente de Usuário :)</h1>
      <slot name="titulo"></slot>
      <slot name="user"></slot>
      
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Usuario',
    props:['nome']
  }
  </script>
  
  <style scoped> 
  </style>
  