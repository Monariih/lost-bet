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
    mutations: {},
    actions: {},
});