import api from '../../../services/api';

const state = {
    questions: [],
    question: {},
};

const getters = {
    questions: state => state.questions,
    question: state => state.question,
};

const mutations = {
    SET_QUESTIONS: (state, questions) => {
        state.questions = questions;
    },
    SET_QUESTION: (state, question) => {
        state.question = question;
    }
};

const actions = {

    async add({ commit }, data) {
        await api.post('/question', {
            question: data.question,
            Ans_A: data.Ans_A,
            Ans_B: data.Ans_B,
            Ans_C: data.Ans_C,
            Ans_D: data.Ans_D,
            Correct_Ans: data.Correct_Ans,
            test_id: data.test_id,
        });
    },

    async delete({ commit }, id) {
        await api.del(`/question/${id}`);
    },

    async deleteMultiple({ commit }, ids) {
        await api.del(`/question/delete`, { data: { ids } });
    },

    async edit({ commit }, data) {
        await api.put(`/question/${data.id}`, {
            question: data.question,
            Ans_A: data.Ans_A,
            Ans_B: data.Ans_B,
            Ans_C: data.Ans_C,
            Ans_D: data.Ans_D,
            Correct_Ans: data.Correct_Ans,
            test_id: data.test_id,
        });
    },

    async getQuestions({ commit }) {
        const response = await api.get('/question');
        commit('SET_QUESTIONS', response.data);
    },

    async getQuestion({ commit }, id) {
        const response = await api.get(`/question/${id}`);
        commit('SET_QUESTION', response.data);
    },

    async getTest({ commit }, id) {
        const response = await api.get(`/question/test/${id}`);
        commit('SET_QUESTIONS', response.data);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
