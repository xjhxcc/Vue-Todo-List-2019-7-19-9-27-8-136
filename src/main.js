import Vue from 'vue'
import App from './components/Welcome.vue'
import store from "./store/store.js"
import "./css/TodoList.css"
import router from "./router/index.js"
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
