<template>
    

    <div v-if="!user">
      <h1>Entrar</h1>
      <label>Nome: </label>
      <input type="text" v-model="nome">
      <br/><br/>
      <label>E-mail: </label>
      <input type="text" v-model="email">
      <br/><br/>
      <label>Senha: </label>
      <input type="password" v-model="senha">
      <button @click="entrar()">Entrar</button>            
      <button @click="cadastrarUsuario()">Cadastrar Usuário</button>            
    </div>
    <div v-else>
      <h1>{{this.usuario.nome}} você esta logado</h1>
      <h3>{{email}}</h3>
      <button @click="sair()">Sair</button>
    </div>
    <div v-show="user">
    <hr/>
    <label>ID: </label>
    <input type="text" v-model="idPost">
    <br/><br/>
    <label>Tarefa: </label>
    <input type="text" v-model="tarefa">
    <br/><br/>
    <label>Autor: </label>
    <input type="text" v-model="autor">
    <br/><br/>
    <button @click="cadastrar()">Cadastrar Post</button>
    <button @click="buscarPosts()">Buscar Posts</button>
    <button @click="atualizarPosts()">Atualizar Posts</button>
    

    <hr/>
    <ul>
      <li v-for="post in posts" :key="post.id">
        ID: {{post.id}} <button @click="deletarPosts(post.id)">Deletar Posts</button>
        <br/>
        Tarefa: {{post.tarefa}} 
        <br/>
        Autor: {{post.autor}}        
      </li>
    </ul>
  </div>
</template>

<script>

import firebase from './services/firebaseConnection'

export default {
  name: 'App',
  data(){
    return{
      nome:'',
      email:'',
      senha:'',
      user: false,
      idPost: '',
      tarefa:'',
      autor: '',
      posts:[],
      usuario: null
    }
  },
  async created(){
    //Olheiro
    await firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.user = true;
        this.email = user.email;
      }else{
        this.user = false;
        this.email = '';
      }
    });

    await firebase.firestore().collection('posts')
    .onSnapshot((doc)=>{
      this.posts = [];

      doc.forEach((item)=>{
        this.posts.push({
          id: item.id,
          tarefa: item.data().tarefa,
          autor: item.data().autor
        });
      });

    });
  },  
  methods:{
    async cadastrar(){
      await firebase.firestore().collection('posts')      
      .add({
        tarefa: this.tarefa,
        autor: this.autor
      })
      .then(()=>{
        this.tarefa = '';
        this.autor  = '';
        alert('Cadastrado!');
      })
      .catch((erro)=>{
        alert('Erro ' + erro);
      })
    },
    async buscarPosts(){
      this.posts = [];
      await firebase.firestore().collection('posts')     
      .get()
      .then((snapshot)=>{
        snapshot.forEach((doc)=>{
          this.posts.push({
            id: doc.id,
            tarefa: doc.data().tarefa,
            autor: doc.data().autor,
          });
        });
      })
      .catch((erro)=>{
        alert('Erro ' + erro);
      })
      //DOC específico
      // await firebase.firestore().collection('posts')
      // .doc('123')
      // .get()
      // .then((snapshot)=>{
      //   this.tarefa = snapshot.data().tarefa;
      //   this.autor = snapshot.data().autor;
      // })
      // .catch((erro)=>{
      //   alert('Erro ' + erro);
      // })

    },
    async atualizarPosts(){
      if(this.idPost === ''){
        alert('ID é obrigatório!');
        return
      }

      await firebase.firestore().collection('posts').doc(this.idPost)     
      .update({
        tarefa: this.tarefa,
        autor: this.autor
      })
      .then(()=>{
        this.tarefa = '';
        this.autor  = '';
        alert('Atualizado!');
      })
      .catch((erro)=>{
        alert('Erro ' + erro);
      })

    },
    async deletarPosts(id){
      if(id === ''){
        alert('ID é obrigatório!');
        return
      }

      await firebase.firestore().collection('posts').doc(id)     
      .delete()
      .then(()=>{             
        alert('Deletado!');
      })
      .catch((erro)=>{
        alert('Erro ' + erro);
      })
    },
    async cadastrarUsuario(){
      const {user} = await firebase.auth().createUserWithEmailAndPassword(this.email, this.senha)

      await firebase.firestore().collection('users')
      .doc(user.uid)
      .set({
        nome: this.nome
      })
      .then(()=>{
        this.nome = '',
        this.email = '',
        this.senha = '',
        alert('Cadastrado!');
      })
      .catch((erro)=>{
        if(erro.code === 'auth/weak-password'){
          alert('Senha muito fraca');
        }else if(erro.code === 'auth/email-already-in-use'){
          alert('E-mail já existe');
        }else{
          alert('Erro ' + erro.code);
        }
        })



      // await firebase.auth().createUserWithEmailAndPassword(this.email, this.senha)
      // .then(()=>{
      //   this.email = '';
      //   this.senha  = '';
      //   alert('Cadastrado!');
      // })
      // .catch((erro)=>{
      //   if(erro.code === 'auth/weak-password'){
      //     alert('Senha muito fraca');
      //   }else if(erro.code === 'auth/email-already-in-use'){
      //     alert('E-mail já existe');
      //   }else{
      //     alert('Erro ' + erro.code);
      //   }
      //})
    },
    async sair(){
      await firebase.auth().signOut();
    },
    async entrar(){
      const {user} = await firebase.auth().signInWithEmailAndPassword(this.email,this.senha)
      
      await firebase.firestore().collection('users')
      .doc(user.uid)
      .get()
      .then((snapshot)=>{
        this.usuario = {
          nome: snapshot.data().nome
        };
        this.user = true;
      })
      .catch((erro)=>{
        alert(erro);
      })
      // await firebase.auth().signInWithEmailAndPassword(this.email,this.senha)
      // .then((reponse)=>{
      //   console.log(response);
      // })
      // .catch((erro)=>{
      //   console.log(erro);
      // })
    }
  }
}
</script>

<style scoped>
 
</style>
