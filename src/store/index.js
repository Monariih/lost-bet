import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

function initialState() {
  user = localStorage.getItem("user")
  return {
		user: user ? JSON.parse(user) : null,
  };
}

export default createStore({
  state: {
		initialState,
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    storeUser(state, payload) {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  actions: {},
  plugins: [createPersistedState({
    storage: {
      getItem: (key) => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value),
      removeItem: (key) => localStorage.removeItem(key),
    }
  })],
});
