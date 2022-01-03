<template>
    <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';

export default {
    components: {
        ListItem
    },
    created() {
        bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_NEWS'); 
        bus.$emit('end:spinner');
    }
}
</script>

<style>

</style>