import Vue from 'vue'
import App from './App.vue'
import './main.css'

import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false

import { routes } from './routes';

import { extend } from 'vee-validate';

import { required } from 'vee-validate/dist/rules';
extend('required', {
  ...required,
  message: 'O nome da tarefa é um campo obrigatório.'
});

import { max } from 'vee-validate/dist/rules';
extend('max', {
  ...max,
  message: (campo, regra) => `O nome da tarefa deve possuir no máximo ${regra.length} caracteres.`
});

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
