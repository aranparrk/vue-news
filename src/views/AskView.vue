<template>
    <div>
        Ask
    </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
    created() {
        fetchAskList()
        .then(function(response){
            console.log('AskView Data : ' + response);
        })
        .catch(function(error){
            console.log(error);
        })
    }
}
</script>

<style>

</style>