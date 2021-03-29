import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Axios from 'axios';

Vue.config.productionTip = false
Axios.defaults.baseURL = "https://mspr.corentin-fouquet.tech/";

Axios.interceptors.request.use(
  function(config) {

    const token = localStorage.getItem('token')
    if (token) {
        config.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        config.headers.common = {}
    }

    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
