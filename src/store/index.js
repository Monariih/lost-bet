import { createStore } from "vuex";

export default createStore({
    state: {
        user: {
            username: "John Doe",
            useremail: "teste@email.com",
            userbalance: 157,
            usercpf: "12345678999",
        },
    },
    getters: {},
    mutations: {},
    actions: {},
});