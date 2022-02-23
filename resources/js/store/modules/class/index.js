import api from '../../../services/api';

const state = {
    CLASSES: [],
    CLASS: {},
};

const getters = {
    CLASSES: state => state.CLASSES,
    CLASS: state => state.CLASS,
};

const mutations = {
    SET_CLASSES: (state, CLASSES) => {
        state.CLASSES = CLASSES;
    },
    SET_CLASS: (state, CLASS) => {
        state.CLASS = CLASS;
    },
};

const actions = {
    async add({ commit }, data) {
        await api.post('/class', {
            name: data.name,
            dept_id: data.dept_id,
        });
    },

    async delete({ commit }, id) {
        await api.del(`/class/${id}`);
    },

    async deleteMutiple({ commit }, ids) {
        await api.del(`/class/delete/${ids}`);
    },

    async edit({ commit }, data) {
        await api.put(`/class/${data.id}`, {
            name: data.name,
            dept_id: data.dept_id,
        });
    },

    async getCLASS({ commit }, id) {
        const response = await api.get(`/class/${id}`);
        commit('SET_CLASS', response.data);
    },

    async getCLASSES({ commit }) {
        const response = await api.get('/class');
        commit('SET_CLASSES', response.data);
    }

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
