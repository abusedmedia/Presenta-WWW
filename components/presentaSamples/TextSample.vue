<template>
    <div class="feature">
        <div class="left">
                
            <highlight-code class="code" lang="js">
                // your data
                const data = [
                    'Hello There!',
                    'It\'s PRESENTA Lib here!',
                    'I can create presentational documents from data.',
                    'Any kind of data 🙂'
                ]

                // remap the dataset with the template' required fields
                const frames = data.map((text,index) => ({text, page: index+1}))

                // create the final config using @presenta/config-interpolator
                const config = await interpolate({frames}, templateConfig)

                // create the document within your wrapper
                await new Presenta('#myDiv', config)

                // have fun!
            </highlight-code>
        </div>

        <div class="right">
            <client-only>
                <TextP />
            </client-only>
        </div>

    </div>
</template>


<script>
import TextP from './TextP.vue'

export default {
    components:{
        TextP
    }
}
</script>



<style scoped>
.feature .code{
  font-size: .9rem;
  box-shadow: 0 0 10px #ccc;
}
</style>