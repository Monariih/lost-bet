import { createStore } from "vuex";

export default createStore({
    state: {
        user: {
            username: "Example name",
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
});