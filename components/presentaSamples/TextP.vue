<template>
    <div></div>
</template>



<script>
import { interpolate } from '@presenta/config-interpolator'

export default {
    async mounted(){
        const data = [
            'Hello There!',
            'It\'s PRESENTA Lib here!',
            'I can create presentational documents from data.',
            'Any kind of data 🙂'
        ]

        const frames = data.map((text,index) => ({text, page: index+1}))
        const config = await interpolate({frames}, 'd0e5e758967cb21cfe88717cf4f36822')

        config.controllers.loop = true
        config.controllers.focus = false
        config.modules.autoplay = true

        await new Presenta(this.$el, config)
    }
}
</script>



