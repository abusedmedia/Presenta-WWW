<template>
    <div></div>
</template>



<script>
import { interpolate } from '@presenta/config-interpolator'

export default {
    async mounted(){
        const frames = []
        for(let i=0; i<16; ++i){
            if(i % 4 === 0){
                frames.push({
                    i1: 'https://source.unsplash.com/random?t=' + Math.random(),
                    i2: 'https://source.unsplash.com/random?t=' + Math.random(),
                    i3: 'https://source.unsplash.com/random?t=' + Math.random(),
                    i4: 'https://source.unsplash.com/random?t=' + Math.random()
                })
            }
        }
        
        const config = await interpolate({frames}, 'f11a47565b6be8377a481222e20a4ca1')

        config.controllers.loop = true
        config.controllers.progressbar = true
        config.controllers.focus = false
        config.modules.autoplay = true
        config.controllers.transitions = 'fadeIn'

        await new Presenta(this.$el, config)
    }
}
</script>



