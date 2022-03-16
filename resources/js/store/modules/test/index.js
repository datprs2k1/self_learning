import api from '../../../services/api';

const state = {
    tests: [],
    test: {},
};

const getters = {
    tests: state => state.tests,
    test: state => state.test,
};

const mutations = {
    setTests(state, tests) {
        state.tests = tests;
    },
    setTest(state, test) {
        state.test = test;
    }
};

const actions = {

    async add({ commit }, data) {
        await api.post('/test', {
            name: data.name,
            type: data.type,
            lesson_id: data.lesson_id,
            subj_id: data.subj_id,
            class_id: data.class_id,
        });
    },

    async delete({ commit }, id) {
        await api.del(`/test/${id}`);
    },

    async deleteMutiple({ commit }, ids) {
        await api.del(`/test/delete/${ids}`);
    },

    async edit({ commit }, data) {
        await api.put(`/test/${data.id}`, {
            name: data.name,
            type: data.type,
            lesson_id: data.lesson_id,
            subj_id: data.subj_id,
            class_id: data.class_id,
        });
    },

    async getTests({ commit }) {
        const response = await api.get('/test');
        commit('setTests', response.data);
    },

    async getTest({ commit }, id) {
        const response = await api.get(`/test/${id}`);
        commit('setTest', response.data);
    },

    async checkTest({ commit }, { id, selected }) {
        const response = await api.post(`/test/checkTest/${id}`, {
            selected
        });
        return response.data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
