import Vue from 'vue';
import './plugins/axios'
import App from './App.vue';
import router from './router';
import axios from 'axios';

Vue.use({
    install(Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'http://localhost:8000/api/v1/',
    });
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
