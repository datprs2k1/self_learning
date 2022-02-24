import api from '../../../services/api';

const state = {
    students: [],
    student: {},
};

const getters = {
    students: state => state.students,
    student: state => state.student,
};

const mutations = {
    SET_STUDENTS: (state, students) => {
        state.students = students;
    },
    SET_STUDENT: (state, student) => {
        state.student = student;
    }
};

const actions = {
    async add({ commit }, data) {
        await api.post('/student', {
            code: data.code,
            name: data.name,
            email: data.email,
            phone: data.phone,
            dept_id: data.dept_id,
            class_id: data.class_id,
        });
    },

    async delete({ commit }, id) {
        await api.del(`/student/${id}`);
    },

    async deleteMutiple({ commit }, ids) {
        await api.del(`/student/delete/${ids}`);
    },

    async edit({ commit }, data) {
        await api.put(`/student/${data.id}`, {
            code: data.code,
            name: data.name,
            email: data.email,
            phone: data.phone,
            dept_id: data.dept_id,
            class_id: data.class_id,
        });
    },

    async getStudent({ commit }, id) {
        const response = await api.get(`/student/${id}`);
        commit('SET_STUDENT', response.data);
    },

    async getStudents({ commit }) {
        const response = await api.get('/student');
        commit('SET_STUDENTS', response.data);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
