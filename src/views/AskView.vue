<template>
    <div>
        <p v-for="ask in this.$store.state.ask">
            <a v-bind:href="ask.url">
                <router-link v-bind:to="`/item/${ask.id}`">{{ ask.title }}></router-link>
            </a>
            <small>{{ ask.time_ago }} by 
                <router-link v-bind:to="`/user/${ask.user}`">{{ ask.user }}</router-link>
            </small>

        </p>
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

</style>