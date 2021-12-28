// # 1 라우터 설치 후 main.js에서 import
import VueRouter from 'vue-router';

// # 2 Vue.use로 VueRouter 추가
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
        // path: url 주소
        path: '',
        // component: url 주소로 갔을 때 표시 될 컴포넌트
        component: ''
    },
    {
        path: '',
        component: ''
    },
    {
        path: '',
        component: ''
    }    
  ]
});