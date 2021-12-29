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
        fetchNewsList()
        .then(response => {
            console.log('NewsView Data : ' + response);
            // 화살표 함수로 바인딩을 했을 경우
            console.log('호출 후 : ', this);
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