import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    events: [],
  },
  getters: {
    EVENTS: (state) => state.events,
  },
  mutations: {
    ADD_EVENT: (state, event) => {
      state.events.push(event);
    },
    UPDATE_EVENT: (
      state,
      { id, libelle, heureDeDébut, heureDeFin, employe }
    ) => {
      let index = state.events.findIndex((_event) => _event.id == id);

      state.events[index].libelle = libelle;
      state.events[index].heureDeDébut = heureDeDébut;
      state.events[index].heureDeFin = heureDeFin;
      state.events[index].employe = employe;
    },
  },
  actions: {},
});

export default store;
