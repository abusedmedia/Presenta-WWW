<template>
    <div></div>
</template>



<script>
import { interpolate } from '@presenta/config-interpolator'

export default {
    props:{
        source:Object
    },
    async mounted(){

        const keys = ['Cat', 'Dog', 'Bike']

        this.$el.innerHTML = ''

        const images = this.source.results
        const frames = []

        frames.push({
            frameID: 'cover',
            title: keys[this.source.index] + ' @ Unsplash',
            text: 'A random collection built with Presenta Lib.',
            i1: images[0].urls.regular,
            i2: images[1].urls.regular,
            i3: images[2].urls.regular,
            i4: images[3].urls.regular,
            i5: images[4].urls.regular
        })
        
        let count = 0
        const frameIDs = ['', '1img', '2img', '3img']
        
        for(var i=0; i<10; i++){
            const num = parseInt(Math.random() * 3) + 1
            const imgs = []
            for(var j=0; j<num; j++){
                const u = images[count].urls.regular
                imgs.push(u)
                count++
            }

            frames.push({
                frameID: frameIDs[num],
                image1: imgs[0],
                image2: imgs[1],
                image3: imgs[2]
            })
        }

        frames.push({
            frameID: 'end'
        })
        
        const config = await interpolate({frames}, 'dae15d72cabfb863cf6e281a986f5179', true)
        
        config.controllers.loop = true
        config.controllers.progressbar = true
        config.controllers.focus = false
        config.controllers.arrows = {
            flexAlign: 'flex-start',
            padding: '1.5rem'
        }

        await new Presenta(this.$el, config)
    }
}
</script>



