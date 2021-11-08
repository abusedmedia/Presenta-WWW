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

        this.$el.innerHTML = ''

        const table = this.source.posts

        let frameID = 'page'

        const tmp = document.createElement('div')

        const frames = table.map(d => {
            if(!d.post_thumbnail) frameID = 'txt'

            tmp.innerHTML = d.excerpt
            const texcerpt = tmp.textContent
            if(!texcerpt) frameID = 'cover'

            return {
                frameID,
                title: d.title,
                text: texcerpt,
                image: d.post_thumbnail ? d.post_thumbnail.URL : ''
            }
        })

        const config = await interpolate({frames}, 'f31cd99aa942c93d3f411ae72f505a9e')

        config.controllers.loop = true
        config.controllers.focus = false
        config.controllers.progressbar = true
        config.modules.autoplay = true

        await new Presenta(this.$el, config)
    }
}
</script>



