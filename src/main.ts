import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import axios from 'axios';
import axios, { AxiosStatic } from 'axios';

axios.defaults.baseURL = 'https://dog.ceo/api/breeds/';
Vue.prototype.$axios = axios;
declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
  }
}
/* 

Vue.use({
    install(Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'https://dog.ceo/api/breeds/',
    });
  },
}); */

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
