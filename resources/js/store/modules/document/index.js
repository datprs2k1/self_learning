import api from '../../../services/api';

const state = {
    documents: [],
    document: {},
};

const getters = {
    documents: state => state.documents,
    document: state => state.document,
};

const mutations = {
    SET_DOCUMENTS: (state, documents) => {
        state.documents = documents;
    },
    SET_DOCUMENT: (state, document) => {
        state.document = document;
    }
};

const actions = {

    async add({ commit }, data) {
        await api.post('/document', data);
    },

    async delete({ commit }, id) {
        await api.del(`/document/${id}`);
    },

    async deleteMultiple({ commit }, ids) {
        await api.del(`/document/delete`, { data: { ids } });
    },

    async edit({ commit }, data) {
        await api.post(`/document/${data.get('id')}`, data);
    },

    async getDocuments({ commit }) {
        const response = await api.get('/document');
        commit('SET_DOCUMENTS', response.data);
    },

    async getDocument({ commit }, id) {
        const response = await api.get(`/document/${id}`);
        commit('SET_DOCUMENT', response.data);
    }

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
