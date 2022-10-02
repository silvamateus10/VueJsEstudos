<template>
    <div class="modalmembro">
        <div class="containerModal">
            <a @click="$emit('close')"  class="close">Voltar</a>
             <!-- Form de edição -->
             <form class="form" id="formModal">
              <input class="form-control" type="text" placeholder="Nome"   v-model="pessoa.nome"><br/>
              <input class="form-control" type="text" placeholder="CPF" v-model="pessoa.cpf"><br/>
              <input class="form-control" type="email" placeholder="E-mail" v-model="pessoa.email"><br/>
              <input class="form-control" type="text" placeholder="Celular" v-model="pessoa.cel"><br/>    
              <button class="btn btn-primary" @click.prevent="alterarDados(pessoa.key)">Alterar</button>
            </form>            
              <!-- <form class="form" id="formModal">
               {{pessoa.nome}}
            </form> -->
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'ModalMebro',
      props: ['pessoa','alterar'],
      methods:{
        alterarDados(key){
            this.alterar(key);            

        }
      }
  }
  </script>
  
  <style scoped>
      .modalmembro{
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: rgba(0,0,0,0.5);
          z-index: 999;
      }
  
      .modalmembro .containerModal{
          position: fixed;
          max-width: 600px;
          top: 4vh;
          bottom: 4vh;
          left: 0;
          right: 0;
          margin: 0 auto;
          padding: 2rem;
          border-radius: 4px;
          background-color: #FFF;
          box-shadow: 0 0 20px rgba(0,0,0, 0.7);
          overflow: auto;
      }
  
      .close{
          cursor: pointer;
          background: #121212;
          padding: 4px 15px;
          color: #FFF;
          position: absolute;
          top: 15px;
          left: 15px;
      }
  
      span{
          font-style: italic;
          font-weight: bold;
          color: #121212;
      }
  
      p{
         white-space: pre-wrap; 
      }

      #formModal{
        padding-top: 30px;
      }
  </style>