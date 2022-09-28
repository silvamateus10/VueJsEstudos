<template>
    <div id="usuario">

        <h2>Olá PROP: {{_nome}} </h2>
        <button @click="curso">NOME CURSO</button>

    </div>
</template>

<script>
export default {
    name: 'Usuario',
    
    props: {
       nome:{
           type: String,
           required: false
       }
    },
    data(){
        return{
            _nome: this.nome
        }
    },
    methods:{
        curso(){
            this._nome = 'Aprendendo Portugues';
            this.$emit('nomeCurso', this._nome);
        }
    }
}
</script>

<style scoped>
    h2{
        color: red;
    }
</style>