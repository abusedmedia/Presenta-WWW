<template>
    <div></div>
</template>



<script>
import { interpolate } from '@presenta/config-interpolator'

const images = [
    'https://images.unsplash.com/photo-1640103998727-2351128b0fa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMjg0NA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1607001470214-11b5dc2a6f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMjg4MA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1639599629730-5710b6e18363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMjg4Mw&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1639310936509-40c1444d0b85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMzE0OA&ixlib=rb-1.2.1&q=80&w=1080',
    
    'https://images.unsplash.com/photo-1638826743921-88155b33513e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMjk1OA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1638824096986-5c5ed96d118a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMzE3MQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1639920784571-000b13175d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMjk2MA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1638457359665-3f8f90bf822d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMzAwNA&ixlib=rb-1.2.1&q=80&w=1080',

    'https://images.unsplash.com/photo-1639840320976-018bb62baec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMzAzMA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1639353393198-f7c225869ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMzAzOA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1620481355593-b40279e023b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMzA2OA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1638735037874-d6141ffd9d8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMzA2Mg&ixlib=rb-1.2.1&q=80&w=1080',

    'https://images.unsplash.com/photo-1640166163182-79217f5a1240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMzA3Mg&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1639865120831-dae0273f6a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMzExMA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1639807478843-77609140d22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMzExNg&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1638957835514-224c57ffe617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDYxMzEyMg&ixlib=rb-1.2.1&q=80&w=1080'
]

export default {
    async mounted(){
        const frames = []
        for(let i=0; i<16; ++i){
            if(i % 4 === 0){
                frames.push({
                    i1: images[i],
                    i2: images[i+1],
                    i3: images[i+2],
                    i4: images[i+3]
                })
            }
        }
        
        const config = await interpolate({frames}, '9d2f4b2ecef63ba099f09747fd580e7f')

        config.controllers.loop = true
        config.controllers.focus = false
        config.modules.autoplay = true
        config.controllers.transitions = 'fadeIn'

        await new Presenta(this.$el, config)
    }
}
</script>



