<template>
  <header id="header" >
    <router-link to="/" exact class="logo">Filmaria</router-link>
    
    <router-link to="/salvos" exact class="meus-filmes">
      <button>
        Salvos
      </button>
    </router-link>
  </header>
</template>

<script>
export default {
    name: 'Filmaria'
}
</script>

<style scoped>
  #header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: brown;
  }

  .logo{
    text-decoration: none;
    font-size: 30px;
    color: #FFF;
  }

  button{    
    cursor: pointer;
    border: 0;
    background: #FFF;
    padding: 5px 15px;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
  }

  .meus-filmes{
    text-decoration: none;
  }
</style>