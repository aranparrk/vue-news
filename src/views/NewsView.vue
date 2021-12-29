<template>
    <div>
        <div v-for="user in users">{{ user.title }}</div>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        console.log('호출 전 : ', this);

        // # 1 데이터 호출
        fetchNewsList()
        .then(response => {
            console.log('NewsView Data : ' + response);
            // 화살표 함수로 바인딩을 했을 경우
            console.log('호출 후 : ', this);
            // # 2 데이터 담기
            this.users = response.data;
        })
        .catch(function(error){
            console.log(error);
        })
    }
}
</script>

<style>

</style>