import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

Vue.use(Vuex);

// Vuex : 상태 관리 도구, 여러 컴포넌트 간에 공유 되는 속성
export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: []
    },
    // # 1 vuex를 이용해서 api 호출, 비동기 호출
    actions: {
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
        FETCH_JOBS(context) {
            fetchJobsList()
            .then(response => {
                console.log('JOBS : ' + response.data);
                context.commit('SET_JOBS', response.data);
            })
        }
    },
    // # 2 actions에서 호출한 api를 state에 담기 위한 절차
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs;
        }
    }
})