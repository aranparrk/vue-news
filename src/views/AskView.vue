<template>
    <div>
        <ul class="ask-list">
            <li v-for="ask in this.$store.state.ask" class="ask">
                <div class="points">
                    {{ ask.points }}
                </div>
                <div>
                    <p class="ask-title">
                        <a v-bind:href="ask.url">
                                <router-link v-bind:to="`/item/${ask.id}`">
                                    {{ ask.title }}>
                                </router-link>
                        </a>
                    </p>
                    <small class="link-text">
                        {{ ask.time_ago }} by 
                        <router-link v-bind:to="`/user/${ask.user}`" class="link-text">{{ ask.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>
.ask-list {
    margin: 0;
    padding: 0;
}

.ask {
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

.ask-title {
    margin: 0;
}

.link-text {
    color: #828288;
}
</style>