import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    allItems: [],
    activeButton: 'ALL'
  },
  mutations: {
    addAllitems (state, data) {
      state.allItems.push(data);
    },
    changeActiveButton(state, data){
      state.activeButton = data;
    }
  },
  getters: {
    activeItems: state => {
      return state.allItems.filter(item => item.finished === false);
    },
    completeItems: state => {
      return state.allItems.filter(item => item.finished === true);
    }
  }
});
export default store;
