<template>
    <div class="feature">
        <div class="left">
                
            <highlight-code class="code" lang="js">
                // your data
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

                // create the final config using @presenta/config-interpolator
                const config = await interpolate(data, 'f11a47565b6be8377a481222e20a4ca1')

                // create the document within your wrapper
                await new Presenta(this.$el, config)
            </highlight-code>
        </div>

        <div class="right">
            <client-only>
                <ImageP />
            </client-only>
        </div>

    </div>
</template>


<script>
import ImageP from './ImageP.vue'

export default {
    components:{
        ImageP
    }
}
</script>



<style scoped>
.feature .code{
  font-size: .9rem;
  box-shadow: 0 0 10px #ccc;
}
</style>