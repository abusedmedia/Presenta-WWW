<template>
    <div class="wrapper">
        
        <TextSample />
        <ImageSample />
        <AirtableSample />
        <UnsplashSample />
        <MarkdownSample />
        <WordpressSample />
        <GithubSinceSample />


    </div>
</template>


<script>
import TextSample from './presentaSamples/TextSample.vue'
import ImageSample from './presentaSamples/ImageSample.vue'
import AirtableSample from './presentaSamples/AirtableSample.vue'
import UnsplashSample from './presentaSamples/UnsplashSample.vue'
import MarkdownSample from './presentaSamples/MarkdownSample.vue'
import WordpressSample from './presentaSamples/WordpressSample.vue'
import GithubSinceSample from './presentaSamples/GithubSinceSample.vue'

export default {
    components:{
        TextSample, ImageSample, AirtableSample, UnsplashSample, MarkdownSample, WordpressSample, GithubSinceSample
    }
}

</script>


<style scoped>
.wrapper{
    padding-top:3rem;
}
</style>