<template>
    <div class="wrapper">
        
        <UseOpenGraph />
        <UseQRCode />
        <!-- <UseQuotes /> -->
        <UseSocialAd />

    </div>
</template>


<script>
import UseOpenGraph from './presentaUseCases/UseOpenGraph.vue'
import UseNewsletter from './presentaUseCases/UseNewsletter.vue'
import UseSocialAd from './presentaUseCases/UseSocialAd.vue'
import UseQRCode from './presentaUseCases/UseQRCode.vue'
import UseQuotes from './presentaUseCases/UseQuotes.vue'

export default {
    components:{
        UseOpenGraph,UseNewsletter,UseSocialAd,UseQRCode,UseQuotes
    }
}

</script>


<style scoped>
.wrapper{
    padding-top:3rem;
}
</style>