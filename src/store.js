import Vue from "vue";
import Vuex from "vuex";

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
  getters
});
