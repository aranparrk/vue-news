<template>
    <div>
        <p v-for="item in this.$store.state.news">
            <a v-bind:href="item.url">
                {{ item.title }}
            </a>
            <small>{{ item.time_ago }} by 
                <!-- <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link> -->
                <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
        </p>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    //     console.log('호출 전 : ', this);

    //     // # 1 데이터 호출
    //     fetchNewsList()
    //     .then(response => {
    //         console.log('NewsView Data : ' + response);
    //         // 화살표 함수로 바인딩을 했을 경우
    //         console.log('호출 후 : ', this);
    //         // # 2 데이터 담기
    //         this.users = response.data;
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })
    }
}
</script>

<style>

</style>