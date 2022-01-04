import Vue from 'vue';
// # 1 라우터 설치 후 main.js에서 import
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView';
import bus from '../utils/bus.js';
import { store }from '../store/index.js';

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
            component: NewsView,
            beforeEnter: (to, from, next) => {
                // // 이동할 URL의 라우팅 정보
                // console.log('to : ', to);
                // // 현재 URL의 라우팅 정보
                // console.log('from : ', from);
                // console.log('next : ', next);
                bus.$emit('start:spinner');
                // # 1 데이터 호출
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    //  # 5
                    console.log(5);
                    console.log('Mixin fetched');
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        },
        {
            path: '/ask',
            name: 'ask',
            // component: createListView('AskView')
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch(error => {
                    console.log(error);
                })
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: createListView('AskView')
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    // bus.$emit('end:spnnier');
                    next();
                })
                .catch(error => {
                    console.log(error);
                })
            }
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