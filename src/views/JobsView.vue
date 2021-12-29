<template>
    <div>
        <p v-for="job in fetchedJobs">
            <a v-bind:href="job.url">
                {{ job.title }}
            </a>
            <small>{{ job.domain }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
    computed: {
        // # 4 배열표기법, fetchedJobs
        ...mapGetters([
            'fetchedJobs'
        ])
        // # 3 객체 표기법 getters 사용, jobsItems
        // ...mapGetters({
        //     jobsItems: 'fetchedJobs'
        // })
        // # 2 jobs
        // ...mapState({
        //     jobs: state => state.jobs
        // })
        // # 1
        // jobs() {
        //     return this.$store.dispatch('FETCH_JOBS');
        // }
    },
    created() {
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style>

</style>