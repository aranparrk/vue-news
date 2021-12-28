import Vue from 'vue';
// # 1 라우터 설치 후 main.js에서 import
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

// # 2 Vue.use로 VueRouter 추가
Vue.use(VueRouter);

export const router = new VueRouter({
    // url 해시주소 삭제
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            // path: url 주소
            path: '/news',
            // component: url 주소로 갔을 때 표시 될 컴포넌트
            component: NewsView
        },
        {
            path: '/ask',
            component: AskView
        },
        {
            path: '/jobs',
            component: JobsView
        },
        {
            path: '/user',
            component: UserView
        },
        {
            path: '/item',
            component: ItemView
        }
    ]
});