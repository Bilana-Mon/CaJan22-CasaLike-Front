import { createStore } from 'vuex';
import stayStore from '../store/modules/stay-module.js';
import userStore from '../store/modules/user-module.js';
import orderStore from '../store/modules/order-module.js';


const store = createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        stayStore,
        userStore,
        orderStore
    }
})

export default store