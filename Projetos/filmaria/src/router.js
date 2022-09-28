import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home';
import Filme from './pages/Filme';
import MeusFilmes from './pages/MeusFilmes';
import Erro from './pages/Erro';


 const routes = [   
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/filme/:id',
      name: 'Filme',      
      component: Filme,
      props: true     
    },
    {
      path: '/salvos',
      name: 'MeusFilmes',
      component: MeusFilmes
    },
    // {
    //   path: '',
    //   name: 'Erro',
    //   component: Erro
    // },
  ]

  const router = createRouter({    
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  // router.beforeEach((to,from,next) => {
  //   next();
  // })
  export default router;