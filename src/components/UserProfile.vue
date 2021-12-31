<template>
    <!-- 질문 상세 정보 -->
    <div class="user-container">
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class="user-descriptions">
            <div>{{ info.id }}</div>
            <!-- <router-link :to="`/user/${info.user}`">
            {{ info.id }}
            </router-link> -->
            <div class="time">
            {{ info.created }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    },
    // computed: {
    //     userInfo() {
    //     return this.$store.state.user;
    //     }
    // },
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-descriptions {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>