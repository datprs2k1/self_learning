import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import auth from './modules/auth';
import department from './modules/department';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        department
    },
    plugins: [createPersistedState()]
});

export default store;
