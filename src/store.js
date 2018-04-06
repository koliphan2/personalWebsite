import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      logedIn: false,
  },
  getters: {
    logedIn: state => state.logedIn,
    //same as items: function(state) {return state.items}
  },
  mutations: {
      status (state, login){
          state.logedIn = login;
      }
  },
  actions: {
    getStatus(context) {
        console.log("getting status");
        axios.get("/api/status").then(response => {
      context.commit('status', response.data);
      //Commit = pull to the front
      return logedIn;
        }).catch(err => {
        });
      },

    login(context, info){
      console.log("Logging in");
      axios.put("/api/login", info).then(response => {

      }).catch(err => {;
        return false;
      });
      this.dispatch('getStatus');
    },
    logout(context){
      console.log("Logging out");
      axios.put("/api/logout");
      this.dispatch('getStatus');
      return;
    }
  }
});