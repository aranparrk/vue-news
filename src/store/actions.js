import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';

export default {
    // async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },

    // promise
    async FETCH_ASK({ commit }) {
        try {
            const response = await fetchAskList();
            commit('SET_ASK', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_JOBS({ commit }) {
        const response = await fetchJobsList()
        commit('SET_JOBS', response.data);
        return response
    },
    async FETCH_USER(context, name) {
        const response = await fetchUserInfo(name);
        console.log('USER : ' + response.data);
        context.commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM(context, id) {
        const response = await fetchCommentItem(id);
        console.log('ITEM : ' + data);
        context.commit('SET_ITEM', data);
        return response;
    },
    async FETCH_LIST(context, pageName) {
        const response = await fetchList(pageName);
        console.log(4);
        context.commit('SET_LIST', response.data);
        return response;
    }
}