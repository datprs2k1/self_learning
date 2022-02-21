import api from '../../../services/api';

const state = {
    departments: [],
    Department: {},
};

const getters = {
    departments: state => state.departments,
    Department: state => state.Department,
};

const mutations = {
    SET_DEPARTMENTS: (state, departments) => {
        state.departments = departments;
    },
    SET_DEPARTMENT: (state, Department) => {
        state.Department = Department;
    },
};

const actions = {
    async add({ commit }, data) {
        await api.post('/department', {
            department_id: data.department_id,
            name: data.name,
        });
    },

    async delete({ commit }, id) {
        await api.del(`/department/${id}`);
    },

    async edit({ commit }, data) {
        await api.put(`/department/${data.id}`, {
            department_id: data.department_id,
            name: data.name,
        });
    },

    async deleteMutiple({ commit }, ids) {
        await api.del(`/department/delete/${ids}`);
    },

    async getDepartment({ commit }, id) {
        const response = await api.get(`/department/${id}`);
        commit('SET_DEPARTMENT', response.data);
    },

    async getDepartments({ commit }) {
        const response = await api.get('/department');
        commit('SET_DEPARTMENTS', response.data);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
