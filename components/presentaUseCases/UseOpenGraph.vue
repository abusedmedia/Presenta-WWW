<template>

    <div class="feature">

        <div class="columns">
            
            <div class="left">
                <div class="incipit">
                    
                    <h4>Open-Graph Images</h4>

                    <h2>Generate Social Share Preview automatically</h2>

                    <p>Let <b>PRESENTA Cloud API</b> to generate automatically the social preview image for each web page of your website or blog.</p>

                </div>             
            </div>
                
            <div class="right">
                <client-only>
                    <SlideShow :images="images" />
                </client-only>
            </div>

        </div>
    </div>
</template>




<script>
import SlideShow from './SlideShow.vue'

export default {
    components:{
        SlideShow
    },
    data(){
        return {
            images:[
                {
                    a:'https://cloud.preso.cc/v1/url/zGywhb2oJn:IwCSwQ1wB?&title=Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur&subtitle=1st November, 2021&img=https://source.unsplash.com/random/709x351',
                    b:'https://cloud.preso.cc/v1/url/zGywhb2oJn:IwCSwQ1wB?&title=Neque porro quisquam est qui dolore&subtitle=2nd November, 2021&img=https://source.unsplash.com/random/710x351',
                    c:'https://cloud.preso.cc/v1/url/zGywhb2oJn:IwCSwQ1wB?&title=Quia dolor sit amet, consectetur&subtitle=3rd November, 2021&img=https://source.unsplash.com/random/706x351'
                },
                {
                    a:'https://cloud.preso.cc/v1/url/zGywhb2oJn:ptiiM09z9?&title=Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur&subtitle=1st November, 2021&img=https://source.unsplash.com/random/764x351',
                    b:'https://cloud.preso.cc/v1/url/zGywhb2oJn:ptiiM09z9?&title=Neque porro quisquam est qui dolore&subtitle=2nd November, 2021&img=https://source.unsplash.com/random/712x351',
                    c:'https://cloud.preso.cc/v1/url/zGywhb2oJn:ptiiM09z9?&title=Quia dolor sit amet, consectetur&subtitle=3rd November, 2021&img=https://source.unsplash.com/random/707x351'
                },
                {
                    a:'https://cloud.preso.cc/v1/url/zGywhb2oJn:PXhbKcWtT?&title=Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur&subtitle=1st November, 2021&img=https://source.unsplash.com/random/724x351',
                    b:'https://cloud.preso.cc/v1/url/zGywhb2oJn:PXhbKcWtT?&title=Neque porro quisquam est qui dolore&subtitle=2nd November, 2021&img=https://source.unsplash.com/random/734x351',
                    c:'https://cloud.preso.cc/v1/url/zGywhb2oJn:PXhbKcWtT?&title=Quia dolor sit amet, consectetur&subtitle=3rd November, 2021&img=https://source.unsplash.com/random/708x351'
                }
            ]
        }
    }
}
</script>