<template>
    <div></div>
</template>




<script>
import { interpolate } from '@presenta/config-interpolator'
import axios from 'axios'

export default {
    props:{
        images:[]
    },
    async mounted(){
        const config = await interpolate({frames:this.images}, '5626b60e9217b998671feb0a879b82f8', true)

        if(this.images.length > 1){
            config.controllers.loop = true
            config.controllers.focus = false
            config.modules.autoplay = true
            config.controllers.arrows = {
                flexAlign: 'flex-end'
            }
        }

        await new Presenta(this.$el, config)
    }
}
</script>





<style scoped>

</style>