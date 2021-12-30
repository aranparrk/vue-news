<template>
    <div>
        <ul class="new-list">
            <li v-for="item in this.$store.state.news" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ item.points }}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <p class="news-title">
                        <a v-bind:href="item.url">
                            {{ item.title }}
                        </a>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <!-- <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link> -->
                        <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul>
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

<style scoped>
.new-list {
    margin: 0;
    padding: 0;
}

.post {
    list-style: noen;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}

.news-title {
    margin: 0;
}

.link-text {
    color: #828288;
}
</style>