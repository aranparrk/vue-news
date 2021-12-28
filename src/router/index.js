// # 1 라우터 설치 후 main.js에서 import
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.Vue';

// # 2 Vue.use로 VueRouter 추가
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
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
    }    
  ]
});