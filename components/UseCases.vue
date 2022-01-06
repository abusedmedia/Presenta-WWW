<template>
    <div class="wrapper">
        
        <UseOpenGraph />
        <UseNewsletter />
        <UseSocialAd />
        <!-- <UseQRCode /> -->

    </div>
</template>


<script>
import UseOpenGraph from './presentaUseCases/UseOpenGraph.vue'
import UseNewsletter from './presentaUseCases/UseNewsletter.vue'
import UseSocialAd from './presentaUseCases/UseSocialAd.vue'
import UseQRCode from './presentaUseCases/UseQRCode.vue'

export default {
    components:{
        UseOpenGraph,UseNewsletter,UseSocialAd,UseQRCode
    }
}

</script>


<style scoped>
.wrapper{
    padding-top:3rem;
}
</style>