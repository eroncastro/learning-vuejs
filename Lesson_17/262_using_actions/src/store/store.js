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
    // Mutations must run synchronously. To improve them we use actions.
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: state => {
      state.counter--;
    }
  },
  actions: {
    increment: ({ commit }, payload) => {
      commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
      commit('decrement', payload);
    },
    asyncIncrement: ({ commit }) => {
      setTimeout(() => {
        commit('decrement')
      }, 1000)
    }
  }
});
