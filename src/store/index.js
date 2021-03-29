import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import route from "../router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    token: "",
    status: "",
    id: "",
    info: "",
    promo: []

  },

  mutations: {
  },

  actions: {

    login({ state }, form) {
      state.status = "";

      axios
        .post('login_check', {
          "email": form.email,
          "password": form.password
        })
        .then(response => {
          state.token = response.data.token;
          state.status = "200";
          localStorage["token"] = response.data.token;
          route.push('/app/promotions');
        }).catch(
          error => {
            state.status = "401";
            if (error) throw error;
          }
        );
    },

    register({ state }, form) {
      state.status=  "";

      axios
        .post('users', {
          "email": form.email,
          "firstname": form.firstname,
          "lastname": form.lastname,
          "password": form.password
        })
        .then(response => {
          state.id = response.data.id;
          state.status = "200";
          route.push('/auth/login');
        })
        .catch(
          error => {
            state.status = "401";
            if (error) throw error;
          }
        );
    },

    getPromos({ state }) {

      var base64Url = localStorage.getItem('token').split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = JSON.parse(decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join('')));

      axios
        .get(`promos?users.email=${ jsonPayload.email }`)
        .then(response => {
          state.promo = response.data;
        })
        .catch(
          error => {
            if (error) throw error;
          }
        );
    },

    checkCode({state}, code) {
      state.status = "";
      
      axios
        .post('get/promo', {
          "promo": code
        })
        .then(response => {
          state.promo = response.data;
          state.status = "200";
        })
        .catch(
          error => {
            state.status = "400";
            state.promo = error.response.status;
            if (error) throw error;
          }
        );
    }

  },
  modules: {
  }
})
