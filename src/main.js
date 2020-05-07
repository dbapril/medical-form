import Vue from 'vue'
import 'es6-promise/auto';
import Vuex from 'vuex'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    formVisiblility: true
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



Vue.component('radio-block', {
  props: ['elem', 'name'],
  methods: {
    checked: function(elemID) {
      return document.querySelector(`radio${elemID}`).checked ? 'radio-block__decor-label--checked' : ''
    }
  },
  template: `
  <div class="radio-block form__radio-block">
    <label :key="elem.id" class="radio-block__decor-label" :class="checked(elem.id)">
      <input type="radio" 
             :name="name" 
             :id="'radio' + elem.id" 
             :value="elem.value"
             :checked="elem.checked" 
             class="radio-block__input"
      />
    </label>
    <label :for="'radio' + elem.id" :key="elem.value" class="radio-block__content-label">
      {{elem.content}}
    </label>
  </div>
  `
})

new Vue({
  store: store,
  render: h => h(App)
}).$mount('#app')