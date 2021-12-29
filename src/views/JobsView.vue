<template>
    <div>
        Jobs
    </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
    created() {
        fetchJobsList()
        .then(function(response){
            console.log('JobsView Data : ' + response);
        })
        .catch(function(error){
            console.log(error);
        })
    }
}
</script>

<style>

</style>