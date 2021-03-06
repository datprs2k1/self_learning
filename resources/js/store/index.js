import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import auth from './modules/auth';
import department from './modules/department';
import CLASS from './modules/class';
import student from './modules/student';
import subject from './modules/subject';
import lesson from './modules/lesson';
import document from './modules/document';
import test from './modules/test';
import question from './modules/question';
import teacher from './modules/teacher';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        department,
        CLASS,
        student,
        subject,
        lesson,
        document,
        test,
        question,
        teacher
    },
    plugins: [createPersistedState({
        paths: ['auth']
    })]
});

export default store;
