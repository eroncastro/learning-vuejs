import Vue from 'vue';
import Vuex from 'vuex';

// Vuex is Vue state management tool
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0 // Initial state
  },
  getters: {
    /*
      Methods for getting the state out of the store.
      This helps avoiding code duplication.
    */
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' Clicks';
    }
  },
  mutations: {
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    }
  }
});
