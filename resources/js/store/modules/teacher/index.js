import api from '../../../services/api';

const state = {
    teachers: [],
    teacher: {},
};

const getters = {
    teachers: state => state.teachers,
    teacher: state => state.teacher,
};

const mutations = {
    SET_teacherS: (state, teachers) => {
        state.teachers = teachers;
    },
    SET_teacher: (state, teacher) => {
        state.teacher = teacher;
    }
};

const actions = {
    async add({ commit }, data) {
        await api.post('/teacher', {
            name: data.name,
            email: data.email,
            phone: data.phone,
        });
    },

    async delete({ commit }, id) {
        await api.del(`/teacher/${id}`);
    },

    async deleteMutiple({ commit }, ids) {
        await api.del(`/teacher/delete/${ids}`);
    },

    async edit({ commit }, data) {
        await api.put(`/teacher/${data.id}`, {
            name: data.name,
            email: data.email,
            phone: data.phone,
        });
    },

    async getTeacher({ commit }, id) {
        const response = await api.get(`/teacher/${id}`);
        commit('SET_teacher', response.data);
    },

    async getTeachers({ commit }) {
        const response = await api.get('/teacher');
        commit('SET_teacherS', response.data);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
