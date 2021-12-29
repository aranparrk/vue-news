import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Vuex : 상태 관리 도구, 여러 컴포넌트 간에 공유 되는 속성
export const store = new Vuex.Store({
    state: {
        news: []
    }
})