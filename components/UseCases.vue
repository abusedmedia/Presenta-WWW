<template>
    <div class="wrapper">
        
        <UseOpenGraph />
        <UseQRCode />
        <UseQuotes />
        <!-- <UseSocialAd /> -->
        <UseMore />

    </div>
</template>


<script>
import UseMore from './presentaUseCases/UseMore.vue'
import UseOpenGraph from './presentaUseCases/UseOpenGraph.vue'
import UseNewsletter from './presentaUseCases/UseNewsletter.vue'
import UseSocialAd from './presentaUseCases/UseSocialAd.vue'
import UseQRCode from './presentaUseCases/UseQRCode.vue'
import UseQuotes from './presentaUseCases/UseQuotes.vue'

export default {
    components:{
        UseMore,UseOpenGraph,UseNewsletter,UseSocialAd,UseQRCode,UseQuotes
    }
}

</script>


<style scoped>
.wrapper{
    padding-top:3rem;
}
</style>