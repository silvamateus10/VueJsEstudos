import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home';
import Produto from './pages/produto/Produto';
import MeusProdutos from './pages/produto/MeusProdutos';
import Detalhe from './pages/produto/Detalhe';
import Editar from './pages/produto/Editar';

/*
 Regisrando o router na instancia do Vue

 > Modelo HASH E HISTORY

 > Hash seusite.com/#/contato
 > History seusite.com/contato


 */
 const routes = [   
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/produto',
      name: 'Produto',      
      component: Produto,
      props: true,
      beforeEnter: (to, from, next) => {next()},
      children:[
        {path: '', component: MeusProdutos},
        {path: ':id', component: Detalhe, props: true},
        {path: ':id/editar', component: Editar, props: true, name:'editar'},
      ]
    },
    {
      path: '/*', 
      name: 'NotFound',   
      redirect: to => {   
        return 'Home'
      },
    }
  ]
  const router = createRouter({    
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  // router.beforeEach((to,from,next) => {
  //   next();
  // })
  export default router;