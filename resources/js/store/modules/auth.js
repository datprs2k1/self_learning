import api from '../../services/api';

const state = {
    currentUser: null,
};

const getters = {
    getCurrentUser: state => state.currentUser,
    isAuthenticated: state => !!state.currentUser,
};

const mutations = {
    setCurrentUser: (state, user) => {
        state.currentUser = user;
    },
};

const actions = {
    async login({ commit }, form) {
        const response = await api.post('/login', form);
        const user = response.data;
        commit('setCurrentUser', user);
        localStorage.setItem('token', user.token);
    },
    async logout({ commit }) {
        await api.get('/logout');
        commit('setCurrentUser', null);
        localStorage.removeItem('token');
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
