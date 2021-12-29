import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo } from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            console.log('NEWS : ', response.data);
            // # 3 mutations 호출
            context.commit('SET_NEWS', response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
        .then(({ data }) => {
            console.log('ASK : ', data);
            commit('SET_ASK', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
        .then(({ data }) => {
            console.log('JOBS : ' + data);
            commit('SET_JOBS', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
        .then(({ data }) => {
            console.log('USER : ' + data);
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        })
    }
}