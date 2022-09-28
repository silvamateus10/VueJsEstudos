<template>
    <div id="editar">
      <h2>Editando do produto {{id}}</h2>
      <br/>
      <span>
        Produto: {{$route.query.nome}}        
      </span>
      <br/>

      <span>        
        Quantidade: {{$route.query.qtd}}
      </span>     
    </div>  
  </template>
  
  <script>
  
  
  export default {
    name: 'Editar',
    props:['id'],
    beforeRouteLeave(to,from,next){
        //Tem acesso ao this
        const resposta = window.confirm('você realmente deseja sair da página?');
        if(resposta){
            next();
        }else{
            next(false);
        }
    }
  }
  </script>
  
  <style>
  
  </style>
  