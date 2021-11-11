<template>
    <div></div>
</template>



<script>
import { interpolate } from '@presenta/config-interpolator'

export default {
    async mounted(){
        const frame1 = {
            i1: 'https://source.unsplash.com/random?t=1',
            i2: 'https://source.unsplash.com/random?t=2',
            i3: 'https://source.unsplash.com/random?t=3',
            i4: 'https://source.unsplash.com/random?t=4'
        }

        const frame2 = {
            i1: 'https://source.unsplash.com/random?t=5',
            i2: 'https://source.unsplash.com/random?t=6',
            i3: 'https://source.unsplash.com/random?t=7',
            i4: 'https://source.unsplash.com/random?t=8'
        }

        const data = {frames:[frame1, frame2]}
        const config = await interpolate(data, 'f11a47565b6be8377a481222e20a4ca1')

        config.controllers.loop = true
        config.controllers.focus = false
        config.modules.autoplay = true
        config.controllers.transitions = 'vSlide'

        await new Presenta(this.$el, config)
    }
}
</script>



