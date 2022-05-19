import api from '../../../services/api';

const state = {
    teachers: [],
    teachersBySubject: [],
    teacher: {},
};

const getters = {
    teachers: state => state.teachers,
    teacher: state => state.teacher,
    teachersBySubject: state => state.teachersBySubject,
};

const mutations = {
    SET_teacherS: (state, teachers) => {
        state.teachers = teachers;
    },
    SET_teacher: (state, teacher) => {
        state.teacher = teacher;
    },
    SET_teachersBySubject: (state, teacher) => {
        state.teachersBySubject = teacher;
    }
};

const actions = {
    async add({ commit }, data) {
        await api.post('/teacher', {
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject_id: data.subject_id,
        });
    },

    async addTeacher({ commit }, data) {
        await api.post('/teacher/addTeacher', data);
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
            subject_id: data.subject_id,
        });
    },

    async getTeacher({ commit }, id) {
        const response = await api.get(`/teacher/${id}`);
        commit('SET_teacher', response.data);
    },

    async getTeachers({ commit }) {
        const response = await api.get('/teacher');
        commit('SET_teacherS', response.data);
    },

    async getTeachersBySubject({ commit }, id) {
        const response = await api.get(`/teacher/subject/${id}`);
        commit('SET_teachersBySubject', response.data);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
