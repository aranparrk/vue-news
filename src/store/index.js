import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

// Vuex : 상태 관리 도구, 여러 컴포넌트 간에 공유 되는 속성
export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: [],
        item: []
    },
    // # 1 vuex를 이용해서 api 호출, 비동기 호출
    actions,
    // # 2 actions에서 호출한 api를 state에 담기 위한 절차
    mutations,
    // computed와 동일한 속성이나 store에 존재
    getters: {
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedItem(state) {
            return state.item;
        }
    }
})