<template>
    <div>
        <ul class="jobs-list">
            <li v-for="job in fetchedJobs" class="job">
                <div class="points">
                    {{ job.points || 0 }}
                </div>
                <div>
                    <p class="jobs-title">
                        <a v-bind:href="job.url">
                            {{ job.title }}
                        </a>
                    </p>
                    <small class="link-text">
                        {{ job.time_ago }} by
                        <a :href="job.url">
                            {{ job.domain }}
                        </a>
                    </small>
                </div>
            </li>
        </ul>
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
.jobs-list {
    margin: 0;
    padding: 0;
}

.job {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    height: 60px;
}

.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}

.jobs-title {
    margin: 0;
}

.link-text {
    color: #828288;
}
</style>