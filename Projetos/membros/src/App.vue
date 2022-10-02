<template>  
 
  <div id="app" class="container">
    <Header/>
    <div class="col-md-4">
      <h2>Cadastro de membro</h2>
      
      <form class="form">  
        
        <input class="form-control" type="text" placeholder="Nome" v-model="nome"><br/>
        <input class="form-control" type="text"  placeholder="CPF" v-model="cpf"><br/>
        <input class="form-control" type="email" placeholder="E-mail" v-model="email"><br/>
        <input class="form-control" type="text" placeholder="Celular" v-model="cel"><br/>    
        <button class="btn btn-primary" @click.prevent="cadastrar()">Inserir</button>
      </form>
    </div>
    <hr/>    
    <div class="col-md-4">
      <table class="table">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">CPF</th>
          <th scope="col">E-mail</th>
          <th scope="col">Celular</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pessoa in pessoas" :key="pessoa.key">          
          <td>{{pessoa.nome}}</td>
          <td>{{pessoa.cpf}}</td>
          <td>{{pessoa.email}}</td>
          <td>{{pessoa.cel}}</td>
          <td>
            <button class="btn btn-primary" @click.prevent="togglePostModal(pessoa)">
              Editar
            </button>
          </td>
          <td>
            <button class="btn btn-danger" @click.prevent="apagar(pessoa.key)">Deletar</button>      
          </td>
        </tr>  
      </tbody>
    </table> 
    </div>
  </div>
  
  <ModalMembro
       v-if="showPostModal"
       :pessoa="pessoaEdit"
       :alterar="alterarMembro"
        @close="togglePostModal()"
  >

  </ModalMembro>
  

</template>

<script> 
  

import Header from './components/Header'
import ModalMembro from './components/ModalMembro'
import {TheMask} from 'vue-the-mask'


export default {
  name: 'App',
  components: {
    Header,
    ModalMembro,
    TheMask
  },
  data(){
    return{
      nome: '',
      cpf: '',
      email:'',
      mask: "(##) ####-####",
      cel:'',
      pessoas:[],
      pessoaEdit:{},
      showPostModal: false
    }
  },
  methods:{
    cadastrar(){      
      this.pessoas.push({
        key: Date.now(),
        nome: this.nome,
        cpf: this.cpf,
        email: this.email,
        cel: this.cel,
      });
      
      this.nome = '';
      this.cpf = '';
      this.email = '';
      this.cel = '';      

    },
    alterarMembro(id){    
      for(let i=0;i < this.pessoas.length;i++){
        if(this.pessoas[i].key === id){
          this.pessoas[i].nome = this.pessoaEdit.nome;
          this.pessoas[i].cpf = this.pessoaEdit.cpf;
          this.pessoas[i].cel = this.pessoaEdit.cel;
        }
      }

      this.showPostModal = false;
    },
    apagar(id){
      // if (window.confirm("Você realmente quer sair?")) {
      let filtro = this.pessoas.filter((item) => {
                    return (item.key !== id);
                });
                
      return this.pessoas = filtro;
      
    },
    togglePostModal(pessoa){      
      this.showPostModal = !this.showPostModal;
      this.pessoaEdit = pessoa;

      if(this.showPostModal){
        this.pessoaEdit = pessoa;
      }else{
        this.pessoaEdit = {};
      }

    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
