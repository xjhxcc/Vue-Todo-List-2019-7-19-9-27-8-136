import Vue from 'vue'
import App from './TodoList.vue'
import store from "./store/store.js"
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
