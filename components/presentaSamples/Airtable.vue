<template>
    <div></div>
</template>



<script>
import { interpolate } from '@presenta/config-interpolator'
import axios from 'axios'

export default {
    async mounted(){
        const data = await axios('/stubs/airtable.json')
        const table = data.data

        const frames = table.map(d => {

        return {
                type: d.fields.Type,
                name: d.fields.Name,
                price: '$' + d.fields['Unit cost'],
                imagebg: d.fields.Images[0].url,
                imagefg: d.fields.Images[0].url
            }
        })

        const config = await interpolate({frames}, 'f6520be8caa6f988c041d216c2412213')

        config.controllers.loop = true
        config.controllers.focus = false
        config.modules.autoplay = true
        config.controllers.arrows = {
            flexAlign: 'flex-end'
        }

        await new Presenta(this.$el, config)
    }
}
</script>



