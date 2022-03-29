import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const getDefaultState = () => {
  return {
    packageVersion: process.env.VUE_APP_VERSION || "0",
    sceneData: "",
    characterNames: {
      client: "Client",
      characterA: "Character A",
      characterB: "Character B",
      characterC: "Character C",
    },
    unityLoaded: false,
  };
};

export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
    updateSceneData(state, payload) {
      state.sceneData = payload;
    },
    updateNameClient(state, payload) {
      state.characterNames.client = payload;
    },
    updateNameCharacterA(state, payload) {
      state.characterNames.characterA = payload;
    },
    updateNameCharacterB(state, payload) {
      state.characterNames.characterB = payload;
    },
    updateNameCharacterC(state, payload) {
      state.characterNames.characterC = payload;
    },
    updateUnityLoaded(state, payload) {
      state.unityLoaded = payload;
    },
    RESET_STATE(state) {
      Object.assign(state, getDefaultState());
    },
  },
  getters: {
    appVersion(state) {
      return state.packageVersion;
    },
  },
  actions: {
    resetState({ commit }) {
      commit("RESET_STATE");
    },
  },
  modules: {},
});
