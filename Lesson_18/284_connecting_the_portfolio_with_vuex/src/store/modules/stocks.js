import stocks from '../../data/stocks';

const state = {
  stocks: []
};

const getters = {
  stocks: state => state.stocks
};

const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS'(state) {

  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },
  initStocks: (context) => {
    context.commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
