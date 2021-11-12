<template>
    <div class="feature">
        <div class="left">
                
            <highlight-code class="code" lang="js">
                // your data
                const frames = []
                for(let i=0; i < 16; ++i){
                    if(i % 4 === 0){
                        frames.push({
                            i1: 'https://source.unsplash.com/random?t=' + Math.random(),
                            i2: 'https://source.unsplash.com/random?t=' + Math.random(),
                            i3: 'https://source.unsplash.com/random?t=' + Math.random(),
                            i4: 'https://source.unsplash.com/random?t=' + Math.random()
                        })
                    }
                }

                // create the final config using @presenta/config-interpolator
                const config = await interpolate({frames}, templateConfig)

                // create the document within your wrapper
                await new Presenta('#wrapper', config)
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