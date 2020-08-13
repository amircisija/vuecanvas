import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
  key: "vue-canvas-app",
  storage: window.localStorage
});

Vue.use(Vuex);

const state = {
  companyInfo: {}
};

const mutations = {
  ADD_COMPANY(state, company) {
    state.companyInfo = company;
  }
};

const actions = {
  addCompany(context, company) {
    console.log(this.company);
    context.commit("ADD_COMPANY", company);
  }
};

const getters = {
  getNumbers(state) {
    return state.numbers;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [vuexPersist.plugin]
});
