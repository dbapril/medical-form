import Vue from 'vue'
import 'es6-promise/auto';
import Vuex from 'vuex'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    formVisiblility: false
  },
  mutations: {
    formVisibility(state, payload) {
      state.formVisiblility = payload;
    }
  },
  getters: {
    formVisibility(state) {
      return state.formVisiblility;
    }
  }
})

new Vue({
  store: store,
  render: h => h(App)
}).$mount('#app')