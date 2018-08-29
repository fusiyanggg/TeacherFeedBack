import Vue from 'vue'
import Vuex, {Store} from 'vuex';
import menu from './modules/menu'
Vue.use(Vuex);



const store = new Store({
  modules:{
    menu,
  }
});


export default store
