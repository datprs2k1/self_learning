import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import auth from './modules/auth';
import department from './modules/department';
import CLASS from './modules/class';
import student from './modules/student';
import subject from './modules/subject';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        department,
        CLASS,
        student,
        subject
    },
    plugins: [createPersistedState()]
});

export default store;
