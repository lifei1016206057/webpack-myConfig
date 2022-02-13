import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';

import about from './about';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        add(state) {
            state.count++;
        }
    },
    actions: {},
    modules: {
        home,
        about,
    },
})