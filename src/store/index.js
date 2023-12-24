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
            useremail: "example@email.com",
            userbalance: 0,
            usercpf: "12345678999",
        },
    },
    getters: {},
    mutations: {
        storeUser(state, payload) {
            state.user = payload;
        },
        logout(state) {
            state.user = null;
        },
    },
    actions: {},
  plugins: [createPersistedState({
    storage: {
      getItem: (key) => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value),
      removeItem: (key) => localStorage.removeItem(key),
    }
});