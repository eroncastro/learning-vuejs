const state = {
  funds: 10000,
  stocks: []
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id);

      return Object.assign({}, stock, record);
    })
  },
  funds(state) {
    return state.funds;
  }
};

const mutations = {
  'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(stock => stock.id === stockId);

    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({ id: stockId, quantity });
    }

    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.stock.find(stock => stock.id === stockId);

    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(this.state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  }
};

const actions = {
  sellStock: ({ commit }, order) => {
    commit('SELL_STOCK', order);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
