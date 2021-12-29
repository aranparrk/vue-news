<template>
    <div>
        <p v-for="ask in this.$store.state.ask">
            <a v-bind:href="ask.url">
                {{ ask.title }}
            </a>
            <small>{{ ask.time_ago }} by {{ ask.user }}</small>
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