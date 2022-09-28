<template>
  <div id="app">
    <img src="./assets/cronometro.png" class="img"/>
    <a class="timer">{{numero}}</a>
    <div class="areaBtn">
        <button class="botao" @click="vai">{{nmBotao}}</button>
        <button class="botao" @click="limpar">Limpar</button>
    </div>
    <div class="hist" v-show="historico.length > 0 ">
      <ul>
        <li v-for="item in historico" :key="item">Pausa em: {{item}}</li>      
      </ul>
      <button @click="historico = []">Limpar histórico</button>
    </div>
  </div>
</template>

<script>
 

export default {
  name: 'App',
  data(){
    return{
      numero: 0,
      nmBotao: 'Vai',
      timer: null,
      ss:0,
      mm:0,
      hh:0,
      historico: []
    }
  },
  methods:{
    vai(){
      if (this.timer !== null){
        //Timer rodando
        clearInterval(this.timer);
        this.timer = null;
        this.nmBotao = 'Vai';
        if(this.ss !==0){
          this.historico.push(this.numero);
        }
      }else{
        //Timer parado
        this.timer = setInterval(()=>{
          this.rodarTimer();
        },1000);
        this.nmBotao = 'Pausar';
      }
    },
    limpar(){
      if (this.timer !== null){       
        clearInterval(this.timer);
        this.timer = null;     
      }

      this.ss = 0;
      this.mm = 0;
      this.hh = 0;
      this.numero = 0;
      this.nmBotao = 'Vai';
      this.historico = [];
    },
    rodarTimer(){
      this.ss++;

      if(this.ss == 59){
        //Deu 59 segundos
        this.ss =0;
        this.mm++;
      }

      if(this.mm == 59){
        //Deu 59 minutos
        this.mm =0;
        this.hh++;
      }

      let formato = (this.hh < 10 ? '0'+this.hh : this.hh) 
      + ':' + (this.mm < 10 ? '0'+this.mm : this.mm) 
      + ',' + (this.ss < 10 ? '0'+this.ss : this.ss);
     
      return this.numero = formato;
    }
  }
}
</script>

<style>
  #app{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .img{
    width: 420;
    height: 420;
    padding-top: 20px;
  }
  .timer{
    color: #FFF;
    font-size: 70px;
    margin-top: -210px;
  }
  .areaBtn{
    margin-top: 155px;
    display: flex;
  }
  .botao{
    -webkit-user-select: none;
    -moz-user-select: none;
    width: 150px;
    background-color: #FFF;
    font-size: 20px;
    border:0;
    border-radius: 5px;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
    padding: 6px;
    cursor: pointer;
  }
  .botao:hover{
    opacity: 0.6;
    transition: all 0.3s;
  }
  ul{
    text-align: center;
    padding: 0px;
  }
  ul li{
    margin-top: 4px;
    padding: 15px;
    background-color: rgb(70,70,70);
    list-style: none;
    color:#FFF;
    font-size: 18px;
    border-radius: 6px;
  }
  .hist button{
    cursor: pointer;
    border: 0;
    background-color: #FFF;
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 12px;
  }
</style>
