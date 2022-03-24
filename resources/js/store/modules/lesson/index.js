import api from '../../../services/api';

const state = {
    lessons: [],
    lesson: {},
};

const getters = {
    lessons: state => state.lessons,
    lesson: state => state.lesson,
};

const mutations = {
    setLessons(state, lessons) {
        state.lessons = lessons;
    },
    setLesson(state, lesson) {
        state.lesson = lesson;
    }
};

const actions = {

    async add({ commit }, data) {
        await api.post('/lesson', data);
    },

    async delete({ commit }, id) {
        await api.del(`/lesson/${id}`);
    },

    async deleteMutiple({ commit }, ids) {
        await api.del(`/lesson/delete/${ids}`);
    },

    async edit({ commit }, data) {
        await api.put(`/lesson/${data.id}`, {
            name: data.name,
            introduce: data.introduce,
            content: data.content,
            class_id: data.class_id,
            subj_id: data.subj_id,
        });
    },

    async getLessons({ commit }) {
        const response = await api.get('/lesson');
        commit('setLessons', response.data);
    },

    async getLesson({ commit }, id) {
        const response = await api.get(`/lesson/${id}`);
        commit('setLesson', response.data);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
