<template>
    <div class="wrapper">
        
        <ReactWithImageSample />
        <GithubSinceSample />
        <TwitterLoversSample />

    </div>
</template>


<script>
import ReactWithImageSample from './presentaSamples/ReactWithImageSample.vue'
import GithubSinceSample from './presentaSamples/GithubSinceSample.vue'
import TwitterLoversSample from './presentaSamples/TwitterLoversSample.vue'

export default {
    components:{
        ReactWithImageSample,GithubSinceSample,TwitterLoversSample
    }
}

</script>


<style scoped>
.wrapper{
    padding-top:3rem;
}
</style>