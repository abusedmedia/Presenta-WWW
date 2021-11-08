<template>
    <div class="feature">
        <div class="left">
            <h2><mark>Airtable 👉 Showcase</mark></h2>

            <p>Fetch <b>Airtable API</b> and build a product showcase with few lines of code:</p>
                
            <highlight-code class="code" lang="js">
                const products = await fetchAirtable // your fetch implementation

                // remap the dataset with the template' required fields
                const frames = products.map(d => {
                    return {
                        type: d.fields.Type,
                        name: d.fields.Name,
                        price: '$' + d.fields['Unit cost'],
                        imagebg: d.fields.Images[0].url,
                        imagefg: d.fields.Images[0].url
                    }
                })

                const config = await interpolate({frames}, templateConfig)
                await new Presenta('#wrapper', config)

                // done!
            </highlight-code>
        </div>

        <div class="right">
            <client-only>
                <Airtable />
            </client-only>
        </div>

    </div>
</template>


<script>
import Airtable from './Airtable.vue'

export default {
    components:{
        Airtable
    }
}
</script>



<style scoped>
.feature .code{
  font-size: .9rem;
  box-shadow: 0 0 10px #ccc;
}
</style>