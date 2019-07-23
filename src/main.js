import Vue from 'vue'
import App from './TodoList.vue'
import store from "./store/store.js"
import "./css/TodoList.css"
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
