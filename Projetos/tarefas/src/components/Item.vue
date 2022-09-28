<template>
    <div id="item">
       <ul>
        <li v-for="task in lista" :key="task.key">
            <span>{{task.text}}</span>
            <button @click="concluir(task.key)">Concluir</button>
        </li>         
       </ul>
          
    </div>
</template>
<script>
    export default{
        name: 'Item',     
        props:[
            'lista',
            'delete'
        ],
        methods:{
            concluir(key){
                this.delete(key);
            }
        }
    }    
</script>
<style scoped>
    #item{
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    ul{
        list-style: none;
        padding: 0;
        margin-top: 20px;
    }
    ul li{
        padding: 15px 0;
        font-display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    li:not(:first-child){
        border-top: 1px solid #FFF;
    }

    span{
        color: #0d2636
    }
    button{
        cursor: pointer;
        background: #DDD;
        color: #000;
        border: 0;
        padding: 8px 8px;
        outline: none;
        border-radius: 4px;
        float: right;
    }
</style>