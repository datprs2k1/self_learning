import api from '../../../services/api';

const state = {
    students: [],
    student: {},
    myCourse: {},
};

const getters = {
    students: state => state.students,
    student: state => state.student,
    myCourse: state => state.myCourse,
};

const mutations = {
    SET_STUDENTS: (state, students) => {
        state.students = students;
    },
    SET_STUDENT: (state, student) => {
        state.student = student;
    },
    SET_MY_COURSE: (state, myCourse) => {
        state.myCourse = myCourse;
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
            class_id: data.class_id.id,
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
            class_id: data.class.id,
        });
    },

    async getStudent({ commit }, id) {
        const response = await api.get(`/student/${id}`);
        commit('SET_STUDENT', response.data);
    },

    async getStudents({ commit }) {
        const response = await api.get('/student');
        commit('SET_STUDENTS', response.data);
    },

    async getMyCourse({ commit }) {
        const response = await api.get(`/getMyCoursesByClassId`);
        commit('SET_MY_COURSE', response.data);
    },

    async submitTest({ commit }, data) {
        const response = await api.post('/checkTest', data);
        return response.data;
    },
    async getResult({ commit }, data) {
        const response = await api.post('/getResult', {
            subject_id: data.subject_id,
            class_id: data.class_id
        });
        return response.data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
