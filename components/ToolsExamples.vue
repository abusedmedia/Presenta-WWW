<template>
    <div class="wrapper">
        
        <GithubSinceSample />
        <TwitterLoversSample />

    </div>
</template>


<script>
import GithubSinceSample from './presentaSamples/GithubSinceSample.vue'
import TwitterLoversSample from './presentaSamples/TwitterLoversSample.vue'

export default {
    components:{
        GithubSinceSample,TwitterLoversSample
    }
}

</script>


<style scoped>
.wrapper{
    padding-top:3rem;
}
</style>