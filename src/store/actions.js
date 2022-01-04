import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';

export default {
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //     .then(response => {
    //         console.log('NEWS : ', response.data);
    //         // # 3 mutations 호출
    //         context.commit('SET_NEWS', response.data);
    //         return response;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    // FETCH_ASK({ commit }) {
    //     return fetchAskList()
    //     .then(({ data }) => {
    //         console.log('ASK : ', data);
    //         commit('SET_ASK', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //     .then(({ data }) => {
    //         console.log('JOBS : ' + data);
    //         commit('SET_JOBS', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
        .then(({ data }) => {
            console.log('USER : ' + data);
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ITEM({ commit }, id) {
        return fetchCommentItem(id)
        .then(({ data }) => {
            console.log('ITEM : ' + data);
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    // # 2 실행
    FETCH_LIST({ commit }, pageName) {
        // # 3 API 호출
        return fetchList(pageName)
        .then(response =>  {
            // # 4
            console.log(4);
            commit('SET_LIST', response.data);
            return response;
        })
        .catch(error => console.log(error));
    }
}