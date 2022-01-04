import Vue from 'vue';
// # 1 라우터 설치 후 main.js에서 import
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView';

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
            name: 'news',
            // component: url 주소로 갔을 때 표시 될 컴포넌트
            // component: createListView('NewsView')
            component: NewsView
        },
        {
            path: '/ask',
            name: 'ask',
            // component: createListView('AskView')
            component: AskView
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: createListView('AskView')
            component: JobsView
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        }
    ]
});