import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import axios from 'axios';
import axios, { AxiosStatic } from 'axios';
import './assets/css/animate.css@3.5.1.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
