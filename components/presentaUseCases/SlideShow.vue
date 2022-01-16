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
        const config = await interpolate({frames:this.images}, '7379c83d4d77882bdc0af3aaf1f27ae1', true)

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