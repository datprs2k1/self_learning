import api from '../../../services/api';

const state = {
    subjects: [],
    subject: {},
};

const getters = {
    subjects: state => state.subjects,
    subject: state => state.subject,
};

const mutations = {
    setSubjects(state, subjects) {
        state.subjects = subjects;
    },
    setSubject(state, subject) {
        state.subject = subject;
    },
};

const actions = {

    async add({ commit }, data) {
        await api.post('/subject', {
            name: data.name,
            code: data.code,
            weeks: data.weeks,
        });
    },

    async delete({ commit }, id) {
        await api.del(`/subject/${id}`);
    },

    async deleteMutiple({ commit }, ids) {
        await api.del(`/subject/delete/${ids}`);
    },

    async edit({ commit }, data) {
        await api.put(`/subject/${data.id}`, {
            name: data.name,
            code: data.code,
            weeks: data.weeks,
        });
    },

    async getSubjects({ commit }) {
        const response = await api.get('/subject');
        commit('setSubjects', response.data);
    },

    async getSubject({ commit }, id) {
        const response = await api.get(`/subject/${id}`);
        commit('setSubject', response.data);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
