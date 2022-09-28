<template>
  <div id="app">
    <h1>Fazer Cadastro</h1>
    <div>
      <form>
        <label>Nome</label>
        <input type="text" v-model="user.nome" /> <br/>

        <label>E-mail</label>
        <input type="email" v-model="user.email" /> <br/>

        <label>Qtd. Funcionários</label>
        <input type="number" v-model="user.qtdFunc" /> <br/>

        <label>Opinião</label>
        <textarea v-model="opiniao"></textarea><br/>

        <label>Tecnologias</label>
        <span><input type="checkbox" value="javascript" v-model="tecnologias"/>Javascript</span>
        <span><input type="checkbox" value="css" v-model="tecnologias"/>CSS</span>
        <span><input type="checkbox" value="vuejs" v-model="tecnologias"/>VueJS</span>

        <br/>

        <label>Qual tipo de contratação?</label>
        <select v-model="tipoSelecionado">
          <option v-for="item in tipo" :key="item.id" :value="item.nome">{{item.nome}}</option>         
        </select>
        <br/>
        <label>Qual seu nível?</label>        
        <span><input type="radio" value="basico" v-model="nivel" />Basico</span>        
        <span><input type="radio" value="intermediario" v-model="nivel"/>Intermediário</span>        
        <span><input type="radio" value="avancado" v-model="nivel"/>Avançado</span>

        <br/>

        <button @click.prevent="enviar()">Enviar</button>

      </form>
      
      
    </div>
    <hr/>
    <div class="item" v-show="resultado">
      <h2>Usuario Cadastrado</h2>

      <label>Nome: {{user.nome}}</label><br/>
      <label>E-mail: {{user.email}}</label><br/>
      <label>Qtd Funcionários: {{user.qtdFunc}}</label><br/>
      <label>Sua opinião: {{opiniao}}</label><br/>
      <label>Tecnologias:</label>
      <ul>
        <li v-for="tec in tecnologias" :key="tec" >{{tec}}</li>
      </ul>
      <label>Contratação: {{tipoSelecionado}}</label><br/>
      <label>Nível: {{nivel}}</label><br/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{     
      user:{
        nome:'',
        email:'',
        qtdFunc:0
      },
      opiniao: '',
      tecnologias:[],
      tipo:[
        {id: 1, nome:'Freelancer'},
        {id: 2, nome:'CLT'},
        {id: 3, nome:'PJ'},
        {id: 4, nome:'Remoto'}
      ],
      tipoSelecionado: '',
      nivel: 'basico',
      resultado: false
    }
  },
  methods:{
    enviar(){
      this.resultado = true;
    }
  }
}
</script>

<style>
  form{
    display: flex;
    flex-direction: column;
  }
</style>
